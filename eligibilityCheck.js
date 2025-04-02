document.getElementById("insuranceEligibilityForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("eligibilityResult").innerHTML = "Processing...";
    });