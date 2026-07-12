import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to top on route change, or to hash target on home */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick for home sections to mount when navigating from another route
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
