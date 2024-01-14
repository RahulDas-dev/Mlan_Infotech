"use strict ";

const footer_links = document.querySelectorAll("#footer-service-links li") as NodeListOf<HTMLLIElement>;

footer_links.forEach((node: HTMLLIElement) => {
  node.addEventListener("click", function (this: HTMLLIElement, _: MouseEvent) {
    document.querySelector("#service-1")?.scrollIntoView();
  });
});
