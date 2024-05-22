

const urlAPI = "http://localhost:3000/livros";

async function getAll(){
    const response = await fetch(urlAPI);
    return await response;
}

async function getById(id){
    const response = await fetch(urlAPI+`/${id}`);
    return await response; 
} 

async function addBooks(id,titulo,autor,anoLancamento,editora,descricao,imagem){
    const response = await fetch(urlAPI,{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id : id,
            titulo : titulo,
            autor : autor, 
            anoLancamento: anoLancamento,
            editora : editora,
            descricao : descricao,
            imagem : imagem
        })
    }) 

   return await response;
}

async function updateBook(id,titulo,autor,anoLancamento,editora,descricao,imagem){
    const response = await fetch(urlAPI+`/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id : id,
            titulo : titulo,
            autor : autor, 
            anoLancamento: anoLancamento,
            editora : editora,
            descricao : descricao,
            imagem : imagem
        })
    })

   return await response;
}

async function deleteBook(id){
    const response = await fetch(urlAPI+`/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }, 
    });
      
     return response.status;
}

export const conctarApi = {
    getAll,
    getById, 
    addBooks,
    updateBook,
    deleteBook
}