

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, set, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD02S0PTlARa74ol8Qhxi1373pvSw7ZN1k",
    authDomain: "regform-bd501.firebaseapp.com",
    projectId: "regform-bd501",
    storageBucket: "regform-bd501.appspot.com",
    messagingSenderId: "711668824090",
    appId: "1:711668824090:web:6b0bb43dcf5ce7518cf9a3",
    measurementId: "G-CH6Z8YH4VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var nameInp = document.getElementById('FullName');
var emailInp = document.getElementById('Email');
var addInp = document.getElementById('Address');
var cnicInp = document.getElementById('Cnic');
var countryInp = document.getElementById('Country');
var dobInp = document.getElementById('DOB');
// var avatarInp = document.getElementById('UploadAvatar');
// var countryInp = document.getElementById('Country');

function register() {

}

window.register = function () {
    var obj = {
        name: nameInp.value,
        email: emailInp.value,
        cnic: cnicInp.value,
        country: countryInp.value,
        address: addInp.value,
        dob: dobInp.value,

    };

    obj.id = Math.random().toString().slice(2);

    let refrence = ref(database, `Users/${obj.id}/`);
    set(refrence, obj);

    console.log(obj);

}

function getData() {
    let refrence = ref(database, 'Users')
    let arr = [];
    onChildAdded(refrence, function (data) {
        arr.push(data.val());
        console.log(arr);


    })
}
getData();