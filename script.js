// script.js

const form = document.getElementById('save-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const picture = document.getElementById('picture').files[0];
    const value = document.getElementById('value').value;
    const ubication = document.getElementById('ubication').value;
    const description = document.getElementById('description').value;

    const formData = new FormData();
    formData.append('picture', picture);
    formData.append('item', [value, ubication, description]);

    fetch('http://localhost:8080/api/v1/item/save', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});