function create(){
    const addlist = document.getElementById("addlist");
    if (addlist.value==""){
        alert("Empty note cannot be added.")
    }
    else{
        const notebox = document.createElement("li");
        const para = document.createElement("div");

        para.textContent = addlist.value
        para.classList.add("notes")
        
        const remove = document.createElement("button");
        const modify = document.createElement("button");
        remove.classList.add("btn");
        modify.classList.add("btn");
        remove.innerHTML = "Remove"
        modify.innerHTML = "Modify"
        
        remove.addEventListener('click', function() {
            notebox.remove(); // This will remove the entire notebox
        });

        modify.addEventListener('click',function(){
            addlist.value = para.textContent;
            notebox.remove();
        });

        notebox.appendChild(para);
        notebox.appendChild(remove);
        notebox.appendChild(modify);
        notebox.classList.add("notebox");
        document.getElementById("list").appendChild(notebox);
        addlist.value = ""

    }
}
document.querySelector(".btn").onclick = create; 