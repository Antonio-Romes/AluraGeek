import { conctarApi } from "../js/conectarApi.js";

const spanTitle =  document.querySelector("[data-span-titulo]"); 
const spanAuthor =  document.querySelector("[data-span-autor]"); 
const spanBookPublisher =  document.querySelector("[data-span-editora]");
const spanYearLaunch =  document.querySelector("[data-span-anoLancamento]");
const spanDescription =  document.querySelector("[data-span-descricao]");
const spanImage =  document.querySelector("[data-span-imagem]"); 

const addListBooksBt = document.querySelector("[data-backlisting]"); 
const deleteBt = document.querySelector("[data-delete]");
let bookId = 0; 
 
(async function(){
    let paramUrl = location.search.split("=");

    if(paramUrl != ""){
        bookId = paramUrl[1];
       await getBooksById(bookId); 
    }
    
})();

async function getBooksById(id){  
    const response = await conctarApi.getById(id);

    if(response.status !== 404 ){
        const data = await response.json();  
        fillInFields(data);
    }
    
}

function fillInFields(data){ 
    spanTitle.textContent = data.titulo; 
    spanAuthor.textContent = data.autor;    
    spanBookPublisher.textContent = data.editora; 
    spanYearLaunch.textContent = data.anoLancamento;  
    spanDescription.textContent = data.descricao;  
    spanImage.textContent = data.imagem;  
} 
 
deleteBt.addEventListener("click", async () => { 
   const data =  await conctarApi.deleteBook(bookId);
     window.location.href = "../index.html"; 
});

addListBooksBt.addEventListener("click", () => { 
    window.location.href = "../index.html";
});