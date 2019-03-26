class ContactInformation {
    constructor(subject, msg, name, gender, phone, email) {
        this.subject = subject;
        this.msg = msg;
        this.name = name;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
    }
}

const submit_btn = document.querySelector("#submit-btn");
const form_subject = document.querySelector("#form-subject");
const form_message = document.querySelector("#form-message");
const form_name = document.querySelector("#form-name");
const form_gender_male = document.querySelector("#form-gender-male");
const form_gender_female = document.querySelector("#form-gender-female");
const form_phone = document.querySelector("#form-phone");
const form_email = document.querySelector("#form-email");

submit_btn.addEventListener("submit", add_contact_list);

function add_contact_list(event){
    console.log(event);
}