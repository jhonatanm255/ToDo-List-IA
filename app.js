const botonEnviar = document.getElementById('btn');
const contenedorTareas = document.getElementById('tareas');
const inputNuevaTarea = document.getElementById('nueva-tarea');

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    agregarTarea();
});

//FUNCION PARA AGREGAR LAS TAREAS PRESIONANDO LA TECLA "ENTER
inputNuevaTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        agregarTarea();
    };
});

// FUNCION PARA AGREGAR LAS TAREAS
function agregarTarea() {
    const nuevaTareaTexto = inputNuevaTarea.value.trim();

    if (nuevaTareaTexto !== '') {
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
        inputNuevaTarea.value = '';

        // EVENTO PARA MARCAR LAS TAREAS COMO HECHAS
        const btnCheck = nuevaTareaElemento.querySelector('.bx-check-circle');
        btnCheck.addEventListener('click', () => {
            nuevaTareaElemento.classList.toggle('checked');
        });

        // EVENTO CLICK PARA EDITAR TAREAS
        const btnEdit = nuevaTareaElemento.querySelector('.bx-edit-alt');
        btnEdit.addEventListener('click', () => {
            const textoActual = nuevaTareaElemento.querySelector('p').textContent;
            const nuevoTexto = prompt('Editar tarea:', textoActual);
            if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
                nuevaTareaElemento.querySelector('p').textContent = nuevoTexto;
            }
        });

        // EVENTO CLICK PARA ELIMINAR TAREAS
        const btnDelete = nuevaTareaElemento.querySelector('.bx-trash');
        btnDelete.addEventListener('click', () => {
            contenedorTareas.removeChild(nuevaTareaElemento);
        });
    } else {
        alert('Por favor, ingresa una nueva tarea.');
    }
};


    
    