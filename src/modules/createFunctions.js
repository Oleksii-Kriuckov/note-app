import { notesArray, errors } from "./data";
import { fillInSummaryTable } from "./fillInTables";
import { createContent } from "./fillInTables";
import { nameInput, categorySelect, contentTextArea } from "./elements";
import resetForm, { closeModalWindow, showError } from "./someFunctions";
import { index } from "./data";

export const createImage = (src, className) => {
    const img = new Image();
    img.src = src;
    img.setAttribute('class', className)
    img.style.cursor = 'pointer'
    img.style.width = '20px';
    img.style.height = '20px';
    return img
}

function createObject(name, category, content) {
    function createDate() {
        const date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
    return { name, created: createDate(), category, content }
}

function createNote(param) {
    try {
        if (!nameInput.value && contentTextArea.value.length < 5) {
            throw errors
        }
        if (!nameInput.value) {
            throw errors[0]
        }
        if (contentTextArea.value.length < 5) {
            throw errors[1]
        }

        const newNote = createObject(nameInput.value, categorySelect.value, contentTextArea.value);
        if (param === 'create') {
            notesArray.push(newNote)
        } else {
            notesArray.splice(param, 1, newNote)
        }

        createContent()
        fillInSummaryTable()
        resetForm()
        closeModalWindow()
    } catch (error) {
        if (error.message) {
            showError(error)
        } else {
            showError(error[0]);
            showError(error[1]);
        }

    }
}

export function create() {
    createNote('create')
}

export function edit() {
    createNote(index.ind)
}