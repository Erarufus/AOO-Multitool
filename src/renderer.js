const navToNotes = document.getElementById('navto-Notes');
const navToIndex = document.getElementById('navto-Index');



if(navToNotes){
  navToNotes.addEventListener('click', () => pageNav('Notes.html'))
}
if(navToIndex){
  navToIndex.addEventListener('click', () => pageNav('index.html'))
}

function pageNav(page){
  window.api.navTo(page)
}
