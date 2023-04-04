
// grab the container 
let newsHtml = "";
let accordion = document.getElementById('accordion');


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e703961b2d7f4b5daeaf20c1a411ef3d', true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
        // console.log(articles);
        // for (news in articles) {
        articles.forEach(function (element, index) {
            news = `<div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                  <span style="color: #000099 ;"> ${element["title"]} </span>
                </button>
              </h2>
              <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index} style="padding: 30px;">
                <div class="accordion-body" >${element["content"]}
                  <a href="${element["url"]}" target="_blank">Read more..</a>
                </div>
              </div>
            </div>
          `;
            newsHtml += news;

        });
        accordion.innerHTML = newsHtml;

    }
    else {
        console.log('some error occured');
    }
}
xhr.send();




