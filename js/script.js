document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    // Add smooth animation to card on load
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Trigger reflow
        void card.offsetWidth;
        
        // Animate in
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }

    // Handle download button click
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Show loading state
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuklanmoqda...';
            downloadBtn.disabled = true;
            
            // Simulate download delay
            setTimeout(() => {
                // In a real application, this would trigger a file download
                // For demo purposes, we'll just show a success message
                downloadBtn.innerHTML = '<i class="fas fa-check"></i> Yuklab olindi!';
                
                // Reset button after delay
                setTimeout(() => {
                    downloadBtn.innerHTML = originalText;
                    downloadBtn.disabled = false;
                }, 2000);
                
                // You would typically use something like this for actual file download:
                // window.location.href = 'path/to/document.pdf';
            }, 1500);
        });
    }
    
    // Handle print button click
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            // Show print dialog
            window.print();
        });
    }
    
    // Add print styles
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            .card, .card * {
                visibility: visible;
            }
            .card {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                margin: 0;
                box-shadow: none;
                border: none;
            }
            .actions {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    function updateDateTime() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        const timezoneOffset = -now.getTimezoneOffset() / 60;
        const timezoneSign = timezoneOffset >= 0 ? '+' : '-';
        const timezoneHours = Math.abs(Math.trunc(timezoneOffset));

        const formattedDateTime = `${day}.${month}.${year} (GMT${timezoneSign}${timezoneHours})`;

        const datetimeElement = document.getElementById('datetime-display');
        if (datetimeElement) {
            datetimeElement.textContent = formattedDateTime;
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
});

// Function to generate QR code (placeholder for actual QR code generation)
function generateQRCode() {
    // In a real application, you would use a QR code library like qrcode.js
    // For now, we're using a placeholder image
    const qrCode = document.querySelector('.qr-image');
    if (qrCode) {
        // In a real app, you would generate the QR code like this:
        // new QRCode(qrCode, {
        //     text: 'https://e-auksion.uz/check/YU121-064684',
        //     width: 180,
        //     height: 180
        // });
        
        // For now, we'll just set a placeholder image
        qrCode.alt = 'QR Code for verification';
    }
}

// Call the QR code generation when the page loads
generateQRCode();
