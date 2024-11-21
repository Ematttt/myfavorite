const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

        menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navbar.classList.toggle("active");
        });

        document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                alert("Thank you for reaching out! We'll get back to you shortly.");
            });

            document.querySelector('.contact-button').addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector('#contact-section');
                
                // Get the distance to the top of the section
                const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust 100px for white space and navbar
            
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Smooth scroll effect
                });
            });
        
            document.querySelector('.contact-button').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the contact section
                const target = document.querySelector('#contact-section');
                
                // Calculate the position to scroll to, including an offset for the navbar height and desired white space
                const offset = 10; // Adjust this value to create the necessary white space
            
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            
                // Smooth scroll to the calculated position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });


    document.querySelector('form').addEventListener('submit', function(event) {
        // Simple form validation
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            alert('Please fill in both fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
