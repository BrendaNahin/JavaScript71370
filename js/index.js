
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardUno, .cardDos, .cardTres');
    const finalizarCompraBtn = document.getElementById('finalizarCompra');
    const resetCompraBtn = document.getElementById('resetCompra');
    const totalP = document.getElementById('total');

    let totalCompra = 0;

    cards.forEach(card => {
        const incrementBtn = card.querySelector('.increment');
        const decrementBtn = card.querySelector('.decrement');
        const quantityText = card.querySelector('.quantity');
        const price = parseFloat(card.querySelector('.pCard').textContent.replace('Valor: $', '').replace(',', ''));

        let quantity = 0;

        incrementBtn.addEventListener('click', function() {
            quantity++;
            quantityText.textContent = quantity;
        });

        decrementBtn.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                quantityText.textContent = quantity;
            }
        });

        finalizarCompraBtn.addEventListener('click', function() {
            totalCompra += quantity * price;
            totalP.textContent = totalCompra.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
            quantity = 0;
            quantityText.textContent = quantity;
        });
    });

    // Resetear la compra
    resetCompraBtn.addEventListener('click', function() {
        totalCompra = 0;
        totalP.textContent = totalCompra.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

        cards.forEach(card => {
            const quantityText = card.querySelector('.quantity');
            quantityText.textContent = '0';
        });
    });
});


function login(){

    const USUARIO = document.getElementById('usuario').value;
    const PASSWORD = document.getElementById('password').value;

    if(USUARIO && PASSWORD) {
        localStorage.setItem('usuario', USUARIO);
        localStorage.setItem ('password', PASSWORD);   
    }

}