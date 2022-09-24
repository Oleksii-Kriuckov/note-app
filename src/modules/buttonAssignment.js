import { archiveArray, index } from "./data";
import { removeNote } from "./NoteFunctions";
import { fillInArchiveTable, fillInSummaryTable } from "./fillInTables";
import { removeArchive, unArchive } from "./ArchiveFunctions";
import resetForm, { openModalWindow, closeModalWindow } from "./someFunctions";
import { createNoteButton, closeButton, createButton, editButton } from "./elements";
import { editNote } from "./NoteFunctions";
import { createNote } from "./createFunctions";

export const openCloseModal = () => {
    createNoteButton.addEventListener('click', () => {
        openModalWindow()
        createButton.style.display = 'block'
        editButton.style.display = 'none'
    })
    createButton.addEventListener('click', () => createNote('create'))
    editButton.addEventListener('click', () => createNote(index.ind))
    closeButton.addEventListener('click', () => {
        resetForm()
        closeModalWindow()
    })
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
    archiveButtons.forEach((el, i) => {
        el.addEventListener('click', () => {
            const archivedElem = removeNote(i);
            archiveArray.push(archivedElem);
            fillInArchiveTable();
            fillInSummaryTable()
        })
    });
}

export const unArchiveAssignment = () => {
    const unArchiveAssignment = document.querySelectorAll('.unarchive');
    unArchiveAssignment.forEach((el, i) => {
        el.addEventListener('click', () => unArchive(i))
    });
}
export const removeArchiveAssignment = () => {
    const removeArchiveButtons = document.querySelectorAll('.removeArchive');
    removeArchiveButtons.forEach((el, i) => {
        el.addEventListener('click', () => removeArchive(i))
    });
}
// console.log(i)