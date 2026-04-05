document.addEventListener("DOMContentLoaded", function () {
  //tìm sản phẩm
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    const products = JSON.parse(localStorage.getItem("products")) || [];

    if (!keyword) {
      searchResults.style.display = "none";
      return;
    }

    const result = products
      .filter((p) =>
        (p.name + p.brand + p.category + p.subCategory)
          .toLowerCase()
          .includes(keyword),
      )
      .slice(0, 3);

    searchResults.innerHTML = "";

    result.forEach((product) => {
      const item = document.createElement("div");
      item.className = "search-item";

      item.innerHTML = `
       <img class="search-img" src="${product.images?.[0] || ""}">
       <div class="search-info">
         <div class="search-name">${product.name}</div>
         <div class="search-price">${product.price.toLocaleString("vi-VN")}đ</div>
       </div>
      `;

      item.onclick = () => {
        goToDetail(product.id);
      };

      searchResults.appendChild(item);
    });

    searchResults.style.display = result.length ? "block" : "none";
  });

  const products = JSON.parse(localStorage.getItem("products")) || [];

  function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
  }

  function createProductCard(product) {
    function formatPrice(price) {
      return price ? price.toLocaleString("vi-VN") + "đ" : "";
    }

    let specsHTML = "";

    if (product.highlightSpecs) {
      const specsArray = Object.entries(product.highlightSpecs)
        .filter(([key, value]) => value)
        .slice(0, 3);

      if (specsArray.length > 0) {
        specsHTML = `
        <div class="specs-gray-box">
          <div class="spec-line">
            ${specsArray
              .map(([key, value]) => `<span>${value}</span>`)
              .join("")}
          </div>
        </div>
      `;
      }
    }

    return `
    <div class="my-card" onclick="goToDetail(${product.id})">

      <div class="card-img-box">
        <img src="${product.images?.[0] || ""}" alt="${product.name}">
      </div>

      <div class="card-details">

        <div class="card-title">
          ${product.name}
        </div>

        ${specsHTML}

        <div class="price-section">
          ${
            product.oldPrice
              ? `<div class="p-old">${formatPrice(product.oldPrice)}</div>`
              : ""
          }

          <div>
            <span class="p-new">${formatPrice(product.price)}</span>
            ${
              product.discount
                ? `<span class="p-badge">${product.discount}</span>`
                : ""
            }
          </div>
        </div>

      </div>
    </div>
  `;
  }

  function renderProducts(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = list.map(createProductCard).join("");
  }

  // phân loại

  const laptopGaming = products.filter(
    (p) => p.category === "laptop" && p.subCategory === "gaming",
  );

  const laptopOffice = products.filter(
    (p) => p.category === "laptop" && p.subCategory !== "gaming",
  );

  const pcList = products.filter((p) => p.category === "pc");

  const mouseList = products.filter((p) => p.category === "mouse");

  const keyboardList = products.filter((p) => p.category === "keyboard");

  const monitorList = products.filter((p) => p.category === "monitor");

  // ===== RENDER =====

  renderProducts(laptopGaming, "laptop_grid_list");
  renderProducts(laptopOffice, "laptop_grid_list_2");
  renderProducts(pcList, "grid_list_pc");
  renderProducts(mouseList, "grid_list_mouse");
  renderProducts(keyboardList, "grid_list_kb");
  renderProducts(monitorList, "grid_list_monitor");
});

function renderHomeTechNews() {
  const news = JSON.parse(localStorage.getItem("news")) || [];

  // Lọc tin công nghệ
  const techNews = news
    .filter((item) => item.category === "congnghe")
    .slice(0, 4);

  const container = document.getElementById("home-tech-news");
  if (!container) return;

  container.innerHTML = techNews
    .map(
      (item) => `
    <div class="news-card">
      <a href="pages/newsDetail.html?id=${item.id}" class="news-thumb">
        <img style="height: 200px" src="${item.image}" alt="${item.title}">
        <span class="news-tag">
          ${formatCategory(item.category)}
        </span>
      </a>
      <div class="news-content">
        <a href="pages/newsDetail.html?id=${item.id}" class="news-title">
          ${item.title}
        </a>
      </div>
    </div>
  `,
    )
    .join("");
}

function formatCategory(category) {
  if (category === "congnghe") return "Tin công nghệ";
  if (category === "thuthuat") return "Thủ thuật - Giải đáp";
  return "Tin tức";
}

function setupCarousel(prevBtnId, nextBtnId, gridId) {
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const grid = document.getElementById(gridId);

  if (!prevBtn || !nextBtn || !grid) return;

  const scrollAmount = 300;

  nextBtn.addEventListener("click", () => {
    grid.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    grid.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
}

setupCarousel("btnLaptopPrev", "btnLaptopNext", "laptop_grid_list");

setupCarousel("btnLaptopPrev_2", "btnLaptopNext_2", "laptop_grid_list_2");

setupCarousel("btnPrev_pc", "btnNext_pc", "grid_list_pc");

setupCarousel("btnPrev_mouse", "btnNext_mouse", "grid_list_mouse");

setupCarousel("btnPrev_kb", "btnNext_kb", "grid_list_kb");

setupCarousel("btnPrev_monitor", "btnNext_monitor", "grid_list_monitor");

document.addEventListener("DOMContentLoaded", function () {
  renderHomeTechNews();
});
