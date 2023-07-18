
const btnTodos = document.querySelector('.todos');
const btnSombreros = document.querySelector('.sombreros');
const btnPoncho = document.querySelector('.poncho');
const btnPulseras = document.querySelector('.pulseras');

const contenedorArticulos = document.querySelector('.articulos')
document.addEventListener('DOMContentLoaded',()=>{
    articulos();
    
});

const articulos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.articulo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const sombreros = platillosArreglo.filter(ensaladas=> ensaladas.getAttribute('data-platillo') === 'sombreros');
    const ponchos = platillosArreglo.filter(sanduches => sanduches.getAttribute('data-platillo') === 'poncho');
    const pulseras = platillosArreglo.filter(bebidas => bebidas.getAttribute('data-platillo') === 'pulseras');
    

    mostrarArticulos(sombreros, ponchos, pulseras, platillosArreglo);

}

const mostrarArticulos = (sombreros, ponchos, pulseras, todos) =>{
    
    btnSombreros.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        sombreros.forEach(sombreros=> contenedorArticulos.appendChild(sombreros));
    });

    btnPoncho.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        ponchos.forEach(ponchos=> contenedorArticulos.appendChild(ponchos));
    });

    btnPulseras.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        pulseras.forEach(pulseras=> contenedorArticulos.appendChild(pulseras));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorArticulos);
        todos.forEach(todo=> contenedorArticulos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}