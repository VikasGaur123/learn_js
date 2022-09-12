// api url

const api_url =
 "https://631f09a058a1c0fe9f5e599a.mockapi.io/blogs";
async function getapi(url) {
 const response = await fetch(url);
 var data = await response.json();
 console.log(data,"daresaearea");
 show(data);
}
let sno=1;
// Calling that async function
getapi(api_url);
// Function to define innerHTML for HTML table
function show(data) {



 //using foreach loop

//  for(i=0;i<data.length;i++)
//  {
//     console.log(data,'dhfjah');
//     document.getElementById("employees").innerHTML = `<tr><td>${data}</td>
//       <td>${data.createdAt[i]} </td>
//       <td>${data.title[i]}</td>
//       <td>${data.image[i]}</td>
//       <td>${data.content[i]}</td>  </tr>`;
//  }

 data.forEach(curr => {
    addRowTable(curr.id,curr.createdAt,curr.title,curr.image);
    // document.getElementById("employees").innerHTML = `<tr><td>${curr.id}</td>
    //   <td>${curr.createdAt} </td>
    //   <td>${curr.title}</td>
    //   <td>${curr.image}</td>
    //   <td>${curr.content}</td>  </tr>`;
 });
}
function addRowTable(ids,createdAt,title,image) {
    var tableBody = document.getElementById("employees");

    var newRow = tableBody.insertRow();
    var serialNo = newRow.insertCell();
    serialNo.innerHTML = sno ;
    sno++;
    var createdAtt = newRow.insertCell();
    createdAtt.innerHTML = createdAt;
    var titles = newRow.insertCell();
    titles.innerHTML = title;
    var images = newRow.insertCell();
    images.innerHTML = `<image src="${image}">`;
}
