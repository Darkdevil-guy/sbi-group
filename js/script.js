/* =========================================================
   SBI GROUP - PROFESSIONAL MAIN SCRIPT
========================================================= */

/* ================= SCROLL REVEAL ================= */

function revealCards() {

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';

        }

    });

}

window.addEventListener('scroll', revealCards);

window.addEventListener('load', revealCards);


/* ================= GALLERY FILTER ================= */

const filterButtons = document.querySelectorAll('.filter-btn');

const galleryGrid = document.querySelector('.gallery-grid');

const galleryCards = Array.from(
    document.querySelectorAll('.gallery-card')
);

if (filterButtons.length && galleryGrid) {

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            /* REMOVE ACTIVE */

            filterButtons.forEach(btn => {

                btn.classList.remove('active');

            });

            button.classList.add('active');

            /* FILTER TYPE */

            const filter = button.getAttribute('data-filter');

            galleryGrid.innerHTML = '';

            let filteredCards = [];

            /* ================= ALL ================= */

            if (filter === 'all') {

                const civilCards = galleryCards.filter(card =>
                    card.classList.contains('civil')
                );

                const mechanicalCards = galleryCards.filter(card =>
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

            /* ================= CIVIL ================= */

            else if (filter === 'civil') {

                filteredCards = galleryCards.filter(card =>
                    card.classList.contains('civil')
                );

            }

            /* ================= MECHANICAL ================= */

            else if (filter === 'mechanical') {

                filteredCards = galleryCards.filter(card =>
                    card.classList.contains('mechanical')
                );

            }

            /* ================= APPEND FILTERED ================= */

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

}


/* ================= INITIAL GALLERY LOAD ================= */

window.addEventListener('load', () => {

    galleryCards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add('show');

        }, index * 100);

    });

});

/* ================= SAFE CONTACT FORM ================= */

const form = document.getElementById('contactForm');

if (form) {

    form.addEventListener('submit', (e) => {

        e.preventDefault();

    });

}


/* ================= FORCE INITIAL REVEAL ================= */

window.dispatchEvent(new Event('scroll'));

