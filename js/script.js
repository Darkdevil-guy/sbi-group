
window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.querySelector('.gallery-grid');
const cards = Array.from(document.querySelectorAll('.gallery-card'));

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        /* REMOVE ALL CARDS */
        galleryGrid.innerHTML = '';

        let filteredCards = [];

        /* ALL WORKS ALTERNATING */

        if (filter === 'all') {

            const civilCards = cards.filter(card =>
                card.classList.contains('civil')
            );

            const mechanicalCards = cards.filter(card =>
                card.classList.contains('mechanical')
            );

            const maxLength = Math.max(
                civilCards.length,
                mechanicalCards.length
            );

            for (let i = 0; i < maxLength; i++) {

                if (civilCards[i]) {
                    filteredCards.push(civilCards[i]);
                }

                if (mechanicalCards[i]) {
                    filteredCards.push(mechanicalCards[i]);
                }

            }

        }

        /* ONLY CIVIL */

        else if (filter === 'civil') {

            filteredCards = cards.filter(card =>
                card.classList.contains('civil')
            );

        }

        /* ONLY MECHANICAL */

        else if (filter === 'mechanical') {

            filteredCards = cards.filter(card =>
                card.classList.contains('mechanical')
            );

        }

        /* APPEND CARDS */

        filteredCards.forEach((card, index) => {

            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';

            galleryGrid.appendChild(card);

            setTimeout(() => {

                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';

            }, index * 80);

        });

    });

});

/* INITIAL LOAD ANIMATION */

window.addEventListener('load', () => {

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add('show');

        }, index * 100);

    });

});