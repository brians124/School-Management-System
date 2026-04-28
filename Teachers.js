document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const teacherCards = document.querySelectorAll('.teacher-card');

    /**
     * FEATURE 1: Search Filtering
     * Filters teachers based on Name or Subject/Role as the user types.
     */
    searchBar.addEventListener('input', () => {
        const searchText = searchBar.value.toLowerCase();

        teacherCards.forEach(card => {
            const name = card.querySelector('.teacher-name').textContent.toLowerCase();
            const role = card.querySelector('.teacher-role').textContent.toLowerCase();

            if (name.includes(searchText) || role.includes(searchText)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.4s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });

    /**
     * FEATURE 2: Category Filtering
     * Filters teachers based on the department tags (Sciences, Humanities, etc.)
     */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Update active button UI
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Get the category from the button text
            const selectedCategory = btn.textContent.trim();

            // 3. Filter cards
            teacherCards.forEach(card => {
                const cardDept = card.querySelector('.dept-tag').textContent.trim();

                if (selectedCategory === 'All' || cardDept === selectedCategory) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

/**
 * FEATURE 3: Animation Helper
 * Adds a small fade-in effect when items appear. 
 * Add this to your Style.css as well!
 */
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);