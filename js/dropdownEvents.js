var reader;
var darkmode = true

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
    if(checkEditMode()) {
        if (!confirm("You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?")) {
            return
        }
    }
    document.getElementById("text").innerHTML = ""
}

function saveFile() {
    download(getFirstWord())
}

function toggleDarkmode() {
    document.cookie = "darkmode=true; expires=Thu, 18 Dec 2200 12:00:00 UTC; path=/"
    darkmode = !darkmode
    if (darkmode) {
        setCookie("darkmode","true",999999)
    }
    else {
        setCookie("darkmode","false",999999)
    }
    setDarkmode()
}

document.addEventListener("DOMContentLoaded", function(){
    if (getCookie("darkmode") == "true") {
        darkmode = true
    } else {
        darkmode = false
    }
    setDarkmode()
});

function setDarkmode() {
    var body = document.body;
    var top = document.querySelector("#top")
    var bot = document.querySelector("#bot")
    var dropbtn1 = document.querySelector("#dropbtn1")
    var dropbtn2 = document.querySelector("#dropbtn2")
    
    if (darkmode) {
        if(!body.classList.contains("body-d")) {
            body.classList.add("body-d");
            top.classList.add("top-d");
            bot.classList.add("bot-d");
            dropbtn1.classList.add("dropbtn-d");
            dropbtn2.classList.add("dropbtn-d");
        }
        if(body.classList.contains("body-l")) {
            body.classList.remove("body-l");
            top.classList.remove("top-l");
            bot.classList.remove("bot-l");
            dropbtn1.classList.remove("dropbtn-l");
            dropbtn2.classList.remove("dropbtn-l");
        }
    } else {
        if(body.classList.contains("body-d")) {
            body.classList.remove("body-d");
            top.classList.remove("top-d");
            bot.classList.remove("bot-d");
            dropbtn1.classList.remove("dropbtn-d");
            dropbtn2.classList.remove("dropbtn-d");
        }
        if(!body.classList.contains("body-l")) {
            body.classList.add("body-l");
            top.classList.add("top-l");
            bot.classList.add("bot-l");
            dropbtn1.classList.add("dropbtn-l");
            dropbtn2.classList.add("dropbtn-l");
        }
    }
}

  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function feedback() {

}

function about() {

}