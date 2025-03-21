let inputuser = document.getElementById('inputuser');
let inputpass = document.getElementById('inputpass');
let btnlogin = document.getElementById('btnlogin');

btnlogin.addEventListener("click", function(e) {
    e.preventDefault();

    if (inputuser.value === "Cedi") {
        if (inputpass.value === "1120") {
            location.href = "main.html";
        } else {
            alert("Invalid Password");
        }
    } else {
        alert("Invalid Username");
    }
});
