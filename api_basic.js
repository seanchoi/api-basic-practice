// jQuery - fetch algorithm basic


$(documentcopy).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        $.get(url, function(res) {
            // your code here
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});


// js es6+

var url = ""

fetch(URL)
.then ((response)=> {
    response.jason()
})
.then ((response) => {
    showResult(response)
});

showResult = (response) => {
    document.getElementsById('id').innterText = response.name;
    document.getElementById('id').append(`<img src='#'>`);
    document.getElementById('id').innerHTML = `<div class='result'>${repsonse.result} is the final result</div>`
}

