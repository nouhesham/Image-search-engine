"strict";

const accesskey = "tOl8Uxm9V1pOa0R9A0BCY2ZRG8iBFURhxTFONDyvwCY";
const search_box = document.querySelector("#search-box");
const search_btn = document.querySelector("#search-btn");
const search_more = document.querySelector("#search-button-more");
const search_result = document.querySelector(".search-result");
const search_form = document.querySelector(".search-form");

let keyword = "";
let page = 1;
async function search() {
  keyword = search_box.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = keyword;

    search_result.appendChild(image);
  });
  search_more.style.display = "block";
  search_more.addEventListener("click", search);
}

search_form.addEventListener("submit", (e) => {
  search_result.innerHTML = " ";
  e.preventDefault();
  page = 1;
  search();
});
