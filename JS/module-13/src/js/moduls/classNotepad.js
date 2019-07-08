import * as api from '../services/api';

export default class Notes {
   constructor(notes = []) {
      this._notes = notes;

   };


   getNote(){
      return api.getNote().then(notes => {
         this._notes = notes;
         return this.notes;
      });
   }

   get notes() {
      return this._notes;
   };

   removeListItem(id) {
      return api.deleteNote(id).then(() => {
          this._notes = this._notes.filter(note => note.id !== id)
          return this;
      })
   };

   filteredNotesItem(query = '') {
      return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()))
   };


   saveListItem(note) {
     return api.saveNote(note).then(saveNote => {
      this._notes.push(saveNote);
      console.log(saveNote);
      return saveNote;
      
     });
   };

   update(id, note) {
      return api.updateNote(id, note).then(updateItem => {
        this._notes = this._notes.map(note => note.id === updateItem.id ? updateItem : note);

        return updateItem;
         
      })
   }
};