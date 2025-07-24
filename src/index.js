import "./styles.css";

function showDropdown(event) {
    const dropdown = event.target.closest(".dropdown")
    const dropdownList = dropdown.querySelector(".dropdown-list")
    dropdownList.classList.add("visible")
}

function hideDropdown(event) {
    const dropdown = event.target
    const dropdownList = dropdown.querySelector(".dropdown-list")
    dropdownList.classList.remove("visible")
}

const dropdownTitle = document.querySelector(".dropdown .title")
dropdownTitle.addEventListener("mouseenter", showDropdown)

const dropdown = document.querySelector(".dropdown")
dropdown.addEventListener("mouseleave", hideDropdown)