(()=>{"use strict";const e=e=>fetch("https://jstest-ce73c-default-rtdb.firebaseio.com/goods.json").then((e=>e.json())),t=e=>{const t=document.querySelector(".goods");t.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n\n        <div class="col-12 col-md-6 col-lg-4 col-xl-3">\n            <div class="card">\n                ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n    \n                \n                <div class="card-img-wrapper">\n            <span class="card-img-top"\n                style="background-image: url('${e.img}')"></span>\n        </div>\n        <div class="card-body justify-content-between">\n            <div class="card-price">${e.price}</div>\n            <h5 class="card-title">${e.title}</h5>\n            <button class="btn btn-primary">В корзину</button>\n        </div>\n            </div >\n\t\t</div >\n    `)}))};(()=>{const e=document.getElementById("cart"),t=document.querySelector(".cart"),n=t.querySelector(".cart-close");e.addEventListener("click",(()=>{t.style.display="flex"})),n.addEventListener("click",(()=>{t.style.display=""}))})(),e().then((e=>{t(e)})),document.querySelector(".search-wrapper_input").addEventListener("input",(n=>{const c=n.target.value;e().then((e=>{t(((e,t)=>e.filter((e=>e.title.includes(t))))(e,c))}))}))})();