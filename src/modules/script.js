import { notesArray } from './data';
import {createContent} from './fillInTables'
import {fillInSummaryTable} from './fillInTables'

createContent(notesArray)
fillInSummaryTable()

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

openModalButton.addEventListener('click', openModalWindow)
closeButton.addEventListener('click', closeModalWindow)