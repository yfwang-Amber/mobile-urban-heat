const locations = [
  {
    city: "Sacramento",
    country: "United States",
    region: "North America",
    x: 16.25,
    y: 28.57,
    text: "Vehicle-based heat and humidity transects with repeated daytime and nighttime field context.",
  },
  {
    city: "Madison",
    country: "United States",
    region: "North America",
    x: 25.17,
    y: 26.07,
    text: "Mobile measurements across contrasting urban, lake-adjacent, and residential environments.",
  },
  {
    city: "Raleigh",
    country: "United States",
    region: "North America",
    x: 28.16,
    y: 30.12,
    text: "An expanding measurement site for testing the workflow in a warm, humid urban setting.",
  },
  {
    city: "New Haven",
    country: "United States",
    region: "North America",
    x: 29.74,
    y: 27.05,
    text: "A Connecticut field context for thinking about fine-scale urban heat and humidity patterns.",
  },
  {
    city: "Bridgeport",
    country: "United States",
    region: "North America",
    x: 29.67,
    y: 27.12,
    text: "A paired Connecticut city context for comparing urban form, coastal influence, and field logistics.",
  },
  {
    city: "Nagpur",
    country: "India",
    region: "Asia",
    x: 71.97,
    y: 38.25,
    text: "Field collaboration context for studying hot-season urban thermal environments.",
  },
  {
    city: "Mumbai",
    country: "India",
    region: "Asia",
    x: 70.24,
    y: 39.4,
    text: "A South Asian measurement context for humid-heat field observations.",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    region: "Asia",
    x: 75.11,
    y: 36.77,
    text: "A South Asian measurement context in a dense, warm, humid urban setting.",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    region: "Asia",
    x: 77.92,
    y: 42.36,
    text: "A Southeast Asian measurement context for urban heat and humidity.",
  },
  {
    city: "Lahore",
    country: "Pakistan",
    region: "Asia",
    x: 70.66,
    y: 32.49,
    text: "A South Asian measurement context for hot-season urban exposure.",
  },
  {
    city: "Barcelona",
    country: "Spain",
    region: "Europe",
    x: 50.6,
    y: 27.01,
    text: "A European field context for testing vehicle-mounted measurements in dense urban fabric.",
  },
  {
    city: "Warsaw",
    country: "Poland",
    region: "Europe",
    x: 55.84,
    y: 20.98,
    text: "A project location in the broader collaboration network.",
  },
  {
    city: "Berlin",
    country: "Germany",
    region: "Europe",
    x: 53.72,
    y: 20.82,
    text: "A project location in the broader collaboration network.",
  },
  {
    city: "Nanjing",
    country: "China",
    region: "Asia",
    x: 83,
    y: 32.19,
    text: "A project location in the broader collaboration network.",
  },
  {
    city: "Guangzhou",
    country: "China",
    region: "Asia",
    x: 81.46,
    y: 37.15,
    text: "A China measurement context for warm, humid urban conditions.",
  },
  {
    city: "Lanzhou",
    country: "China",
    region: "Asia",
    x: 78.84,
    y: 29.97,
    text: "A China measurement context for a different regional climate and urban form.",
  },
  {
    city: "Accra",
    country: "Ghana",
    region: "Africa",
    x: 49.95,
    y: 46.89,
    text: "A West African measurement context in the broader field network.",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    region: "Africa",
    x: 60.23,
    y: 50.72,
    text: "An East African measurement context in the broader field network.",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    region: "South America",
    x: 33.78,
    y: 69.22,
    text: "A South American measurement context in the broader field network.",
  },
];

const map = document.querySelector("#worldMap");
const nameEl = document.querySelector("#locationName");
const textEl = document.querySelector("#locationText");
const listEl = document.querySelector("#locationList");

function setActive(city) {
  const location = locations.find((item) => item.city === city);
  if (!location) return;

  nameEl.textContent = `${location.city}, ${location.country}`;
  textEl.textContent = location.text;

  document.querySelectorAll(".map-marker").forEach((marker) => {
    marker.classList.toggle("active", marker.dataset.city === city);
  });
  document.querySelectorAll(".location-list button").forEach((button) => {
    button.classList.toggle("active", button.dataset.city === city);
  });
}

locations.forEach((location) => {
  const marker = document.createElement("button");
  marker.className = "map-marker";
  marker.type = "button";
  marker.style.left = `${location.x}%`;
  marker.style.top = `${location.y}%`;
  marker.dataset.city = location.city;
  marker.dataset.region = location.region;
  marker.setAttribute("aria-label", `${location.city}, ${location.country}`);
  marker.addEventListener("click", () => setActive(location.city));
  map.appendChild(marker);

  const item = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.city = location.city;
  button.textContent = location.city;
  button.addEventListener("click", () => setActive(location.city));
  item.appendChild(button);
  listEl.appendChild(item);
});

setActive("Sacramento");
