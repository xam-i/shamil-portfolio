const projects=[
{title:"Contact Boss",type:"CRM · Flutter",copy:"A cross-platform contact and call-management app built from scratch, with contact management, call logs, customer workflows and REST API integration.",stack:"Flutter · Dart · REST APIs · Native Android"},
{title:"StayPaw",type:"Pet care · Flutter + Node.js",copy:"A pet-care platform concept with authentication, shelter discovery, bookings, messaging, pet profiles and care activity timelines.",stack:"Flutter · Riverpod · Dio · Node.js · MySQL"},
{title:"Solaris Employee Management",type:"Business tools · Flutter",copy:"Employee-management workflows including travel allowance claims, expense management, lead tracking and API-driven screens.",stack:"Flutter · Dart · Dio · REST APIs"},
{title:"House of Scents",type:"E-commerce · Web",copy:"A minimal-luxury storefront concept for fragrance and diffuser products, with product discovery, wishlist, cart and WhatsApp contact flows.",stack:"Web · Responsive UI · E-commerce UX"},
{title:"Music Player",type:"Media · Flutter",copy:"A lightweight music-player project exploring playback controls, audio sessions and a focused listening experience.",stack:"Flutter · Dart · just_audio · audio_session"},
{title:"Pen Fight",type:"Game prototype · Flutter",copy:"A 2D physics-based pen-fighting prototype with aiming controls and tunable gameplay physics.",stack:"Flutter · Dart · Game physics"}
];
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const modal=document.querySelector("#project-modal");
document.querySelectorAll("[data-project]").forEach(card=>card.addEventListener("click",()=>{
 const p=projects[Number(card.dataset.project)]; if(!p||!modal)return;
 modal.querySelector("[data-modal-type]").textContent=p.type;
 modal.querySelector("[data-modal-title]").textContent=p.title;
 modal.querySelector("[data-modal-copy]").textContent=p.copy;
 modal.querySelector("[data-modal-stack]").textContent=p.stack;
 if(typeof modal.showModal==="function")modal.showModal();
}));
document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>modal?.close()));
modal?.addEventListener("click",e=>{if(e.target===modal)modal.close()});
