// Show the popup when the page loads
window.onload = function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    
    // Show popup
    popup.style.display = 'flex';
    
    // Close popup when close button is clicked
    closePopup.onclick = function() {
        popup.style.display = 'none';
    };
};
