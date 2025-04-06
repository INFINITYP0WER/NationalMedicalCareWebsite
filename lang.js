document.addEventListener("DOMContentLoaded", function () {
    const langSwitcher = document.getElementById("langSwitcher");
    if (langSwitcher) {
        langSwitcher.addEventListener("change", function () {
            const selectedLang = langSwitcher.value;
            alert("Language changed to: " + selectedLang);
            // Translation logic can be implemented here
        });
    }
});