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
    }).then(function(result) {
      console.log(result);
      var article = $("article")
        .find(result.googleId)
        .css("display", "none");

      // document.getElementById(result.googleId);
      // article.style.visibility = "hidden";
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
};

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

$(document).on("click", "button#addBook", function() {
  let bookDiv = $(this);
  let bookInfo = bookDiv.data();
  console.log(bookInfo);
  console.log(bookInfo.isbns);
  createBook(bookInfo, bookDiv);
});

$(document).on("click", "button.delete", function() {
  let deleteDiv = $(this);
});

$searchBookValue.keypress(function(e) {
  if (e.keyCode === 13) {
    console.log("You pressed enter!");
    e.preventDefault();

    var input = {
      term: $searchBookValue.val().trim()
    };

    API.googleSearchBook(input).then(function(data) {
      //Return the compiled data result into HTML .
      $("#google-results").html(data);
    });
  }
});