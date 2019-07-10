// создать модуль для работы LocalStorage
import { ref } from "../utils/constants";
import { createListItems} from "./view";
// import notes from "../../assets/notes.json"
 
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

export const remove = (key) => {
   try {
       const serializedState = localStorage.removeItem(key);
       

       return serializedState;
   } catch (err) {
       console.error('Get state error: ', err);
   }
}



// remove
export const titleMessage = load('inputTitle');
export const bodyMessage = load('inputBody');


titleMessage ? ref.titleInput.value = titleMessage : null;
bodyMessage ? ref.bodyInput.value = bodyMessage : null;

// load
export const localNotes = load('notes');

if(localNotes) {
   ref.noteList.innerHTML = createListItems(localNotes);
}