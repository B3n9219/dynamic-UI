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