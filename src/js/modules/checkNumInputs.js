const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  //_ Валидация инпута
  numInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, ""); //_ Запрет ввода не чисел в инпут
    });
  });
};

export default checkNumInputs;
