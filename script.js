
function openModal(id) {
    document.getElementById(id).classList.add('active');
}


function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}


window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
}