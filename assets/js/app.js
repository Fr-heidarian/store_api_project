fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => getData(data))
  .catch((err) => console.log(err));

const getData = (data) => {
  data.forEach((item) => {
    const product = `<div class="col" id=${item.id}>
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
};
