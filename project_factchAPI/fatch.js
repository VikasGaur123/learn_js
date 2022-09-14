const api_url = "https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";

let url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=1&limit=5`;

//let loader = `<div class="boxLoading"></div>`;          //loader ke liye
//document.getElementById('load').innerHTML = loader; //loader ke liye

async function getapi(url) {
    const response = await fetch(url)
    var data = await response.json();
     console.log(data);
    show(data);
}
let sno = 1;
getapi(url);
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
    action.innerHTML = `<button><a href="fatchParticularData.html?id=${ids}">view</a></button> <button href="#" onclick="myfun(this)" value="${ids}">delete</button>`;
}
function myfun(e) {
    let element = e.value;
    console.log(element);
    let c = confirm("comfimtion for delete!");
    if (c) {
        urll = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs/${element}`;
        deletedata(urll);
        setTimeout(() => {
            document.location.reload();
        }, 3000);
    }
}
function deletedata(urll) {
    fetch(urll, { method: 'DELETE' })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log("Error during fetch: " + error.message);
        });
}

//make dynamic buttons 
let item;
async function fullList(api_url) {
    const response = await fetch(api_url)
    var data = await response.json();
    console.log(data.length);  //find the full list of api items
    item = data.length / 5;
    if (data.length % 5 == 0) {
        item = Math.floor(item);
        console.log(item);
    }
    else {
        item = Math.floor(item);
        item += 1;
        console.log(item);
    }
    let pbtn = document.getElementById('pbtn');
    for (i = 1; i <= item; i++) {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = `${i}`;
        pbtn.append(btn);
    }
}
fullList(api_url);


let showvalue = 5;
let page = 1;
function next() {
    if (page < item) {
        page++;
        var tableHeaderRowCount = 1;
        var table = document.getElementById('employees');
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
        url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=${page}&limit=${showvalue}`;
        getapi(url);
    }
}
function cleartable(){
    var tableHeaderRowCount = 1;
    var table = document.getElementById('employees');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}
function prev() {
    if (page!=1) {
        page--;
       cleartable();
        url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=${page}&limit=${showvalue}`;
        getapi(url);
    }
}

function search(){
    let text=document.getElementById('search').value;

    cleartable();
    url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?search=${text}`;
    getapi(url);
}