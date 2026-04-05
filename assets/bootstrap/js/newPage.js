//render báo
function renderNewsByCategory(category, containerId) {
  const news = JSON.parse(localStorage.getItem("news")) || [];
  const container = document.getElementById(containerId);

  const filteredNews = news.filter((item) => item.category === category);

  container.innerHTML = filteredNews
    .map(
      (item) => `
    <article class="news-card" onclick="goToNewsDetail(${item.id})">
      <img src="${item.image}" alt="${item.title}">
      <div class="news-content">
        <h3>${item.title}</h3>
        <div class="news-meta">
          <span>${item.date}</span>
          <span>${item.views} lượt xem</span>
        </div>
        <p>${item.shortDesc}</p>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderFeaturedNews() {
  const news = JSON.parse(localStorage.getItem("news")) || [];
  if (news.length === 0) return;
  // Sắp xếp theo views giảm dần
  const sorted = [...news].sort((a, b) => b.views - a.views);
  const featured = sorted[0];
  const others = sorted.slice(1, 5);
  //  tin nổi bật
  document.getElementById("featured-news").innerHTML = `
    <article class="featured-article" onclick="goToNewsDetail(${featured.id})">
      <img src="${featured.image}" alt="${featured.title}">
      <div class="article-content">
        <h2>${featured.title}</h2>
        <p>${featured.shortDesc}</p>
        <div class="article-meta">
          <span class="category">${featured.category}</span>
        </div>
      </div>
    </article>
  `;

  document.getElementById("latest-news").innerHTML = others
    .map(
      (item) => `
    <article class="small-article" onclick="goToNewsDetail(${item.id})">
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.shortDesc}</p>
    </article>
  `,
    )
    .join("");
}

//hàm điều hướng tới chi tiết tin
function goToNewsDetail(id) {
  window.location.href = `newsDetail.html?id=${id}`;
}
// load trang thì hoạt động
document.addEventListener("DOMContentLoaded", function () {
  renderNewsByCategory("congnghe", "tech-news-container");
  renderNewsByCategory("thuthuat", "tips-news-container");
  renderFeaturedNews();
});



