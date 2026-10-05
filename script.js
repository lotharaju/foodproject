/* ==========================================
   DON'T WASTE FOOD - JAVASCRIPT
========================================== */


/* ==========================================
   DONATE MODAL
========================================== */

function openDonate() {

    document
        .getElementById("donateModal")
        .classList.add("show");

}


function closeDonate() {

    document
        .getElementById("donateModal")
        .classList.remove("show");

}


/* ==========================================
   DONATE FOOD
========================================== */

function submitDonation() {

    const foodName =
        document.getElementById("foodName").value.trim();

    const quantity =
        document.getElementById("foodQuantity").value;

    const location =
        document.getElementById("donateLocation").value;

    const time =
        document.getElementById("foodTime").value;


    if (
        foodName === "" ||
        quantity === "" ||
        location === "" ||
        time === ""
    ) {

        alert("⚠️ Please fill all donation details.");

        return;
    }


    alert(
        "❤️ Donation Submitted Successfully!\n\n" +
        "Food: " + foodName +
        "\nMeals: " + quantity +
        "\nLocation: " + location +
        "\nPickup Time: " + time
    );


    /* Update meal count */

    let currentMeals =
        parseInt(
            document
                .getElementById("mealCount")
                .innerText
                .replace("+", "")
        );


    currentMeals =
        currentMeals + parseInt(quantity);


    document.getElementById("mealCount").innerText =
        currentMeals + "+";


    document.getElementById("impactMeals").innerText =
        currentMeals.toLocaleString() + "+";


    /* Update donor count */

    let donors =
        parseInt(
            document
                .getElementById("donorCount")
                .innerText
                .replace("+", "")
        );


    donors++;


    document.getElementById("donorCount").innerText =
        donors + "+";


    /* Clear form */

    document.getElementById("foodName").value = "";

    document.getElementById("foodQuantity").value = "";

    document.getElementById("donateLocation").value = "";

    document.getElementById("foodTime").value = "";


    closeDonate();

}


/* ==========================================
   FIND FOOD
========================================== */

function searchFood() {

    const searchValue =
        document
            .getElementById("searchFood")
            .value
            .toLowerCase()
            .trim();


    const location =
        document
            .getElementById("locationFilter")
            .value
            .toLowerCase();


    filterFood(searchValue, location);

}


/* ==========================================
   FILTER FOOD
========================================== */

function filterFood(
    searchValue = document
        .getElementById("searchFood")
        .value
        .toLowerCase()
        .trim(),

    location = document
        .getElementById("locationFilter")
        .value
        .toLowerCase()
) {


    const cards =
        document.querySelectorAll(".food-card");


    let visibleCount = 0;


    cards.forEach(function(card) {

        const food =
            card
                .getAttribute("data-food")
                .toLowerCase();


        const cardLocation =
            card
                .getAttribute("data-location")
                .toLowerCase();


        const foodMatch =
            searchValue === "" ||
            food.includes(searchValue);


        const locationMatch =
            location === "all" ||
            cardLocation === location;


        if (foodMatch && locationMatch) {

            card.classList.remove("hidden");

            visibleCount++;

        }
        else {

            card.classList.add("hidden");

        }

    });


    const noFood =
        document.getElementById("noFood");


    const message =
        document.getElementById("resultMessage");


    if (visibleCount === 0) {

        noFood.classList.add("show");

        message.innerText =
            "😔 No food found. Try another search.";

    }
    else {

        noFood.classList.remove("show");

        message.innerText =
            "🍱 " +
            visibleCount +
            " food donation(s) available";

    }

}


/* ==========================================
   RESET FOOD SEARCH
========================================== */

function resetFood() {

    document.getElementById("searchFood").value = "";

    document.getElementById("locationFilter").value = "all";


    const cards =
        document.querySelectorAll(".food-card");


    cards.forEach(function(card) {

        card.classList.remove("hidden");

    });


    document
        .getElementById("noFood")
        .classList.remove("show");


    document
        .getElementById("resultMessage")
        .innerText =
        "🍱 Showing all available food";

}


/* ==========================================
   CLAIM FOOD
========================================== */

function claimFood(
    button,
    foodName,
    quantity,
    location
) {


    if (button.classList.contains("claimed")) {

        return;

    }


    const confirmation =
        confirm(
            "Do you want to claim this food?\n\n" +

            "🍱 Food: " + foodName +
            "\n📦 Quantity: " + quantity +
            "\n📍 Location: " + location
        );


    if (!confirmation) {

        return;

    }


    button.innerText =
        "✅ Food Claimed";


    button.classList.add("claimed");


    button.disabled = true;


    const card =
        button.closest(".food-card");


    const status =
        card.querySelector(".available");


    status.innerText =
        "● Claimed";


    status.style.color =
        "#777";


    alert(
        "🎉 Food Successfully Claimed!\n\n" +

        "Food: " + foodName +
        "\nQuantity: " + quantity +
        "\nPickup Location: " + location +

        "\n\nPlease collect the food on time."
    );

}


/* ==========================================
   GO TO FIND FOOD
========================================== */

function goToFindFood() {

    document
        .getElementById("find")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================
   VOLUNTEER
========================================== */

function joinVolunteer() {

    const name =
        prompt(
            "🚴 Enter your name to become a volunteer:"
        );


    if (
        name !== null &&
        name.trim() !== ""
    ) {


        let volunteers =
            parseInt(
                document
                    .getElementById("volunteerCount")
                    .innerText
                    .replace("+", "")
            );


        volunteers++;


        document.getElementById(
            "volunteerCount"
        ).innerText =
            volunteers + "+";


        document.getElementById(
            "impactVolunteers"
        ).innerText =
            volunteers + "+";


        alert(
            "🎉 Thank you, " +
            name +
            "!\n\n" +

            "You are now registered as a FoodShare volunteer."
        );

    }

}


/* ==========================================
   DONATION MAP
========================================== */

function showMap() {

    alert(
        "📍 Donation Map\n\n" +

        "Available Donation Points:\n\n" +

        "1. Vizag Community Center\n" +

        "2. Kakinada Food Bank\n" +

        "3. Hyderabad Community Kitchen\n\n" +

        "Future Enhancement:\n" +

        "Google Maps API can be connected here."
    );

}


/* ==========================================
   CLOSE MODAL WHEN CLICK OUTSIDE
========================================== */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("donateModal");


        if (event.target === modal) {

            closeDonate();

        }

    }
);