

// Init API object
const api =  new Api();
// Init UI
const ui = new UI();

// Get API on DOM load
document.addEventListener('DOMContentLoaded', getdaman);




function getdaman(){
  
  api.getdata()
    .then(results => {
      
      ui.paint(results);
    })
    .catch(err => console.log(err));
}