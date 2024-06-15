
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC57MK8_37i6nSZT8m93i70QiSXyBw3RZ4",
    authDomain: "login-36ed0.firebaseapp.com",
    projectId: "login-36ed0",
    storageBucket: "login-36ed0.appspot.com",
    messagingSenderId: "663033957516",
    appId: "1:663033957516:web:366f6b8fc000d1f2c7bfa9",
    measurementId: "G-629TRS4JGN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// khởi tạo hàm auth
const auth = getAuth(app)
auth.languageCode = 'en'
// cung cấp thông tin đăng nhập = google
const provider = new GoogleAuthProvider();

const loginGG = document.getElementById('fbase');
loginGG.addEventListener('click',function(){
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.href = "/index.html"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    })

    let products = {
      data: [
          {
              product_id: 1,
              name: "NÀNG DÂU NHÀ HỌ KYOUGANE",
              price: "5000",
              image: "img/nang-dau-nha-ho-hyougane.jpg",
              link: "chitiet.html"
          },
  
          {
              product_id: 2,
              name: "Yuji Itadori",
              price: "1000",
              image:"img/đầu gộ.png"
           
              
          },
  
          {
              product_id: 3,
              name: "josh ",
              price: "200",
              image: "img/josh.png"
              
          },
  
          {
              product_id: 4,
              name: "Golden Fedora",
              price: "300",
              image: "img/mũ vàng.png"
          },
  
          {
              product_id: 5,
              name: "Huh-huh-Cat-Cat ",
              price: "600",
              image: "img/huh.png"
          },
  
          {
              product_id: 6,
              name: "Dominus Astra-glaxi",
              price: "99999999",
              image: "img/dominus.png"
          },
  
          {
              product_id: 7,
              name: "Dominus Pittacium",
              price: "999999",
              image: "img/T dominus.png"
          },
  
          {
              product_id: 8,
              name: "MEGUMIN CLOTHINg",
              price: "120",
              image: "img/áo megu.png"
          },
  
          {
              product_id: 9,
              name: "Shadow Cloak",
              price: "2000",
              image: "img/atomic.png"
          },
  
        
  
          {
              product_id: 10,
              name: "Void Samurai",
              price: "700",
              image: "img/samurai.png"
          },
  
          {
              product_id: 11,
              name: "Unluck Sword",
              price: "660",
              image: "img/sword.png"
          },
  
          {
              product_id: 12,
              name: "Black Armor",
              price: "100",
              image: "img/armor form.png"
          },
  
          {
              product_id: 13,
              name: "Boba-boba-boba",
              price: "20",
              image: "img/tà tữa.png"
          },
  
          {
              product_id: 14,
              name: "Lost in the Backrooms ",
              price: "200",
              image: "img/roo,.png"
          },
  
          {
              product_id: 15,
              name: " Anime Hair Black & White",
              price: "5050",
              image: "img/đẹp vcl.png"
          },
  
          {
              product_id: 16,
              name: " Monochrome Cyber Scythe",
              price: "8500",
              image: "img/scyther.png"
          },
      ]
  }
  for (let items of products.data) {
  
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
      
      let price = document.createElement("h6");
      price.innerHTML = "<b>Price:</b> " + items.price;
      container.appendChild(price);
      let btn = document.createElement("button")
      btn.setAttribute("onclick", "return addToCart(" + items.product_id + ");")
      btn.innerHTML = "Mua"
      container.appendChild(btn)
  
      card.appendChild(container);
      document.getElementById("products")?.appendChild(card);
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