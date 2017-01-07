$(Document).ready(function() {
  $("#quote-button").click(function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data) {
      $("#quote").unwrap("blockquote")
      $("#quote").html(data.quoteText);
      $("#quote").wrap("<blockquote></blockquote>")
      $("#author").html("<em>" + data.quoteAuthor + "</em>");
      $("button").html("Yo, hit me again!");
    });
  });
});
