import { modalWindow } from './elements';
import { nameInput, contentTextArea, categorySelect, createButton, editButton } from './elements';
import { index } from './data'; 
import { createNote } from './createFunctions';

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
  categorySelect.value = "Task"
  contentTextArea.value = '';
}

export function showError(error) {
  document.forms[0].elements[error.ind].value = error.message;
  document.forms[0].elements[error.ind].style.color = 'red';
  createButton.removeEventListener('click', () => createNote('create'), false)
  editButton.removeEventListener('click', createNote, false)
  setTimeout(() => {
      document.forms[0].elements[error.ind].value = '';
      document.forms[0].elements[error.ind].style.color = 'rgb(61, 61, 61)';
    createButton.addEventListener('click', () => createNote('create'))
    editButton.addEventListener('click', () => createNote(index.ind))


  }, 3000)
}