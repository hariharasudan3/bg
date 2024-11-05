for (let i = 0; i < 400; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 2 + 0.5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    const driftDirection = Math.random() > 0.5 ? 'drift-right' : 'drift-left';

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}vw`;
    star.style.top = `${posY}vh`;
    star.style.animationDuration = `${animationDuration}s`;

    star.classList.add(driftDirection);
    document.querySelector('.star-background').appendChild(star);
}


