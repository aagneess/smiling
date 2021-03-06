"use strict";

import people from "./people.json";

// Scroll to event
const down = document.querySelector(".scroll-down");
const element = document.querySelector(".event-page");

down.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Scroll to top
const up = document.querySelector(".scroll-up");

up.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
});

// PREVENT RELOAD ON EVENT-BUTTON + CONFIRMATION
function preventClick(event) {
    event.preventDefault();
}

document.querySelector(".event-button").addEventListener("click", preventClick);

function confirmation() {
    const confirmMessage = confirm("Vill du godkänna din anmälan?");
    if (confirmMessage == true) {
        alert("Tack för din anmälan!");
    } else alert("Du har tackat nej till inbjudan");
}

document.querySelector(".event-button").addEventListener("click", confirmation);

// JSON + Query Parameters

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

people.people.forEach((invite) => {
    if (id == invite.id) {
        // Greeting
        document.getElementById("name").textContent = invite.firstName;

        // Autofill form
        document.getElementById("first-name").value = invite.firstName;
        document.getElementById("last-name").value = invite.lastName;
        document.getElementById(
            "email"
        ).value = `${invite.firstName}.${invite.lastName}@outlook.com`;
    }
});
