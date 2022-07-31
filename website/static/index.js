function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

window.setTimeout(function() {
  $(".alert-pop").fadeTo(500, 0).slideUp(500, function(){
      $(this).remove(); 
  });
}, 4000);