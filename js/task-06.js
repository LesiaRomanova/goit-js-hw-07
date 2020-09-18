// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

{
  /* <input
type="text"
id="validation-input"
data-length="6"
placeholder="Введи 6 символов"
/> */
}

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputValRef = document.querySelector("#validation-input");

const totalLengthRef = inputValRef.getAttribute("data-length");

const inTotalLengt = parseInt(totalLengthRef, 10);

inputValRef.oninput = function () {
  if (inputValRef.value.length === inTotalLengt) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }

  if (inputValRef.value.length === 0) {
    this.classList.remove("valid");
    this.classList.remove("invalid");
  }
  if (
    inputValRef.value.length !== inTotalLengt &&
    inputValRef.value.length !== 0
  ) {
    inputValRef.classList.add("invalid");
  }
};
