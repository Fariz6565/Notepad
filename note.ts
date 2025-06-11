const toggleTheme = document.querySelector("#toggleTheme") as HTMLButtonElement;
const clearBtn = document.querySelector("#clearBtn") as HTMLButtonElement;
const saveBtn = document.querySelector("#saveBtn") as HTMLButtonElement;
const noteArea = document.getElementById("note") as HTMLTextAreaElement;
const statusText = document.getElementById("status") as HTMLParagraphElement;

if(localStorage.getItem('theme')=='dark'){
    document.body.classList.add("dark-theme");
}else{
    document.body.classList.remove("dark-theme");
}

noteArea.value = localStorage.getItem("textArea");

function toggleBtn(){
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        statusText.textContent = "Dark Mode"
    } else {
        localStorage.setItem("theme", "light");
        statusText.textContent = "Light Mode"
    }
}
toggleTheme.addEventListener("click", toggleBtn)


function clear(){
     noteArea.value = "";
     statusText.textContent = "🧹 Temizlendi";
}
clearBtn.addEventListener("click", clear)

statusText.textContent=localStorage.getItem('date') ;

function saved(){
    localStorage.setItem("textArea",noteArea.value)
    let tarix = new Date().toLocaleString()
    statusText.textContent = `💾 Saxlanıldı..! (${tarix})`;
    localStorage.setItem('date',tarix)
}
saveBtn.addEventListener("click", saved)