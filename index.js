const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toAdd = document.querySelector('.toAdd');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('listItem');
    toAdd.appendChild(item);
    inputField.value = '';

    item.addEventListener('click', () => {
        item.classList.add('completedTask');
    })

    item.addEventListener('dblclick', () => {
        toAdd.removeChild(item);
    })

})