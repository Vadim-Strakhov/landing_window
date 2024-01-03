const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    //_ Универсальная функция для модальных окон
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

    const scroll = calcScroll(); //_ Для исправления модального окна

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          item.style.display = "none"; //_ Закрываем сразу все модальные окна
        });

        //_ Показ модального окна
        modal.style.display = "block";
        // document.body.style.overflow = "hidden";  //_ Вариант с inline стилями
        document.body.classList.add("modal-open");
        document.body.style.marginRight = `${scroll}px`; //_ Для исправления модального окна
      });
    });

    //_ Скрытие модального окна при клике на крестик
    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none"; //_ Закрываем сразу все модальные окна
      });

      modal.style.display = "none";
      // document.body.style.overflow = ""; //_ Вариант с inline стилями
      document.body.classList.remove("modal-open");
      document.body.style.marginRight = `0px`; //_ Для исправления модального окна
    });

    //_ Скрытие модального окна при клике на пустую область
    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none"; //_ Закрываем сразу все модальные окна
        });

        modal.style.display = "none";
        // document.body.style.overflow = ""; //_ Вариант с inline стилями
        document.body.classList.remove("modal-open");
        document.body.style.marginRight = `0px`; //_ Для исправления модального окна
      }
    });
  }

  //_ Функция для появления модального окна через определенное время
  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  //_ Функция для исправления модального окна, чтобы оно не прыгало при открытии
  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  // showModalByTime(".popup", 60000); //_ Функция для появления модального окна через определенное время
};

export default modals;
