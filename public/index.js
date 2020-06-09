function formSubmit(event) {
    event.preventDefault();
    var searchTerms ="";

    var ageSlider = document.getElementById("age-slider");
    
    var maleGenderSelect = document.getElementById("q2-r1");
    var femaleGenderSelect = document.getElementById("q2-r2");

    var hobbiesInput = document.getElementById("hobbies-input");
    
    if(ageSlider.value <= 12) {
        if(searchTerms.length == 0) {
            searchTerms = searchTerms.concat('for+kids');
        }else {
            searchTerms = searchTerms.concat('+for+kids');
        }
    }

    if(maleGenderSelect.checked == true) {
        if(searchTerms.length == 0) {
            searchTerms = searchTerms.concat("mens");
        }else {
            searchTerms = searchTerms.concat("+mens");
        }
    }else if(femaleGenderSelect.checked == true) {
        if(searchTerms.length == 0) {
            searchTerms= searchTerms.concat("womens");
        }else {
            searchTerms = searchTerms.concat("+womens");
        }
    }

    searchTerms = searchTerms.concat("+", hobbiesInput.value);

    console.log("Keywords pulled from survey: ", searchTerms);
    window.location= "/" + searchTerms;
}
