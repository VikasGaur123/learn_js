const api_url =
    "https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";
async function getapi(url) {
    const response = await fetch(url)
    var data = await response.json();
    show(data);
}
getapi(api_url);
function show(data) {
    var queryString = location.search.substring(4);
    for (i = 0; i <= data.length; i++) {
        if (queryString == data[i].id) {
            addRowTable(data[i].id, data[i].createdAt, data[i].title, data[i].image)
        }
    }
}
function addRowTable(ids, createdAt, title, image) {
    var tableBody = document.getElementById("employees");
    var newRow = tableBody.insertRow();
    var serialNo = newRow.insertCell();
    serialNo.innerHTML = ids;
    var createdAtt = newRow.insertCell();
    createdAtt.innerHTML = createdAt;
    var titles = newRow.insertCell();
    titles.innerHTML = title;
    var images = newRow.insertCell();
    images.innerHTML = `<img src="${image}" height="80px">`;
    var action = newRow.insertCell();
    action.innerHTML = `<a onclick="" >view</button> <button href="" >delete</button>`;
}
