
import initialNotes from "../assets/notes.json";
// import "../assets/notes.json"
import {
   PRIORITY_TYPES,
   ICON_TYPES,
   NOTE_ACTIONS,
   shortid,
   ref
} from "./utils/constants";
import Notepad from "./moduls/notepad";
import {
   renderNoteList,
   addListItem
} from "./moduls/view";


//  Основной модуль 

const notepad = new Notepad(initialNotes);


renderNoteList(ref.list, notepad.notes);



const handleEditorSubmit = event => {

   event.preventDefault();
   const [title, body, button] = event.currentTarget.elements;
   const titleValue = title.value;
   const bodyValue = body.value;

   if (titleValue.trim() === '' || bodyValue.trim() === '') {
      alert('Необходимо заполнить все поля!');
   }


   const savedNotes = notepad.saveListItem({
    id: shortid,
    title: titleValue,
    body: bodyValue,
    priority: PRIORITY_TYPES.LOW
  })

  addListItem(ref.list, savedNotes);

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

   event.currentTarget.reset();

}

const handleDeleteNotesClick = event => {

   if (event.target.textContent === ICON_TYPES.DELETE) {
      const item = event.target.closest('.note-list__item')
      notepad.id = item.dataset.id;
      notepad.removeListItem(notepad.id);


      item.remove();
   }
}

const handleFilterChanged = event => {
   const filteredNotes = notepad.filteredNotesItem(event.currentTarget.value);

   renderNoteList(ref.list, filteredNotes);
}

// Listners

ref.editor.addEventListener('submit', handleEditorSubmit);
ref.filter.addEventListener('input', handleFilterChanged);
ref.list.addEventListener('click', handleDeleteNotesClick);