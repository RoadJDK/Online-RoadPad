var reader;

function proccessFile() {
    reader = new FileReader();
    reader.onload = (function(reader)
    {
        return function()
        {
            var contents = reader.result;
                
            document.getElementById('text').innerText = contents;
        }
    })(reader);

    reader.readAsText(document.getElementById("file-input").files[0]);
}

function newFile() {
    alert("test")
    if(editMode) {
        if (!confirm("You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?")) {
            return
        }
    }
    document.getElementById("text").innerHTML = ""
}

function saveFile() {
    download(getFirstWord())
}

function darkmode() {

}

function feedback() {

}

function about() {

}