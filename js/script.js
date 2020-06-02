// Main variables
const title = document.title
const clientKey = 'tAfZnW8m0Gj3HySOgAGoubHl1QU1omoR'

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${clientKey} `
let books = []

const search = document.getElementById('search')
search.addEventListener('keyup', functionController)

// Data Request
fetch(url, {
  method: 'GET'
})
  .then(function (response) {
    // console.log(response)
    return response.json()
  })

  .then(function (data) {
    console.log(data)
    books = data.results.books
    functionController()
    // console.log(data)
  })

  .catch(function (error) {
    console.log(error)
  })

// Controller Function
function functionController () {
  const results = searchBarFilter()
  //   console.log(results)
  createBooks(results)
}

// Search Bar Filter
function searchBarFilter () {
  const searchBar = document.getElementById('search').value
  const text = searchBar.toLowerCase()
  const results = books.filter(book => {
    const title = book.title
    return title.toLowerCase().includes(text)
  })
  return results
}

// Creates Main Tables content
function createBooks (results) {
  const bookshelf = document.querySelector('.bookshelf')
  bookshelf.innerHTML = ''
  results.forEach(book => {
    const markup = `<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="flip-card-front__book-cover" src=${book.book_image} alt="book cover" style="width:300px;height:300px;">
            </div>
            
            <div class="flip-card-back">
                <div class="flip-card-back__content">
                    <h3 class="flip-card-back__content-title">${book.title}</h1>
                    <h4 class="flip-card-back__content-language">Current NYT's Rank: ${book.rank}</p>
                    <p class="flip-card-back__content-description">${book.description}</p>
                </div>
                <div class="flip-card-back__button">
                    <a data-fancybox="gallery" href=${book.amazon_product_url} class="btn btn--green">Find on Amazon&roarr;</a>
                </div>
            </div>`

    bookshelf.innerHTML += markup // el signo += agrega elemento al existente en vez de sobreecribirlo.. ese era el problema, habia utilizado solo el =...//
  })
}
