import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteLayout() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-3 top-[-100px] z-[1000] rounded-lg bg-white px-4 py-3 font-bold text-primary focus:top-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
