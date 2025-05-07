document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('categories');
    const movieItems = document.querySelectorAll('.movie-item');

    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value.toLowerCase();

        movieItems.forEach(movie => {
            const movieTitle = movie.querySelector('h3').innerText.toLowerCase();
            if (selectedCategory === '' || movieTitle.includes(selectedCategory)) {
                movie.style.display = 'block'; 
            } else {
                movie.style.display = 'none'; 
            }
        });
    });

    
    movieItems.forEach(movie => {
        const link = movie.querySelector('a');
        if (!link) {
            movie.addEventListener('click', () => {
                alert('Pelicula No Disponible.');
            });
        }
    });

    
    movieItems.forEach(movie => {
        const img = movie.querySelector('img');
        if (img) {
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.3s ease';
            });

            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });
});