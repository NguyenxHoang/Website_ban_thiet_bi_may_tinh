const isMobile = window.matchMedia("(max-width: 562px)").matches;

if (!isMobile) {
  const danhMuc = document.querySelector(".danhMuc");
  const showOverlay = document.querySelector(".show");
  const megaMenu = document.querySelector(".mega-menu");

  danhMuc.addEventListener("click", (e) => {
    e.stopPropagation();
    showOverlay.style.display = "block";
  });

  showOverlay.addEventListener("click", (e) => {
    if (e.target === showOverlay) {
      showOverlay.style.display = "none";
    }
  });

  megaMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const hamburger = document.querySelector(".hamburger");
const headerInfo = document.querySelector(".header-info");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  headerInfo.classList.toggle("active");
});

document.addEventListener("click", () => {
  headerInfo.classList.remove("active");
});

headerInfo.addEventListener("click", (e) => {
  e.stopPropagation();
});

// login
let user = document.querySelector(".user");
let login = document.querySelector(".login");
let register = document.querySelector(".register");
let lienHe = document.querySelector(".lienHe");

if (user) {
  user.addEventListener("click", () => {
    login.style.display = "block";
  });
}

if (lienHe) {
  lienHe.addEventListener("click", () => {
    login.style.display = "block";
  });
}

function closeLogin(e) {
  login.style.display = "none";
  register.style.display = "none";
  e.stopPropagation();
}

function openRegister() {
  login.style.display = "none";
  register.style.display = "block";
}

function backToLogin() {
  login.style.display = "block";
  register.style.display = "none";
}

function validateRegister() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;

  if (!fullname || !email || !phone || !password || !confirmPassword) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ");
    return false;
  }

  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp");
    return false;
  }

  alert("Bạn đã đăng ký thành công");
  return true;
}

function goToDetail(id) {
  const path = (window.location.pathname || "").replace(/\\/g, "/");
  const inPagesFolder = path.includes("/pages/");
  const base = inPagesFolder ? "pc-detail.html" : "pages/pc-detail.html";
  window.location.href = `${base}?id=${encodeURIComponent(id)}`;
}
