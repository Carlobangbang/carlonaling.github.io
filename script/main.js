import { topNav } from "./top-nav.js";
import { aboutFunctionality } from "./about.js";
import { servicesFunctionality } from "./services.js";
import { projectFuntionality } from "./projects.js";

topNav();
aboutFunctionality();
servicesFunctionality();
projectFuntionality();


const nextButton = document.querySelector('.next-button');
const landingContent = document.querySelector('.landing-content');
const mainContent = document.querySelector('main');

nextButton.addEventListener('click', ()=> {
  landingContent.style.display = 'none';
  mainContent.style.display = 'flex';
  document.body.style.backgroundColor = 'var(--neutral-color)';
  document.body.style.animation = 'scale-up 0.6s linear forwards'
})


const showMoreDetailBtn = document.querySelector('.show-more-detail-btn');
const sectionContainer = document.querySelector('.section-container');

showMoreDetailBtn.addEventListener('click', ()=> {
  showMoreDetailBtn.style.display = 'none';
  sectionContainer.style.display = 'block';

});


const copyright = `&copy;${new Date().getFullYear()} Mark Carlo Naling. All rights reserved`;
document.querySelector('footer .copyright-txt').innerHTML = copyright;