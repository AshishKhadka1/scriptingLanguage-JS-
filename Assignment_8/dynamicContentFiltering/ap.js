const products = [
    { name: "Smartphone", category: "electronics", price: 299 },
    { name: "Laptop", category: "electronics", price: 799 },
    { name: "T-Shirt", category: "clothing", price: 25 },
    { name: "Jeans", category: "clothing", price: 50 },
    { name: "Book", category: "books", price: 15 },
];

// Function to display products
function displayProducts(category, priceRange) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";

    // Filter products based on category and price
    const filteredProducts = products.filter(product => {
        if (category !== "all" && product.category !== category) {
            return false;
        }
        if (priceRange !== "all") {
            const [minPrice, maxPrice] = priceRange.split("-").map(Number);
            return product.price >= minPrice && product.price <= maxPrice;
        }
        return true;
    });

    // Display filtered products
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Event listener for filter selection
document.getElementById("category").addEventListener("change", updateProducts);
document.getElementById("price").addEventListener("change", updateProducts);

// Function to update products based on filter selection
function updateProducts() {
    const selectedCategory = document.getElementById("category").value;
    const selectedPriceRange = document.getElementById("price").value;
    displayProducts(selectedCategory, selectedPriceRange);
}

// Display all products initially
displayProducts("all", "all");
