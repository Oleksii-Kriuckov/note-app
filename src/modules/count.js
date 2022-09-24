import { modalWindow } from './elements';

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
