
let btn = document.createElement("BUTTON");
btn.innerText="click"
document.body.appendChild(btn);

function photo(){
let img = document.createElement("img");
img.src="https://avatars3.githubusercontent.com/u/20858568?s=200&v=4"
document.body.appendChild(img)
butt()
}
function butt(){
btn.style.display="none";
}
btn.addEventListener("click",photo);