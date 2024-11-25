window.addEventListener("load", () => {

   let name =localStorage.getItem("name");
   let desig = localStorage.getItem("desig");
   let mobile = localStorage.getItem("mobile");
   let email = localStorage.getItem("email");
   let address = localStorage.getItem("address");
   let pass1 = localStorage.getItem("pass1");
   let degree = localStorage.getItem("degree");
   let uni = localStorage.getItem("uni");
   let pass2 = localStorage.getItem("pass2");
   let degree2 = localStorage.getItem("degree2");
   let uni2 = localStorage.getItem("uni2");
   let skill1 = localStorage.getItem("skill1");
   let skill2 = localStorage.getItem("skill2");
   let skill3 = localStorage.getItem("skill3");
   let lang1 = localStorage.getItem("lang1");
   let lang2 = localStorage.getItem("lang2");
   let object = localStorage.getItem("object");
   let styear = localStorage.getItem("styear");
   let endyear = localStorage.getItem("endyear");
   let company = localStorage.getItem("company");
   let comlocation = localStorage.getItem("comlocation");
   let jobtitle = localStorage.getItem("jobtitle");
   let achievements1 = localStorage.getItem("achievements1");
   let achievements2 = localStorage.getItem("achievements2");
   let achievements3 = localStorage.getItem("achievements3");

   let styear2 = localStorage.getItem("styear2");
   let endyear2 = localStorage.getItem("endyear2");
   let company2 = localStorage.getItem("company2");
   let comlocation2 = localStorage.getItem("comlocation2");
   let jobtitle2 = localStorage.getItem("jobtitle2");
   let achievementsA1 = localStorage.getItem("achievementsa1");
   let achievementsA2 = localStorage.getItem("achievementsa2");
   let achievementsA3 = localStorage.getItem("achievementsa3");
   let picture = localStorage.getItem("profile_pic")

   let resName: any = document.getElementById('resName')
    resName.textContent = name
    
   let resDesig: any = document.getElementById('resDesig')
   resDesig.textContent = desig

   let resPhone: any = document.getElementById('resPhone')
   resPhone.textContent = mobile

   let resEmail: any = document.getElementById('resEmail')
   resEmail.textContent = email

   let resAdress: any = document.getElementById('resAdress')
   resAdress.textContent = address

   let resEdu1 : any = document.getElementById('resEdu1')
   resEdu1.textContent = pass1

   let resDegree : any = document.getElementById('resDegree')
   resDegree.textContent = degree

   let resUni1: any = document.getElementById('resUni1')
   resUni1.textContent = uni

   let reEdu2: any = document.getElementById('reEdu2')
   reEdu2.textContent = pass2

   let resDegree2: any = document.getElementById('resDegree2')
   resDegree2.textContent = degree2

   let resUni2: any = document.getElementById('resUni2')
   resUni2.textContent = uni2

   let skills1: any = document.getElementById('skills1')
   skills1.textContent = skill1

   let skills2: any = document.getElementById('skills2')
   skills2.textContent = skill2

   let skills3: any = document.getElementById('skills3')
   skills3.textContent = skill3

   let resLang1: any = document.getElementById('resLang1')
   resLang1.textContent = lang1

   let resLang2: any = document.getElementById('resLang2')
   resLang2.textContent = lang2

   let resobject: any = document.getElementById('resobject')
   resobject.textContent = object

   let resSyear: any = document.getElementById('resSyear')
   resSyear.textContent = styear

   let resEyear: any = document.getElementById('resEyear')
   resEyear.textContent = endyear

   let resCom: any = document.getElementById('resCom')
   resCom.textContent = company

   let resLoc: any = document.getElementById('resLoc')
   resLoc.textContent = comlocation

   let resjob: any = document.getElementById('resjob')
   resjob.textContent = jobtitle

   let resAch1: any = document.getElementById('resAch1')
   resAch1.textContent = achievements1

   let resAch2: any = document.getElementById('resAch2')
   resAch2.textContent = achievements2

   let resAch3: any = document.getElementById('resAch3')
   resAch3.textContent = achievements3

   let resSyear2: any = document.getElementById('resSyear2')
   resSyear2.textContent = styear2

   let resEyear2: any = document.getElementById('resEyear2')
   resEyear2.textContent = endyear2

   let resCom2: any = document.getElementById('resCom2')
   resCom2.textContent = company2

   let resLoc2: any = document.getElementById('resLoc2')
   resLoc2.textContent = comlocation2

   let resjob2: any = document.getElementById('resjob2')
   resjob2.textContent = jobtitle2

   let resAcha1: any = document.getElementById('resAcha1')
   resAcha1.textContent = achievementsA1

   let resAcha2: any = document.getElementById('resAcha2')
   resAcha2.textContent = achievementsA2

   let resAcha3: any = document.getElementById('resAcha3')
   resAcha3.textContent = achievementsA3

   let resImg: any = document.getElementById('resImg')
   resImg.src = picture

   

});


let skills_section = document.getElementById("skills");
let skills_btn = document.getElementById("skills_btn");

skills_btn?.addEventListener("click", () => {
  skills_section!.classList.toggle("hide");
});

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});


let add_btn = document.getElementById("add_btn")

add_btn?.addEventListener("click",()=>{

})