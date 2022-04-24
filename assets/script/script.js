addEventListener('load', () => {
    const form = document.getElementById('tform');
    const input = document.getElementById('tinput');
    const list = document.getElementById('tarefas');

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const tarefa = input.value;
        
        if(!tarefa) {
            alert("Pro favor preencha a tarefa");
            return;
        }

        const tarefa_el = document.createElement("div");
        tarefa_el.classList.add("tarefa");
        
        const tarefa_content_el = document.createElement("div");
        tarefa_content_el.classList.add("content");
        
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.classList.add("checkbox");
        
        const tarefa_input = document.createElement("input");
        tarefa_input.classList.add("texto");
        tarefa_input.type = "text";
        tarefa_input.value = tarefa;
        tarefa_input.setAttribute("readonly", "readonly");
        
        
        
        tarefa_content_el.appendChild(cb);
        
        tarefa_content_el.appendChild(tarefa_input);
        
        tarefa_el.appendChild(tarefa_content_el);
        
        list.appendChild(tarefa_el);
        
        input.value = "";
        
        const check = document.getElementsByClassName("checkbox");

        
    });
    check.addEventListener('click', () => {
        const texto = document.getElementsByClassName("texto")
        texto.style.textDecoration = "line through"
        texto.focus();
    });
    
});


