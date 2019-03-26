const myform = document.querySelector("#main-form");
const ulContactList = document.querySelector("#show-contact");
const gender = "gender";
const formsInformation = document.querySelectorAll(".form-group.row");

// add validiation
formsInformation.forEach(function(form) {
    form.addEventListener("input", function(){
        form.classList.add("was-validated");
    });
});

myform.addEventListener("submit", addContactList);

function addContactList(e){
    // prevent reload
    e.preventDefault();
    // storing data
    let li = document.createElement("li");

    formsInformation.forEach(function(form){
        const label = form.querySelector("label").getAttribute("for");
        let getValue = "";
        if(label === "gender"){
            // check radio button
            form.querySelectorAll("input").forEach(function(check){
                if(check.checked){
                    getValue = check.value;
                }
            })

        }else{
            const value = form.querySelector(".input-form").value;
            getValue = value;
        }

        const p = document.createElement("p");
        p.textContent = `${label} : ${getValue}`;
        li.appendChild(p);
    });

    ulContactList.appendChild(li);
}


//was-validated
