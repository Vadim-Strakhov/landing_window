const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    //_ Универсальная функция для модальных окон
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

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

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  // showModalByTime(".popup", 60000); //_ Функция для появления модального окна через определенное время
};

export default modals;
