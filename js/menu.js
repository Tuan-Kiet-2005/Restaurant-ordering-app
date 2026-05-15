const table =
    localStorage.getItem("tableNumber");

document.querySelector(".table-title")
.innerHTML =
    `Xin chào bàn số ${table} 👋`;