let currentTip = null;
let currentPhoto = null;

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

// 오버레이 바깥 클릭 시 닫기
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
  }
});

/* ================= 팁 & 공략 ================= */
function openTipDetail(el) {
  currentTip = { ...el.dataset };
  document.getElementById("tip-detail-title").textContent = currentTip.title;
  document.getElementById("tip-detail-meta").textContent = `${currentTip.author} · ${currentTip.date} · ${currentTip.category}`;
  document.getElementById("tip-detail-content").textContent = currentTip.content;

  const deleteForm = document.getElementById("tip-delete-form");
  if (deleteForm) deleteForm.action = `/tips/${currentTip.id}/delete`;

  openModal("tip-detail-modal");
}

function editCurrentTip() {
  if (!currentTip) return;
  closeModal("tip-detail-modal");

  const form = document.getElementById("tip-write-form");
  form.action = `/tips/${currentTip.id}/edit`;
  form.querySelector('[name="title"]').value = currentTip.title;
  form.querySelector('[name="category"]').value = currentTip.category;
  form.querySelector('[name="content"]').value = currentTip.content;
  form.classList.remove("hidden");

  openModal("tip-list-modal");
}

function resetTipForm() {
  const form = document.getElementById("tip-write-form");
  form.reset();
  form.action = "/tips";
  form.classList.toggle("hidden");
}

/* ================= 나만의 스크린샷 ================= */
function openPhotoDetail(el) {
  currentPhoto = { ...el.dataset };
  document.getElementById("photo-detail-title").textContent = currentPhoto.title;
  document.getElementById("photo-detail-image").style.backgroundImage = `url('${currentPhoto.image}')`;
  document.getElementById("photo-detail-meta").textContent = `${currentPhoto.author} · ${currentPhoto.date}`;

  const deleteForm = document.getElementById("photo-delete-form");
  if (deleteForm) deleteForm.action = `/photos/${currentPhoto.id}/delete`;

  openModal("photo-detail-modal");
}

function editCurrentPhoto() {
  if (!currentPhoto) return;
  closeModal("photo-detail-modal");

  const form = document.getElementById("photo-write-form");
  form.action = `/photos/${currentPhoto.id}/edit`;
  form.querySelector('[name="title"]').value = currentPhoto.title;
  form.querySelector('[name="imageUrl"]').value = currentPhoto.image;
  form.classList.remove("hidden");

  openModal("photo-list-modal");
}

function resetPhotoForm() {
  const form = document.getElementById("photo-write-form");
  form.reset();
  form.action = "/photos";
  form.classList.toggle("hidden");
}

/* ================= 멤버 소개 ================= */
function prepareMemberEdit(el) {
  const { id, nickname, avatar, intro } = el.dataset;
  const form = document.getElementById("member-write-form");
  form.action = `/members/${id}/edit`;
  form.querySelector('[name="nickname"]').value = nickname;
  form.querySelector('[name="avatar"]').value = avatar;
  form.querySelector('[name="intro"]').value = intro;
  form.classList.remove("hidden");
}

function resetMemberForm() {
  const form = document.getElementById("member-write-form");
  form.reset();
  form.action = "/members";
  form.classList.toggle("hidden");
}