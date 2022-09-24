import { archiveArray, index } from "./data";
import { removeNote } from "./addRemoveNote";
import { fillInArchiveTable, fillInSummaryTable } from "./fillInTables";
import { removeArchive } from "./addRemoveArchive";
import { openModalWindow, closeModalWindow, addNote, edit } from "./count";
import { editNote } from "./edit";
import { createNoteButton, closeButton, createButton, editButton } from "./elements";


export const openCloseModal = () => {
    
    createNoteButton.addEventListener('click', () => {
        openModalWindow()
        createButton.style.display = 'block'
        editButton.style.display = 'none'
        // createEditButton.innerHTML = "Create";
        // createEditButton.removeEventListener('click', edit); 
        // createEditButton.removeEventListener('click', addNote); 
        // createEditButton.addEventListener('click', addNote)
    })
    createButton.addEventListener('click', addNote)
    editButton.addEventListener('click', () => edit(index.ind))
    closeButton.addEventListener('click', closeModalWindow)
}

export const removeNoteAssignment = () => {
    const removeNoteButtons = document.querySelectorAll('.remove');
    removeNoteButtons.forEach((element, index) => {
        element.addEventListener('click', () => removeNote(index))
    });
}
export const editNoteAssignment = () => {
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach((el, i) => {
        el.addEventListener('click', () => editNote(i))
    });
}

export const archiveAssignment = () => {
    const archiveButtons = document.querySelectorAll('.archive');
    archiveButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            const archivedElem = removeNote(index);
            archiveArray.push(archivedElem);
            fillInArchiveTable();
            fillInSummaryTable()
        })
    });
}

export const removeArchiveAssignment = () => {
    const removeArchiveButtons = document.querySelectorAll('.removeArchive');
    removeArchiveButtons.forEach((element, index) => {
        element.addEventListener('click', () => console.log(index))
    });
}