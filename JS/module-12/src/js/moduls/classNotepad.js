import {load, save} from './localStorage'

export default class Notes {
   constructor(notes = []) {
      this._notes = notes;

   }

   get notes() {
      return this._notes;
   }

   removeListItem(id) {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            this._notes = this._notes.filter(note => note.id !== id);
            save('notes', this._notes);
            resolve(this._notes);
         }, 1000);
      })
   }

   // removeListItem(id) {
   //    return this._notes.filter(note => note.id !== id);
   // }

   filteredNotesItem(query = '') {
      return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()))
   }


   saveListItem(item) {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            const newItem = {
               id: item.id,
               title: item.title,
               body: item.body,
               priority: item.priority,
            }

            this._notes.push(newItem);
            save('notes', this._notes);
            resolve(newItem);

         }, 2000);
      })
   }

   //    saveListItem({
   //     id = shortid,
   //     title = titleValue,
   //     body = bodyValue,
   //     priority = PRIORITY_TYPES.LOW
   //   }) {
   //     const newItem = {
   //         id: id,
   //         title: title,
   //         body: body,
   //         priority: priority,
   //     }

   //     this._notes.push(newItem);
   //     return newItem;
   //   }
};