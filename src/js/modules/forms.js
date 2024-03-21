import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const form = document.querySelectorAll("form");
  const input = document.querySelectorAll("input");
  // const phoneInputs = document.querySelectorAll("input[name='user_phone']");

  checkNumInputs("input[name='user_phone']"); // //_ Валидация инпута через модуль

  // //_ Валидация инпута
  // phoneInputs.forEach((item) => {
  //   item.addEventListener("input", () => {
  //     item.value = item.value.replace(/\D/, ""); //_ Запрет ввода не чисел в инпут
  //   });
  // });

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failrule: "Что-то пошло не так...",
  };

  //_ Функция на отправку данных
  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  //_ Функция для очистки инпута
  const clearInputs = () => {
    input.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      //_ Показ сообщения пользователю
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      //_ Получение данных с формы
      const formData = new FormData(item);

      //_ Добавление данных из форм-калькуляторов
      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      //_ Отправка данных на сервер
      postData("assets/server.php", formData)
        .then((res) => {
          // console.log(res);
          console.log(
            "На gh pages отправка формы на сервер, к сожалению, не сработает, но сообщение благодарности все равно появится"
          );
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failrule))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
