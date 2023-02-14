import { Dropdown, Collapse } from "flowbite";
// @ts-ignore
import Datepicker from "flowbite-datepicker/Datepicker";

export const handleDocumentId = (
  targetEl: string,
  options: any,
  type: "dropdown" | "collapse" | "datepicker",
  triggerEl?: string
) => {
  const $targetEl: HTMLElement | null | undefined = document.getElementById(targetEl);
  let $triggerEl: HTMLElement | null | undefined;
  if (triggerEl) {
    $triggerEl = document.getElementById(triggerEl);
  }
  switch (type) {
    case "dropdown":
      return new Dropdown($targetEl, $triggerEl, options);
    case "datepicker":
      return new Datepicker($targetEl, options);
    case "collapse":
      return new Collapse($targetEl, $triggerEl, options);
  }
};
