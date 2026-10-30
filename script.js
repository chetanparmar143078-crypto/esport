function showPage(id) {
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(id);

    if (page) {
        page.classList.add("active-page");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        showPage("admin");
        showAdmin("dashboard");
    } else {
        alert("Incorrect Username or Password!");
    }
}

function showAdmin(id) {
    document.querySelectorAll(".admin-tab").forEach(function(tab) {
        tab.classList.remove("active");
    });

    document.querySelectorAll(".admin-menu").forEach(function(button) {
        button.classList.remove("active");
    });

    const tab = document.getElementById(id);
    const button = document.getElementById("b-" + id);

    if (tab) {
        tab.classList.add("active");
    }

    if (button) {
        button.classList.add("active");
    }
}

function logout() {
    showPage("home");
}

function sendMessage(event) {
    event.preventDefault();
    alert("Message submitted successfully!");
    event.target.reset();
}
