<template>
  <canvas class="absolute h-screen w-screen -z-10">
            
  </canvas>
</template>

<script>
export default {
  mounted() {
    // Initialising the canvas
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load background image
    var backgroundImg = new Image();
    backgroundImg.onload = function() {
      console.log('Background image loaded');
    };
    backgroundImg.src = require('~/assets/images/brom-Main-Hero-Image.png');
    
    // Chemistry symbols for animation
    var chemSymbols = ['H₂O', 'NaCl', 'CO₂', 'NH₃', 'CH₄', 'C₆H₁₂O₆', 'H₂SO₄', 'CaCO₃', 'HCl', 'O₂', 'N₂', 'H₂', 'C₂H₅OH', 'CH₃COOH', 'KOH', 'Mg', 'Ca', 'Fe', 'Al', 'Cu', 'Zn', 'Ag', 'Au', 'Pt'];
    
    // Setting up the font size
    var fontSize = 16;

    // Expanding molecules
    var molecules = [];
    for (var i = 0; i < 18; i++) {
      molecules.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: chemSymbols[Math.floor(Math.random() * chemSymbols.length)],
        scale: 0.5,
        opacity: 1.0,
        scaleSpeed: Math.random() * 0.02 + 0.008,
        fadeSpeed: Math.random() * 0.008 + 0.003,
        delay: i < 6 ? 0 : i * 8  // First 6 molecules start immediately
      });
    }

    // Setting up the draw function
    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate aspect ratio and centered positioning for background image
      if (backgroundImg.complete) {
        var imgAspect = backgroundImg.width / backgroundImg.height;
        var canvasAspect = canvas.width / canvas.height;
        
        var drawWidth, drawHeight, offsetX, offsetY;
        
        if (imgAspect > canvasAspect) {
          // Image is wider than canvas
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          // Image is taller than canvas
          drawWidth = canvas.width;
          drawHeight = drawWidth / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }
        
        ctx.drawImage(backgroundImg, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        // Fallback background while image loads
        ctx.fillStyle = 'rgba(20, 40, 60, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Add semi-transparent overlay for better contrast
      ctx.fillStyle = 'rgba(0, 20, 40, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw expanding chemistry symbols
      for (var j = 0; j < molecules.length; j++) {
        var mol = molecules[j];
        
        // Skip if in delay
        if (mol.delay > 0) {
          mol.delay--;
          continue;
        }
        
        // Calculate current size based on scale
        var currentSize = Math.max(fontSize * mol.scale, 8);
        ctx.font = 'bold ' + currentSize + 'px Arial';
        ctx.fillStyle = `rgba(100, 200, 255, ${mol.opacity})`;
        
        // Center the text based on its size
        var textWidth = ctx.measureText(mol.symbol).width;
        ctx.fillText(mol.symbol, mol.x - textWidth/2, mol.y + currentSize/3);
        
        // Update scale and opacity
        mol.scale += mol.scaleSpeed;
        mol.opacity -= mol.fadeSpeed;
        
        // Reset molecule when it becomes invisible or too large
        if (mol.opacity <= 0 || mol.scale > 4) {
          mol.x = Math.random() * canvas.width;
          mol.y = Math.random() * canvas.height;
          mol.scale = 0.5;
          mol.opacity = 1.0;
          mol.symbol = chemSymbols[Math.floor(Math.random() * chemSymbols.length)];
          mol.scaleSpeed = Math.random() * 0.02 + 0.008;
          mol.fadeSpeed = Math.random() * 0.008 + 0.003;
          mol.delay = Math.random() * 30 + 15;
        }
      }
    }

    // Start the animation immediately
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    
    // Handle window resize
    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize molecules for new canvas size
      for (var i = 0; i < molecules.length; i++) {
        molecules[i].x = Math.random() * canvas.width;
        molecules[i].y = Math.random() * canvas.height;
      }
    });
  }
}
</script>