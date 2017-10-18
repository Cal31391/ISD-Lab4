$('button').click(function() {
    if ($('input:radio:checked').length < 7) {
        alert('Please select an option for every question.');
    }
    return false;
}); //http://jsfiddle.net/0ymfdL6o/

function checkUserInput() {
    //all inputs are valid - warn if not, do not process if not
}

function createSummary() {
    //create page with summary info (that matches theme of other pages) 
}