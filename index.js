let forms=document.getElementsByTagName("form")
let userDetails=[];
forms[0].addEventListener("submit",(e)=>{
    e.preventDefault()
    let userName = e.target[0].value
    let password = e.target[1].value
    let confirmPassword = e.target[2].value
    let user = {username:userName,password:password}
    let getUserDetails = JSON.parse(localStorage.getItem("user")) || []
    
    let duplicate= getUserDetails.find((username)=>{
        return username.username==userName;
    })
    
    if(password!==confirmPassword){
        alert("Password and confirm password mismatch")
    }
    if(userName.match(/[a-z&&A-Z]{6,15}/) && password.match(/[A-Z&&a-z&&\d&&@]{6,15}/) && password==confirmPassword){
        if(duplicate){
            alert("userName already exists try with NewUser name or please try to login")
        }else{
        userDetails.push(user)
        localStorage.setItem("user",JSON.stringify(userDetails))
        alert("user registered successfully")
        }
        
    }
    
    if(password.length<6){
        alert("password must contain atleast 6 characters length")
    }
    if(userName.length<6){
        alert("username must contain atleast 6 characters length")
    }
    
})