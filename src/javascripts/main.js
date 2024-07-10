// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    let faceSize = 50; // Initial size
    let faceColor = '#FFFF00'; // Initial color

    // Function to draw the smiley face
    function drawSmileyFace() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        const x = canvas.width / 2;
        const y = canvas.height / 2;

        // Draw face
        ctx.fillStyle = faceColor;
        ctx.beginPath();
        ctx.arc(x, y, faceSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw eyes
        const eyeOffsetX = faceSize / 3;
        const eyeOffsetY = faceSize / 3;
        const eyeRadius = faceSize / 8;

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(x - eyeOffsetX, y - eyeOffsetY, eyeRadius, 0, Math.PI * 2);
        ctx.arc(x + eyeOffsetX, y - eyeOffsetY, eyeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw mouth
        ctx.beginPath();
        ctx.arc(x, y + eyeOffsetY / 2, faceSize / 2, 0, Math.PI, false);
        ctx.stroke();
    }

    // Initial draw
    drawSmileyFace();

    // Event listener for the size and color input
    document.getElementById('drawButton').addEventListener('click', () => {
        faceSize = parseInt(document.getElementById('size').value, 10);
        faceColor = document.getElementById('color').value;
        console.log(`Size: ${faceSize}, Color: ${faceColor}`); // Debug log
        drawSmileyFace();
    });
});
