function searchSelect() {
    console.log("function init");
    var basicField = document.getElementById("basic-search");
    var advancedFields = document.getElementById("advanced-search");
    var searchSwitch = document.getElementById("search-selector");
    var searchForm = document.getElementById("search");


    if (basicField.style.display === "none") {
        // searchForm.action = "/php/basicSearch.php"
        advancedFields.style.display = "none";
        basicField.style.display = "flex";
        searchSwitch.innerHTML = "Wysukiwanie zaawansowane <span class=\"caret\"></span>";
    } else {
        basicField.style.display = "none";
        // searchForm.action ="/php/advancedSearch.php"
        advancedFields.style.display = "flex";
        searchSwitch.innerHTML = "Proste wyszukiwanie <span class=\"caret\ dropup"></span>";
    }


}