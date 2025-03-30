
document.getElementById("insuranceEligibilityForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nationalId = document.getElementById("nationalId").value;
    let dob = document.getElementById("dob").value;
    let insuranceId = document.getElementById("insuranceId").value;
    let phone = document.getElementById("phone").value;

    // Mock insurance company data
    let mockInsuranceData = {
        "1010101010": { insuranceCompany: "Bupa Arabia", eligibilityStatus: "Eligible" },
        "2020202020": { insuranceCompany: "Tawuniya", eligibilityStatus: "Not Eligible" },
        "3030303030": { insuranceCompany: "MedGulf", eligibilityStatus: "Eligible" }
    };

    // Simulate backend processing
    let response = mockInsuranceData[nationalId] || { insuranceCompany: "Unknown", eligibilityStatus: "No Record Found" };

    document.getElementById("eligibilityResult").innerHTML = `
        <p><strong>Insurance Company:</strong> ${response.insuranceCompany}</p>
        <p><strong>Eligibility Status:</strong> ${response.eligibilityStatus}</p>
    `;
});
