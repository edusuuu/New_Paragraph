let paragraphs = document.querySelector(".paragraphs")
let form = document.querySelector(".form")
let form_input = document.querySelector(".form__input")
let add_paragraph = document.querySelector(".add-paragraph")
let align_button_wrapper = document.querySelector(".align-button-wrapper")
let align_left_button = document.querySelector(".align-left")
let align_center_button = document.querySelector(".align-center")
let align_right_button = document.querySelector(".align-right")

let align = "left"
let count_of_paragraphs = 0;

// EDIT MO LANG TONG ARRAY KUNG GUSTO MO DAGDAGAN YUNG KULAY
let colors = ["#E76161", "#19A7CE", "#27E1C1", "#AA77FF"]

function createElement(element) {
  return document.createElement(element)
}

function set_what_align_button_is_active() {
  let align_buttons = [...align_button_wrapper.children]
  console.log(align_buttons)

  align_buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }

    switch (align) {

      case "left":
        align_left_button.classList.add("active"); break;

      case "center":
        align_center_button.classList.add("active"); break;

      case "right":
        align_right_button.classList.add("active"); break;

      default:
        return null;
    }
  })
}

function align_paragraph(align_button) {
  align_button.onclick = () => {
    switch (align_button.textContent) {

      case "align left":
        align = "left"; break;

      case "align center":
        align = "center"; break;

      case "align right":
        align = "right"; break;

      default:
        return null;
    }
    set_what_align_button_is_active()
  }
}

align_paragraph(align_left_button)
align_paragraph(align_center_button)
align_paragraph(align_right_button)


let unset = ""
form.onsubmit = (event) => {
  event.preventDefault();
  if (!form_input.value) return;
  let paragraph_container = document.createElement("li");
  let paragraph = document.createElement("p")
  paragraph_container.style.background = colors[count_of_paragraphs % colors.length]
  paragraph.textContent = form_input.value;
  paragraph.style.textAlign = align;
  form_input.value = unset;
  paragraph_container.appendChild(paragraph)
  paragraphs.appendChild(paragraph_container)
  count_of_paragraphs += 1;
}

