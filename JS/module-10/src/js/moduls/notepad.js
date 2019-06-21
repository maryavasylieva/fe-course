import { shortid } from "../utils/constants";


export default class Notepad {
   constructor(notes = []) {
      this._notes = notes;

   }

   get notes() {
      return this._notes;
   }

   removeListItem(id){
      return this._notes.filter(note => note.id === id);
   }

   filteredNotesItem(query = ''){
      return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()))
      // test: return this._notes.filter(note => note.body.toUpperCase().includes(query) || note.title.toUpperCase().includes(query));
   }

   saveListItem({
    id = shortid,
    title = titleValue,
    body = bodyValue,
    priority = PRIORITY_TYPES.LOW
  }) {
    const newItem = {
        id: id,
        title: title,
        body: body,
        priority: priority,
    }

    this._notes.push(newItem);
    return newItem;
  }

   // static generateUniqueId = () =>
   //    Math.random()
   //    .toString(36)
   //    .substring(2, 15) +
   //    Math.random()
   //    .toString(36)
   //    .substring(2, 15);
};

// export const notepad = new Notepad(initialNotes);