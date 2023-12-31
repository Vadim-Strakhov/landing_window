import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
  modals();

  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active"); //_ для верхних табов
  tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click"); //_ для нижних табов
});
