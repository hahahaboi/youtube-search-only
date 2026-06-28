function hideHomePage() {
    if (window.location.pathname !== "/") return;

    const app = document.querySelector("ytd-browse");

    if (app) {
        app.style.display = "none";
    }
}

hideHomePage();

new MutationObserver(hideHomePage).observe(document.body, {
    childList: true,
    subtree: true
});