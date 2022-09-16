const api_url = "https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";

//let url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=1&limit=5`;
let url = `?page=1&limit=5`;

let showvalue = 5;
let page = 1;

//working function for fetch api 

// async function getapi(url) {
//     loaderShow();
//     const response = await fetch(url)
//     if (response) {
//         hideloader();
//     }
//     var data = await response.json();
//     // console.log(data);
//     show(data);
// }

//working function for fetch api also working...
async function getapi(url) {
    let newurl="https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";
    newurl+=url;
    console.log(newurl);


    loaderShow();
    const response = await (fetch(newurl).catch(function (error) {
        console.log("Error during fetch: " + error.message);
    }))
    if (response) {
        hideloader();
    }
    var data = await response.json();
    if(data.length==0){
        console.log("data is not found Please try again");
    }
     console.log(data);
    show(data);
}
// hide loader function

function hideloader() {
    //console.log("hideloader");
    document.getElementById('loading').style.display = 'none';
}

//show loader function

function loaderShow() {
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
        let btn = document.createElement('BUTTON');
        btn.className = "btn btn-outline-dark";
        btn.id = "pageNumbers";
        btn.value = `${i}`;
        //let func="buttonPageChange()";
        // btn.onclick =buttonPageChange;
        // console.log(buttonPageChange(this));
        btn.innerHTML = `${i}`;
        pbtn.append(btn);
    }
}
fullList(api_url);  //calling dynamic button making

// function buttonPageChange() {
//     console.log('hello i am in button page change function');
//     // let pagebtn = document.getElementById('pageNumbers').value;
//     //console.log(e.value);
// }



//function for location
//function loca(page,showvalue){
function loca(purl) {
    let nextURL = "fatch.html";
    nextURL += purl;
    let nextTitle = "Blogs";
    const nextState = {};

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


//function for next pagination


function next() {
    if (page < item) {
        page++;

        //location.href=`fatch.html?page=${page}&limit=${showvalue}`;
        // console.log(location.search.replace=`fatch.html?page=${page}&limit=${showvalue}`);
        loca(`?page=${page}&limit=${showvalue}`);

        page=location.search[6];
        showvalue=location.search[14];

        var tableHeaderRowCount = 1;
        var table = document.getElementById('employees');
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
        url = `?page=${page}&limit=${showvalue}`;

        // page=location.search[6];
        // showvalue=location.search[14];
        // loca(url);
        getapi(url);
    }
}

//pagination

let bu = document.querySelectorAll('button');
bu = addEventListener('click', (e) => {
    p = e.target.value;
    if (p != 'next' && p != 'prev' && p !== undefined) {
        page = p;
        console.log(page);
        if (page != 'prev' && page != 'next' && page !== undefined) {
            clearOldData();
            // url = `https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs?page=${page}&limit=${showvalue}`;
            url = `?page=${page}&limit=${showvalue}`;
            getapi(url);
            loca(`?page=${page}&limit=${showvalue}`);
        }
    }
    if (p == 'next') {
        next();
    }
    if (p == 'prev') {
        prev();
    }
})

// fuction for remove old tables 

function clearOldData() {
    var tableHeaderRowCount = 1;
    var table = document.getElementById('employees');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

// function for previous pagination

function prev() {
    if (page != 1) {
        page--;
        loca(`?page=${page}&limit=${showvalue}`);
        clearOldData();
        url = `?page=${page}&limit=${showvalue}`;
        getapi(url);
    }
}

// when user entry fastly then this is taking time to fetching secarch function

const search = debounce(() => searchitems());
function debounce(func, timeout = 700) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// function for search from hole API

function searchitems() {
    let text = document.getElementById('search').value;

    clearOldData();
    loca(`?search=${text}`);
    url = `?page=${page}&limit=${showvalue}&search=${text}`;
    getapi(url);

}

// function for asc and desc 

function asc_dsc() {
    let opt = document.getElementById('select').value;
    console.log(opt);
    // let value = opt.options[opt.selectedIndex].value;
    // console.log(value);
    ///blogs?sortBy=createdAt&order=desc
    if (opt != "select") {
        loca(`?sortBy=${opt}&order=desc`);
        url = `?sortBy=${opt}&order=desc`;
        clearOldData();
        getapi(url);
    }
}



