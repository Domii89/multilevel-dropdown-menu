// create function to select elements
const selectElement = (element) => document.querySelector(element);

//open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});