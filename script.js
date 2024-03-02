const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
if (hiddenElements.length > 0) {
  hiddenElements.forEach((el) => observer.observe(el));
} else {
  console.error('No elements found with class "hidden"');
}