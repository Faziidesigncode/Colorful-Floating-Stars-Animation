
    function createStar() {
      const starContainer = document.createElement('div');
      starContainer.style.position = 'absolute';
      starContainer.style.top = Math.random() * window.innerHeight / 2 + 'px';
      starContainer.style.left = Math.random() * window.innerWidth / 2 + 'px';

      const star = document.createElement('div');
      star.classList.add('star');

      const trail = document.createElement('div');
      trail.classList.add('trail');

      starContainer.appendChild(trail);
      starContainer.appendChild(star);
      document.body.appendChild(starContainer);

      star.addEventListener('animationend', () => {
        starContainer.remove();
      });
    }

    // Stars will come slower but frequently
    setInterval(createStar, 400);
  