const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        //_ Показ модального окна
        modal.style.display = "block";
        // document.body.style.overflow = "hidden";  //_ Вариант с inline стилями
        document.body.classList.add("modal-open");
      });
    });

    //_ Скрытие модального окна при клике на крестик
    close.addEventListener("click", () => {
      modal.style.display = "none";
      // document.body.style.overflow = ""; //_ Вариант с inline стилями
      document.body.classList.remove("modal-open");
    });

    //_ Скрытие модального окна при клике на пустую область
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
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
  // showModalByTime(".popup", 60000); //_ Функция для появления модального окна через определенное время
};

export default modals;
