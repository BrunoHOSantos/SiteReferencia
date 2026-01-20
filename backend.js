localStorage.setItem('theme', 'dark');


document.getElementById("toggleTheme").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
});

document.getElementById("thepretender").addEventListener("click", () => {
    window.location.href = "../paginas/thepretender.html"
})

document.getElementById("bestofyou").addEventListener("click", () => {
    window.location.href = "../paginas/bestofyou.html"
})

document.getElementById("everlong").addEventListener("click", () => {
    window.location.href = "/foofighters/paginas/everlong.html"
})

document.getElementById("learntofly").addEventListener("click", () => {
    window.location.href = "../paginas/learntofly.html"
})

document.getElementById("myhero").addEventListener("click", () => {
    window.location.href = "../paginas/myhero.html"
})

document.getElementById("timeslikethese").addEventListener("click", () => {
    window.location.href = "paginas/timeslikethese.html"
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



