import{conctarApi} from "../js/conectarApi.js"; 

let lastId = 0;

const addBt = document.querySelector("[data-addbooks]");
const listOfBooks = document.querySelector("[data-listofbooks]");


(function(){
    getAll(); 
})();

async function getAll(){
    const response = await  conctarApi.getAll();
    const data = await response.json();
    
    createHtmlElement(data);  
}

addBt.addEventListener('click', () => {
    window.location.href = "../pages/addbooks.html";  
});

function createHtmlElement(data){
    data =   data.reverse();
    lastId = data[0].id;
    data.forEach(element => {
        listOfBooks.innerHTML += `
        <section class="section__description">
            <div class="description__image">
                <img class="image" src="${element.imagem}" alt="" /> 
            </div>
            <div class="description"> 
                <h2 class="description__title">${element.titulo}</h2>
                <p class="description__author"><strong>Autor : </strong>${element.autor}</p>
                <p class="description__yearlaunch"><strong>Ano : </strong>${element.anoLancamento}</p>
                <p class="description__description"> <strong>Descrição : </strong><br>${element.descricao}</p>
                <div class="description__buttons">
                <button class="description__buttons__button" type="button" data-edit data-id="${element.id}">
                    <img class="image" src="../img/mdi--file-edit.png" alt="" />  
                </button>
                <button class="description__buttons__button" type="button" data-delete data-id="${element.id}">
                <img class="image" src="../img/fluent--delete-lines-20-filled.png" alt="" />  
            </button>
                </div>
            </div>
        </section>
        `;
    });

    editBooks();
    deleteBooks();
}

function editBooks(){
    const buttonsEdit = document.querySelectorAll("[data-edit]");

    buttonsEdit.forEach(element => {
        element.addEventListener('click', async () => { 
             window.location.href = `../pages/editbooks.html?id=${element.getAttribute('data-id')}`;
        });
    })
}

function deleteBooks(){
    const deleteBt = document.querySelectorAll("[data-delete]");
    deleteBt.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = `../pages/delete.html?id=${element.getAttribute('data-id')}`;
        });
    })
}

 