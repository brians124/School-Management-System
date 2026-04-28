// FinanceOS Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Currency Formatter (Standard Professional Format)
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    // 2. Dynamic Transaction Filtering 
    // Logic to simulate searching the ledger table
    const searchInput = document.createElement('input');
    searchInput.placeholder = "Search transactions...";
    searchInput.style.marginBottom = "15px";
    searchInput.style.padding = "8px";
    
    const ledgerTable = document.querySelector('#ledger table');
    ledgerTable.parentNode.insertBefore(searchInput, ledgerTable);

    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const rows = ledgerTable.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';
        });
    });

    // 3. Financial Calculations: Budget Alerts
    const checkBudget = () => {
        const progressBar = document.querySelector('progress');
        const budgetText = document.querySelector('#forecasting p');
        
        if (progressBar.value >= 90) {
            progressBar.style.accentColor = "#e74c3c"; // Turn red if over 90%
            budgetText.style.color = "#e74c3c";
            budgetText.innerHTML += " <strong>(Warning: Budget Ceiling Near)</strong>";
        }
    };

    // 4. Report Generation Simulation
    const reportForm = document.querySelector('#reporting-tools form');
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const reportType = document.getElementById('report-type').value;
        const period = document.getElementById('period').value;

        if (!period) {
            alert("Please select a fiscal period first.");
            return;
        }

        // Simulate a download process
        const btn = reportForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "Generating...";
        btn.disabled = true;

        setTimeout(() => {
            alert(`Success: ${reportType.toUpperCase()} for ${period} has been generated.`);
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // 5. Interactive Table Rows
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            // Remove highlight from others
            rows.forEach(r => r.style.backgroundColor = "");
            // Highlight selected
            row.style.backgroundColor = "#e1f5fe";
            console.log("Viewing Transaction Details:", row.cells[1].innerText);
        });
    });

    // Initial Check
    checkBudget();
});