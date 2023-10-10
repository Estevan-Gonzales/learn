var baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

requestUrl = baseUrl;


var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');



function getApi() {
    localStorage.clear();
  // replace `octocat` with anyone else's GitHub username
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for(i = 0; i < data.meals.length; i++) {
            localStorage.setItem(i, data.meals[i].strMeal);
        }
    });
}

fetchButton.addEventListener('click', getApi);

for (i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(i));
}