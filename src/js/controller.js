//########## ELEMENTS #############//
const modeToggle = document.querySelector("#mode-toggle");
const bodyElement = document.querySelector("body");
const errorMessage = document.querySelector(".search-bar__alert");
const searchButton = document.querySelector(".search-bar__btn");
const inputField = document.querySelector(".search-bar__input");
const resultCard = document.querySelector(".result-card");

const state = {
  mode: "light",
  switchTo: "light",
};

let model = {};

// ######### EVENT LISTENERS ############
modeToggle.addEventListener("click", function () {
  // console.log("Light/Dark Mode Toggle!");
  // console.log(bodyElement);

  //
  if (!bodyElement.dataset.theme) {
    bodyElement.dataset.theme = "dark";
    modeToggle.dataset.theme = "dark";
    state.mode = "dark";
    state.switchTo = "light";
  } else {
    delete bodyElement.dataset.theme;
    delete modeToggle.dataset.theme;
    state.mode = "light";
    state.switchTo = "dark";
  }

  updateToggleElement();
});

searchButton.addEventListener("click", (e) => {
  if (!inputField.value) {
    displayError();
    throw new Error("EMPTY SEARCH!");
  }

  searchGithub(inputField.value);
});
// ##### FUNCTIONS ###########

// %%%%% Nav bar View Functions %%%%%

function updateToggleElement() {
  // console.log(state.switchModeTo);

  const html = `
  <h4 class="nav__toggle--mode">${state.switchTo}</h4>
        <svg class="nav__toggle--icon" viewBox="0 0 20 20">
          <path
            d="${
              state.mode == "light"
                ? "M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
                : "M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"
            }"
            fill-rule="nonzero"
          />
        </svg>
  `;
  modeToggle.innerHTML = "";
  modeToggle.insertAdjacentHTML("afterbegin", html);
}

// %%%% Search Bar View Functions %%%%%
function displayError() {
  errorMessage.classList.remove("hide");
}
function clearError() {
  errorMessage.classList.add("hide");
}

// %%%%%%% Result Card View Functions %%%%%%%

function formatJoinedDate(time) {
  const date = new Date(time);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function renderUserData(data) {
  //Initiate Shadow DOM
  resultCard.attachShadow({ mode: "open" });

  const avatar = `<img src="${data["avatar_url"]} class="result-card__avatar" />`;

  // Need to add div.result-card__info when compiling
  const title = `
    <div class="result-card__dev-title">
          <div class="result-card__dev-title--name">
            <h1>${data.name ? data.name : data.login}</h1>
            <p>@${data.login}</p>
          </div>
          <p class="result-card__dev-title--date">Joined ${formatJoinedDate(
            data["created_at"]
          )}</p>
    </div>
  `;

  const about = ``;
  const stats = ``;
  const links = ``;

  const compiledHTML = `
    ${avatar}
    <div class="result-card__info">
     ${title}
     ${about}    
     ${stats} 
     ${links}
    </div>
  `;
}

//%%%%% Model Functions %%%%%%%%%
async function searchGithub(searchParam) {
  const url = `https://api.github.com/users/${searchParam}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Github Status Response: ${response.status}`);
    }

    const data = await response.json();

    model = Object.fromEntries(
      [
        "login",
        "avatar_url",
        "html_url",
        "name",
        "company",
        "blog",
        "location",
        "bio",
        "twitter_username",
        "public_repos",
        "followers",
        "following",
        "created_at",
      ].map((key) => [key, data[key]])
    );

    clearError();
  } catch (error) {
    console.log(error);
    displayError();
  }
}
