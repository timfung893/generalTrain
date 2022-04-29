// form
const form = document.querySelector(".form-data");
const region = document.querySelector(".region-name");
const apiKey = document.querySelector(".api-key");

// result

const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const results = document.querySelector(".result-container");
const usage = document.querySelector(".carbon-usage");
const fossilFuel = document.querySelector(".fossil-fuel");
const myRegion = document.querySelector(".my-region");
const clearBtn = document.querySelector(".clear-btn");

calculateColor = async (value) => {
  let co2Scale = [0, 150, 600, 750, 800];
  let colors = ["#2AA364", "#F5EB4D", "#9E4229", "#381D02", "#381D02"];

  let closestNum = co2Scale.sort((a, b) => {
    return Math.abs(a - value) - Math.abs(b - value);
  })[0];

  let num = (element) => element > closestNum;
  let scaleIndex = co2Scale.findIndex(num);

  let closestColor = colors[scaleIndex];

  chrome.runtime.sendMessage({
    action: "updateIcon",
    value: { color: closestColor },
  });
};

// get API

import axios from "../node_modules/axios";

async function displayCarbonUsage(apiKey, region) {
  try {
    await axios
      .get("https://api.co2signal.com/v1/latest", {
        params: {
          countryCode: region,
        },
        headers: {
          "auth-token": apiKey,
        },
      })
      .then((response) => {
        let CO2 = Math.floor(response.data.data.carbonIntensity);

        calculateColor(CO2);

        loading.style.display = "none";
        form.style.display = "none";
        myRegion.textContent = region;
        usage.textContent = Math.round(
          response.data.data.carbonIntensity +
            " grams (grams C02 emitted per kilowatt hour"
        );
        fossilFuel.textContent =
          response.data.data.fossilFuelPercentage.toFixed(2) +
          "% (percentage of fossil fuels used to generate electricity)";
        results.style.display = "block";
      });
  } catch (error) {
    console.log(error);
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent =
      "Sorry, we have no data for the region you have requested.";
  }
}

// set up api key and region

function setUpUser(apiKey, region) {
  localStorage.setItem("apiKey", apiKey);
  localStorage.setItem("region", region);
  loading.style.display = "block";
  errors.textContent = "";
  clearBtn.style.display = "block";
  //   make initial call
  displayCarbonUsage(apiKey, region);
}

// handle form

function handleSubmit(e) {
  e.preventDefault();
  setUpUser(apiKey.value, region.value);
}

// initial checks

function init() {
  // pick up what is in localStorage, if any

  const storedApiKey = localStorage.getItem("apiKey");
  const storedRegion = localStorage.getItem("region");

  // set icon to be generic green

  chrome.runtime.sendMessage({
    action: "updateIcon",
    value: {
      color: "green",
    },
  });

  if (storedApiKey === null || storedRegion === null) {
    //   If no keys, show the form

    form.style.display = "block";
    results.style.display = "none";
    loading.style.display = "none";
    clearBtn.style.display = "none";
    errors.textContent = "";
  } else {
    //  if there are saved keys/regions, show results
    displayCarbonUsage(storedApiKey, storedRegion);
    results.style.display = "block";
    form.style.display = "none";
    clearBtn.style.display = "block";
  }
}

function reset(e) {
  e.preventDefault;
  // clear local storage for region

  localStorage.removeItem("region");
  init();
}

form.addEventListener("submit", (e) => handleSubmit(e));
clearBtn.addEventListener("click", (e) => reset(e));
init();
