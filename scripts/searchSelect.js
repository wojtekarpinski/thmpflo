function searchSelect() {
    console.log("function init");
    var searchFormItems = document.getElementsByClassName("form-item");
    var basicField = searchFormItems[0];
    let inputs = searchFormItems.length;
    for(let i = 1; i <= 7; i++) {
        advancedFields[i-1]= searchFormItems[i];
    }

    var searchSwitch = document.getElementById("search-selector");
    var searchForm = document.getElementById("search");


    if (basicField.style.display === "none") {
        for(let i = 1; i <= inputs; i++) {
            searchFormItems[i].style.display="none"
        }
        basicField.style.display = "block";
        searchSwitch.innerHTML = "Wysukiwanie zaawansowane <span class=\"caret\"></span>";
    } else {
        basicField.style.display = "none";
        for(let i = 1; i <= inputs; i++) {
            searchFormItems[i].style.display="block"
        }
        searchSwitch.innerHTML = "Proste wyszukiwanie <span class=\"dropup\"><span class=\"caret\"></span></span>";
    }


}