const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const photosDir = path.join(__dirname, 'photos');

app.use(express.static(__dirname));

app.get('/api/photos', (req, res) => {
  fs.readdir(photosDir, (err, files) => {
    if (err) {
      console.error('Could not read photos folder:', err);
      return res.status(500).json({ error: 'Could not read photos folder' });
    }

    const photos = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file) &&
      !['banner.jpg', 'profile.jpg'].includes(file.toLowerCase())
    );

    res.json(photos);
  });
});

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});
