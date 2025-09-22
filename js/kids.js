let currentIndex = 1;
var group1 = document.querySelectorAll(".products .group1");

function showGroup(index) {
  group1.forEach((e) => (e.style.display = "none"));


  btn1.classList.remove("active");


  if (index === 1) {
    group1.forEach((e) => (e.style.display = "grid"));
    btn1.classList.add("active");
  } 
}

arrowRight.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex++;
  if (currentIndex > 2) currentIndex = 1;
  showGroup(currentIndex);
});




btn1.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = 1;
  showGroup(currentIndex);
});


showGroup(currentIndex);
