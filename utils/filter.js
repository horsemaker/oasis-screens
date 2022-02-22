const filterBtn = document.querySelector('.products-filter-responsive');
const filterIcon = document.querySelector('.filter-toggle');
const productsFilter = document.querySelector('.products-filter');

filterBtn.addEventListener('click', () => {
  if (filterIcon.innerText === 'arrow_forward') {
    filterIcon.innerText = 'arrow_downward';

  } else {
    filterIcon.innerText = 'arrow_forward';
  }

  productsFilter.classList.toggle('show-responsive-filter');
});