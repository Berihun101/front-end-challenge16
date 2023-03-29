const features=document.querySelector(".features")
const featuresDropdown=document.querySelector(".features-dropdown")
const upIcon=document.querySelector('.up')
const downIcon=document.querySelector('.down')
const upIconOffcanvas=document.querySelector('.up-offcanvas')
const downIconOffcanvas=document.querySelector('.down-offcanvas')
const company=document.querySelector(".company")
const companyDropdown=document.querySelector(".company-dropdown")
const upCompanyIcon=document.querySelector('.up-company')
const downCompanyIcon=document.querySelector('.down-company')
const hamburger = document.querySelector('.hamburger');
const offcanvas = document.querySelector('.offcanvas');
const closeBtn = document.querySelector('.close-btn');
const featuresOffcanvas=document.querySelector(".features-offcanvas")
const featuresDropdownOffcanvas=document.querySelector(".features-dropdown-offcanvas")

let clicked=false;
let comanyClicked=false;
features.addEventListener("click", function(){
  clicked=!clicked;
  if(clicked){
    comanyClicked=false;
    featuresDropdown.style.display='block';
    upIcon.style.display="block";
    downIcon.style.display="none";
    companyDropdown.style.display='none';
    upCompanyIcon.style.display="none";
    downCompanyIcon.style.display="block";
  }
  else {
    featuresDropdown.style.display='none';
    upIcon.style.display="none";
    downIcon.style.display="block";
  }


})

company.addEventListener("click", function(){
  comanyClicked=!comanyClicked;
  if(comanyClicked){
    clicked=false;
    companyDropdown.style.display='flex';
    upCompanyIcon.style.display="block";
    downCompanyIcon.style.display="none";
    featuresDropdown.style.display='none';
    upIcon.style.display="none";
    downIcon.style.display="block";
  }
  else{
    companyDropdown.style.display='none';
    upCompanyIcon.style.display="none";
    downCompanyIcon.style.display="block";
  }


})
document.addEventListener('click', function(event){
  if(!company.contains(event.target)){
    comanyClicked=false;
    companyDropdown.style.display='none';
    upCompanyIcon.style.display="none";
    downCompanyIcon.style.display="block";
  }
  if(!features.contains(event.target)){
    clicked=false;
    featuresDropdown.style.display='none';
    upIcon.style.display="none";
    downIcon.style.display="block";
  }
})

hamburger.addEventListener('click', () => {
  offcanvas.style.display='flex';
  hamburger.classList.toggle('open');
  offcanvas.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  hamburger.classList.remove('open');
  offcanvas.classList.remove('open');
});

let featuresOffcanvasClicked=false;
featuresOffcanvas.addEventListener('click', function(){
featuresOffcanvasClicked=!featuresOffcanvasClicked;
if(featuresOffcanvasClicked){
featuresDropdownOffcanvas.style.display='block'
upIconOffcanvas.style.display="block";
downIconOffcanvas.style.display="none";
}
else{
  featuresDropdownOffcanvas.style.display='none'
  upIconOffcanvas.style.display="none";
  downIconOffcanvas.style.display="block";
}
})
