import { getProducts } from './api.js';
const container = document.getElementById('products-container');
const loader = document.getElementById('loader');

// Funzione per creare le card
function createCard(product){
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h2>${product.nome}</h2>
    <p><strong>Categoria:</strong> ${product.categoria}</p>
    <p class="price">€ ${product.prezzo}</p>`;
    container.appendChild(card);
}

// Funzione principale async
async function loadProducts(){
    
    // Loader visibile per 2 secondi
    setTimeout(async () =>{
        const products = await getProducts();
        products.forEach(product => {
            createCard(product);
        });
        
        // Nasconde loader
        loader.style.display = 'none';
    }, 2000);
}
loadProducts();