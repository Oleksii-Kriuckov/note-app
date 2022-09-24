import { modalWindow } from './elements';
import { nameInput, contentTextArea, categorySelect, createButton, editButton } from './elements';
import { create, edit } from './createFunctions';

export function countByCategory(array, param) {
  let counter = 0;
  array.forEach(el => {
    if (el.category === param) {
      counter += 1;
    }
  });
  return counter;
}

export function openModalWindow() {
  modalWindow.style.display = 'block'
}
export function closeModalWindow() {
  modalWindow.style.display = 'none'
}

export default function resetForm() {
  nameInput.value = '';
  categorySelect.value = "Task";
  contentTextArea.value = '';
}

export function showError(error) {
  document.forms[0].elements[error.ind].value = error.message;
  document.forms[0].elements[error.ind].style.color = 'red';
  createButton.removeEventListener('click', create, false)
  editButton.removeEventListener('click', edit, false)
  setTimeout(() => {
    document.forms[0].elements[error.ind].value = '';
    document.forms[0].elements[error.ind].style.color = 'rgb(61, 61, 61)';
    createButton.addEventListener('click', create, false)
    editButton.addEventListener('click', edit, false)
  }, 3000)
}