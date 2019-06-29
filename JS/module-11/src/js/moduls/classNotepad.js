export default class Notepad {
   constructor(notes = []) {
      this._notes = notes;

   }

   get notes() {
      return this._notes;
   }

   removeListItem(id){
      return this._notes.filter(note => note.id !== id);
   }

   filteredNotesItem(query = ''){
      return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()))
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
};