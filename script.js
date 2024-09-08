window.addEventListener('scroll', () => {
    const scrollableContent = document.querySelector('.web-text');
    const scrollableContent1 = document.querySelector('.card-grid');
    const scrollPosition = window.scrollY;
    const elementTop = scrollableContent.offsetTop;
    const elementHeight = scrollableContent.offsetHeight;
    const elementTop1 = scrollableContent1.offsetTop;
    const elementHeight1 = scrollableContent1.offsetHeight;
    const viewportHeight = window.innerHeight;
  
    if (scrollPosition >= elementTop - viewportHeight / 2.7 && scrollPosition <= elementTop + elementHeight) {
      scrollableContent.classList.add('visible');
    } else if (scrollPosition > elementTop + elementHeight) { // Check if scrolled past the bottom
        scrollableContent.classList.remove('visible');
    }
    if (scrollPosition >= elementTop1 - viewportHeight / 2 && scrollPosition <= elementTop1 + elementHeight1) {
      scrollableContent1.classList.add('visible');
    } else if (scrollPosition > elementTop1 + elementHeight1) { // Check if scrolled past the bottom
        scrollableContent1.classList.remove('visible');
    }
});
const cards = document.querySelectorAll('.card');

if (cards.length > 0) {
  cards.forEach(card => {
    card.addEventListener('click', () => {
      console.log('Card clicked!');
      window.location.href = 'dashboard.html'; // Replace with your desired URL
    });
  });
} else {
  console.error('No card elements found.');
}