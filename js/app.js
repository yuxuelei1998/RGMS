// State
let currentData = [...musicSchools];
let sortDirection = 'desc'; // desc = high score first

// DOM Elements
const schoolList = document.getElementById('schoolList');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const sortBtn = document.getElementById('sortBtn');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading delay for premium feel
    setTimeout(() => {
        renderSchools(currentData);
    }, 600);
});

// Render Function
function renderSchools(data) {
    schoolList.innerHTML = '';

    if (data.length === 0) {
        schoolList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-music" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>No institutions found</h3>
                <p>Try adjusting your search or filters.</p>
            </div>
        `;
        return;
    }

    data.forEach((school, index) => {
        // Calculate dynamic rank based on the ENTIRE sorted list, or just index + 1?
        // For simple filtering, index+1 is fine if we want "Rank #1 in Search Results", 
        // but typically rankings keep their absolute rank. 
        // Let's use the 'id' or pre-calculated rank if we had it. 
        // Since we resort, let's use the index within the sorted list as the display rank for now, 
        // unless it's a filter, where we might want to show their global rank.
        // For simplicity in this demo, we'll assign rank based on current view order if sorted by score.
        // Or better, logic: If sorted by score desc, Rank = index + 1. If not, hidden or custom.

        let rankDisplay = `#${index + 1}`;
        let rankClass = `rank-${index + 1}`;

        // Create badges HTML
        const badgesHtml = school.badges.map(b => `<span class="badge">${b}</span>`).join('');

        const card = document.createElement('div');
        card.className = `school-item ${rankClass}`;
        card.innerHTML = `
            <div class="col-rank">
                <span class="rank-num">${rankDisplay}</span>
            </div>
            <div class="col-name school-info">
                <h3>${school.name}</h3>
                <p>${school.description}</p>
                <div class="badges">${badgesHtml}</div>
            </div>
            <div class="col-location location-info">
                <i class="fa-solid fa-location-dot"></i>
                <span>${school.location}</span>
            </div>
            <div class="col-stats">
                <div class="score-badge">${school.score.toFixed(1)}</div>
            </div>
        `;
        schoolList.appendChild(card);
    });
}

// Filter Logic
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const regionValue = regionFilter.value;

    let filtered = musicSchools.filter(school => {
        const matchesSearch = school.name.toLowerCase().includes(searchTerm) ||
            school.location.toLowerCase().includes(searchTerm);
        const matchesRegion = regionValue === 'all' || school.region === regionValue;

        return matchesSearch && matchesRegion;
    });

    // Apply Sort
    if (sortDirection === 'desc') {
        filtered.sort((a, b) => b.score - a.score);
    } else {
        filtered.sort((a, b) => a.score - b.score);
    }

    currentData = filtered;
    renderSchools(currentData);
}

// Event Listeners
searchInput.addEventListener('input', applyFilters);
regionFilter.addEventListener('change', applyFilters);

sortBtn.addEventListener('click', () => {
    // Toggle Sort
    sortDirection = sortDirection === 'desc' ? 'asc' : 'desc';

    // Update Icon
    const icon = sortBtn.querySelector('i');
    if (sortDirection === 'desc') {
        icon.className = 'fa-solid fa-arrow-down-9-1';
    } else {
        icon.className = 'fa-solid fa-arrow-up-1-9';
    }

    applyFilters();
});
