    const botonEnviar = document.getElementById('btn');
    const contenedorTareas = document.getElementById('tareas');
    const inputNuevaTarea = document.getElementById('nueva-tarea');

    botonEnviar.addEventListener('click', (e) => {
        e.preventDefault();
        agregarTarea();
    });

    inputNuevaTarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            agregarTarea();
        };
    });

    function agregarTarea() {
        const nuevaTareaTexto = inputNuevaTarea.value.trim();

        if (nuevaTareaTexto !== '') {
            const nuevaTareaElemento = document.createElement('div');
            nuevaTareaElemento.classList.add('tarea');

            nuevaTareaElemento.innerHTML = `
                <p>${nuevaTareaTexto}</p>
                <div class="btn-group">
                    <i id='check' class='icon bx bx-check-circle'></i>
                    <i id='edit' class='icon bx bx-edit-alt'></i>
                    <i id='delete' class='icon bx bx-trash'></i>
                </div>
            `;

            contenedorTareas.appendChild(nuevaTareaElemento);
            inputNuevaTarea.value = '';
        } else {
            alert('Por favor, ingresa una nueva tarea.');
        }

        const btnCheck = document.getElementById('check');
        const contenCheck = document.querySelector('.tarea');
        btnCheck.addEventListener('click', (e) => {
                contenCheck.classList.toggle('checked');       
        });

    };

