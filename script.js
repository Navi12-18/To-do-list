window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    
        const task = input.value;
    
        const task_el = document.createElement('div');
        task_el.classList.add('task');
    
        const task_content = document.createElement('div');
        task_content.classList.add('content');
    
        task_el.appendChild(task_content);
    
        const content_input = document.createElement('input');
        content_input.classList.add('text');
        content_input.value = task;
        content_input.type = 'text';
        content_input.setAttribute('readonly', 'readonly');

        task_content.appendChild(content_input);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const actions_edit= document.createElement('button');
        actions_edit.classList.add('edit');
        actions_edit.innerText = 'EDIT';

        const actions_delete = document.createElement('button');
        actions_delete.classList.add('delete');
        actions_delete.innerText = 'DELETE';

        task_actions_el.appendChild(actions_edit);
        task_actions_el.appendChild(actions_delete);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        actions_edit.addEventListener('click',(e)=>{
            if(actions_edit.innerText == "EDIT")
            {
                actions_edit.innerText = "SAVE";
                content_input.removeAttribute('readonly');
                content_input.focus();
            }else {
				actions_edit.innerText = "EDIT";
				content_input.setAttribute("readonly", "readonly");
			}
        });

        actions_delete.addEventListener('click',(e)=>{
            list_el.removeChild(task_el);
        })
    });
});
