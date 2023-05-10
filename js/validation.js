const imgUploadForm = document.querySelector('.img-upload__overlay');
const inputFile = document.querySelector('.img-upload__input');
const closeButton = document.querySelector('.img-upload__cancel');
const form = document.getElementById('upload-select-image');

function escKeyHandler(evt) {
  if (evt.key === 'Escape') {
    form.reset();
    closeImgUpload();
  }
}

function closeImgUpload() {
  imgUploadForm.classList.add('hidden');
  document.removeEventListener('keydown', escKeyHandler);
}

function openImgUpload() {
  imgUploadForm.classList.remove('hidden');
  document.addEventListener('keydown', escKeyHandler);
}

inputFile.addEventListener('change', openImgUpload);
closeButton.addEventListener('click', closeImgUpload);

const pristineForm = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper__item--invalid',
  successClass: 'img-upload__field-wrapper__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

form.addEventListener('submit', (evt) => {
  const isValid = pristineForm.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});