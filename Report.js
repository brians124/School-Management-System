// 1. Filter Table by Student Name
    // We'll add a search bar dynamically to show how JS can manipulate the DOM
    const filterSection = document.getElementById('filters');
    const searchInput = document.createElement('input');
    searchInput.setAttribute('placeholder', 'Search by name...');
    searchInput.style.marginLeft = "10px";
    filterSection.appendChild(searchInput);

    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const tableRows = document.querySelectorAll('#report-results tbody tr');

        tableRows.forEach(row => {
            const studentName = row.cells[1].textContent.toLowerCase();
            if (studentName.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // 2. Handle Report Generation (Switching Views)
    const reportForm = document.querySelector('form');
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const reportType = document.getElementById('reportType').value;
        const resultsTitle = document.querySelector('#report-results h3');
        const tableHead = document.querySelector('#report-results thead');
        const tableBody = document.querySelector('#report-results tbody');

        // Logic to simulate loading different data based on selection
        if (reportType === 'attendance') {
            resultsTitle.textContent = "Report Results: Attendance Summary";
            tableHead.innerHTML = `
                <tr>
                    <th>Student ID</th>
                    <th>Full Name</th>
                    <th>Total Days</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Attendance %</th>
                </tr>
            `;
            tableBody.innerHTML = `
                <tr>
                    <td>STU-001</td>
                    <td>Jane Doe</td>
                    <td>180</td>
                    <td>175</td>
                    <td>5</td>
                    <td>97%</td>
                </tr>
            `;
        } else if (reportType === 'finance') {
            resultsTitle.textContent = "Report Results: Fee Collection";
            tableHead.innerHTML = `
                <tr>
                    <th>Student ID</th>
                    <th>Full Name</th>
                    <th>Total Fee</th>
                    <th>Paid</th>
                    <th>Balance</th>
                    <th>Status</th>
                </tr>
            `;
            tableBody.innerHTML = `
                <tr>
                    <td>STU-001</td>
                    <td>Jane Doe</td>
                    <td>$5,000</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td style="color: green; font-weight: bold;">Paid</td>
                </tr>
            `;
        } else {
            alert("Generating " + reportType + " report...");
            // You can add more conditions for Staff or Academic here
        }
    });

    // 3. Simple Export feedback
    const exportBtn = document.querySelector('button[type="button"]');
    exportBtn.onclick = function() {
        const reportName = document.getElementById('reportType').value;
        alert("Preparing " + reportName + " report for PDF export. Please use the Print dialog.");
        window.print();
    };

document.addEventListener('DOMContentLoaded', () => {
    const reportForm = document.querySelector('#filters form');
    const generateBtn = reportForm.querySelector('button[type="submit"]');

    // 1. Handle Report Generation
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Visual feedback: Loading state
        generateBtn.classList.add('is-loading');
        
        // Simulate a database fetch
        setTimeout(() => {
            generateBtn.classList.remove('is-loading');
            alert('Report Generated Successfully for ' + document.getElementById('reportType').value);
            
            // Here you would typically refresh the table data via AJAX
        }, 1500);
    });

    // 2. Interactive Navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.style.fontWeight = 'normal');
            this.style.fontWeight = 'bold';
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector("#report-results table");
    const tbody = table.querySelector("tbody");
    const headers = table.querySelectorAll("thead th");
    const searchInput = document.createElement('input');

    // --- 1. SEARCH/FILTER FUNCTIONALITY ---
    // Create a search bar dynamically above the table
    searchInput.type = "text";
    searchInput.placeholder = "Search student by name or ID...";
    searchInput.className = "table-search"; // Add this class to your CSS
    table.parentNode.insertBefore(searchInput, table);

    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const rows = tbody.querySelectorAll("tr");

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(filter) ? "" : "none";
        });
    });

    // --- 2. TABLE SORTING FUNCTIONALITY ---
    headers.forEach((header, index) => {
        header.style.cursor = "pointer";
        header.title = "Click to sort";
        
        header.addEventListener("click", () => {
            const rows = Array.from(tbody.querySelectorAll("tr"));
            const isAscending = header.classList.contains("th-sort-asc");
            
            // Toggle classes for visual feedback
            headers.forEach(h => h.classList.remove("th-sort-asc", "th-sort-desc"));
            header.classList.add(isAscending ? "th-sort-desc" : "th-sort-asc");

            const sortedRows = rows.sort((a, b) => {
                const aColText = a.querySelector(`td:nth-child(${index + 1})`).textContent.trim();
                const bColText = b.querySelector(`td:nth-child(${index + 1})`).textContent.trim();
                
                // Check if sorting numbers or strings
                const aValue = isNaN(aColText) ? aColText : parseFloat(aColText);
                const bValue = isNaN(bColText) ? bColText : parseFloat(bColText);

                if (aValue < bValue) return isAscending ? 1 : -1;
                if (aValue > bValue) return isAscending ? -1 : 1;
                return 0;
            });

            // Re-append rows to the tbody
            while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
            tbody.append(...sortedRows);
        });
    });

    // --- 3. DYNAMIC STATUS HIGHLIGHTING ---
    const statusCells = tbody.querySelectorAll("td:last-child");
    statusCells.forEach(cell => {
        if (cell.textContent.includes("Review")) {
            cell.closest('tr').style.borderLeft = "4px solid #ff4444";
        }
    });
});









    // This is a simple example. In a real app, 
// this would be triggered by a successful login.
function checkAdminStatus() {
    const userRole = "admin"; // This value would come from your database

    if (userRole === "admin") {
        document.body.classList.add("is-admin");
    }
}

checkAdminStatus();