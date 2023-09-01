const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".Create");
let notes = document.querySelectorAll(".input-box");

function shownotes()
{
    notescontainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updatestorage()
{
    localStorage.setItem("notes",notescontainer.innerHTML);

}

createBtn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "del.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})


notescontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG")
    {
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "P")
    {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function()
            {
                updatestorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>
{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();

    }
})