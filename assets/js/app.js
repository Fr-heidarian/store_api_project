const productsData = [
  {
    id: 1,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/e860fbe53fa70894ed9d8ab11d73f68b6cc0b7e1_1672051160.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "Mobile",
    price: "10",
  },
  {
    id: 2,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/c4e2f71c6be0e550ce80fc35a72f23b5ede4c527_1678959806.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "Tablet",
    price: "20",
  },
  {
    id: 3,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/1d198a19f4c2fb4086f3b7979e5059bbed823c9b_1661073065.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "Laptop",
    price: "30",
  },
  {
    id: 4,
    image:
      "https://dkstatics-public.digikala.com/digikala-products/8295c7455d010ff0f7dcda9cfad1bcdb366e2b31_1661233233.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "PS4",
    price: "40",
  },
];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

productsData.forEach((item) => {
  const product = ` <div class="col" id=${item.id}>
                <div class="card h-100">
                    <img src=${item.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                            <p>${item.price}$</p>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-primary">Add To Card</button>
                    </div>
                </div>
            </div> `;

  document.querySelector(".products-list").innerHTML += product;
});
