import outlet1 from "./images/warmth-cafe-dull-day-oslo.jpg";
import outlet2 from "./images/outlet2.jpg";
import outlet3 from "./images/outlet3.jpg";


function loadOutlets(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const div1 = document.createElement("div");
    div1.classList.add("field1");
    const img1 = document.createElement("img");
    img1.src = outlet1;
    img1.style.height = "210px";
    img1.style.width = "300px";
    const p1 = document.createElement("p");
    p1.textContent = "Our first outlet at Mumbai, Maharashtra"

    div1.appendChild(img1);
    div1.appendChild(p1);
    content.appendChild(div1);

    const div2 = document.createElement("div");
    div2.classList.add("field2");
    const img2 = document.createElement("img");
    img2.src = outlet2;
    img2.style.height = "210px";
    img2.style.width = "300px";
    const p2 = document.createElement("p");
    p2.textContent = "we have also migrated to New Delhi, India, DWS21";

    div2.appendChild(p2);
    div2.appendChild(img2);
    content.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList.add("field3");
    const img3 = document.createElement("img");
    img3.src = outlet3;
    img3.style.height = "210px";
    img3.style.width = "300px";
    const p3 = document.createElement("p");
    p3.textContent = "Our third location @Rajasthan, Alwar";

    div3.appendChild(img3);
    div3.appendChild(p3);
    content.appendChild(div3);

    div3.style = "border-bottom: none;";
}

export default loadOutlets;