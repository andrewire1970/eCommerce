/* window.onload = function () {
    alert("This website is for Demo purposes only. DO NOT put in credit card information as orders will not be processed")
}; */
function load() {
    var isFired = localStorage.getItem('checkFired');

    if (isFired != '1') {
        alert("This website is for Demo purposes only. DO NOT put in credit card information as orders will not be processed");
        localStorage.setItem('checkFired', '1');
    }
}
load();