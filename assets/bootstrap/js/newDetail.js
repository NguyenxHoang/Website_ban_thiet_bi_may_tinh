function getNewsById(id) {
  return newsData.find((item) => item.id == id);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
}

function renderNewsDetail(news) {
  const container = document.getElementById("newsDetailContainer");
  const breadcrumbTitle = document.getElementById("breadcrumbTitle");

  // Breadcrumb
  breadcrumbTitle.textContent = news.title;

  // nội dung
  container.innerHTML = `
    <div class="article-header border-bottom mb-4 pb-2">
      <h1 class="fw-bold" style="color: #d9534f; font-size: 28px">
        ${news.title}
      </h1>
      <div class="article-meta mt-2">
        <span>
          <img src="../assets/img/user.png" style="width: 15px" />
          Tác giả: <strong>${news.author}</strong>
        </span>
        |
        <span>
          Ngày đăng:
          <time datetime="${news.date}">
            ${formatDate(news.date)}
          </time>
        </span>
        |
        <span>Lượt xem: ${news.views.toLocaleString("vi-VN")}</span>
      </div>
    </div>

    <figure class="article-thumbnail text-center">
      <img src="${news.image}" class="img-fluid rounded" />
    </figure>

    <section class="article-body">
      ${news.content}
    </section>

    <div class="article-footer mt-5 pt-3 border-top">
      <div class="tags">
        <strong>Từ khóa:</strong>
        ${news.tags
          .map(
            (tag) =>
              `<span class="badge bg-secondary text-decoration-none me-1">#${tag}</span>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderRelated(news) {
  const container = document.getElementById("relatedNewsContainer");

  const relatedNews = newsData
    .filter((item) => item.id !== news.id && item.category === news.category)
    .slice(0, 4);

  if (relatedNews.length === 0) {
    container.innerHTML = "<p class='text-muted'>Không có tin liên quan</p>";
    return;
  }

  container.innerHTML = relatedNews
    .map(
      (item) => `
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="card h-100 shadow-sm">
        <a href="newsDetail.html?id=${item.id}">
          <img
            src="${item.image}"
            class="card-img-top"
            alt="${item.title}"
            style="height: 150px; object-fit: cover;"
          />
        </a>

        <div class="card-body p-3">
          <h6 class="card-title" style="font-size: 0.95rem; line-height: 1.3">
            <a href="newsDetail.html?id=${item.id}"
              class="text-decoration-none text-dark fw-bold">
              ${item.title}
            </a>
          </h6>

          <p class="text-muted mb-0" style="font-size: 0.8rem">
            ${formatDate(item.date)}
          </p>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Lấy id từ URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const news = getNewsById(id);

if (news) {
  renderNewsDetail(news);
  renderRelated(news);
} else {
  document.getElementById("newsDetailContainer").innerHTML =
    "<h3>Không tìm thấy bài viết</h3>";
}
