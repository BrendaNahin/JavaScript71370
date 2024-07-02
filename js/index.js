
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardUno, .cardDos, .cardTres');
    const finalizarCompraBtn = document.getElementById('finalizarCompra');
    const resetCompraBtn = document.getElementById('resetCompra');
    const totalP = document.getElementById('total');

    let totalCompra = 0;

    cards.forEach(card => {
        const incrementoBtn = card.querySelector('.incremento');
        const decrementoBtn = card.querySelector('.decremento');
        const cantidadText = card.querySelector('.cantidad');
        const precio = parseFloat(card.querySelector('.pCard').textContent.replace('Valor: $', '').replace(',', ''));

        let cantidad = 0;

        incrementoBtn.addEventListener('click', function() {
            cantidad++;
            cantidadText.textContent = cantidad;
        });

        decrementoBtn.addEventListener('click', function() {
            if (cantidad > 0) {
                cantidad--;
                cantidadText.textContent = cantidad;
            }
        });

        finalizarCompraBtn.addEventListener('click', function() {
            totalCompra += cantidad * precio;
            totalP.textContent = totalCompra.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
            cantidad = 0;
            cantidadText.textContent = cantidad;
        });
    });

    // Resetear la compra
    
    resetCompraBtn.addEventListener('click', function() {
        totalCompra = 0;
        totalP.textContent = totalCompra.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

        cards.forEach(card => {
            const cantidadText = card.querySelector('.cantidad');
            cantidadText.textContent = '0';
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