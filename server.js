const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// API route to get all photos
app.get('/api/photos', (req, res) => {
  const photosDir = path.join(__dirname, 'photos');
  fs.readdir(photosDir, (err, files) => {
    if (err) return res.status(500).send('Unable to scan photos');
    const images = files.filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f));
    res.json(images);
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:3000`));
