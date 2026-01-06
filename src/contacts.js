import mailImg from "./images/mail.jpg";
import telephoneImg from "./images/telephone.jpg";


function loadContacts(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const div1 = document.createElement("div");
    div1.classList.add("field1");

    const p1= document.createElement("p");
    p1.innerHTML = "Gmail: goldenruppee@gmail.com"
    const img1 = document.createElement("img");
    img1.src = mailImg;
    img1.style.height = "210px";
    img1.style.width = "300px";

    div1.appendChild(p1);
    div1.appendChild(img1);
    content.appendChild(div1);

    const div2 = document.createElement("div");
    div2.classList.add("field2");
    const p2 = document.createElement("p");
    const img2 = document.createElement("img");
    p2.textContent = "Reach us out at : +87 114 911 123";
    img2.src = telephoneImg;
    img2.style.height = "210px";
    img2.style.width = "300px";

    div2.appendChild(img2);
    div2.appendChild(p2);
    content.appendChild(div2);

}


export default loadContacts;