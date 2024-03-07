const tasks = ['Задача 1'];

function add(task){
    tasks.push(task);
}

function Remove(task){
    const index = task.indexOf(task);
    if(index == -1){
        return;
    }
    tasks.splice(index, 1);
}

function Priority(task){
    const index = task.indexOf(task);
    if(index == -1){
        return;
    }
    const oldTask = tasks[index];
    tasks.splice(index,1);
    tasks.unshift(oldTask);
}