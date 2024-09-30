let taskInput = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#addTaskBtn");
let span = document.querySelector("span");
let emptyTask = document.querySelector("#emtyTask");
let allTasks = document.querySelector("#allTasks");
let addedTask = document.querySelector(".suc")
let chackedCounter = document.querySelector(".allChaked");
let pendingCounter = document.querySelector(".pendingCounter");
let invalidChar = document.querySelector(".invalidChar");
let emptyChar = document.querySelector(".emptyChar");
let exist = document.querySelector(".exist");
let checkNumber = 0;
let pendingNumber = 0;
let theemsBtn = document.querySelector("#theemsBtn");
let card = document.querySelectorAll(".card-body");
let addTaskModalbtn = document.querySelector("#addTaskModalbtn");
let closeAddbtn = document.querySelector("#closeAddbtn");
let addTaskModal = document.querySelector(".addTaskModal");
let del = document.querySelector(".del");
let deletebtn = document.querySelector("#deletebtn");
let closeDeletebtn = document.querySelector("#closeDeletebtn");
let deleteTaskModal = document.querySelector(".deleteTaskModal");
let clearAllbtn = document.querySelector("#clearAllbtn");
let closeclearbtn = document.querySelector("#closeclearbtn");
let clearTaskModal = document.querySelector(".clearTaskModal");
let clearBtn = document.querySelector("#clearBtn");
let done = document.querySelector(".done");
let alldel = document.querySelector(".alldel");


let changeTheem = ()=>{

    if (theemsBtn.classList.contains("btn-dark")){
        theemsBtn.innerHTML = "Ligth Mood"
    }else{
        theemsBtn.innerHTML = "Dark Mood"
    }
      for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("dark");
      }
    document.body.classList.toggle("dark");
    theemsBtn.classList.toggle("btn-dark");
    theemsBtn.classList.toggle("btn-light");
}

let checkEmpty = ()=>{
    if(allTasks.children.length == 0){
        emptyTask.classList.remove("none")
        clearBtn.classList.add("none")
    }else{
        emptyTask.classList.add("none")
        clearBtn.classList.remove("none");
    }
}


let addTask = ()=>{
    let taskVlue = taskInput.value;
    
    if (taskVlue.trim() == "") {
        // check if input is empty
        emptyChar.classList.remove("none");
        invalidChar.classList.add("none");
        exist.classList.add("none");

        taskInput.classList.add("invalid");
        // check if input is empty

    }else if (taskVlue.length < 3 || taskVlue.length > 20) {
        // check leingth
      invalidChar.classList.remove("none");
      emptyChar.classList.add("none");
      exist.classList.add("none");

      taskInput.classList.add("invalid");
    //   check leingth

    }else if (allTasks.classList.contains(taskVlue)) {
      // check if task exist

      exist.classList.remove("none");
      emptyChar.classList.add("none");
      invalidChar.classList.add("none");
      
      taskInput.classList.add("invalid");
      // check if task exist
      
    } else{
        
        // add task
        emptyTask.classList.add("none");
        exist.classList.add("none");
        emptyChar.classList.add("none");
        invalidChar.classList.add("none");
        taskInput.classList.remove("invalid");
    
        // random colors
    
          let randomColor = () => {
            let colors = Math.floor(Math.random() * 21345678).toString(16);
            if (colors.length < 6) {
              colors += "a";
            }else if (colors.length > 6){
                colors = colors.splice(6)
            }
             return colors;
          };
    
          let colors = randomColor();
    
        // random colors
    
          allTasks.innerHTML += `
            <div style="background-color:#${colors} ;" class=" alert a task pending">
            ${allTasks.childElementCount + 1}-  ${taskVlue}
            <i class='text-danger float-end fa-solid fa-trash-can delete'></i>
            </div>
            `;
    
          if (addedTask.classList.contains("added")) {
            addedTask.classList.remove("added");
            addedTask.classList.add("suc");
          }
    
          addedTask.classList.add("added");
          addedTask.classList.remove("suc");
          setTimeout(() => {
            addedTask.classList.remove("added");
            addedTask.classList.add("suc");
          }, 2000);
          taskInput.value = "";
          pendingNumber += 1;
    
          pendingCounter.innerHTML = pendingNumber;
          chackedCounter.innerHTML = checkNumber;
    
          allTasks.classList.add(taskVlue)
          addTaskModal.classList.toggle("none");
        // add task

    }
    
}

addTaskBtn.addEventListener("click", addTask);


document.addEventListener("click", (e)=>{

// delete task
  if (e.target.classList.contains("delete")) {

    deleteTaskModal.classList.remove("none")
    
    let cls = e.target.parentElement.innerText.slice(3);
    
    deletebtn.addEventListener("click",()=>{
      e.target.parentElement.remove();

      del.classList.add("deleted");
      del.classList.remove("del");
      setTimeout(() => {
        del.classList.remove("deleted");
        del.classList.add("del");
      }, 2000);

      allTasks.classList.remove(cls);

      

      // Counters

      if (e.target.parentElement.classList.contains("pending")) {
        pendingNumber -= 1;
        pendingCounter.innerHTML = pendingNumber;
        chackedCounter.innerHTML = checkNumber;
      } else if (e.target.parentElement.classList.contains("checked")) {
        checkNumber -= 1;
        pendingCounter.innerHTML = pendingNumber;
        chackedCounter.innerHTML = checkNumber;
      }
      // Counters

      deleteTaskModal.classList.add("none");
    })

    closeDeletebtn.addEventListener("click", ()=>{
        deleteTaskModal.classList.add("none");
    })
    
    
}
checkEmpty();
//   delete task




  
})


// Check tasks
document.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("task")){
        e.target.classList.toggle("checked");
        e.target.classList.toggle("pending");
    }
    
    if (e.target.classList.contains("pending")) {
        checkNumber -= 1;
        pendingNumber += 1;
        pendingCounter.innerHTML = pendingNumber;
        chackedCounter.innerHTML = checkNumber;
    } else if (e.target.classList.contains("checked")) {
        checkNumber += 1;
        pendingNumber -= 1;
        pendingCounter.innerHTML = pendingNumber;
        chackedCounter.innerHTML = checkNumber;
    };
    
    if(pendingNumber == 0 && checkNumber > 0){
    
        done.classList.add("complete");
        done.classList.remove("done");
        setTimeout(() => {
          done.classList.remove("complete");
          done.classList.add("done");
        }, 2000);
        
    }
});


// Check tasks


// clear tasks

clearBtn.addEventListener("click",()=>{
    clearTaskModal.classList.remove("none")


    clearAllbtn.addEventListener("click", () => {
      allTasks.innerHTML = "";

      alldel.classList.add("alldeleted");
      alldel.classList.remove("alldel");
      setTimeout(() => {
        alldel.classList.remove("alldeleted");
        alldel.classList.add("alldel");
      }, 2000);

      // Counters

      pendingNumber = 0;
      pendingCounter.innerHTML = pendingNumber;
      chackedCounter.innerHTML = checkNumber;

      checkNumber = 0;
      pendingCounter.innerHTML = pendingNumber;
      chackedCounter.innerHTML = checkNumber;

      // Counters

      clearTaskModal.classList.add("none");
    });

    closeclearbtn.addEventListener("click", ()=>{
        clearTaskModal.classList.add("none");
    })
    
    

checkEmpty();
})

// clear tasks


// dark and light mode

theemsBtn.addEventListener("click", changeTheem)

addTaskModalbtn.addEventListener("click", ()=>{
    addTaskModal.classList.toggle("none")
})

closeAddbtn.addEventListener("click", () => {
  addTaskModal.classList.toggle("none");

  exist.classList.add("none");
  emptyChar.classList.add("none");
  invalidChar.classList.add("none");
  taskInput.classList.remove("invalid");
  taskInput.value = "";

});



// dark and light mode