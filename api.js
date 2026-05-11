// Funzione async per leggere il JSON
export async function getProducts(){
    try{
        const response = await fetch('../products.json');
        if (!response.ok) {
            throw new Error("Errore nel caricamento del JSON");
        }
        const data = await response.json();
        return data;
    } 
    catch (error){
        console.error(error);
    }
}