var editMode = false;
var isSaved = false;

document.addEventListener('keydown', function(e) {
    editMode = true;

    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault();
        alert("saved")
      }
});

function openFile() {
    alert("test")
}

window.onbeforeunload = confirmExit;
  function confirmExit()
  {
      if (editMode) {
        return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
      }
    
  }