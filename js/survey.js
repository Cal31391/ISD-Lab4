function changePage() {
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    if (radios.length < 7) {
        createSummaryPage();
        //alert('Please select an option for every question.');
    } else {
        createSummaryPage();
    }
} // https://stackoverflow.com/questions/1423777/
// how-can-i-check-whether-a-radio-button-is-selected-with-javascript



function checkUserInput() {
    //all inputs are valid, i.e - an actual character string
}

function createSummaryPage() {

    var main_div = document.getElementById("main");
    var content_div = document.getElementById("list");
    var user_name = document.getElementById("usr").value;
    document.getElementById("name-row").innerHTML = "";

    main_div.innerHTML =
        '<div class="col-md-12 text-center">\n' +
        '<h1>Survey Summary</h1>\n' +
        '</div>\n';

    content_div.innerHTML = "Thank you for taking our survey, " + user_name + "!";;

    document.appendChild(main_div);
    document.appendChild(content_div);
}