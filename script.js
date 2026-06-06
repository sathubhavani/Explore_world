document.addEventListener("DOMContentLoaded", () => {
    
    // Select UI Components
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");
    const searchForm = document.getElementById("searchForm");
    const inquiryForm = document.getElementById("inquiryForm");
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    // Checkout Modal Selectors
    const paymentModal = document.getElementById("paymentModal");
    const closeModalBtn = document.getElementById("closeModal");
    const paymentForm = document.getElementById("paymentForm");
    const modalPackageName = document.getElementById("modalPackageName");
    const modalPackagePrice = document.getElementById("modalPackagePrice");
    const payBtnAmount = document.getElementById("payBtnAmount");
    const paySubmitBtn = document.getElementById("paySubmitBtn");

    // 1. Mobile Responsive Navbar Toggle Drawer
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = mobileMenu.querySelector("i");
        if(navLinks.classList.contains("active")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }
    });

    // 2. Custom Application Toast Notification Alert Manager
    window.showToast = function(message, isSuccess = true) {
        toastMessage.innerText = message;
        toast.style.backgroundColor = isSuccess ? "#10b981" : "#ef4444";
        toast.classList.remove("hidden");
        
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 4000);
    }

    // 3. Drop-Down Select Filter Search Engine Integration
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedDest = document.getElementById("searchDest").value;
        const destCards = document.querySelectorAll(".dest-card");
        
        destCards.forEach(card => {
            const cardTag = card.getAttribute("data-tags");
            
            // If "All Destinations" is chosen or card matches the selected drop-down choice
            if (selectedDest === "all" || cardTag === selectedDest) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        showToast("Filtering matching locations!");
        document.getElementById("destinations").scrollIntoView({ behavior: 'smooth' });
    });

    // 4. Contact Lead Inquiry Form Handler
    inquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const selectedOption = document.getElementById("destination").value;
        const submitBtn = inquiryForm.querySelector(".btn-submit");
        
        submitBtn.innerHTML = "Sending... <i class='fa-solid fa-spinner fa-spin'></i>";
        submitBtn.disabled = true;

        setTimeout(() => {
            showToast(`Thanks ${name}! Your inquiry for ${selectedOption} has been sent.`);
            inquiryForm.reset();
            submitBtn.innerHTML = "Send Inquiry &nbsp;<i class='fa-solid fa-paper-plane'></i>";
            submitBtn.disabled = false;
        }, 1500);
    });

    // 5. Payment Modal Controller Window actions
    window.openPaymentModal = function(packageName, packagePrice) {
        modalPackageName.innerText = packageName;
        modalPackagePrice.innerText = packagePrice;
        payBtnAmount.innerText = packagePrice;
        paymentModal.classList.remove("hidden");
    }

    closeModalBtn.addEventListener("click", () => {
        paymentModal.classList.add("hidden");
        paymentForm.reset();
    });

    window.addEventListener("click", (e) => {
        if (e.target === paymentModal) {
            paymentModal.classList.add("hidden");
            paymentForm.reset();
        }
    });

    // Smart Text Input Auto-Formatters (Card Details)
    document.getElementById("cardNumber").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
    document.getElementById("cardExpiry").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').trim();
    });

    // 6. Payment Processing Simulation Submission Loop
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        paySubmitBtn.disabled = true;
        paySubmitBtn.innerHTML = `Processing Secure Payment... <i class="fa-solid fa-spinner fa-spin"></i>`;

        setTimeout(() => {
            paymentModal.classList.add("hidden");
            // Triggers the green app success toast verification window frame
            showToast(`Booking Successful! Payment for ${modalPackageName.innerText} verified.`);
            
            paymentForm.reset();
            paySubmitBtn.disabled = false;
            paySubmitBtn.innerHTML = `Confirm & Pay <span id="payBtnAmount">${modalPackagePrice.innerText}</span>`;
        }, 2500);
    });
});
