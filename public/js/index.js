// Get references to page elements
var $searchBookValue = $("#search-value");
var $searchBtn = $("#search");
var $addBtn = $("#addBook");

// The API object contains methods for each kind of request we'll make
var API = {
  saveBook: function(book) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/books",
      data: JSON.stringify(book)
    });
  },
  getBooks: function() {
    return $.ajax({
      url: "api/books",
      type: "GET"
    });
  },
  googleSearchBook: function(query) {
    return $.ajax({
      url: "api/googlebooks/search/" + query.term,
      type: "GET"
    });
  }
};

var createBook = function(bookInfo) {
  // console.log(bookInfo.author);
  // console.log(bookInfo.categories);
  API.saveBook(bookInfo);

}


var searchBooks = function(event) {
  event.preventDefault();

  var query = {
    term: $searchBookValue.val().trim()
  };

  if (!query.term) {
    alert("You must enter book's title and/or author !");
    return;
  }

  API.googleSearchBook(query).then(function(data) {
    //Return the compiled data result into HTML .
    $("#google-results").html(data);
  });
  // $searchBookValue.val("");
};

// Add event listeners to the submit button
//Google Api seach
$searchBtn.on("click", searchBooks);

$(document).on("click", "button#addBook", function(){
  let bookInfo = $(this).data();
  console.log(bookInfo);
  console.log(bookInfo.isbns);
  createBook(bookInfo);
})
