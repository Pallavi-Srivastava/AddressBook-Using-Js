var prompt = require('prompt-sync')();
class Person {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    get firstName() {
        return this.firstName;
    }
    set firstName(value) {
        this.firstName = value;
    }

    get lastName() {
        return this.lastName;
    }
    set lastName(value) {
        this.lastName = value;
    }

    get address() {
        return this.address;
    }
    set address(value) {
        this.address = value;
    }

    get city() {
        return this.city;
    }
    set city(value) {
        this.city = value;
    }

    get state() {
        return this.state;
    }
    set state(value) {
        this.state = value;
    }

    get zip() {
        return this.zip;
    }
    set zip(value) {
        this.zip = value;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(value) {
        this.phoneNumber = value;
    }

    get email() {
        return this.email;
    }
    set email(value) {
        this.email = value;
    }

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

function validateName(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    var regName = /^[A-Z]{1}[a-z]{2,}/;
    if (!regName.test(firstName)) {
        console.log('Please enter first name in valid format.');
        return false;
    } if (!regName.test(lastName)) {
        console.log('Please enter last name in valid format.');
        return false;
    }
    var regAddress = /^[A-Z]{1}[a-z]{3,}/;
    if (!regAddress.test(address)) {
        console.log('Please enter address in valid format.');
        return false;
    }
    if (!regAddress.test(city)) {
        console.log('Please enter city in valid format.');
        return false;
    }
    if (!regAddress.test(state)) {
        console.log('Please enter state in valid format.');
        return false;
    }

    var regZip = /^[0-9]{6}$/;
    if (!regZip.test(zip)) {
        console.log('Please enter zip in valid format.');
        return false;
    }
    var regPhoneNo = /^[9][1][6-9]{1}[0-9]{9}$/;
    if (!regPhoneNo.test(phoneNumber)) {
        console.log('Please enter phoneNumber in valid format.');
        return false;
    }
    var regEmail = /^[A-Za-z0-9]+([-\\\\.\\\\+\\\\_][0-9A-Za-z]+)*[@][A-Za-z0-9]+.[a-zA-Z]{2,4}([\\\\.\\\\,][a-z]{2,3})?$/;
    if (!regEmail.test(email)) {
        console.log('Please enter email in valid format.');
        return false;
    }
    else {
        console.log('Given details are valid.');
        return true;
    }
}

var firstName = prompt("Please enter your first name : ");
var lastName = prompt("Please enter your last name : ");
var address = prompt("Please enter your address : ");
var city = prompt("Please enter your city : ");
var state = prompt("Please enter your state : ");
var zip = parseInt(prompt("Please enter your zipCode : "));
var phoneNumber = parseInt(prompt("Please enter your phoneNumber : "));
var email = prompt("Please enter your email : ");

let personArray = new Array();
personArray.push({
    nameObj: validateName(firstName, lastName, address, city, state, zip, phoneNumber, email),
    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    },
});
