// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. NAVIGATION LOGIC
    const menuItems = document.querySelectorAll('.menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');
            
            console.log(`Switching to: ${item.innerText}`);
            // Here you can add logic to hide/show different <div> sections
        });
    });

    function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.gui-section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected one
    document.getElementById(sectionId).style.display = 'block';
}

    // 2. REAL-TIME SEARCH FILTER
    const searchInput = document.getElementById('globalSearch');
    const tableRows = document.querySelectorAll('#studentTableBody tr');

    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();

        tableRows.forEach(row => {
            const studentName = row.cells[1].textContent.toLowerCase();
            const studentID = row.cells[0].textContent.toLowerCase();

            // Check if search term matches Name or ID
            if (studentName.includes(term) || studentID.includes(term)) {
                row.style.display = ""; // Show row
                row.style.animation = "fadeIn 0.3s ease";
            } else {
                row.style.display = "none"; // Hide row
            }
        });
    });

    // 3. ADD NEW STUDENT (SIMULATION)
    const addBtn = document.querySelector('.btn-primary');
    const tableBody = document.getElementById('studentTableBody');

    addBtn.addEventListener('click', () => {
        // For now, we will add a dummy row to show the animation
        const newID = Math.floor(100000 + Math.random() * 900000);
        const newRow = document.createElement('tr');
        
        // Add a slide-in animation via JS
        newRow.style.animation = "slideUp 0.5s ease-out";

        newRow.innerHTML = `
            <td>#${newID}</td>
            <td>New Student</td>
            <td>Senior 1</td>
            <td><progress value="0" max="100"></progress></td>
            <td><span class="badge badge-green">Active</span></td>
            <td><button class="btn-view" style="padding: 5px 10px; cursor: pointer;">View</button></td>
        `;

        tableBody.appendChild(newRow);
    });
});

// Extra: Smooth entry for the table rows
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);


function toggleProfileMenu() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');
}

// Close the dropdown if the user clicks anywhere else on the screen
window.onclick = function(event) {
    if (!event.target.closest('.System-profile')) {
        const dropdowns = document.getElementsByClassName("profile-dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.querySelector('.search-bar');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const teacherCards = document.querySelectorAll('.teacher-card');

        // --- 1. SEARCH FUNCTIONALITY ---
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            
            teacherCards.forEach(card => {
                const name = card.querySelector('.teacher-name').textContent.toLowerCase();
                const role = card.querySelector('.teacher-role').textContent.toLowerCase();
                const subject = card.querySelector('.dept-tag').textContent.toLowerCase();

                if (name.includes(query) || role.includes(query) || subject.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });

        // --- 2. DEPARTMENT FILTERING ---
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons and add to clicked one
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.textContent.toLowerCase();

                teacherCards.forEach(card => {
                    const teacherDept = card.querySelector('.dept-tag').textContent.toLowerCase();
                    
                    // Show all if "all" is clicked, otherwise match the department tag
                    if (filterValue === 'all' || teacherDept.includes(filterValue)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });

        // --- 3. SMOOTH REVEAL ON SCROLL (Bonus Feature) ---
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, observerOptions);

        teacherCards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            card.style.transition = "all 0.6s ease-out";
            observer.observe(card);
        });
    });
















document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Navigation Toggle
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentTitle = document.querySelector('.user-welcome h1');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');

            // Optional: Update page header based on selection
            const linkText = this.innerText.trim();
            if(linkText !== "Dashboard") {
                console.log(`Navigating to: ${linkText}`);
            }
        });
    });

    // 2. Fee Payment Button Logic
    const payBtn = document.querySelector('.btn-white');
    if (payBtn) {
        payBtn.addEventListener('click', () => {
            const balance = document.querySelector('.amount').innerText;
            alert(`Redirecting to payment gateway for balance: ${balance}`);
            // Here you would typically trigger your Mobile Money or Bank API
        });
    }

    // 3. Dynamic "View More" for Academic Results
    const viewMoreLink = document.querySelector('.view-more');
    if (viewMoreLink) {
        viewMoreLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Loading full performance report from database...");
            // This is where you would use AJAX/Fetch to pull data from report_card.php
        });
    }

    // 4. Notice Board - Auto-Highlight Newest Notice
    const notices = document.querySelectorAll('.notice-box');
    if (notices.length > 0) {
        notices[0].style.borderLeft = "4px solid #ffffff";
        notices[0].style.paddingLeft = "10px";
    }

    // 5. Logout Confirmation
    const logoutBtn = document.querySelector('.logout-section a');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            const confirmLogout = confirm("Are you sure you want to log out of the SHSS Portal?");
            if (!confirmLogout) {
                e.preventDefault();
            }
        });
    }
});

// Utility function for formatting currency (Ugandan Shillings)
function formatUGX(amount) {
    return new Intl.NumberFormat('en-UG', {
        style: 'currency',
        currency: 'UGX',
        maximumFractionDigits: 0
    }).format(amount);
}