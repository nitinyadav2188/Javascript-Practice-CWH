function validate() {
    var name = document.f1.name.value;
    var password = document.f1.password.value;
    var status = false;

    if (name.length < 1) {
        document.getElementById("nameloc").innerHTML =
            " <img src='https://tenor.com/view/red-cross-gif-24021846'/> Please enter your name";
        status = false;
    } else {
        document.getElementById("nameloc").innerHTML = " <img src='https://tenor.com/view/check-green-white-background-gif-16677782'/>";
        status = true;
    }
    if (password.length < 6) {
        document.getElementById("passwordloc").innerHTML =
            " <img src='https://tenor.com/view/red-cross-gif-24021846'/> Password must be at least 6 char long";
        status = false;
    } else {
        document.getElementById("passwordloc").innerHTML = " <img src='https://tenor.com/view/check-green-white-background-gif-16677782'/>";
    }
    return status;
}