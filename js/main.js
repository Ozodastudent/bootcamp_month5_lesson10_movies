const listEL = document.querySelector(".movies_list");
const templateEl = document.querySelector(".movies_template").content;
const moviesFragment = document.createDocumentFragment();
const slicedMovies = movies.slice(0, 100);
console.log(slicedMovies);
for (const element of slicedMovies) {
  const templateClone = templateEl.cloneNode(true);
  templateClone.querySelector(".movies_title").textContent = element.Title;
  templateClone.querySelector(".movies_fulltitle").textContent =
    element.fulltitle;
  templateClone.querySelector(".movies_year").textContent = element.movie_year;
  templateClone.querySelector(".movies_category").textContent =
    element.Categories;
  templateClone.querySelector(".movies_summary").textContent = element.summary;
  templateClone.querySelector(".movies_rating").textContent =
    element.imdb_rating;
  templateClone.querySelector(".movies_runtime").textContent = element.runtime;
  templateClone.querySelector(".movies_language").textContent =
    element.language;

  moviesFragment.appendChild(templateClone);
}
listEL.appendChild(moviesFragment);
