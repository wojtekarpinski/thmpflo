Drupal.behaviors.searchFormHandler = {
    attach: function searchFormHandler() {
        if(document.body.classList.contains("path-szukaj")) {
            console.log("SearchFormHandler init.");
            //Hide discipline label
            let disciplineLabel = document.querySelector("label");
            disciplineLabel.style.display = "none";
            //Fill the placeholder
            let disciplineField = document.getElementById("edit-fudn--2");
            disciplineField.setAttribute("placeholder","Dyscyplina naukowa");
            //Hide searchSelector
            let searchSelector = document.getElementById("search-selector");
            searchSelector.style.display = "none";
        }
    }
    
}
