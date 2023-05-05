let align = "left";
let paragraph_wrapper = document.querySelector(".paragraph-wrapper");
let paragraphs = document.querySelector(".paragraphs");
let alignButtonLeft = document.querySelector(".align-left");
let alignButtonCenter = document.querySelector(".align-center");
let alignButtonRight = document.querySelector(".align-right");
let add_paragraph_button = document.querySelector(".add-paragraph-button");
let paragraph_input = document.querySelector("#paragraph-input");

const createElement = (element) => document.createElement(element);

add_paragraph_button.onclick = () => {
  let paragraph_container = createElement("li");
  let paragraph = createElement("p");
  paragraph.textContent = paragraph_input.value;
  paragraph_container.value = "";
  paragraph_container.appendChild(paragraph);
  paragraphs.appendChild(paragraph_container);
};

paragraphs.appendChild(
  (createElement("li").textContent = "qlkwejqwlkejqewlkj")
);
alignButtonLeft.onclick = () => (align = "left");
alignButtonCenter.onclick = () => (align = "center");
alignButtonRight.onclick = () => (align = "right");
