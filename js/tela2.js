let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
       item.style.transform = `translateX(${-(index * 100)}%)`;
        item.classList.remove('active'); 
    });
    items[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
});

showItem(currentIndex);