// 글쓰기 폼 열기/닫기 토글
function toggleForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.classList.toggle("hidden");
}

// 모달 열기/닫기
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
}

// 오버레이 바깥(어두운 영역) 클릭 시 모달 닫기
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
  }
});

// 팁 상세 팝업 열기
function openTipDetail(el) {
  const { id, title, thumbnail, content, author, date } = el.dataset;
  document.getElementById("tip-detail-title").textContent = title;
  document.getElementById("tip-detail-thumb").style.backgroundImage = `url('${thumbnail}')`;
  document.getElementById("tip-detail-meta").textContent = `${author} · ${date}`;
  document.getElementById("tip-detail-content").textContent = content;

  const deleteForm = document.getElementById("tip-delete-form");
  if (deleteForm) deleteForm.action = `/tips/${id}/delete`;

  openModal("tip-detail-modal");
}

// 사진 상세 팝업 열기
function openPhotoDetail(el) {
  const { id, title, image, author, date } = el.dataset;
  document.getElementById("photo-detail-title").textContent = title;
  document.getElementById("photo-detail-image").style.backgroundImage = `url('${image}')`;
  document.getElementById("photo-detail-meta").textContent = `${author} · ${date}`;

  const deleteForm = document.getElementById("photo-delete-form");
  if (deleteForm) deleteForm.action = `/photos/${id}/delete`;

  openModal("photo-detail-modal");
}