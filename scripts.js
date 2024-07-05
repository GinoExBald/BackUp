const grid = document.getElementById('grid');

for (let i = 0; i <= 13; i++) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('grid-item');
    
    const image = document.createElement('img');
    image.src = `imagenes/miniaturas/${i}.jpg`;
    image.onclick = function() {
        window.location.href = `enlaces/video/${i}/index.html`;
    };
    
    thumbnail.appendChild(image);
    grid.appendChild(thumbnail);
}
