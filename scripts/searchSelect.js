function searchSelect() {
    console.log("function init");
    var searchFormItems = document.getElementsByClassName("form-item");
    var basicField = searchFormItems[0];
    let inputs = searchFormItems.length;
    var searchSwitch = document.getElementById("search-selector");
    

    // console.log(getComputedStyle(basicField).getPropertyValue("display"));
    if(document.body.classList.contains("path-frontpage")) {

        if (getComputedStyle(basicField).getPropertyValue("display") === "none") {
            showBasic(searchFormItems, basicField, inputs, searchSwitch);
            localStorage.searchState = "basic";
        } else {
            showAdvanced(searchFormItems, basicField, inputs, searchSwitch);
            localStorage.searchState = "advanced"
        }
    }
    if(document.body.classList.contains("path-szukaj")){
        let tempState = localStorage.searchState;
        if(typeof tempState === "undefined") {
            (console.error || console.log)("searchState was undefined");
            localStorage.searchState = "basic";
            showBasic(searchFormItems, basicField, inputs, searchSwitch);
        }
        // Reversed logic because function is called onClick
        if (localStorage.searchState = "basic") {
            showAdvanced(searchFormItems, basicField, inputs, searchSwitch);
            localStorage.searchState = "advanced";
        }
        if (localStorage.searchState = "advanced") {
            showBasic(searchFormItems, basicField, inputs, searchSwitch);
            localStorage.searchState = "basic";
        }
    }


}

function showBasic(searchFormItems, basicField, inputs, searchSwitch) {
    for(let i = 1; i < inputs; i++) {
        searchFormItems[i].style.display="none"
    }
    basicField.style.display = "block";
    
    searchSwitch.innerHTML = "Wysukiwanie zaawansowane <span class=\"caret\"></span>";
}

function showAdvanced(searchFormItems, basicField, inputs, searchSwitch) {
    basicField.style.display = "none";
    for(let i = 1; i < inputs; i++) {
        searchFormItems[i].style.display="block"
    }
    
    searchSwitch.innerHTML = "Proste wyszukiwanie <span class=\"dropup\"><span class=\"caret\"></span></span>";
}