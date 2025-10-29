/* Helper script to clean up the nagscreen leftovers that admiral.css leaves.
MutationObservers are the worst.*/

// This script is currently unused because it sometimes causes a scrollbar jitter on nypost.com.

const observer = new MutationObserver(() => {
    x = document.querySelectorAll('[style="display: initial; visibility: initial; padding-right: 20px;"]')[0];
    if (x){x.querySelectorAll("button")[1].click(); observer.disconnect()}
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
});