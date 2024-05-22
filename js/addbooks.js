
import { conctarApi } from "../js/conectarApi.js";

const title = document.getElementById("titulo"); 
const author =  document.getElementById("autor"); 
const bookPublisher =  document.getElementById("editora");
const yearLaunch =  document.getElementById("anoLancamento");
const description =  document.getElementById("descricao");
const image =  document.getElementById("imagem"); 
 
const addListBooksBt = document.querySelector("[data-backlisting]");
const clearBt = document.querySelector("[data-clear]");
const addBooksBt = document.querySelector("[data-add]");


addListBooksBt.addEventListener("click", () => {
    window.location.href = "../index.html"; 
});

clearBt.addEventListener("click", () => { 
    title.value = ""; 
    author.value = "";    
    bookPublisher.value = ""; 
    yearLaunch.value = "";  
    description.value = "";  
    image.value = "";
});

addBooksBt.addEventListener("click", async(e) => { 
    let id = crypto.randomUUID();
    debugger
   const data = await conctarApi.addBooks(id,title.value,author.value,yearLaunch.value,bookPublisher.value,description.value,image.value);
   if(data.status === 201){ 
    window.location = "http://127.0.0.1:5500/index.html";
   }
})