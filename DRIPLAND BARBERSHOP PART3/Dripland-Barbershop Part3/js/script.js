document.addEventListener("DOMContentLoaded", function () {

    console.log("Dripland Barbershop website is ready!");

    // Lightbox Gallery
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    if (lightbox && lightboxImg && closeLightbox) {

        galleryImages.forEach(function (image) {
            image.addEventListener("click", function () {
                lightboxImg.src = image.src;
                lightboxImg.alt = image.alt;
                lightbox.hidden = false;
                closeLightbox.focus();
            });
        });

        // Close when clicking the X button
        closeLightbox.addEventListener("click", function () {
            lightbox.hidden = true;
        });

        // Close when clicking the dark background
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.hidden = true;
            }
        });

        // Close when pressing Escape
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !lightbox.hidden) {
                lightbox.hidden = true;
            }
        });
    }

  // Service Search Functionality
  const serviceSearch = document.getElementById("serviceSearch");
  const serviceArticles = document.querySelectorAll("main article");

  if (serviceSearch) {
    serviceSearch.addEventListener("input", function () {
        const searchText = serviceSearch.value.toLowerCase(). trim();

        serviceArticles.forEach(function ( article) {
            const serviceText = article.textContent.toLowerCase ();

            if (serviceText.includes(searchText)) {
                article.hidden = false;
            } else {
                article.hidden = true;
            }
        });


    });
  }
  // Contact Form - Appointment Date Validation 
  const contactForm = document.getElementById("contactForm");
  const appointmentDate = document.getElementById("date");

  if (contactForm && appointmentDate) {
    function updateMinimumDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        appointmentDate.min = '${year}-${month}-${day}';
    
    }

    updateMinimumDate();
    contactForm.addEventListener("submit", function (event) {
        updateMinimumDate();
        
        if (!appointmentDate.checkValidity()) {
            event.preventDefault();
            appointmentDate.reportValidity();
        }
    });
}

// Contact Form - Message Validation
const contactMessage = document.getElementById("message");

if (contactForm && contactMessage) {
    contactForm.addEventListener("submit", function (event) {
        const message = contactMessage.value.trim ();

        if (message.length < 10) {
            event.preventDefault();
            contactMessage.setCustomValidity(
                "Please enter a message of at least 10 characters."
            
            );
            contactMessage.reportValidity();
        } else {
            contactMessage.setCustomValidity("");
        }
    });
}
 // General Contact Email
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("message").value.trim();

        const subject = "Dripland Barbershop - " + messageType;

        const body =
            "New Contact Message\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Message Type: " + messageType + "\n" +
            "Message: " + message;

        const mailtoLink =
            "mailto:terrencetyron94@gmail.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;
    });
}


// Enquiry Form Validation and Confirmation
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        alert("Thank you for contacting Dripland Barbershop! Your enquiry has been received.");

        enquiryForm.reset();
    });


}

// Enquiry Service Price Response
const serviceSelect = document.getElementById("service");
const serviceResponse = document.getElementById("serviceResponse");

if (serviceSelect && serviceResponse) {
    serviceSelect.addEventListener("change", function () {
        const prices = {
            "standard-haircut": "R50",
            "fade": "R70",
            "beard-trim": "R40",
            "haircut-dye": "R150",
            "children-haircut": "R50"
        };

        const selectedService = serviceSelect.value;

        if (prices[selectedService]) {
            serviceResponse.textContent =
                "The selected service costs " + prices[selectedService] +
                ". Please contact Dripland Barbershop to confirm availability.";
        } else {
            serviceResponse.textContent = "";
        }
    });
}
  

});
