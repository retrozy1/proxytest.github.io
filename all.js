document.getElementById('sessionButton').addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    if (action === 'save') {
        alert('Save button clicked!');
    }
});
