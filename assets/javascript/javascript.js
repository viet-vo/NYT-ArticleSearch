$(".btn").on("click", function (event) {
    event.preventDefault();

    // retrieve user input
    var search = $("#userInput1").val().trim();
    var records = $("#userInput2").val().trim();
    var startYear = $("#userInput3").val().trim();
    var endYear = $("#userInput4").val().trim();
    console.log(records);
    // store API key and default url to add param too
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
    // retrieves the data from API
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (NYTData) {
        for
        $("#addArt").append('<div class="h2">' + "Title: " + NYTData.response.docs[0].headline.main + '</div>');
        $("#addArt").append('<div class="h6">' + "Snippet: " + NYTData.response.docs[0].snippet + '</div>');
    }).fail(function (err) {
        throw err;
    });

});