  // console.log(JSON.parse(localStorage.getItem("see")));
        // console.log(localStorage.getItem("see"));
        let seemoregetting=JSON.parse(localStorage.getItem("see"))
        // console.log(seemoregetting);
        let container= document.getElementById("container1")
        let product_image_container= document.getElementById("product-img-card")
        let individual_product_card= document.getElementById("p-individual-container")

        // function indproduct(s){
        // s.map((val,ind,arr)=>{
            // let product_image_container=document.createElement("div")
            // product_image_container.setAttribute("class","product-img-card")
            // container.appendChild(product_image_container)

             let product_image=document.createElement("img")
            product_image.setAttribute("src",seemoregetting.image)
            product_image_container.appendChild(product_image)

            let product_title= document.createElement("p")
            product_title.setAttribute("class","ind-product-title")
            product_title.innerText=seemoregetting.title
            individual_product_card.appendChild(product_title)

            let product_description= document.createElement("p")
            product_description.setAttribute("class","ind-product-description")
            product_description.innerText=seemoregetting.description
            individual_product_card.appendChild(product_description)

           
            let product_rating=document.createElement("div")
            product_rating.setAttribute("class","ind-product-rating")
            individual_product_card.appendChild(product_rating)

            let cs_rating= document.createElement("p")
            cs_rating.innerText=seemoregetting.rating.rate
            product_rating.appendChild(cs_rating)

            let rating_icon=document.createElement("i")
            rating_icon.setAttribute("class","fa-solid fa-star")
            product_rating.appendChild(rating_icon)

            let rating_count= document.createElement("p")
            rating_count.innerText=seemoregetting.rating.count
            product_rating.appendChild(rating_count)

            let hr= document.createElement("hr")
            individual_product_card.appendChild(hr)

            let product_price=document.createElement("p")
            product_price.setAttribute("class","ind-product-price")
            product_price.innerText= `Rs.${seemoregetting.price}`
            individual_product_card.appendChild(product_price)

            let back_button=document.getElementById("back-page")
            back_button.addEventListener("click",()=>{
                window.history.back()
            })

            let buyBtn=document.createElement("button")
            buyBtn.innerHTML=`<i class="fa-solid fa-bolt-lightning"></i> Buy now`
            buyBtn.setAttribute("class","buy-btn")
            buyBtn.addEventListener("click",()=>{
                location.assign("./buy.html")
            })
            individual_product_card.appendChild(buyBtn)

        

            let wishlistBtn=document.createElement("button")
            wishlistBtn.innerHTML=`<i class="fa-regular fa-heart"></i> whishlist`
            wishlistBtn.setAttribute("class","wishlist-btn")
            wishlistBtn.addEventListener("click",()=>{
                location.assign("./buynow.html")
            })
            individual_product_card.appendChild(wishlistBtn)

            let cart_page=document.getElementById("cart-btn")
            cart_page.addEventListener("click",()=>{
                window.location.assign("/cart.html")
            })
            // })}
        // indproduct(seemoregetting)
        