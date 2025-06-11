var toggleTheme = document.querySelector("#toggleTheme");
var clearBtn = document.querySelector("#clearBtn");
var saveBtn = document.querySelector("#saveBtn");
var noteArea = document.getElementById("note");
var statusText = document.getElementById("status");
if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add("dark-theme");
}
else {
    document.body.classList.remove("dark-theme");
}
noteArea.value = localStorage.getItem("textArea");
function toggleBtn() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        statusText.textContent = "Dark Mode";
    }
    else {
        localStorage.setItem("theme", "light");
        statusText.textContent = "Light Mode";
    }
}
toggleTheme.addEventListener("click", toggleBtn);
function clear() {
    noteArea.value = "";
    statusText.textContent = "🧹 Temizlendi";
}
clearBtn.addEventListener("click", clear);
statusText.textContent = localStorage.getItem('date');
function saved() {
    localStorage.setItem("textArea", noteArea.value);
    var tarix = new Date().toLocaleString();
    statusText.textContent = "\uD83D\uDCBE Saxlan\u0131ld\u0131..! (".concat(tarix, ")");
    localStorage.setItem('date', tarix);
}
saveBtn.addEventListener("click", saved);
