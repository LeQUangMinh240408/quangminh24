let products1 = {
    data: [
        {
            product_id: 1,
            name: "NÀNG DÂU NHÀ HỌ KYOUGANE",
            image: "img/nang-dau-nha-ho-kyougane.jpg",
          
        },

        {
            product_id: 2,
            name: "Yuji Itadori",
            image:"img/đầu gộ.png"
         
            
        },

        {
            product_id: 3,
            name: "josh ",
            image: "img/josh.png"
            
        },

        {
            product_id: 4,
            name: "Golden Fedora",
 
            image: "img/mũ vàng.png"
        },

        {
            product_id: 5,
            name: "Huh-huh-Cat-Cat ",
    
            image: "img/huh.png"
        },

        {
            product_id: 6,
            name: "Dominus Astra-glaxi",

            image: "img/dominus.png"
        },

        {
            product_id: 7,
            name: "Dominus Pittacium",
 
            image: "img/T dominus.png"
        },

        {
            product_id: 8,
            name: "MEGUMIN CLOTHINg",
   
            image: "img/áo megu.png"
        },

        {
            product_id: 9,
            name: "Shadow Cloak",

            image: "img/atomic.png"
        },

      

        {
            product_id: 10,
            name: "Void Samurai",

            image: "img/samurai.png"
        },

        {
            product_id: 11,
            name: "Unluck Sword",
    
            image: "img/sword.png"
        },

        {
            product_id: 12,
            name: "Black Armor",
     
            image: "img/armor form.png"
        },

        {
            product_id: 13,
            name: "Boba-boba-boba",

            image: "img/tà tữa.png"
        },

        {
            product_id: 14,
            name: "Lost in the Backrooms ",

            image: "img/roo,.png"
        },

        {
            product_id: 15,
            name: " Anime Hair Black & White",

            image: "img/đẹp vcl.png"
        },

        {
            product_id: 16,
            name: " Monochrome Cyber Scythe",

            image: "img/scyther.png"
        },
    ]
}
for (let items of products1.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("a");
    name.setAttribute("href", items.link)
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);
    
   
    let btn = document.createElement("button")
    btn.setAttribute("onclick", "return addToCart(" + items.product_id + ");")
    btn.innerHTML = "Đọc"

    container.appendChild(btn)

    card.appendChild(container);
    document.getElementById("products1")?.appendChild(card);
}
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")
    let prices = document.querySelectorAll('h6')

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
    
            
        }
    })
})
