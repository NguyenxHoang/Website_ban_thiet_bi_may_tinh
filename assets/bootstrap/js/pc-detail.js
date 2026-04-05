// LẤY ID SẢN PHẨM TỪ URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id")) || 1;

// LẤY DANH SÁCH SẢN PHẨM
const products = productsData;
const product = products.find((p) => p.id === productId);

if (!product) {
  alert("Không tìm thấy sản phẩm");
  window.location.href = "../index.html";
}

// RENDER THÔNG TIN CƠ BẢN
document.querySelector(".product-title").innerText = product.name;

document.querySelector(".price-current").innerText =
  product.price.toLocaleString("vi-VN") + " ₫";

document.querySelector(".price-old").innerText =
  product.oldPrice.toLocaleString("vi-VN") + " ₫";

document.querySelector(".discount-label").innerText = product.discount;

// RENDER RATING
const ratingContainer = document.querySelector(".product-rating");
if (ratingContainer) {
  ratingContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    ratingContainer.innerHTML +=
      i <= product.rating
        ? `<i class="fa-solid fa-star text-warning"></i>`
        : `<i class="fa-regular fa-star text-warning"></i>`;
  }
}

// RENDER ẢNH
const mainImg = document.getElementById("mainImg");
const thumbs = document.querySelectorAll(".thumb-item");

mainImg.src = product.images[0];

thumbs.forEach((img, index) => {
  if (product.images[index]) {
    img.src = product.images[index];
  }
});

// dùng cho fullscreen
const imageList = product.images;
let currentIndex = 0;

// CHUYỂN ẢNH
function changeImg(element) {
  mainImg.src = element.src;

  thumbs.forEach((img) => img.classList.remove("active"));
  element.classList.add("active");

  currentIndex = [...thumbs].indexOf(element);
}

// FULLSCREEN ẢNH
function openFullscreen() {
  const modal = document.getElementById("fullscreenModal");
  const fullImg = document.getElementById("fullscreenImg");

  currentIndex = imageList.indexOf(mainImg.src);
  fullImg.src = mainImg.src;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeFullscreen() {
  document.getElementById("fullscreenModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function nextImg() {
  currentIndex = (currentIndex + 1) % imageList.length;
  document.getElementById("fullscreenImg").src = imageList[currentIndex];
}

function prevImg() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  document.getElementById("fullscreenImg").src = imageList[currentIndex];
}

document
  .getElementById("fullscreenModal")
  .addEventListener("click", function (e) {
    if (e.target === this) closeFullscreen();
  });

// THÔNG TIN NỔI BẬT
const highlightTable = document.querySelector(".table-highlight");

const specNames = {
  cpu: "CPU",
  gpu: "Card đồ họa",
  ram: "RAM",
  ssd: "SSD",
  main: "Mainboard",
  screen: "Màn hình",
  battery: "Pin",
  connect: "Kết nối",
  feature: "Tính năng",
  layout: "Layout",
  keycap: "Keycap",
  panel: "Tấm nền",
  size: "Kích thước",
  hz: "Tần số quét",
};

highlightTable.innerHTML = "";

for (let key in product.highlightSpecs) {
  const value = product.highlightSpecs[key];

  if (value) {
    highlightTable.innerHTML += `
      <tr>
        <td>${specNames[key]}</td>
        <td>${value}</td>
      </tr>
    `;
  }
}

// PHẦN BÀI VIẾT
const specBox = document.querySelector(".spec-content-wrapper .p-3");

specBox.querySelector("p").innerText = product.description.intro;

const h5s = specBox.querySelectorAll("h5");
const ps = specBox.querySelectorAll("p");
const imgs = specBox.querySelectorAll("img");

product.description.sections.forEach((sec, i) => {
  if (h5s[i]) h5s[i].innerText = sec.title;
  if (ps[i + 1]) ps[i + 1].innerText = sec.content;
  if (imgs[i]) imgs[i].src = sec.image;
});

// BẢNG THÔNG SỐ KỸ THUẬT
const infoRows = specBox.querySelectorAll("table tr");

infoRows[0].children[1].innerText = product.brandInfo.brand;
infoRows[1].children[1].innerText = product.brandInfo.model;
infoRows[2].children[1].innerText = product.brandInfo.color;
infoRows[3].children[1].innerText = product.brandInfo.weight;
infoRows[4].children[1].innerText = product.brandInfo.ports;

// TOGGLE XEM THÊM

function toggleSpec() {
  const wrapper = document.getElementById("specWrapper");
  const btn = document.getElementById("btnToggleSpec");

  if (wrapper.classList.contains("expanded")) {
    wrapper.classList.remove("expanded");
    btn.innerHTML = "Xem thêm bài viết";
    window.scrollTo({
      top: wrapper.parentElement.offsetTop - 100,
      behavior: "smooth",
    });
  } else {
    wrapper.classList.add("expanded");
    btn.innerHTML = "Thu gọn bài viết";
  }
}

const btnBuyNow = document.getElementById("btnBuyNow");

if (btnBuyNow) {
  btnBuyNow.addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    let existing = cart.find((p) => p.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      });
    }

    localStorage.setItem("productsInCart", JSON.stringify(cart));

    document.getElementById("cartCount").innerText = cart.length;

    window.location.href = "cart.html";
  });
}

// Phần sản phẩm liên quan
function renderRelatedProducts() {
  const container = document.getElementById("relatedProducts");
  if (!container) return;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  container.innerHTML = "";

  related.forEach((item) => {
    const html = `
      <div class="col">
        <div class="product-item-card" onclick="goToDetail(${item.id})" style="cursor:pointer;">
          <span class="badge badge-hot text-white">HOT DEAL</span>
          <img src="${item.images[0]}" alt="${item.name}">
          <div class="related-name">${item.name}</div>
          <div class="related-price">
            ${item.price.toLocaleString("vi-VN")} ₫
          </div>
        </div>
      </div>
    `;

    container.innerHTML += html;
  });
}

// tin công nghệ
function renderTechNews(limit = 3) {
  const news = JSON.parse(localStorage.getItem("news")) || [];
  const container = document.getElementById("techNewsList");

  if (!container) return;

  const techNews = news
    .filter((item) => item.category === "congnghe")
    .slice(0, limit);

  container.innerHTML = techNews
    .map(
      (item) => `
    <li>
      <a href="newsDetail.html?id=${item.id}" class="news-item">
        <div class="thumb">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <span>${item.title}</span>
      </a>
    </li>
  `,
    )
    .join("");
}

renderRelatedProducts();
renderTechNews(3);
