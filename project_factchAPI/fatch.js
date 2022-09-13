const api_url =
    "https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";
async function getapi(url) {
    const response = await fetch(url)
    var data = await response.json();
    show(data);
}
getapi(api_url);
function show(data) {
    data.forEach(curr => {
        addRowTable(curr.id, curr.createdAt, curr.title, curr.image);
    });
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
    action.innerHTML = `<a href="fatchParticularData.html?id=${ids}">view</a> <button href="#" onclick="myfun(this)" value="${ids}">delete</button>`;
}
function myfun(e) {

    let element = e.value;
    console.log(element);
    urll=`https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs/${element}`;
    deletedata(urll);

    

    // function deletedata() {
    //     url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs/:${element}`;

    // }

}
function deletedata(urll){ 
    fetch(urll,{method:'DELETE'})
    .then(function(response) {
        let a=response.json();
    console.log(a);
      return response.json();
    })
    .catch(function(error) {
      console.log("Error during fetch: " + error.message);
    });
}