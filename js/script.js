// Main variables 
var title = document.title
var url = "https://api.myjson.com/bins/zyv02";
var books = []

const search = document.getElementById("search");
search.addEventListener('keyup', functionController)


// Data Request
fetch(url, {
        method: "GET"
    })

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {

        books = data.books
        functionController()
    })

    .catch(function (error) {
        console.log(error)
    });


// Controller Function
function functionController() {

    let results = searchBarFilter()
    console.log(results)
    createBooks(results)
}


// Search Bar Filter
function searchBarFilter() {

    const searchBar = document.getElementById("search").value
    const text = searchBar.toLowerCase();
    const results = books.filter(book => {
        const title = book.title
        return title.toLowerCase().includes(text)
    })
    return results
}


// Creates Main Tables content
function createBooks(results) {
    const bookshelf = document.querySelector(".bookshelf")
    bookshelf.innerHTML = ""
    results.forEach((book) => {

        var markup =
            `<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="flip-card-front__book-cover" src=${book.cover} alt="book cover" style="width:300px;height:300px;">
            </div>
            
            <div class="flip-card-back">
                <div class="flip-card-back__content">
                    <h3 class="flip-card-back__content-title">${book.title}</h1>
                    <h4 class="flip-card-back__content-language">Language: ${book.language}</p>
                    <p class="flip-card-back__content-description">${book.description}</p>
                </div>
                <div class="flip-card-back__button">
                    <a data-fancybox="gallery" href=${book.detail} class="btn btn--green">More details &roarr;</a>
                </div>
            </div>`

        bookshelf.innerHTML += markup // el signo += agrega elemento al existente en vez de sobreecribirlo.. ese era el problema, habia utilizado solo el =...//
    })
}