let cartgetting=localStorage.getItem("add")
        console.log(cartgetting)
        let cart=cartgetting!==null?JSON.parse(cartgetting):[]
        console.log(cart.length)
        let divgetting=document.getElementById("cartPage")

        let clearcart=document.getElementById("clearbtn")
        let clearcartbtn=document.createElement("button")
        clearcartbtn.setAttribute("class","clr-btn")
        clearcartbtn.innerText="clear cart"
        clearcartbtn.addEventListener("click",()=>{
            localStorage.removeItem("add")
            divgetting.style.display="none"

        })
        clearcart.appendChild(clearcartbtn)


       cart.filter((val,ind,arr)=>{
        let cart_individual_container= document.createElement("div")
        cart_individual_container.setAttribute("class","cart-eachProduct-card")
        divgetting.appendChild(cart_individual_container)

        let cart_image_container=document.createElement("div")
        cart_image_container.setAttribute("class","cart-image-container")
        cart_individual_container.appendChild(cart_image_container)

        let cart_image=document.createElement("img")
        cart_image.setAttribute("src",val.image)
        cart_image_container.appendChild(cart_image)

        let cart_title=document.createElement("p")
        cart_title.setAttribute("class","product-title")
        cart_title.innerText=val.title
        cart_individual_container.appendChild(cart_title)

        let cart_description=document.createElement("p")
        cart_description.setAttribute("class","product-description")
        cart_description.innerText=val.description
        cart_individual_container.appendChild(cart_description)

        let cart_price=document.createElement("p")
        cart_price.setAttribute("class","product-price")
        cart_price.innerText=`RS. ${val.price}`
        cart_individual_container.appendChild(cart_price)

        let para=document.createElement("p")
        para.setAttribute("class","return-policy")
        para.innerHTML=`<i class="fa-solid fa-rotate-left"></i> <span>7 days </span> return available`
        cart_individual_container.appendChild(para)

        let del_btn=document.createElement("button")
        del_btn.innerHTML=`<i class="fa-solid fa-xmark"></i>`
        del_btn.setAttribute("class","del-btn")
        cart_individual_container.appendChild(del_btn)
        del_btn.addEventListener("click",()=>{
            cart_image_container.style.display="none"
            cart_title.style.display="none"
            cart_description.style.display="none"
            cart_price.style.display="none"
            del_btn.style.display="none"
            para.style.display="none"
            cart_individual_container.style.display="none"
        })

        // let buyBtn=document.createElement("button")
        // buyBtn.innerHTML=`<i class="fa-solid fa-bolt-lightning"></i> Buy now`
        // buyBtn.setAttribute("class","buy-btn")
        // buyBtn.addEventListener("click",()=>{
        //     location.assign("./buy.html")
        // })
        // cart_individual_container.appendChild(buyBtn)
        // let clear_cart=document.createElement("button")
        // clear_cart.setAttribute("class","clear-cart-btn")
        // clear_cart.innerText="Clear cart"
        // clear_cart.addEventListener("click",()=>{
        //     localStorage.removeItem("add")
        //     // localStorage.clear()
        //     divgetting.style.display="none"
        //     clear_cart.style.display="none"
        // })
        // divgetting.appendChild(clear_cart)

        
       })