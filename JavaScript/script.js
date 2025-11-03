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
