import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {}; //_ Состояние модального окна

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active"); //_ Для верхних табов
  tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click"); //_ Для нижних табов
  tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block"); //_Для табов в формах-калькуляторах
  forms(modalState);
});
