import{l as g,c as d,s as a}from"./utilidades-e848f4ad.js";const r=g("carrinho")??{};function p(){const t=document.getElementById("carrinho");t.classList.add("right-[0px]"),t.classList.remove("right-[-360px]")}function C(){const t=document.getElementById("carrinho");t.classList.remove("right-[0px]"),t.classList.add("right-[-360px]")}function x(){Object.keys(r).length!==0&&(window.location.href="./checkout.html")}function $(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),n=document.getElementById("ir-checkout");t.addEventListener("click",C),e.addEventListener("click",p),n.addEventListener("click",x)}function s(t){delete r[t],E(),a("carrinho",r),i()}function l(t){r[t]++,u(t),a("carrinho",r),i()}function b(t){if(r[t]--,u(t),r[t]===0){s(t);return}a("carrinho",r),i()}function u(t){document.getElementById(`quantidade-${t}`).innerText=r[t]}function m(t){const e=d.find(c=>c.id===t),n=document.getElementById("produtos-carrinho"),o=document.createElement("article"),h=["flex","gap-1","bg-slate-100","rounded-lg","p-1","relative"];for(const c of h)o.classList.add(c);const f=`<button id="remover-item-${e.id}" class="absolute top-0 right-1">
		<i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
	<img
		src="./src/img/${e.imagem}.jpg"
		alt="Carrinho: ${e.nome}"
		class="h-24 rounded-lg" />
	<div class="p-2 flex flex-col justify-between">
		<p class="text-slate-900 text-sm">${e.nome}</p>
		<p class="text-slate-400 text-xs">Tamanho: M</p>
		<p class="text-green-700 text-lg">$${e.preco}</p>
	</div>
	<div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
		<button id="decrementar-produto-${e.id}">-</button>
		<p id="quantidade-${e.id}" class="ml-2">${r[e.id]}</p>
		<button id="incrementar-produto-${e.id}"class="ml-2">+</button>
	</div>`;o.innerHTML=f,n.appendChild(o),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>b(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>l(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>s(e.id))}function E(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in r)m(e)}function L(t){if(t in r){l(t);return}r[t]=1,a("carrinho",r),m(t),i()}function i(){const t=document.getElementById("preco-total");let e=0;for(const n in r)e+=d.find(o=>o.id===n).preco*r[n];t.innerText=`Total: $${e}`}export{L as a,i as b,$ as i,E as r};
