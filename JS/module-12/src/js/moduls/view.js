import notesTemplate from '../../../templates/notes.hbs';
import { ref } from '../utils/constants';
import initialNotes from '../../assets/notes.json';

export const createListItem = noteItem => notesTemplate(noteItem);
export const createListItems = noteItem => noteItem.map(noteItem => notesTemplate(noteItem)).join('');

ref.noteList.insertAdjacentHTML('beforeend', createListItems(initialNotes));
