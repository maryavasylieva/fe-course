// создать модуль для работы LocalStorage
import { ref } from "../utils/constants";
import { createListItem, createListItems} from "./view"
// import Notes from './classNotepad';
 
export const load = key => {
   try {
      const serializedState = localStorage.getItem(key);

      return serializedState === null ? null : JSON.parse(serializedState);
   } catch (err) {
      console.error('Get state error: ', err);
   }
};

export const save = (key, value) => {
   try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
   } catch (err) {
      console.error('Set state error: ', err);
   }
};

export const remove = key => {
   try{
      const serializedState  = localStorage.removeItem(key);

      return serializedState === null ? null : JSON.parse(serializedState);

   }catch(err) {
      console.error('Get state error', err);
   }
}



export const titleMessage = load('titleInput');
export const bodyMessage = load('bodyInput');

titleMessage ? ref.titleInput.value = titleMessage : null;
bodyMessage ? ref.bodyInput.value = bodyMessage : null;

export const localNotes = load('notes');

if(localNotes) {
   ref.noteList.innerHTML = createListItem(localNotes);
}