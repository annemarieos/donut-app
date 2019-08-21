const DONUT_URL = "http://localhost:3000/donuts"

const form = document.querySelector("form")
const button = document.querySelector("#donut-button")


// Get total price per donut flavour rendered in top right corner 
// For each unit, multiply unit by specified price. 



button.addEventListener("submit", e => {
  e.preventDefault();
  newForm();
  nameInput = ""
  addressInput = ""
  emailInput = ""
  imageInput = ""
})

const newForm = () => {
  const nameInput = document.querySelector("#name")
  const addressInput = document.querySelector("#address")
  const emailInput = document.querySelector("#email")
  const imageInput = document.querySelector("#image")
  fetch(DONUT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput.value,
      address: addressInput.value,
      email: emailInput.value,
      image: imageInput.value
    })
  })

}

// const addDonutToBasket = donut => {
//   fetch(DONUT_URL {
//     method: "POST", 
//     headers:{ "Content-Type": "application/json" }, 
//     body: JSON.stringify({

//     })
//   })
// }




function fetchDonuts() {
  fetch(DONUT_URL)
    .then(resp => resp.json())
    .then(data => renderAllDonuts(data))
}

const renderAllDonuts = donuts => {
  donuts.map(donut => {
    renderOneDonut(donut)
  })
}

const renderOneDonut = donut => {
  const donutCollection = document.querySelector("#donut-collection")

  const card = document.createElement('div')
  const h3 = document.createElement('h3')
  const ul = document.createElement('ul')
  const img = document.createElement("img");
  const btn1 = document.createElement('button')
  const more = document.createElement('button')
  const less = document.createElement('button')
  const p = document.createElement('p')
  const input = document.createElement('input')


  // btn1.className = "add-to-order"
  h3.innerText = donut.flavour
  p.innerText = `Price: £${donut.price}`
  input.value = 0
  img.src = donut.image
  img.width = 300
  img.height = 300
  btn1.innerText = "Add to Order"
  btn1.id = donut.id
  more.innerText = "+"
  less.innerText = "-"
  input.id = `add-${donut.id}`
  p.id = `price-${donut.id}`


  btn1.addEventListener("click", (e) => {

    const input = document.querySelector(`#add-${e.target.id}`)
    const price = document.querySelector(`#price-${e.target.id}`)
    const cost = parseFloat(price.innerText.slice(9))
    const quantity = parseInt(input.value)

    const totalCostPerItem = cost * quantity
    console.log(totalCostPerItem)
  })

  card.append(h3, img, ul, p, less, more, input, btn1)
  donutCollection.append(card)

  more.addEventListener("click", () => {
    // debugger
    input.value = parseInt(input.value) + 1
  })

  less.addEventListener("click", () => {
    input.value = parseInt(input.value) - 1
  })


}

const calculateItemTotal = () => {

}





const init = () => {
  fetchDonuts();
};

document.addEventListener("DOMContentLoaded", init)