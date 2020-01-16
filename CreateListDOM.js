//Create list with inputs DOM


document.getElementById('addTitle')
    .addEventListener('click', function () {
        let color = document.getElementById('color').value;
        let fontSize = document.getElementById('fontSize').value;
        let items = document.getElementById('item')
            .value
            .split(`,`);

        let ulElement = `<ul style="color:${color};font-size:${fontSize}px">${generateListItems(items)}</ul>`;
        let generateListDiv = document.getElementById(`generateList`);
        generateListDiv.innerHTML = ulElement + generateListDiv.innerHTML;

    })

function generateListItems(items) {
    let result = "";
    for (let item of items) {
        result += `<li>${item}</li>`;

    }
    return result;
}
