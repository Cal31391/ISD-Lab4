function checkCorrectRequiredFields(obj, obj, obj, obj, obj, obj, obj) {
    //all required fields filled in - warn if not, do not process if not
    if ($('input:radio:checked').length == 7) {
        alert("I am an alert box!");
    }

}
$('submit-btn').click(function() {
    if ($('input:radio:checked').length < 7) {
        alert('Please check an option from each group.');
    } else {
        alert('Success!');
    }
    return false;
});

function checkUserInput() {
    //all inputs are valid - warn if not, do not process if not
}

function createSummary() {
    //create page with summary info (that matches theme of other pages) 
}