const elementoCambiante = document.getElementById('elemento-cambiante');

elementoCambiante.addEventListener('mouseover', () => {
    elementoCambiante.style.color = 'red';
});

elementoCambiante.addEventListener('mouseout', () => {
    elementoCambiante.style.color = 'black';
});