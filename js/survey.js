function changePage() {
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var radio_len = radios.length;

    if (radios.length < 7) {
        createSummaryPage(radio_len);
        //alert('Please select an option for every question.');
    } else {
        createSummaryPage(radio_len);
    }
} // https://stackoverflow.com/questions/1423777/
// how-can-i-check-whether-a-radio-button-is-selected-with-javascript



function checkUserInput() {
    //all inputs are valid, i.e - an actual character string
}

function createSummaryPage(radio_length) {

    var main_div = document.getElementById("main");
    var content_div = document.getElementById("list");
    var user_name = document.getElementById("usr").value;
    var thank_you_msg = "Thank you for taking our survey, " + user_name + "!"
    var radio_len = radio_length;

    var rating_form;
    var rating;
    var element_id;

    document.getElementById("name-row").innerHTML = "";

    main_div.innerHTML =
        '<div class="col-md-12 text-center">\n' +
        '<h1>Survey Summary</h1>\n' +
        '</div>\n';

    content_div.innerHTML = thank_you_msg;


    for (var i = 0; i < radio_len; i++) {

        element_id = "q" + i;

        rating_form = document.getElementById(element_id);

        rating_set = document.getElementsByName("rating1");
        for (var i = 0; i < rating_set.length; i++) {
            if (rating_set[i].checked) {
                rating = rating_set[i].value;
            }
        }



        //rating_form.innerHTML = rating;

    }
    alert(i);
}