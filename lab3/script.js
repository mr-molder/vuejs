const circle = document.getElementById('circle');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX - 15;
    let y = e.clientY - 15;
    
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';
});