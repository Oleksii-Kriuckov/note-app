import {notesArray} from './data';
import {archiveArray} from './data';
import { modalWindow } from './elements';
import { createNote } from "./create";

export function countByCategory(array, param) {
    let counter = 0;
    array.forEach(el => {
      if (el.category === param) {
        counter += 1;
      }
    });
    return counter;
  }

  export  function openModalWindow() {
    modalWindow.style.display = 'block'
  }
  export  function closeModalWindow() {
    modalWindow.style.display = 'none'
}

export function addNote() {
  createNote('create')
  closeModalWindow()
}

export function edit(i) {
    console.log(i)
    createNote(i)
  closeModalWindow()
}