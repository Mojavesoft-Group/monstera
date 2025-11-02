/* Hide Valnet ad blocker nagscreens by patching the website with an injected script, which patches showModal, which blocks the ad blocker blocker... */
// Unused.

document.addEventListener("DOMContentLoaded", (event) => {
new_script = document.createElement("script");
new_script.textContent = "alert('hi');";
document.head.appendChild(new_script);
});


//HTMLDialogElement.prototype.showModal = function (...args){if (this.matches("dialog.adblock")){return} else{console.log("legit show")}}
