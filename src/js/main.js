import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {}; //_ Состояние модального окна

  // let deadline = "2024-01-02"; //_ Установка таймера на конкретную дату

  let deadlineTomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]; //_ Установка таймера до конца текущего дня

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active"); //_ Для верхних табов
  tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click"); //_ Для нижних табов
  tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block"); //_Для табов в формах-калькуляторах
  forms(modalState);
  timer(".container1", deadlineTomorrow);
  images();
});
