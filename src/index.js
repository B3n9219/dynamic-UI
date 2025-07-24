import "./styles.css";

export class DropdownManager {
    show(event) {
        const dropdown = event.target.closest(".dropdown")
        const dropdownList = dropdown.querySelector(".dropdown-list")
        dropdownList.classList.add("visible")
    }

    hide(event) {
        const dropdown = event.target
        const dropdownList = dropdown.querySelector(".dropdown-list")
        dropdownList.classList.remove("visible")
    }
}
const dropdownManager = new DropdownManager();



const dropdownTitle = document.querySelector(".dropdown .title")
dropdownTitle.addEventListener("mouseenter", dropdownManager.show)

const dropdown = document.querySelector(".dropdown")
dropdown.addEventListener("mouseleave", dropdownManager.hide)