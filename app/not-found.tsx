import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" data-reveal>
      <div className="wrap">
        <div className="narrow">
          <p className="kicker">404</p>
          <h1>This page is not on the register.</h1>
          <p className="lede">The address does not match a GSAC page. Return to the council home.</p>
          <Link className="button" href="/">
            Back to GSAC
          </Link>
        </div>
      </div>
    </section>
  );
}
