 const searchBar = document.querySelector(".search__input");
    searchBar.addEventListener('keyup', function (e) {

        const text = e.target.value.toLowerCase();
        const bookshelf = document.querySelector(".bookshelf");
        const bookList = Array.from(bookshelf.getElementsByTagName('h3'));
        
        const renderResult = bookList.filter(book => book.textContent.toLowerCase().includes(text));
        return results;


const text = e.target.value.toLowerCase();
        const bookshelf = document.querySelector(".bookshelf");
        const bookList = Array.from(bookshelf.getElementsByTagName('h3'));
        //const bookListArray = Array.from(bookList)
        console.log(bookList.textContent)
        
        const result = bookList.filter(book => book.textContent.toLowerCase().includes(text))

        console.log(result.textContent)
    })




      const text = e.target.value.toLowerCase();
        const bookshelf = document.querySelector(".bookshelf");
        const bookList = bookshelf.getElementsByTagName('h3');

        Array.from(bookList).forEach((book) => {
            const bookTitle = book.textContent.toLowerCase()
            return bookTitle
        })
        console.log(bookTitle)
        const result = Array.from(bookList).filter(book => bookTitle.includes(text))
        // console.log(bookTitle)
    })
}