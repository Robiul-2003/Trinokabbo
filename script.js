function openMenu(){
  document.getElementById("menuBox").style.display = "flex";
}

function closeMenu(){
  document.getElementById("menuBox").style.display = "none";
}

function osearch(){
  document.getElementById("search").style.display = "flex";
}

function closesearch(){
  document.getElementById("search").style.display = "none";
}

function opencart(){
  document.getElementById("oneCard").style.display = "flex";
}

function closecard(){
  document.getElementById("oneCard").style.display = "none";
}
function collections() {
  document.getElementById("collec").style.display = "flex";
}

function colleclose() {
  document.getElementById("collec").style.display = "none";
}

/*search Product */
function searchProduct(){
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.querySelectorAll(".hp");

  products.forEach(function(product){
    let name = product.getAttribute("data-name") || "";

    name = name.toLowerCase();

    if(name.includes(input)){
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
}

/* ✅ THIS MUST BE OUTSIDE ANY FUNCTION */
let hasRun = false;

const footer = document.querySelector(".footer");

function startCount() {
  let counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;

    let speed = target / 100;
    if (speed < 1) speed = 1; // 🔥 fix for small numbers

    let interval = setInterval(() => {
      count += speed;

      if (count >= target) {
        counter.innerText = target;
        clearInterval(interval);
      } else {
        counter.innerText = Math.floor(count);
      }
    }, 20);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasRun) {
      hasRun = true;
      startCount();
    }
  });
}, {
  threshold: 0.5
});

observer.observe(footer);


function goPage(url, page){
  localStorage.setItem("activePage", page);
  window.location.href = url;
}

