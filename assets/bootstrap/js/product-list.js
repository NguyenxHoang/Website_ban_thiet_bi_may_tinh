// LẤY DANH SÁCH SẢN PHẨM
const products = JSON.parse(localStorage.getItem("products")) || [];

// Container chứa list sản phẩm
const productContainer = document.querySelector("#productList");

function renderProducts(data) {
  if (!productContainer) return;

  productContainer.innerHTML = "";

  data.forEach((product) => {
    const productHTML = `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="product-item-card">

          <div class="product-img">
            <img src="${product.images[0]}" alt="${product.name}">
          </div>

          <div class="product-info">
            <div class="related-name">${product.name}</div>
            <div class="related-price">${product.price.toLocaleString()}đ</div>
          </div>

          <div class="product-actions">
            <button class="btn-detail"
              onclick="goToDetail('${product.id}')">
              Xem chi tiết
            </button>

            <button class="btn-cart"
              onclick="addToCart(${product.id})">
              Thêm vào giỏ hàng
            </button>
          </div>

        </div>
      </div>
    `;

    productContainer.innerHTML += productHTML;
  });
}

renderProducts(products);

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProducts");
  const featured = products.slice(0, 10);

  container.innerHTML = featured
    .map(
      (product) => `
    <div class="slider-item">
      <div class="product-card">
          <div class="product-img">
              <img src="${product.images[0]}" alt="${product.name}">
          </div>

          <div class="product-info">
              <h6 class="product-name">${product.name}</h6>
              <p class="product-price">${product.price.toLocaleString()} đ</p>

              <div class="product-actions">
                  <button class="btn-add" onclick="addToCart(${product.id})">
                      Thêm vào giỏ
                  </button>

                  <a href="pc-detail.html?id=${product.id}" class="btn-detail">
                      Xem chi tiết
                  </a>
              </div>
          </div>
      </div>
    </div>
  `,
    )
    .join("");
}

renderFeaturedProducts();

let currentSlide = 0;
const itemsPerView = 5;

document.querySelector(".next").addEventListener("click", () => {
  slide(1);
});

document.querySelector(".prev").addEventListener("click", () => {
  slide(-1);
});

function slide(direction) {
  const track = document.getElementById("featuredProducts");
  const totalItems = products.slice(0, 10).length;
  const maxSlide = totalItems - itemsPerView;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  track.style.transform = `translateX(-${currentSlide * 25}%)`;
}

// Lọc
const sortSelect = document.getElementById("sortSelect");

if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    let sorted = [...products];

    switch (this.value) {
      case "asc":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "desc":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        // nếu id = Date.now() thì cái này chính là mới nhất
        break;

      default:
        sorted = [...products];
    }

    renderProducts(sorted);
  });
}

// Bộ lọc sản phẩm
let currentFilters = {
  categories: [],
  priceRange: null,
  ratings: [],
  customPriceMin: null,
  customPriceMax: null,
};

function getSelectedCategories() {
  const checkboxes = document.querySelectorAll(
    'input[name="category"]:checked',
  );
  return Array.from(checkboxes).map((cb) => cb.value);
}

function getSelectedPriceRange() {
  const radio = document.querySelector('input[name="price"]:checked');
  return radio ? radio.value : null;
}

function getCustomPriceRange() {
  const minInput = document.querySelector('.price-input[placeholder="Từ"]');
  const maxInput = document.querySelector('.price-input[placeholder="Đến"]');
  const min =
    minInput && minInput.value ? parseInt(minInput.value) * 1000000 : null;
  const max =
    maxInput && maxInput.value ? parseInt(maxInput.value) * 1000000 : null;
  return { min, max };
}

function getSelectedRatings() {
  const checkboxes = document.querySelectorAll('input[name="rating"]:checked');
  return Array.from(checkboxes).map((cb) => parseInt(cb.value));
}

function applyFilters() {
  currentFilters.categories = getSelectedCategories();
  currentFilters.priceRange = getSelectedPriceRange();
  currentFilters.ratings = getSelectedRatings();
  const customPrice = getCustomPriceRange();
  currentFilters.customPriceMin = customPrice.min;
  currentFilters.customPriceMax = customPrice.max;

  let filteredProducts = [...products];

  // Lọc theo danh mục
  if (currentFilters.categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return currentFilters.categories.some((cat) => {
        if (cat === "laptop-van-phong") {
          return (
            product.category === "laptop" && product.subCategory === "vanphong"
          );
        } else if (cat === "laptop-gaming") {
          return (
            product.category === "laptop" && product.subCategory === "gaming"
          );
        } else {
          return product.category === cat;
        }
      });
    });
  }

  // Lọc theo khoảng giá
  if (
    currentFilters.priceRange ||
    currentFilters.customPriceMin !== null ||
    currentFilters.customPriceMax !== null
  ) {
    filteredProducts = filteredProducts.filter((product) => {
      let minPrice, maxPrice;

      if (
        currentFilters.customPriceMin !== null ||
        currentFilters.customPriceMax !== null
      ) {
        minPrice = currentFilters.customPriceMin;
        maxPrice = currentFilters.customPriceMax;
      } else {
        switch (currentFilters.priceRange) {
          case "under5":
            minPrice = 0;
            maxPrice = 5000000;
            break;
          case "5-10":
            minPrice = 5000000;
            maxPrice = 10000000;
            break;
          case "10-15":
            minPrice = 10000000;
            maxPrice = 15000000;
            break;
          case "15-20":
            minPrice = 15000000;
            maxPrice = 20000000;
            break;
          case "20-30":
            minPrice = 20000000;
            maxPrice = 30000000;
            break;
          case "over30":
            minPrice = 30000000;
            maxPrice = Infinity;
            break;
          default:
            return true;
        }
      }

      return (
        (minPrice === null || product.price >= minPrice) &&
        (maxPrice === null || product.price <= maxPrice)
      );
    });
  }

  // Lọc theo đánh giá
  if (currentFilters.ratings.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      currentFilters.ratings.some((rating) => product.rating >= rating),
    );
  }

  renderProducts(filteredProducts);
}

function clearFilters() {
  // Reset checkboxes
  document
    .querySelectorAll('input[name="category"]:checked')
    .forEach((cb) => (cb.checked = false));
  document
    .querySelectorAll('input[name="rating"]:checked')
    .forEach((cb) => (cb.checked = false));

  // Reset radio
  document
    .querySelectorAll('input[name="price"]:checked')
    .forEach((radio) => (radio.checked = false));

  // Reset custom price
  document
    .querySelectorAll(".price-input")
    .forEach((input) => (input.value = ""));

  // Reset filters
  currentFilters = {
    categories: [],
    priceRange: null,
    ratings: [],
    customPriceMin: null,
    customPriceMax: null,
  };

  renderProducts(products);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Category checkboxes
  document.querySelectorAll('input[name="category"]').forEach((cb) => {
    cb.addEventListener("change", applyFilters);
  });

  // Price radio buttons
  document.querySelectorAll('input[name="price"]').forEach((radio) => {
    radio.addEventListener("change", applyFilters);
  });

  // Rating checkboxes
  document.querySelectorAll('input[name="rating"]').forEach((cb) => {
    cb.addEventListener("change", applyFilters);
  });

  // Custom price apply button
  const applyPriceBtn = document.querySelector(".btn-apply-price");
  if (applyPriceBtn) {
    applyPriceBtn.addEventListener("click", applyFilters);
  }

  // Apply filter button
  const applyFilterBtn = document.querySelector(".btn-apply-filter");
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", applyFilters);
  }

  // Clear filter button
  const clearFilterBtn = document.querySelector(".btn-clear-filter");
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", clearFilters);
  }

  // Filter section toggles
  document.querySelectorAll(".filter-section-header").forEach((header) => {
    header.addEventListener("click", function () {
      const body = this.nextElementSibling;
      const icon = this.querySelector(".icon-chevron");
      if (body.style.display === "none" || !body.style.display) {
        body.style.display = "block";
        icon.textContent = "▲";
      } else {
        body.style.display = "none";
        icon.textContent = "▼";
      }
    });
  });
});
