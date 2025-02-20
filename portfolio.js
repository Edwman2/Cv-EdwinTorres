document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("icon-menu");
    const nav = document.querySelector(".navbar");

    if (!menuIcon || !nav) {
        console.error("Menu icon or navigation not found!");
        return;
    }

    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("active");
        console.log("Menu toggled!"); // Debugging log
    });

    // Close menu when clicking a link
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });
});

fetch("https://api.github.com/users/edwman2/repos")
.then(response => response.json())
.then(data => {
    console.log(data);
    let repos = data;
    let output = '';
    for(let repo of repos){
        output += `
            <div class="repo">
                <h3>${repo.name}</h3>
                <a href="${repo.html_url}" target="_blank">View Repo</a>
            </div>
        `;
    }
    document.querySelector('#repos').innerHTML = output;
});

