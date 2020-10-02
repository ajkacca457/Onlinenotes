const edit =document.querySelector(".edit");
const del=document.querySelector(".delete");
const addnote=document.querySelector(".addnote");

const tarea=document.querySelector(".tarea");
const content=document.querySelector(".content");
const notecontainer=document.querySelector(".notes-container");
const btncont=document.querySelector(".title-btn");
const title=document.querySelector(".title")
const input=document.createElement("input");



notecontainer.addEventListener("click",function(e){
if(e.target.classList.contains("edit")){
const allcontent=e.target.parentElement.parentElement.parentElement.nextElementSibling;
const alltarea=e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling;
alltarea.classList.toggle("hidden")
allcontent.classList.toggle("hidden")

alltarea.addEventListener("input",(e)=>{
const {value}= e.target;
allcontent.innerHTML= marked(value);
})
}
else if(e.target.classList.contains("delete")){
e.path[4].remove()
}

if (e.target.classList.contains("title")){
  e.path[1].replaceChild(input,title);
  console.log("not working")

input.addEventListener("blur",()=>{
  title.textContent=input.value;
  input.remove();
  btncont.prepend(title);
})
}


})

addnote.addEventListener("click",function(){

const newnote=document.createElement("div");
newnote.classList.add("notes")
newnote.innerHTML= `
<div class="header">
  <div class="title-btn t-color">
    <h4>General Note</h4>
    <div class="btns">
        <i class="fas fa-pen-square edit"></i>
        <i class="fas fa-trash margin-left delete"></i>
  </div>
  </div>
</div>
    <div class="content hidden"></div>
      <textarea name="name" class="tarea"></textarea>`
  newnote.style.marginBottom="30px";

notecontainer.appendChild(newnote);
})
