const book1 = document.getElementById("book1");
const book2 = document.getElementById("book2");
const calendar = document.getElementById("calendar-container");

book1.addEventListener("click", (e) =>{
    e.preventDefault();
    calendar.style.display = "block";
    calendar.style.opacity = "1";
    calendar.style.pointerEvents = "all";
});

book2.addEventListener("click", (e) =>{
    e.preventDefault();
    calendar.style.display = "block";
    calendar.style.opacity = "1";
    calendar.style.pointerEvents = "all";
});