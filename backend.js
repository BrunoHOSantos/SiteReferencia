localStorage.setItem('theme', 'dark');


document.getElementById("toggleTheme").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
});

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("thepretender")?.addEventListener("click", () => {
    window.location.href = "/SiteReferencia/paginas/thepretender.html";
  });

  document.getElementById("bestofyou")?.addEventListener("click", () => {
    window.location.href = "/SiteReferencia/paginas/bestofyou.html";
  });

  document.getElementById("everlong")?.addEventListener("click", () => {
    window.location.href = "/SiteReferencia/paginas/everlong.html";
  });

  document.getElementById("learntofly")?.addEventListener("click", () => {
    window.location.href = "/SiteReferencia/paginas/learntofly.html";
  });

  document.getElementById("myheroCard")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/SiteReferencia/paginas/myhero.html";
});


  document.getElementById("timeslikethese")?.addEventListener("click", () => {
    window.location.href = "/SiteReferencia/paginas/timeslikethese.html";
  });

});


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



