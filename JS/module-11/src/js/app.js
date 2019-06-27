import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';
import initialNotes from '../assets/notes.json';
import Notepad from '../js/moduls/classNotepad';
import {
   createListItems,
   createListItem,
   markup
} from './moduls/view';
import {
   NOTIFICATION_MESSAGES,
   NOTE_ACTIONS,
   PRIORITY_TYPES,
   shortid,
   ref,
   notyf
} from '../js/utils/constants';

const notepad = new Notepad(initialNotes);



// renderNoteList(ref.list, notepad.notes);

const handleEditorButton = event => {
   MicroModal.show('note-editor-modal');
}

const handleEditorSubmit = event => {

   event.preventDefault();
   const [title, body, button] = event.currentTarget.elements;
   const titleValue = title.value;
   const bodyValue = body.value;

   if (titleValue.trim() === '' || bodyValue.trim() === '') {
      return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY)
   }


   const savedNotes = {
      id: shortid,
      title: titleValue,
      body: bodyValue,
      priority: PRIORITY_TYPES.LOW
   }

   // addListItem(ref.list, savedNotes);

   notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS)
   notepad.saveListItem(savedNotes);
   ref.list.insertAdjacentHTML('beforeend', createListItem(savedNotes));
   MicroModal.close('note-editor-modal')
   event.currentTarget.reset();

   // V2
   // ref.list.insertAdjacentHTML('beforeend', createListItem(savedNotes));
   
   // const savedNotes = {
   //    id: shortid,
   //    title: titleValue,
   //    body: bodyValue,
   //    priority: PRIORITY_TYPES.LOW
   // }

   // const addItemToList = (listRef) => {
   //    const listItem = createListItem(savedNotes)
   //    listRef.append(listItem);
   // }

   // addItemToList(ref.list, savedNotes);
}

const handleDeleteNotesClick = event => {
   if (event.target.nodeName !== 'I') return

   if (event.target.textContent === 'delete') {
      const item = event.target.closest('.note-list__item')
      notepad.id = item.dataset.id;
      notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS)
      notepad.removeListItem(notepad.id);
      item.remove();


   }
}

const handleFilterChanged = event => {
   const input = event.target.value
   const filteredNotes = notepad.filteredNotesItem(input);
   ref.list.innerHTML = createListItems(filteredNotes);

   // V2
   // ref.list.innerHTML = createListItem(filteredNotes);

   // renderNoteList(ref.list, filteredNotes);
}

// Listners

ref.editor.addEventListener('submit', handleEditorSubmit);
ref.filter.addEventListener('input', handleFilterChanged);
ref.list.addEventListener('click', handleDeleteNotesClick);
ref.editorBtn.addEventListener('click', handleEditorButton);