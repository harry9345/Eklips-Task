let cookieBarDiv = document.getElementById("cookieBar");
let cookieBtn = document.getElementById("cookieBtn");
let searchBarDiv = document.getElementById("searchBar");
let magnifireIcon = document.getElementById("magnifire");

cookieBtn.addEventListener("click", function () {
  cookieBarDiv.remove();
  console.log("click");
});

let showSearch = false;
searchBarDiv.style.display = "none";
magnifireIcon.addEventListener("click", function () {
  showSearch = !showSearch;
  if (showSearch) {
    searchBarDiv.style.display = "block";
    magnifireIcon.classList.add("magnifireDiv");
    console.log(" show");
  } else {
    searchBarDiv.style.display = "none";
    magnifireIcon.classList.remove("magnifireDiv");
    console.log("do not show");
  }
});
