var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var datum = year + "-" + month + "-" + day + " " + "<span class='dateTime'>" + hours + ":" + min + ":" + sec + "</span>";

window.addEventListener('load', (event) => {

    document.getElementById("date").innerHTML = datum;

   
})


var tbIme = document.getElementById("tbIme");
var tbPrezime = document.getElementById("tbPrezime");
var tbTelefon = document.getElementById("tbTelefon");
var tbEmail = document.getElementById("tbEmail");
var poruka = document.getElementById("vel");
var btn = document.getElementById("btnPosalji");

var greske = 0;

btn.addEventListener('click', function(){
    if(tbIme.value == "" || tbPrezime.value == "" || tbTelefon.value == "" || tbEmail.value == "" || poruka.value == ""){
        alert("Sva polja moraju biti popunjena");
        tbIme.classList.add("error");
        tbPrezime.classList.add("error");
        tbTelefon.classList.add("error");
        tbEmail.classList.add("error");
        poruka.classList.add("error");
    }
    else if(nameValidate() && surnameValidate() && emailValidate() && phoneValidate() && messageValidate()){
        document.getElementById("poruka2").innerHTML = "Poštovana/i " + tbIme.value + " uspešno ste poslali poruku!";
        tbIme.value = "";
        tbPrezime.value = "";
        tbTelefon.value = "";
        tbEmail.value = "";
        poruka.value = "";
        tbIme.classList.remove("error");
        tbPrezime.classList.remove("error");
        tbTelefon.classList.remove("error");
        tbEmail.classList.remove("error");
        poruka.classList.remove("error");
    }
})

// provera name
function nameValidate() {
    var erIme = new RegExp(/^[A-ZČĆŽŠĐ][a-z]{1,20}$/);

    if(erIme.test(tbIme.value)){
        tbIme.classList.remove("error");
        return true;
    }else{
        tbIme.classList.add("error");
        return false;
    }
}
function surnameValidate() {
    var erPrezime = new RegExp(/^[A-ZČĆŽŠĐ][a-z]{1,20}$/);

    if(erPrezime.test(tbPrezime.value)){
        tbPrezime.classList.remove("error");
        return true;
    }else{
        tbPrezime.classList.add("error");
        return false;
    }
}
// provera email
function emailValidate() {
    var erEmail = new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/);

    if(erEmail.test(tbEmail.value)){
        tbEmail.classList.remove("error");
        return true;
    }else{
        tbEmail.classList.add("error");
        return false;
    }
}
function phoneValidate() {
    var erTelefon = new RegExp(/^([0-9]{9,10}$)/);

    if(erTelefon.test(tbTelefon.value)){
        tbTelefon.classList.remove("error");
        return true;
    }else{
        tbTelefon.classList.add("error");
        return false;
    }
}
// provera message
function messageValidate(){

    if(poruka.value.length > 2){
        poruka.classList.remove("error");
        return true;
    }
    else{
        poruka.classList.add("error");
        return false;
    }
}
