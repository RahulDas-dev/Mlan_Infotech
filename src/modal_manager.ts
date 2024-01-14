"use strict";

const dialog_template = document.querySelector("#dialog-template") as HTMLTemplateElement;

export const setupModal = function (name: string, sucess: boolean) {
  const dialog_contentEL = document.importNode(dialog_template.content, true);
  document.body.appendChild(dialog_contentEL);

  const reply_dialog = document.querySelector("#reply-dialog") as HTMLDivElement;

  const cancel_btnEL = reply_dialog.querySelector("#m-cancel-btn") as HTMLButtonElement;
  if (sucess) {
    const dialog_headerEl = reply_dialog.querySelector("#m-header") as HTMLHeadingElement;
    dialog_headerEl.innerText = `Dear ${name}, thanks for reaching out`;
  } else {
    const dialog_headerEl = reply_dialog.querySelector("#m-header") as HTMLHeadingElement;
    const dialog_paraEl = reply_dialog.querySelector("#m-body") as HTMLParagraphElement;
    dialog_headerEl.style.color = "red";
    dialog_headerEl.innerText = `Dear ${name}, Some Error Occur`;
    dialog_paraEl.innerText = "We are requesting you, Kindly contact us at our phone number or by email";
  }

  let timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
    reply_dialog?.remove();
  }, 30000);

  const cencelListener = function (this: HTMLButtonElement, event: Event) {
    event.preventDefault();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    reply_dialog?.remove();
  };
  cancel_btnEL?.addEventListener("click", cencelListener, { once: true });
};
