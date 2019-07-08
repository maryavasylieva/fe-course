const URL = 'http://localhost:3050/notes';

export const getNote = () => {
   return fetch(URL).then(response => {
      if(response.ok){
         return response.json();
      }

      throw new Error('Error while fetching' + response.statusText)
   }); 
};

export const saveNote = note => {
   const options = {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
         'Content-Type': 'application/json; charset=utf-8'
      },
   };

   return fetch(URL, options).then(response => {
      if(response.ok){
         return response.json();
      }
     
      
      throw new Error('Error while fetching' + response.statusText);
   });
};


export const deleteNote = id => {
   const options = {
      method: 'DELETE',
   };

   return fetch(`${URL}/${id}`, options).then(response => {
      if(response.ok){
         return response.json();
      }

      throw new Error('Error while fetching' + response.statusText);
   });
};


export const updateNote = (updatedNote, id) => {
   const options = {
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json; charset=utf-8'
      },

      body: JSON.stringify(updatedNote)
   }

   return fetch(`${URL}/${id}`, options).then(response => {
      if(response.ok){
         return response.json();
      }

      throw new Error('Error while fetching' + response.statusText);
   });
}


  