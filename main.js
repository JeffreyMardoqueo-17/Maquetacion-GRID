const btnOn = document.querySelector("#btnon");
const btnOff = document.querySelector("#btnoff");
const sidebar = document.querySelector("#sidebar");

btnOn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

btnOff.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
