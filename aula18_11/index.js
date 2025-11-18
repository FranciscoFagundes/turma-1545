// localStorage.setItem("nome", "Luara");

// localStorage.setItem("cor favorita", "amarelo");

// localStorage.getItem("nome");

// console.log(localStorage.getItem("nome"));


// let items = [
//     {nome: "Chocolate", preco: 10, quantidade: 10},
//     {nome: "Coca-cola", preco: 5, quantidade: 10},
//     {nome: "Coxinha", preco: 6, quantidade: 10},
//     {nome: "Empada", preco: 5, quantidade: 10},
// ]


// let carrinhoDeCompras = [];


// carrinhoDeCompras.push(items[0]);


// console.log(carrinhoDeCompras);

// localStorage.setItem("carrinho", JSON.stringify(carrinhoDeCompras));

// console.log("Exibir carrinho do Local Storage: ", localStorage.getItem("carrinho"));

// let carrinhoDepoisDoParse = JSON.parse(localStorage.getItem("carrinho"));

// console.log(carrinhoDepoisDoParse);



// CRUD - Create Read Update Delete




// GET POST PUT(ou PATCH) DELETE

const API_KEY = "$2a$10$cxH.TVx123i.Nf5VI9BRqOGdf2ufvt0EmQaCd/kFaX7fFTDkHNPJu";
const BIN_ID = "691cde50ae596e708f617083";
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;



const taskTitle = document.getElementById('todoTitle');
const taskDescription = document.getElementById('todoDescription');
const addButton = document.getElementById("addButton");
const list = document.getElementById("todoList");

let storedList = [];

let listFromApi = [];

// addButton.addEventListener('click', () => {
   
//    storedList = JSON.parse(localStorage.getItem('lista')) || [];

//    let id = storedList.length;

//    let newTask = {id: id, title: taskTitle.value, description: taskDescription.value, done: false};
//    storedList.push(newTask);

//    localStorage.setItem("lista", JSON.stringify(storedList));

//    taskTitle.value = "";
//    taskDescription.value = "";

//    id++;

// });


async function loadTasks(){
    const response = await fetch(`${BASE_URL}/latest`, {
        headers:{
            "X-Master-Key": API_KEY
        }
    })

    const data = await response.json();
    listFromApi = data.record.listFromApi || [];

    console.log("Chamando API:", listFromApi);
    showTasks();
}



async function saveTasks(){
    await fetch(`${BASE_URL}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
        },
        body: JSON.stringify({ listFromApi })
    })

    await showTasks();
}


addButton.addEventListener("click", async () => {
    let id = Date.now();

    let newTask = {id: id, title: taskTitle.value, description: taskDescription.value, done: false};

    listFromApi.push(newTask);

    await saveTasks();
})


const showTasks = async() => {

    list.innerHTML = "";

    //let tasksList = JSON.parse(localStorage.getItem('lista')) || [];

    listFromApi.map(tarefa => {
        const li = document.createElement("li");
        li.innerHTML = `<span style="text-decoration: ${tarefa.done ? 'line-through' : ''}"> 
                            Título: ${tarefa.title} Descrição: ${tarefa.description}
                        </span> 
                        <input 
                            id=${tarefa.id} 
                            type="checkbox" 
                            ${tarefa.done ? "checked" : ""}
                            onchange="changeStatus(${tarefa.id})" 
                        />`;
        list.appendChild(li);
    })

}


const changeStatus = (id) => {

    let tasksList = JSON.parse(localStorage.getItem('lista')) || [];

    tasksList = tasksList.map( tarefa => {
        if(tarefa.id === id){
            return {...tarefa, done: !tarefa.done}
        }
        return tarefa;
    })

    localStorage.setItem('lista', JSON.stringify(tasksList));
    showTasks();
   
}



loadTasks();