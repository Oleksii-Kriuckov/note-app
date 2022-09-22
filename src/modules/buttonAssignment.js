import { createNote } from "./create";
import { archiveArray } from "./data";
import { removeNote } from "./addRemoveNote";

export const openCloseModal = () => {
    const openModalButton = document.querySelector('#openModalButton');
    const createNoteButton = document.querySelector('#createNoteButton');
    const closeButton = document.querySelector('#closeButton');

    const modalWindow = document.querySelector('.modalWindow');
    function openModalWindow() {
        modalWindow.style.display = 'block'
    }
    function closeModalWindow() {
        modalWindow.style.display = 'none'
    }
    function createNewNote() {
        createNote()
        closeModalWindow()
    }
    openModalButton.addEventListener('click', openModalWindow)
    closeButton.addEventListener('click', closeModalWindow)
    createNoteButton.addEventListener('click', createNewNote)
}

export const removeAssignment = () => {
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((element, index) => {
        element.addEventListener('click', () => removeNote(index))
    });
}

export const archiveAssignment = () => {
    const archiveButtons = document.querySelectorAll('.archive');
    archiveButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            const archivedElem = removeNote(index);
            archiveArray.push(archivedElem);
            
        })
    });
}