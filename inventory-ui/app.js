const apiBase = "http://localhost:5000";

document.getElementById("loadBtn").addEventListener("click", loadItems);
document.getElementById("addBtn").addEventListener("click", addRandomItem);

async function loadItems() {
  const res = await fetch(`${apiBase}/api/items`);
  const data = await res.json();

  const container = document.getElementById("inventory");
  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    const img = document.createElement("img");
    img.src = randomImage();
    img.alt = item.name;

    const name = document.createElement("div");
    name.className = "item-name";
    name.textContent = item.name;

    const qty = document.createElement("div");
    qty.textContent = `Quantity: ${item.qty}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(qty);
    container.appendChild(card);
  });
}

async function addRandomItem() {
  const names = ["Laptop", "Keyboard", "Monitor", "Mouse", "Cable", "Adapter"];
  const name = names[Math.floor(Math.random() * names.length)];
  const qty = Math.floor(Math.random() * 20) + 1;

  await fetch(`${apiBase}/api/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, qty })
  });

  loadItems();
}

function randomImage() {
  const imgs = [
    "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    "https://cdn-icons-png.flaticon.com/512/2037/2037718.png",
    "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    "https://cdn-icons-png.flaticon.com/512/891/891462.png"
  ];
  return imgs[Math.floor(Math.random() * imgs.length)];
}