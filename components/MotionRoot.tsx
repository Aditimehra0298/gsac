"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    function scan() {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
        if (node.classList.contains("in") || seen.has(node)) return;
        seen.add(node);
        if (reduce) {
          node.classList.add("in");
          return;
        }
        observer.observe(node);
      });
    }

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
