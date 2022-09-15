const api_url = "https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";

let url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=1&limit=5`;

async function getapi(url) {
    loaderShow();
    const response = await fetch(url)
    if(response){
        hideloader();
    }
    var data = await response.json();
    console.log(data);
    show(data);
}

// hide loader function

function hideloader() {
    //console.log("hideloader");
   document.getElementById('loading').style.display = 'none';
}

//show loader function

function loaderShow(){
   // console.log("SHOWloader");
    document.getElementById('loading').style.display = 'block';
}

let sno = 1;
getapi(url);    //api calling function
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
    action.innerHTML = `<button><a href="fatchParticularData.html?id=${ids}">view</a></button> 
    <button href="#" onclick="myfun(this)" value="${ids}">delete</button>`;
    // view buttons
    // delete buttons

}

// this function taking id of delete button and comfimtion after that delete

function myfun(e) { 
    let element = e.value;
    //console.log(element);
    let c = confirm("comfimtion for delete!");
    if (c) {
        urll = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs/${element}`;
        deletedata(urll);               //calling deleting function
        setTimeout(() => {
            document.location.reload();  //page load after data is deleted
        }, 3000);
    }
}
// delete some row from api, -> us ke liye function

function deletedata(urll) {
    loaderShow();
    fetch(urll, { method: 'DELETE' })
        .then(function (response) {
            hideloader();
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
    //console.log(data.length);  //find the full list of api items
    item = data.length / 5;
    if (data.length % 5 == 0) {
        item = Math.floor(item);
       // console.log(item);
    }
    else {
        item = Math.floor(item);
        item += 1;
       // console.log(item);
    }
    let pbtn = document.getElementById('pbtn');
    for (i = 1; i <= item; i++) {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = `${i}`;
        pbtn.append(btn);
    }
}
fullList(api_url);  //calling dynamic button making


let showvalue = 5;
let page = 1;

//function for next pagination

//function for location
//function loca(page,showvalue){
    function loca(purl){
    // console.log(page,showvalue);
    // location.replace=`fatch.html?page=${page}&limit=${showvalue}`;
    // window.location=`fatch.html?page=${page}&limit=${showvalue}`;
    // window.stop();

    let nextURL="fatch.html";              //WWWW
    nextURL+=purl;                          //wwww
    let nextTitle="Blogs";                 //wwww
    const nextState = {};                  //wwww

    window.history.pushState(nextState, nextTitle, nextURL);                  //working for url
    // window.history.replaceState(nextState,nextTitle, nextURL);                   //working for url
    // console.log(window.history.replaceState(nextTitle, nextURL));

    // window.location.href = nextURL;
    // window.location.nextURL;
    // location.search.href=""
    // window.location.replace(nextURL);
    //location.href=nextURL;
}

loca(`?page=${page}&limit=${showvalue}`);



function next() {
    if (page < item) {
        page++;
    

        //location.href=`fatch.html?page=${page}&limit=${showvalue}`;
        // console.log(location.search.replace=`fatch.html?page=${page}&limit=${showvalue}`);
        loca(`?page=${page}&limit=${showvalue}`);

        var tableHeaderRowCount = 1;
        var table = document.getElementById('employees');
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
        url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=${page}&limit=${showvalue}`;
        // loca(url);
        getapi(url);
    }
}

// fuction for remove old tables 

function cleartable(){
    var tableHeaderRowCount = 1;
    var table = document.getElementById('employees');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

// function for previous pagination

function prev() {
    if (page!=1) {
        page--;
        loca(`?page=${page}&limit=${showvalue}`);
       cleartable();
        url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=${page}&limit=${showvalue}`;
        getapi(url);
    }
}

// when user entry fastly then this is taking time to fetching secarch function

const search = debounce(() => searchitems());
function debounce(func, timeout = 700){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

// function for search from hole API

function searchitems(){
   let text=document.getElementById('search').value;

    cleartable();
    loca(`?search=${text}`);
    url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?search=${text}`;
    getapi(url);

}

// function for asc and desc 

function asc_dsc(){
    let opt = document.getElementById('select').value;
    console.log(opt);
    // let value = opt.options[opt.selectedIndex].value;
    // console.log(value);
    ///blogs?sortBy=createdAt&order=desc
    if(opt!="select"){
    loca(`?sortBy=${opt}&order=desc`);
    url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?sortBy=${opt}&order=desc`;
    cleartable();
    getapi(url);
    }
}