var editMode = false;
var isSaved = false;

document.addEventListener('keydown', function(e) {
    editMode = true;

    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault();
        download("default")
      }
});

function selectText() {
    var div = document.getElementById('text');
    setTimeout(function() {
        div.focus()
        setEndOfContenteditable(div)
    }, 0);
}

function setEndOfContenteditable(item)
{
    var range,selection
    range = document.createRange()
    range.selectNodeContents(item)
    range.collapse(false)
    selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
}

function openFile() {
    var dropdown = document.getElementById('Acntname');
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    dropdown.dispatchEvent(event);
}

function download(filename) {
    var text = document.getElementById("text").innerText;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain+ parsed.join("\r\n");charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
    editMode = false;
}

window.showState = function (str) {
    var dropdown = document.getElementById('Acntname');
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    dropdown.dispatchEvent(event);
}

window.onbeforeunload = confirmExit;
function confirmExit()
{
    if (editMode) {
    return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
    }
    
}

function dragAndDrop() {
    
}