function showSection(sectionId) {
    document.querySelectorAll('.products').forEach(function(section) {
        section.style.display = 'none';
    });

    document.querySelector(`.${sectionId}-section`).style.display = 'block';
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    let found = false;

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });
    
    if (!found) {
        console.log("Nenhum produto encontrado");
    }
}

