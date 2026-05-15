const tableButtons = document.querySelectorAll(".table-btn");

tableButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const tableNumber = button.textContent;

        // lưu số bàn

        localStorage.setItem(
            "tableNumber",
            tableNumber
        );

        // chuyển trang

        window.location.href =
            "./pages/menu.html";
    });

});