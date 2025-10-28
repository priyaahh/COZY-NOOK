const flowers = [
  {id: 1, name: "Rose", cost: 5, img: "rose.jpg"},
  {id: 2, name: "Lily", cost: 6, img: "lily.jpg"},
  {id: 3, name: "Tulip", cost: 4, img: "tulip.jpg"},
  {id: 4, name: "Sunflower", cost: 7, img: "sunflower.jpg"},
  {id: 5, name: "Orchid", cost: 8, img: "orchid.jpg"},
  {id: 6, name: "Daisy", cost: 3, img: "daisy.jpg"},
];

const wrappings = [
  {id: 1, name: "Classic White", cost: 2, img: "wrap_white.jpg"},
  {id: 2, name: "Rustic Brown", cost: 3, img: "wrap_brown.jpg"},
  {id: 3, name: "Floral Print", cost: 4, img: "wrap_floral.jpg"},
];

let coins = 30;
let bouquet = [];
let selectedWrapping = null;

const flowersGrid = document.getElementById("flowersGrid");
const selectedFlowers = document.getElementById("selectedFlowers");
const wrappingGrid = document.getElementById("wrappingGrid");
const costSummary = document.getElementById("costSummary");
const confirmBtn = document.getElementById("confirmBtn");

function renderFlowers() {
  flowersGrid.innerHTML = "";
  flowers.forEach(flower => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
      <img src="${flower.img}" alt="${flower.name}" />
      <div class="flower-name">${flower.name}</div>
      <div class="coin-cost">${flower.cost} coins</div>
    `;
    card.onclick = () => selectFlower(flower.id);
    flowersGrid.appendChild(card);
  });
}

function renderBouquet() {
  selectedFlowers.innerHTML = "";
  bouquet.forEach((flower, index) => {
    const flowerDiv = document.createElement("div");
    flowerDiv.className = "selected-flower";
    flowerDiv.title = "Click to remove";
    flowerDiv.onclick = () => removeFlower(index);
    flowerDiv.innerHTML = `
      <img src="${flower.img}" alt="${flower.name}" />
      ${flower.name}
    `;
    selectedFlowers.appendChild(flowerDiv);
  });
}

function renderWrappings() {
  wrappingGrid.innerHTML = "";
  wrappings.forEach(wrap => {
    const img = document.createElement("img");
    img.className = "wrapping-option" + (selectedWrapping && selectedWrapping.id === wrap.id ? " selected" : "");
    img.src = wrap.img;
    img.alt = wrap.name;
    img.title = `${wrap.name} - ${wrap.cost} coins`;
    img.onclick = () => selectWrapping(wrap.id);
    wrappingGrid.appendChild(img);
  });
}

function updateCostSummary() {
  let flowersCost = bouquet.reduce((sum, f) => sum + f.cost, 0);
  let wrappingCost = selectedWrapping ? selectedWrapping.cost : 0;
  let totalSpent = flowersCost + wrappingCost;
  let coinsLeft = 30 - totalSpent;
  costSummary.textContent = `Coins Left: ${coinsLeft >= 0 ? coinsLeft : 0} (Spent: ${totalSpent})`;
  confirmBtn.disabled = bouquet.length === 0 || coinsLeft < 0;
}

function selectFlower(id) {
  const flower = flowers.find(f => f.id === id);
  let flowersCost = bouquet.reduce((sum, f) => sum + f.cost, 0);
  let wrappingCost = selectedWrapping ? selectedWrapping.cost : 0;
  if (flowersCost + wrappingCost + flower.cost <= 30) {
    bouquet.push(flower);
    renderBouquet();
    updateCostSummary();
  } else {
    alert("Not enough coins. Choose another flower or wrapping.");
  }
}

function removeFlower(index) {
  bouquet.splice(index, 1);
  renderBouquet();
  updateCostSummary();
}

function selectWrapping(id) {
  const wrap = wrappings.find(w => w.id === id);
  let flowersCost = bouquet.reduce((sum, f) => sum + f.cost, 0);
  if (flowersCost + wrap.cost <= 30) {
    selectedWrapping = wrap;
    renderWrappings();
    updateCostSummary();
  } else {
    alert("Not enough coins for this wrapping.");
  }
}

confirmBtn.onclick = () => {
  alert(`Order placed! You chose ${bouquet.length} flowers with wrapping "${selectedWrapping ? selectedWrapping.name : 'None'}".`);
  bouquet = [];
  selectedWrapping = null;
  renderBouquet();
  renderWrappings();
  updateCostSummary();
};

renderFlowers();
renderBouquet();
renderWrappings();
updateCostSummary();
