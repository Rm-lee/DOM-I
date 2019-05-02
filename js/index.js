const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

navCounter = 1;
let navl = document.querySelectorAll('nav a');
navl.forEach(element => {
  
   content = `nav-item-${navCounter}`;
   element.textContent = siteContent["nav"][content];
   element.style.color = 'green';
   navCounter = navCounter + 1;
});

let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

let h4 = document.querySelectorAll(".main-content h4");
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

let texts = document.querySelectorAll('p');
texts[0].textContent = siteContent['main-content']['features-content'];
texts[1].textContent = siteContent['main-content']['about-content'];
texts[2].textContent = siteContent['main-content']['services-content'];
texts[3].textContent = siteContent['main-content']['product-content'];
texts[4].textContent = siteContent['main-content']['vision-content'];

let midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];


let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

let copy = document.querySelector('footer p');
copy.textContent = siteContent['footer']['copyright'];

let navGit = document.createElement("a");
navGit.textContent = "Git";
navGit.style.color = "green";
let nav = document.querySelector('nav');


let navlink = document.createElement("a");
navlink.textContent = "Linked In";
navlink.style.color = "green";

nav.appendChild(navGit);
nav.prepend(navlink);

let hideShow = document.createElement("button");

hideShow.textContent = "Collapse Mid-Img";
hideShow.style.width = "50%";

let hidden = false;
hideShow.onclick = function(){
  
  if (hidden === false){
    midImg.style.display = "none";
    hidden = true;}

  else if (hidden === true){
    midImg.style.display = "block";
    hidden = false;
  }
};

let cta = document.querySelector('.cta-text');


cta.appendChild(hideShow);