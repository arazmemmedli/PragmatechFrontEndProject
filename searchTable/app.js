let dataTable = [
    {
        id:1,
        name:"Araz",
        surname:"Memmedli",
        mail:"arazmemmedli@gmail.com"
    },
    {
        id:2,
        name:"Ulvi",
        surname:"Hebibov",
        mail:"ulvihebibov@gmail.com"
    },
    {
        id:3,
        name:"Nurlan",
        surname:"Guleliyev",
        mail:"nurlanguleliyev@gmail.com"
    }
]


let searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", (e) => {
    let value = e.target.value;
    let data = searchPanel(value,dataTable)
    getData(data)
})


function searchPanel(value,data) {
    let searchArray = [];
    
    for(let i=0;i < data.length;i++) {
        value = value.toLowerCase();
        let name = data[i].name.toLowerCase();
        if(name.includes(value)) {
            searchArray.push(data[i]);
        }
    }
    return searchArray;
    
}

function getData(datas) {
    let myTable = document.querySelector("#table");
    myTable.innerHTML = "";
    for(let data in datas) {
        let row = `
        <tr>
        <th scope="row">${datas[data].id}</th>
        <td>${datas[data].name}</td>
        <td>${datas[data].surname}</td>
        <td>${datas[data].mail}</td>
        </tr>
        `
        myTable.innerHTML += row;
    }
}
getData(dataTable)