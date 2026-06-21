function verifyStudent() {
    const idInput = document.getElementById("identifier");
    const id = idInput.value.trim();
    const resultBox = document.getElementById("result");

    if (!id) {
        showToast("Please enter a valid Email or Certificate ID");
        return;
    }

    showSpinner(true);
    resultBox.innerHTML = "";

    setTimeout(() => {
        const student = {
            name: "John Doe",
            email: "john@example.com",
            mobile: "9876543210",
            domain: "Web Development",
            college: "Dummy University",
            start: "01 June 2024",
            duration: "1 Month",
            photo: "https://via.placeholder.com/130",
            assignments: [true, false, true, true],
            certificate: "https://example.com"
        };

        resultBox.innerHTML = `
            <div class="card">
                <img src="${student.photo}" alt="Student Photo">
                <h3>${student.name}</h3>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Mobile:</strong> ${student.mobile}</p>
                <p><strong>Domain:</strong> ${student.domain}</p>
                <p><strong>College:</strong> ${student.college}</p>
                <p><strong>Start Date:</strong> ${student.start}</p>
                <p><strong>Duration:</strong> ${student.duration}</p>

                <h4>Assignment Status</h4>
                <div class="assignment-status">
                    ${student.assignments.map((done, i) =>
                        `<span>Assignment ${i + 1}: ${done ? "✅" : "❌"}</span>`
                    ).join("")}
                </div>

                <p><strong>Status:</strong> Completed</p>
                <a href="${student.certificate}" target="_blank">View Certificate</a>
            </div>
        `;

        showSpinner(false);
        showToast("Certificate details loaded successfully!");
    }, 1200);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";

    setTimeout(() => {
        toast.className = "";
    }, 3000);
}

function showSpinner(show) {
    document.querySelector(".spinner").style.display = show ? "block" : "none";
}