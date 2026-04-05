
let productsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];

// LƯU LOCALSTORAGE
function saveCart() {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

//thêm vào giỏ hàng
function addToCart(id) {
  const product = productsData.find((p) => p.id === id);
  if (!product) return;

  const existing = productsInCart.find((p) => p.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    productsInCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  }

  saveCart();
  updateCartCount();
  alert("Đã thêm vào giỏ hàng!");
}

// MUA NGAY
function buyNow(id) {
  addToCart(id);
  window.location.href = "cart.html";
}

function renderCart() {
  const cartBody = document.getElementById("cartBody");
  if (!cartBody) return;

  cartBody.innerHTML = "";

  if (productsInCart.length === 0) {
    cartBody.innerHTML = `
    <tr>
      <td colspan="6" style="text-align:center;">Giỏ hàng trống</td>
    </tr>
  `;

    const totalElement = document.getElementById("cartTotal");
    if (totalElement) totalElement.innerText = "0 đ";

    return;
  }

  productsInCart.forEach((product) => {
    cartBody.innerHTML += `
      <tr>
       <td>${product.name}</td>
      <td>
         <img src="${product.image}" width="80">
      </td>
        <td>${formatPrice(product.price)}</td>
        <td>
          <button class="btn btn-primary"  onclick="decreaseQuantity(${product.id})">-</button>
          ${product.quantity}
          <button class="btn btn-primary" onclick="increaseQuantity(${product.id})">+</button>
        </td>
        <td>${formatPrice(product.price * product.quantity)}</td>
        <td>
          <button class="btn btn-danger" onclick="removeFromCart(${product.id})">X</button>
        </td>
      </tr>
    `;
  });

  renderTotal();
}

// TĂNG SỐ LƯỢNG
function increaseQuantity(id) {
  const product = productsInCart.find((p) => p.id === id);
  if (!product) return;

  product.quantity += 1;
  saveCart();
  renderCart();
  updateCartCount();
}

// GIẢM SỐ LƯỢNG
function decreaseQuantity(id) {
  const product = productsInCart.find((p) => p.id === id);
  if (!product) return;

  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    productsInCart = productsInCart.filter((p) => p.id !== id);
  }

  saveCart();
  renderCart();
  updateCartCount();
}

// XOÁ SẢN PHẨM
function removeFromCart(id) {
  productsInCart = productsInCart.filter((p) => p.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
}

// TÍNH TỔNG TIỀN
function renderTotal() {
  const totalElement = document.getElementById("cartTotal");
  if (!totalElement) return;

  const total = productsInCart.reduce((sum, p) => {
    return sum + p.price * p.quantity;
  }, 0);

  totalElement.innerText = formatPrice(total);
}

// ĐỊNH DẠNG TIỀN
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " đ";
}

// CẬP NHẬT SỐ LƯỢNG ICON
function updateCartCount() {
  const totalQuantity = productsInCart.reduce((sum, p) => {
    return sum + p.quantity;
  }, 0);

  const headerCount = document.getElementById("cartCount");
  const pageCount = document.getElementById("cartPageCount");

  if (headerCount) headerCount.innerText = totalQuantity;
  if (pageCount) pageCount.innerText = totalQuantity;
}

// LOAD KHI VÀO TRANG
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();
});

function clearCart() {
  if (productsInCart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }
  if (!confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) return;
  productsInCart = [];
  saveCart();
  renderCart();
  updateCartCount();

  alert("Đã xóa toàn bộ giỏ hàng!");
}
