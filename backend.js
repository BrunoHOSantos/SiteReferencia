localStorage.setItem('theme', 'dark');


document.getElementById("toggleTheme").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
});

document.getElementById("thePretender").addEventListener("click", () => {
    window.location.href = "./paginas/thePretender.html"
})

document.getElementById("bestOfYou").addEventListener("click", () => {
    window.location.href = "./paginas/bestOfYou.html"
})

document.getElementById("everlong").addEventListener("click", () => {
    window.location.href = "./paginas/everlong.html"
})

document.getElementById("learnToFly").addEventListener("click", () => {
    window.location.href = "./paginas/learnToFly.html"
})

document.getElementById("myHero").addEventListener("click", () => {
    window.location.href = "./paginas/myHero.html"
})

document.getElementById("timesLikeThese").addEventListener("click", () => {
    window.location.href = "./paginas/timesLikeThese.html"
})

document.getElementById("bruno").addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/bruno-henrique-oliveira-dos-santos-112187131/"
})

document.getElementById("daveGrohlCard").addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/davestruestories/"
})

document.getElementById("sendComment").addEventListener("click", function() {
    const text = document.getElementById("commentInput").value.trim();

    if (text === "") return;

    const feed = document.getElementById("commentFeed");

    const item = document.createElement("div");
    item.classList.add("list-group-item");
    item.textContent = text;

    feed.prepend(item); // adiciona no topo

    document.getElementById("commentInput").value = "";
});



