// ex 01
document.getElementById("changeTextButton").addEventListener(
    "click", function () {
        let hold = document.getElementById("myParagraph");
        hold.textContent = "This is changed by chinmay";
    }
)

// ex 02
document.getElementById("highlightFirstCity").addEventListener(
    'click', function () {
        let citiesList = document.getElementById("citiesList");
        citiesList.firstElementChild.classList.add("highlight");
    }
)

// 03
document.getElementById("changeOrder").addEventListener(
    'click', function () {
        let coffeeType = document.getElementById("coffeeType");
        coffeeType.textContent = "Expresso";
    }
)

// 04

document.getElementById("addNewItem").addEventListener(
    'click', function () {

        let newItem = document.createElement("li");
        newItem.textContent = "Batata";

        document.getElementById("shoppingList").appendChild(newItem);
    }
)

//05

document.getElementById("removeLastTask").addEventListener(
    'click', function () {
        document.getElementById("taskList").lastElementChild.remove();
    }
)

// 06
document
    .getElementById("clickMeButton")
    .addEventListener('click', function () {
        alert("Hmmm!");
    })

// 07 ====important =========== event handling**
document.getElementById("teaList").addEventListener('click', function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert(`You selected: ${event.target.textContent}`)
    }
})

// 08 form handling

document.getElementById("feedbackForm").addEventListener('submit', function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
})


// 09 changing text when the DOM fully loaded

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("domStatus").textContent = `DOM fully loaded into memory`;
})

// 10 toggle highlight

document
    .getElementById("toggleHighlight")
    .addEventListener('click', function () {
        let description = document.getElementById("descriptionText");
        description.classList.toggle("highlight");
    })