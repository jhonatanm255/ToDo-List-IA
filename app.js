

const botonEnviar = document.getElementById('btn');
const contenedorTareas = document.getElementById('tareas');

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const nuevaTareaTexto = document.getElementById('nueva-tarea').value;

    if (nuevaTareaTexto.trim() !== '') {
        const nuevaTareaElemento = document.createElement('div');
        nuevaTareaElemento.classList.add('tarea');
        
        nuevaTareaElemento.innerHTML = `
            <p>${nuevaTareaTexto}</p>
            <div class="btn-group">
                <i class='icon bx bx-check-circle'></i>
                <i class='icon bx bx-edit-alt'></i>
                <i class='icon bx bx-trash'></i>
            </div>
        `;
        
        contenedorTareas.appendChild(nuevaTareaElemento);
        document.getElementById('nueva-tarea').value = '';
    } else {
        alert('Por favor, ingresa una nueva tarea.');
    }

});
