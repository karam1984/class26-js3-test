const url="https://reqres.in/api/users";
async function respons(){
    const res=await fetch(url)
    const data= await res.json()
    return data   
}
async function call(){
    try{
        const data=await respons();
        console.log(data)
        data.data.forEach(res => {
            let ul=document.createElement("ul");
            if(res.id<=3){
            
                document.body.appendChild(ul);
                ul.innerHTML = `<li>${res.first_name}</li> <li>${res.last_name}</li>`
                console.log(ul)
            }
        });
    } catch(err){
       console.error('the error is',err)
    }

}
call()