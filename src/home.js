import coffeeImg from "./images/close-up-barista-making-cappuccino-bartender-preparing-coffee-drink.jpg";
import crossoint from "./images/young-woman-eating-croissants-cafe.jpg";
import shop from "./images/parisian-coffee-shop-style-with-tasty-coffee-served-wooden-table-coffee-shop-design.jpg";



function loadHome(){
    const content = document.querySelector("#content");
    content.innerHTML = " ";

    const div1 = document.createElement("div");
    div1.classList.add("why");
    const header_1 = document.createElement("h1");
    header_1.textContent = "Order & Explore";
    const p_1 = document.createElement("p");
    p_1.textContent = "An explosion of authentic flavors served straight from our kitchen to your plate.";

    div1.appendChild(header_1);
    div1.appendChild(p_1);
    content.appendChild(div1);

    const div2 = document.createElement("div");
    div2.classList.add("field1");

    const p_2 = document.createElement("p");
    p_2.textContent = "Seek the authentic Italiano taste any day!!"

    const img_1 = document.createElement("img");
    img_1.src = coffeeImg;
    img_1.style.height = "210px";
    img_1.style.width = "300px";
    img_1.style.alt = "women drinking coffee";

    div2.appendChild(p_2);
    div2.appendChild(img_1);
    content.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList.add("field2");

    const p_3 = document.createElement("p");
    p_3.textContent = "An integrated booking widget (like OpenTable or Resy) or a simple contact form."

    const img_2 = document.createElement("img");
    img_2.src = crossoint;
    img_2.style.height = "210px";
    img_2.style.width = "300px";
    img_2.style.alt = "women eating croisaant";

    div3.appendChild(img_2);
    div3.appendChild(p_3);
    content.appendChild(div3);

    const div4 = document.createElement("div");
    div4.classList.add("field3");

    const p_4 = document.createElement("p");
    p_4.textContent =  "direct link to your delivery partners or your in-house ordering system.";

    const img_3 = document.createElement("img");
    img_3.src = shop;
    img_3.style.height = "210px";
    img_3.style.width = "300px";
    img_3.style.alt = "coffee shop";

    div4.appendChild(p_4);
    div4.appendChild(img_3);
    content.appendChild(div4);

    const footer = document.createElement("footer");
    const p_5 = document.createElement("p");
    const p_6 = document.createElement("p");
    p_5.textContent = "@2026 restaurant. All rights reserved";
    p_6.textContent = "@Odin project";

    footer.appendChild(p_5);
    footer.appendChild(p_6);
    content.appendChild(footer);
}

export default loadHome;
