document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("icon-menu");
    const nav = document.querySelector(".navbar");
    const readMoreButtons = document.querySelectorAll(".read-more");
    const closeButtons = document.querySelectorAll(".close-button");
    const modals = document.querySelectorAll(".modal");

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

    

    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            // Get the modal ID from the button's data-modal attribute
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);

            // Show the corresponding modal
            if (modal) {
                modal.showModal();
            } else {
                console.error("Modal not found:", modalId);
            }
        });
    });

    // Close modals when clicking the close button
    document.querySelectorAll(".close-button").forEach(button => {
        button.addEventListener("click", function () {
            // Close the modal
            this.closest("dialog").close();
        });
    });
    

});

// fetch("https://api.github.com/users/edwman2/repos")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     let repos = data;
//     let output = '';
//     for(let repo of repos){
//         output += `
//             <div class="repo">
//                 <h3>${repo.name}</h3>
//                 <a href="${repo.html_url}" target="_blank">View Repo</a>
//             </div>
//         `;
//     }
//     document.querySelector('#repos').innerHTML = output;
// });

