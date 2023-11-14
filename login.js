let checkUserDetails=JSON.parse(localStorage.getItem("user"))
let loginForm=document.getElementsByTagName("form")
loginForm[0].addEventListener("submit",(e)=>{
    e.preventDefault()
    let userName=e.target[0].value
    let password=e.target[1].value

let login=checkUserDetails.find((userdetails)=>{
    return userdetails.username==userName&& userdetails.password==password
})
if(login){
    location.assign("./main.html")
}
else if(!login){
    alert("iincorrect user credentials")
}
})