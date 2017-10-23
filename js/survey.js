/* Caroline Lee
JS file for dealer_survey
*/

function changePage() {
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var radio_len = radios.length;
    var user_name = document.getElementById("usr").value;

    if (radios.length < 7) {

        alert('Please select an option for every question.');
    } else if (user_name.length == 0 || !user_name.match(/^[a-z]+$/i)) {
        alert('Please enter a valid name.');

    } else {
        createSummaryPage(radio_len);
    }
} // https://stackoverflow.com/questions/1423777/
// how-can-i-check-whether-a-radio-button-is-selected-with-javascript


function createSummaryPage(radio_length) {

    var main_div = document.getElementById("main");
    var user_name = document.getElementById("usr").value;
    var thank_you_msg = "Thank you for taking our survey, " + user_name + "!"
    var radio_len = radio_length;

    var rating;
    var element_num;
    var message;
    var element_id;


    document.getElementById("name-row").innerHTML = "";

    main_div.innerHTML =
        '<div class="col-md-12 text-center">\n' +
        '<h1>Survey Summary</h1>\n' +
        '</div>\n';

    var iter = 0;
    for (var i = 0; i < radio_len; i++) {
        iter = i + 1;
        element_num = "q" + iter.toString();
        element_id = document.getElementById(element_num);
        rating = document.querySelector('input[name=rating' + iter.toString() + ']:checked').value;

        switch (rating) {
            case '1':
                message = "Not satisfied.";
                break;

            case '2':
                message = "Slightly satisfied.";
                break;

            case '3':
                message = "Neutral.";
                break;

            case '4':
                message = "Satsified.";
                break;

            case '5':
                message = "Very satisfied.";
                break;

            default:
                message = "";
        }

        element_id.innerHTML = message;
    }

    alert(thank_you_msg);
    window.location.href = '../dealer_home';
}