// LẤY GIỎ HÀNG
function getCart() {
  return JSON.parse(localStorage.getItem("productsInCart")) || [];
}

// CẬP NHẬT ICON HEADER
function updateHeaderCartCount() {
  let cart = getCart();
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);

  let headerCount = document.getElementById("cartCount");
  if (headerCount) {
    headerCount.innerText = count;
  }
}

// RENDER CHECKOUT
function renderCheckout() {
  let cart = getCart();
  let listBox = document.getElementById("checkoutList");
  let subtotalEl = document.getElementById("checkoutSubtotal");
  let totalEl = document.getElementById("checkoutTotal");
  let finalTotalEl = document.getElementById("totalPrice");

  if (!listBox) return;

  if (cart.length === 0) {
    listBox.innerHTML = "<p>Giỏ hàng đang trống</p>";
    subtotalEl.innerText = "0đ";
    totalEl.innerText = "0đ";
    finalTotalEl.innerText = "0đ";
    return;
  }

  let html = "";
  let subtotal = 0;

  cart.forEach(product => {
    let itemTotal = product.price * product.quantity;
    subtotal += itemTotal;

    html += `
      <div class="d-flex justify-content-between mb-2">
        <span>${product.name} x ${product.quantity}</span>
        <span>${itemTotal.toLocaleString()} đ</span>
      </div>
    `;
  });

  listBox.innerHTML = html;

  subtotalEl.innerText = "Tạm tính";
  totalEl.innerText = subtotal.toLocaleString() + " đ";
  finalTotalEl.innerText = subtotal.toLocaleString() + " đ";
}


// ĐẶT HÀNG
function placeOrder() {
  let cart = getCart();

  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }

  if (!confirm("Bạn có chắc muốn đặt hàng?")) return;

  // XÓA GIỎ
  localStorage.removeItem("productsInCart");

  // Cập nhật icon header
  updateHeaderCartCount();

  alert("Đặt hàng thành công!");

  // Chuyển về trang chủ hoặc cart
  window.location.href = "cart.html";
}

// LOAD TRANG
document.addEventListener("DOMContentLoaded", function () {
  renderCheckout();
  updateHeaderCartCount();
});
