// get input fields
var basicPay = document.getElementById("basicPay");
var allowances = document.getElementById("allowances");
var statutory = document.getElementById("statutory");

// get all result rows
var resultRows = document.getElementsByClassName("result-row");

// get clear button (there is only one button)
var clearBtn = document.getElementsByTagName("button")[0];


// calculate function
function calculateValues() {

    var basic = Number(basicPay.value);
    var allow = Number(allowances.value);
    var stat = Number(statutory.value);

    if (basicPay.value == "") {
        basic = 0;
    }

    if (allowances.value == "") {
        allow = 0;
    }

    if (statutory.value == "") {
        stat = 0;
    }

    // gross pay
    var gross = basic + allow;

    // napsa 5%
    var napsa = gross * 0.05;

    // nhima 1%
    var nhima = gross * 0.01;

    // update spans (second span in each result-row)
    resultRows[0].getElementsByTagName("span")[1].innerHTML = "K " + gross;
    resultRows[1].getElementsByTagName("span")[1].innerHTML = "K " + napsa;
    resultRows[2].getElementsByTagName("span")[1].innerHTML = "K " + nhima;
}


// run calculation when typing
basicPay.addEventListener("input", calculateValues);
allowances.addEventListener("input", calculateValues);
statutory.addEventListener("input", calculateValues);


// clear button
clearBtn.addEventListener("click", function () {

    basicPay.value = "";
    allowances.value = "";
    statutory.value = "";

    resultRows[0].getElementsByTagName("span")[1].innerHTML = "K 0";
    resultRows[1].getElementsByTagName("span")[1].innerHTML = "K 0";
    resultRows[2].getElementsByTagName("span")[1].innerHTML = "K 0";

});
