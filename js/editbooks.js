import { conctarApi } from "../js/conectarApi.js";

const title = document.getElementById("titulo"); 
const author =  document.getElementById("autor"); 
const bookPublisher =  document.getElementById("editora");
const yearLaunch =  document.getElementById("anoLancamento");
const description =  document.getElementById("descricao");
const image =  document.getElementById("imagem"); 

const addListBooksBt = document.querySelector("[data-backlisting]"); 
const editBt = document.querySelector("[data-edit]");
let bookId = 0;

 
(function(){
    let paramUrl = location.search.split("="); 
    if(paramUrl != ""){
        bookId = paramUrl[1];
        editBooks(bookId);
    }
    
})();
async function editBooks(id){ 
    const response = await conctarApi.getById(id);
    const data = await response.json();  
    fillInFields(data);
}

function fillInFields(data){ 
    title.value = data.titulo; 
    author.value = data.autor;    
    bookPublisher.value = data.editora; 
    yearLaunch.value = data.anoLancamento;  
    description.value = data.descricao;  
    image.value = data.imagem;
} 

editBt.addEventListener("click", async() => { 
   const data = await conctarApi.updateBook(bookId,title.value,author.value,yearLaunch.value,bookPublisher.value,description.value,image.value);
   if(data.status === 200){
        window.location.href = "../index.html";
   }
})

addListBooksBt.addEventListener("click", () => {
    window.location.href = "../index.html"; 
});

export const edit = {
    editBooks
}