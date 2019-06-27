import notesTemplate from '../../../templates/notes.hbs';
import { ref } from '../utils/constants';
import initialNotes from '../../assets/notes.json';

export const createListItem = noteItem => notesTemplate(noteItem);
export const createListItems = noteItem => noteItem.map(noteItem => notesTemplate(noteItem)).join('')

// V2
// export const createListItem = initialNotes => {
//    const markup = initialNotes.map(note => notesTemplate(note)).join('');
//    // console.log(markup);
//    return markup; 
// }

// export const markup = createListItem(initialNotes);

ref.list.insertAdjacentHTML('beforeend', createListItems(initialNotes));

// V2
// ref.list.insertAdjacentHTML('beforeend', markup);