// App State
let filteredData = [...perDiemData];
let sortColumn = 'country';
let sortDirection = 'asc';

// DOM Elements
const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('region-filter');
const sourceFilter = document.getElementById('source-filter');
const tbody = document.getElementById('perdiem-tbody');
const noResults = document.getElementById('no-results');
const totalCountries = document.getElementById('total-countries');
const totalLocations = document.getElementById('total-locations');
const avgRate = document.getElementById('avg-rate');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    updateStats();
    
    // Event listeners
    searchInput.addEventListener('input', debounce(filterData, 300));
    regionFilter.addEventListener('change', filterData);
    sourceFilter.addEventListener('change', filterData);
    
    // Sorting
    document.querySelectorAll('thead th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            handleSort(column);
        });
    });
});

// Filter data
function filterData() {
    const searchTerm = searchInput.value.toLowerCase();
    const region = regionFilter.value;
    const source = sourceFilter.value;
    
    filteredData = perDiemData.filter(item => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            item.country.toLowerCase().includes(searchTerm) ||
            item.city.toLowerCase().includes(searchTerm);
        
        // Region filter
        const matchesRegion = region === 'all' || item.region === region;
        
        // Source filter
        const sourceKey = source === 'us-state' ? 'US State Dept' : 
                         source === 'gsa' ? 'GSA' :
                         source === 'national' ? 'National Govt' :
                         source === 'eu' ? 'EU Standard' : null;
        const matchesSource = source === 'all' || item.source === sourceKey;
        
        return matchesSearch && matchesRegion && matchesSource;
    });
    
    renderTable();
    updateStats();
}

// Sort handler
function handleSort(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    sortData();
    renderTable();
    updateSortIndicators();
}

// Sort data
function sortData() {
    filteredData.sort((a, b) => {
        let valA = a[sortColumn];
        let valB = b[sortColumn];
        
        // Handle numeric columns
        if (['lodging', 'meals', 'total'].includes(sortColumn)) {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
        }
        
        // Handle string columns
        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }
        
        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
}

// Update sort indicators
function updateSortIndicators() {
    document.querySelectorAll('thead th[data-sort] .sort-indicator').forEach(indicator => {
        indicator.textContent = '▼';
        indicator.style.opacity = '0.3';
    });
    
    const activeTh = document.querySelector(`thead th[data-sort="${sortColumn}"]`);
    if (activeTh) {
        const indicator = activeTh.querySelector('.sort-indicator');
        indicator.textContent = sortDirection === 'asc' ? '▲' : '▼';
        indicator.style.opacity = '1';
    }
}

// Render table
function renderTable() {
    tbody.innerHTML = '';
    
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        document.querySelector('table').style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    document.querySelector('table').style.display = 'table';
    
    filteredData.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>
                <span class="country-name">${item.country}</span>
            </td>
            <td><span class="city-name">${item.city}</span></td>
            <td>$${item.lodging.toFixed(0)}</td>
            <td>$${item.meals.toFixed(0)}</td>
            <td><span class="rate">$${item.total.toFixed(0)}</span></td>
            <td>${item.currency}</td>
            <td>
                ${item.sourceUrl ? 
                    `<a href="${item.sourceUrl}" target="_blank" rel="noopener" class="source-link">${item.source}</a>` :
                    `<span class="source-link">${item.source}</span>`
                }
            </td>
            <td>${item.updated}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Update statistics
function updateStats() {
    // Count unique countries
    const countries = new Set(filteredData.map(item => item.country));
    totalCountries.textContent = countries.size;
    
    // Total locations
    totalLocations.textContent = filteredData.length;
    
    // Average per diem
    if (filteredData.length > 0) {
        const sum = filteredData.reduce((acc, item) => acc + item.total, 0);
        const avg = sum / filteredData.length;
        avgRate.textContent = `$${Math.round(avg)}`;
    } else {
        avgRate.textContent = '$0';
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functionality (future enhancement)
function exportToCSV() {
    const headers = ['Country', 'City', 'Region', 'Lodging', 'Meals & IE', 'Total Per Diem', 'Currency', 'Source', 'Updated'];
    const rows = filteredData.map(item => [
        item.country,
        item.city,
        item.region,
        item.lodging,
        item.meals,
        item.total,
        item.currency,
        item.source,
        item.updated
    ]);
    
    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
        csv += row.map(cell => `"${cell}"`).join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'per-diem-rates.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Make export available globally (for future button)
window.exportToCSV = exportToCSV;
