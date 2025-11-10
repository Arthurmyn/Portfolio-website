const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("table-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-table");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-table");
}


const skillsSection = document.querySelector('.skills');

skillsSection.addEventListener('mouseover', () => {
  document.querySelector('.html').style.width = '60%';
  document.querySelector('.css').style.width = '50%';
  document.querySelector('.js').style.width = '20%';
  document.querySelector('.react').style.width = '5%';
});

skillsSection.addEventListener('mouseleave', () => {
  document.querySelector('.html').style.width = '0%';
  document.querySelector('.css').style.width = '0%';
  document.querySelector('.js').style.width = '0%';
  document.querySelector('.react').style.width = '0%';
});

let visits = localStorage.getItem('visits');
visits++;

localStorage.setItem('visits', visits);
console.log(`You have visited this page ${visits} times`);
