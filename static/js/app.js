document.addEventListener('DOMContentLoaded', () => {
    const mapImg = document.getElementById('animated-map');
    const canvas = document.getElementById('grid-canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 50;

    function resizeCanvas() {
        if (mapImg.complete && mapImg.naturalWidth > 0) {
            canvas.width = mapImg.naturalWidth;
            canvas.height = mapImg.naturalHeight;
        } else {
            canvas.width = 1200;
            canvas.height = 800;
        }
        drawGrid();
    }

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    }

    mapImg.onload = resizeCanvas;
    resizeCanvas();

    // Dice rolling
    document.querySelectorAll('.dice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const sides = parseInt(btn.dataset.dice);
            const roll = Math.floor(Math.random() * sides) + 1;
            document.getElementById('dice-result').innerText = `Sonuç (d${sides}): ${roll}`;
        });
    });

    // WebSocket sync setup
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${protocol}//${window.location.host}/ws/default-room`);

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Sunucudan gelen veri:', data);
    };
});
