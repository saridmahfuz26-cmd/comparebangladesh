// script.js

// Function for searching through results
function searchResults(data, query) {
    return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

// Function for filtering results by category
function filterResults(data, category) {
    return data.filter(item => item.category === category);
}

// Function for sorting results
function sortResults(data, key, order = 'asc') {
    return data.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}

// Function for rendering results on the page
function renderResults(results) {
    const container = document.getElementById('results');
    container.innerHTML = '';
    results.forEach(item => {
        const div = document.createElement('div');
        div.innerText = item.name;
        container.appendChild(div);
    });
}

// Function for navigation
function navigateTo(page) {
    window.location.href = `/${page}`;
}
