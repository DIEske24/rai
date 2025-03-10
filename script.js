document.addEventListener("DOMContentLoaded", function () {
    const nextBtn1 = document.getElementById("next-btn-1");
    const coffeeBtn = document.getElementById("coffee-btn");
    const mealBtn = document.getElementById("meal-btn");
    const freeTimeInput = document.getElementById("free-time");
    const displayTime = document.getElementById("display-time");
    const finalTime = document.getElementById("final-time");
    const finalFood = document.getElementById("final-food");

    const slide1 = document.getElementById("slide-1");
    const slide2 = document.getElementById("slide-2");
    const slide3 = document.getElementById("slide-3");

    // Move from Slide 1 to Slide 2
    nextBtn1.addEventListener("click", function () {
        if (freeTimeInput.value) {
            displayTime.textContent = freeTimeInput.value;
        } else {
            displayTime.textContent = "No date selected";
        }
        slide1.classList.add("exit");
        setTimeout(() => {
            slide1.style.display = "none";
            slide2.classList.add("enter", "active");
            slide2.style.display = "block";
        }, 500);
    });

    // Move from Slide 2 to Slide 3
    function goToThankYou(event) {
        const selectedFood = event.target.textContent.trim();
        finalFood.textContent = selectedFood;
        finalTime.textContent = displayTime.textContent;

        slide2.classList.add("exit");
        setTimeout(() => {
            slide2.style.display = "none";
            slide3.classList.add("enter", "active");
            slide3.style.display = "block";
        }, 500);
    }

    coffeeBtn.addEventListener("click", goToThankYou);
    mealBtn.addEventListener("click", goToThankYou);
});
