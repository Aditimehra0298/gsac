"""Build exact hero background + right collage from ChatGPT mock."""
from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter

ASSETS = Path(r"C:\Users\user\.cursor\projects\d-GSAC\assets")
OUT = Path(r"d:\GSAC\public\hero")
OUT.mkdir(parents=True, exist_ok=True)

# Prefer latest full mock if present, else mock-full
# Prefer tallest full-page mock (includes gold bg + exact collage arrangement)
candidates = [
    ASSETS / "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_210aac8fc6e84b039cfd332881708a56_images_image-a67551d4-4318-493e-8ff0-54fd89c26ff8.jpg",
    ASSETS / "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_210aac8fc6e84b039cfd332881708a56_images_image-6d077862-3634-4859-80dc-eda7368fd761.jpg",
    OUT / "hero-mock-full.jpg",
    ASSETS / "c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_210aac8fc6e84b039cfd332881708a56_images_image-dd2c32e9-c42a-4a26-9866-45916e0ebfe5.jpg",
]

src_path = next(p for p in candidates if p.exists())
im = Image.open(src_path).convert("RGB")
w, h = im.size
print("source", src_path.name, w, h)

# Detect if image includes header (taller) or is hero-only crop
# dd2c is 1024x504 — hero band without process? or partial
# a675 is 1024x768 — full page mock

# Upscale 2x for clearer collage
up = im.resize((w * 2, h * 2), Image.Resampling.LANCZOS)
uw, uh = up.size

# Save full upscaled mock
up.save(OUT / "hero-mock-2x.jpg", quality=95, optimize=True)

# --- Full-width hero wash: left white for HTML, right keeps exact collage ---
# For 1024x504 (dd2c): almost hero only
# For 1024x768: crop header ~68px and maybe keep process

if h >= 700:
    # full page: drop header, keep process
    body = up.crop((0, int(68 * 2), uw, uh))
elif h < 550:
    # short hero strip — use as-is
    body = up
else:
    body = up

bw, bh = body.size
print("body", bw, bh)

# Right collage: from ~40% width (after left copy) to right edge,
# vertically from top of body to just above process bar (~78% if process present)
if h >= 700:
    # process starts ~ y 600/700 of body in original coords → ~85% of body
    right = body.crop((int(bw * 0.38), 0, bw, int(bh * 0.82)))
else:
    # short strip: right half only
    right = body.crop((int(bw * 0.40), 0, bw, bh))

# Enhance slight sharpness
right = ImageEnhance.Sharpness(right).enhance(1.15)
right.save(OUT / "hero-right.jpg", quality=96, optimize=True)
print("hero-right", right.size)

# Background: full body with LEFT side painted white so HTML sits clean,
# RIGHT keeps exact gold ribbons + map + collage arrangement
wash = body.copy()
# soft left fade to white
fade_end = int(bw * 0.46)
for x in range(fade_end):
    col = wash.crop((x, 0, x + 1, bh))
    # blend toward white
    t = 1.0 if x < int(bw * 0.34) else 1.0 - (x - int(bw * 0.34)) / (fade_end - int(bw * 0.34))
    white = Image.new("RGB", col.size, (255, 255, 255))
    blended = Image.blend(col, white, t)
    wash.paste(blended, (x, 0))

wash.save(OUT / "hero-bg-exact.jpg", quality=95, optimize=True)
print("hero-bg-exact", wash.size)

# Also pure right-side bg streaks (no left text) for CSS cover
streaks = body.crop((int(bw * 0.35), 0, bw, int(bh * 0.85) if h >= 700 else bh))
streaks = streaks.resize((1600, 1100), Image.Resampling.LANCZOS)
streaks.save(OUT / "hero-bg.jpg", quality=94, optimize=True)
print("done")
