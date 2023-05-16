const fetchData = async (url) => {
  const response = await fetch("https://swapi.py4e.com/api/starships");
  const data = await response.json();
  console.log(data);
  return data.results;
};

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("div");
  container.className = "shipContainer";

  const model = document.createElement("h4");
  model.textContent = `${spaceship.name}`;
  model.style.marginRight = "10px";

  const cost = document.createElement("p");
  cost.textContent = `${spaceship.cost_in_credits} credits`;

  const manuName = document.createElement("p");
  manuName.textContent = `Manufactured by ${spaceship.manufacturer}`;
  manuName.className = "spaceship-manufacturer";

  const mas = document.createElement("p");
  mas.innerHTML = `<strong>${spaceship.max_atmosphering_speed}</strong> <p>Max atmosphering speed<p>`;
  mas.style.borderRight = "1px solid #000";
  mas.style.paddingRight = "10px";
  mas.style.display = "inline-block";

  const cargo_capacity = document.createElement("p");
  cargo_capacity.innerHTML = `<strong>${spaceship.cargo_capacity}</strong> <p>Cargo capacity</p>`;
  cargo_capacity.style.paddingLeft = "10px";
  cargo_capacity.style.display = "inline-block";

  const modelDiv = document.createElement("div");
  modelDiv.className = "spaceship-model";
  modelDiv.appendChild(model);
  modelDiv.appendChild(cost);

  const specsDiv = document.createElement("div");
  specsDiv.className = "spaceship-specs";
  specsDiv.style.display = "flex";
  specsDiv.style.alignItems = "center";

  specsDiv.appendChild(mas);
  specsDiv.appendChild(cargo_capacity);
  container.appendChild(modelDiv);
  container.appendChild(manuName);
  container.appendChild(specsDiv);
  return container;
};

const main = document.getElementsByTagName("main")[0];

const fetchDataFromApi = () => {
  const starshipsData = fetchData();
  return starshipsData;
};
const filterStarships = async (input) => {
  const data = await fetchDataFromApi();
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  return data.filter((ship) => ship.passengers < 10 && ship.crew > 1);
};

const reduceStarships = async (input) => {
  const data = await fetchDataFromApi();
  // Return a String of the cost to purchase all ships in the input array
  const total_Cost = data.reduce(
    (acc, ship) =>
      acc +
      (ship.cost_in_credits === "unknown" ? 0 : parseInt(ship.cost_in_credits)),
    0
  );
  return `Total cost to purchase all ships: ${total_Cost} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", async () => {
  const starships = await fetchData();
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", async () => {
  const filteredShips = await filterStarships();
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", async () => {
  const totalCost = await reduceStarships();
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = async (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
