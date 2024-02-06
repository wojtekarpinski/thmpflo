function searchSelect() {
    console.log("function init");
    var searchFormItems = document.getElementsByClassName("form-item");
    var basicField = searchFormItems[0];
    let inputs = searchFormItems.length;
    let byebyeLabel = document.querySelector("label");
    let discipline = document.querySelector("#edit-fudn")

    var searchSwitch = document.getElementById("search-selector");
    

    console.log(getComputedStyle(basicField).getPropertyValue("display"));
    if (getComputedStyle(basicField).getPropertyValue("display") === "none") {
        for(let i = 1; i < inputs; i++) {
            console.log(i);
            searchFormItems[i].style.display="none"
        }
        basicField.style.display = "block";
        searchSwitch.innerHTML = "Wysukiwanie zaawansowane <span class=\"caret\"></span>";
    } else {
        basicField.style.display = "none";
        for(let i = 1; i < inputs; i++) {
            searchFormItems[i].style.display="block"
        }
        if(getComputedStyle(byebyeLabel).getPropertyValue("display") != "none")
        {
            byebyeLabel.style.display = "none";
            discipline.setAttribute("placeholder","Dyscyplina naukowa");
        }
        searchSwitch.innerHTML = "Proste wyszukiwanie <span class=\"dropup\"><span class=\"caret\"></span></span>";
    }


}