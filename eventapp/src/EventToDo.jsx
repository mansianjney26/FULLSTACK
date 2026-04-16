export default function EventTodo(){
    /* function handleclick(name)
     {
         alert(`Button pressed by ${name}`);
    }*/
    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.value;
        const inputValue = input.trim();
        if(inputValue===""){
            alert("Task can not be empty");
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=<Span>${inputValue}</Span>

    }
    return (
        <>
        <h1> Event To Do <app></app></h1>
        <button onclick={() => handleclick("Mansi")}>Click Me</button>


        <form onSubmit={handleSubmit}> 
            <input type="text" name="task" placeholder="Add you task here"/>
            <input type="submit"> Add Task</input>
        </form>
        <ul id="taskList" onClick={handleClickList}>
            <li></li>
        </ul>
        </>
    );
}