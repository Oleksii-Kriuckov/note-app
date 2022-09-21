import {notesArray} from './data';
import {archiveArray} from './data';

export function countByCategory(array, param) {
    let counter = 0;
    array.forEach(el => {
      if (el.category === param) {
        counter += 1;
      }
    });
    return counter;
  }
