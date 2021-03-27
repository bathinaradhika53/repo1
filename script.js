(function () {
    const quotes = [
        {
            quote: "“You must be the change you wish to see in the world.”",
            author: "-Gandhi"
        },
        {
            quote: "“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.”",
            author: '-Albert Einstein'

        },
        {
            quote: " “A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.”",
            author: " — George Bernhard Shaw"
        },
        {
            quote: "“He who fears he will suffer, already suffers because he fears.” ",
            author: "— Michel De Montaigne"
        }
    ];
    const bt = document.querySelector(".button");
    bt.addEventListener('click', function () {
        let ran = Math.floor(Math.random() * quotes.length);
        console.log(ran);

        document.getElementById("quote").textContent = quotes[ran].quote;
        document.querySelector(".author").textContent = quotes[ran].author;
    });

})();