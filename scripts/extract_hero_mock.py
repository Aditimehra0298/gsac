from pathlib import Path
from PIL import Image

src = Path(
    r"C:\Users\user\.cursor\projects\d-GSAC\assets\c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_210aac8fc6e84b039cfd332881708a56_images_image-a67551d4-4318-493e-8ff0-54fd89c26ff8.jpg"
)
out = Path(r"d:\GSAC\public\hero")
out.mkdir(parents=True, exist_ok=True)

im = Image.open(src).convert("RGB")
w, h = im.size
print("source", w, h)

# Full mock reference
im.save(out / "hero-mock-full.jpg", quality=95, optimize=True)

# Hero body only (drop ChatGPT header chrome) — left copy + right collage + process bar
body = im.crop((0, 68, w, h))
body.save(out / "hero-exact.jpg", quality=95, optimize=True)
print("hero-exact", body.size)

# Right collage only (for mobile / fallback)
right = im.crop((410, 78, w, 595))
right.save(out / "hero-right.jpg", quality=95, optimize=True)
print("hero-right", right.size)

# Soft background wash from device area
bg = im.crop((360, 70, w, 620)).resize((1600, 1000), Image.Resampling.LANCZOS)
bg.save(out / "hero-bg.jpg", quality=92, optimize=True)
print("done")
