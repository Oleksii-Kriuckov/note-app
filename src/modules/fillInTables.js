import { addNewNote } from './addNote';
import { notesArray } from './data';
import { archiveArray } from './data';
import { countByCategory } from './count';


export const createContent = (data) => {
    data.forEach(element => {
        addNewNote(element)
    });
};

// isolate the following data
export const fillInSummaryTable = () => {
    const activeTask = document.querySelector('#activeTask');
    activeTask.innerHTML = countByCategory(notesArray, 'Task');

    const activeRandomThought = document.querySelector('#activeRandomThought');
    activeRandomThought.innerHTML = countByCategory(notesArray, 'Random Thought')

    const activeIdea = document.querySelector('#activeIdea');
    activeIdea.innerHTML = countByCategory(notesArray, 'Idea')

    const archivedTask = document.querySelector('#archivedTask');
    archivedTask.innerHTML = countByCategory(archiveArray, 'Task')

    const archivedRandomThought = document.querySelector('#archivedRandomThought');
    archivedRandomThought.innerHTML = countByCategory(archiveArray, 'Random Thought')

    const archivedIdea = document.querySelector('#archivedIdea');
    archivedIdea.innerHTML = countByCategory(archiveArray, 'Idea')
}