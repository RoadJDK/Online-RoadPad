function newFile() {
    if(editMode) {
        if (!confirm("You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?")) {
            return
        }
    }
    document.getElementById("text").innerHTML = ""
}

function openFile() {

}

function saveFile() {

}

function customize() {

}

function feedback() {

}

function about() {

}