"use strict";
let myName = document.getElementById("name");
let desig = document.getElementById("desig");
let myMobile = document.getElementById("mobile");
let myEmail = document.getElementById("email");
let myAddress = document.getElementById("address");
let myPass1 = document.getElementById("pass1");
let myDegree = document.getElementById("degree");
let myUni = document.getElementById("uni");
let myPass2 = document.getElementById("pass2");
let myDegree2 = document.getElementById("degree2");
let myUni2 = document.getElementById("uni2");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let lang1 = document.getElementById("lang1");
let lang2 = document.getElementById("lang2");
let object = document.getElementById("object");
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let company = document.getElementById("company");
let comlocation = document.getElementById("comlocation");
let jobtitle = document.getElementById("jobtitle");
let achievements1 = document.getElementById("achievements1");
let achievements2 = document.getElementById("achievements2");
let achievements3 = document.getElementById("achievements3");
let styear2 = document.getElementById("styear2");
let endyear2 = document.getElementById("endyear2");
let company2 = document.getElementById("company2");
let comlocation2 = document.getElementById("comlocation2");
let jobtitle2 = document.getElementById("jobtitle2");
let achievementsA1 = document.getElementById("achievementsa1");
let achievementsA2 = document.getElementById("achievementsa2");
let achievementsA3 = document.getElementById("achievementsa3");
let pic = document.getElementById("pic");
let submitBtn = document.getElementById("submitBtn");
let formP = document.getElementById("formP");
formP?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("mobile", myMobile.value);
    localStorage.setItem("email", myEmail.value);
    localStorage.setItem("address", myAddress.value);
    localStorage.setItem("pass1", myPass1.value);
    localStorage.setItem("degree", myDegree.value);
    localStorage.setItem("uni", myUni.value);
    localStorage.setItem("pass2", myPass2.value);
    localStorage.setItem("degree2", myDegree2.value);
    localStorage.setItem("uni2", myUni2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("object", object.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("comlocation", comlocation.value);
    localStorage.setItem("jobtitle", jobtitle.value);
    localStorage.setItem("achievements1", achievements1.value);
    localStorage.setItem("achievements2", achievements2.value);
    localStorage.setItem("achievements3", achievements3.value);
    localStorage.setItem("styear2", styear2.value);
    localStorage.setItem("endyear2", endyear2.value);
    localStorage.setItem("company2", company2.value);
    localStorage.setItem("comlocation2", comlocation2.value);
    localStorage.setItem("jobtitle2", jobtitle2.value);
    localStorage.setItem("achievementsa1", achievementsA1.value);
    localStorage.setItem("achievementsa2", achievementsA2.value);
    localStorage.setItem("achievementsa3", achievementsA3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./milstone-1/resume.html";
});
