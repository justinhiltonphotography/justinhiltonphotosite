const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// API to get photos
app.get("/api/photos", (req, res) => {
  const photosDir = path.join(__dirname, "photos");

  fs.readdir(photosDir, (err, files) => {
    if (err) {
      return res.status(500).json([]);
    }

    const images = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file) &&
      file !== "banner.jpg" &&
      file !== "profile.jpg"
    );

    res.json(images);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
