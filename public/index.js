function formSubmit(event) {
    event.preventDefault();

    let searchTerms = [];

    const ageSlider = document.getElementById('age-slider');

    const maleGenderSelect = document.getElementById('q2-r1');
    const femaleGenderSelect = document.getElementById('q2-r2');

    const hobbiesInput = document.getElementById('hobbies-input');

    const hobbies = hobbiesInput.value.split(/[ ,]/).filter(Boolean);
    searchTerms = searchTerms.concat(hobbies);

    if (ageSlider.value <= 12) {
        searchTerms.push('for+kids');
    } else {
        if (maleGenderSelect.checked) {
            searchTerms.push('mens');
        } else if (femaleGenderSelect.checked) {
            searchTerms.push('womens');
        }
    }

    console.log('Keywords pulled from survey: ', searchTerms);
    window.location= `/gifts/${searchTerms.join('+')}`;
}
