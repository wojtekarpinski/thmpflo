Drupal.behaviors.searchState = 
{
    attach: function readSearchState()
    {
        if(document.body.classList.contains("path-szukaj")) {
            let formItems = document.getElementsByClassName("form-item");
            let itemsNb = formItems.length;
            let tempState = localStorage.searchState;
            if(typeof tempState === 'undefined') 
            {
                localStorage.searchState = 'basic';
            }
            if(localStorage.searchState === 'basic') {
                //Display basic search field
                formItems[0].style.display = "block";
                
            } else {
                //Display advanced search fields
                for(let i = 1; i < itemsNb; i++) {
                    formItems[i].style.display = "block";
                }
            }

        }
        
    }
}