const form = document.getElementById('task-form');
const tasklist = document.getElementById('tarefas');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputfield = document.getElementById('input-tarefa');
    addTarefa(inputfield.value);
    form.reset();

    
    function addTarefa (descricao) {
        if (descricao == "") {
            alert("Preencha o campo, por favor");
        } else{

            const tarefaContainer = document.createElement('div');
            const novatarefa = document.createElement('input');
            const labeltarefa = document.createElement('label');
            const tarefaNode = document.createTextNode(descricao);
            
            novatarefa.setAttribute('type', 'checkbox');    
            novatarefa.setAttribute('name', descricao);
            novatarefa.setAttribute('id', descricao);
            
            labeltarefa.setAttribute('for', descricao);
            labeltarefa.appendChild(tarefaNode);
            
            tarefaContainer.classList.add('tarefa-item');
            tarefaContainer.appendChild(novatarefa);
            tarefaContainer.appendChild(labeltarefa);
            
            tasklist.appendChild(tarefaContainer);
            }
    }
});
