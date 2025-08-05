const products = [
  { name: "Laptop", category: "electronics", price: 900, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 25, rating: 4.0 },
  { name: "Headphones", category: "electronics", price: 120, rating: 4.2 },
  { name: "Jeans", category: "clothing", price: 45, rating: 4.6 },
  { name: "Smartwatch", category: "electronics", price: 180, rating: 4.1 }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");

function renderProducts(list) {
  productContainer.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>
    `;
    productContainer.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sort = sortBy.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortBy.addEventListener("change", applyFilters);

// Initial render
renderProducts(products);
