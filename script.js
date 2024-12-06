// scripts.js
function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    showTab('publications');
});
