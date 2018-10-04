$(".btn").on("click", function (event) {
    event.preventDefault();
    var search = $("#userInput1").val().trim();
    var records = $("#userInput2").val().trim();
    var startYear = $("#userInput3").val().trim();
    var endYear = $("#userInput4").val().trim();
    console.log(search);
    console.log(records);
    console.log(startYear);
    console.log(endYear);
    var apiKey = "3ba8c2a2ec9f4a0e9f4f511f3b88e7fe"
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': apiKey,
        'q': search,
        'fq': records,
        'begin_date': startYear,
        'end_date': endYear
    });
    console.log(url);
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        $("#addArt").append("hello");
        $("#addArt").append('<div class="display-1">' + response.response + '</div>');
    }).fail(function (err) {
        throw err;
    });

});