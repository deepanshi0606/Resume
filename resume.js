var shlinks = document.getElementsByClassName("shlinks");
var shcontents = document.getElementsByClassName("sh-contents");

function opentab(tabname){
    for(shlink of shlinks){
        shlink.classList.remove("active-link")
    }

    for(shcontent of shcontents){
        shcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// media queries

