"use strict";

import './style.css'

const floatingbtn = document.querySelector("#floating-contact") as HTMLDivElement;

if (floatingbtn) {
  const navbarobserver = new IntersectionObserver(
    (entries, _) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          floatingbtn.style.visibility = "hidden";
        } else {
          floatingbtn.style.visibility = "visible";
        }
      });
    },
    { threshold: [0.2] }
  );

  const element1 = document.querySelector("#nav-bar");
  element1 && navbarobserver.observe(element1);
}

const animationList: string[] = ["animRight", "animLeft"];
const enableAnimation: boolean = true;

const animationobserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, _) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${animationList[Math.floor(Math.random() * 3)]}`);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: [0] }
);

enableAnimation && document.querySelectorAll<HTMLElement>(".vessel").forEach((node: HTMLElement) => animationobserver.observe(node));

// import "./contact_form.ts";

import "./footer_links.ts";