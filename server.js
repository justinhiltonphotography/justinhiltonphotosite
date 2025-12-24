app.use(express.json());
// Get all votes
app.get("/votes", (req, res) => {
  const votes = readVotes();
  res.json(votes);
});

// Vote for a photo
app.post("/vote", (req, res) => {
  const { photo } = req.body;

  if (!photo) {
    return res.status(400).send("No photo provided");
  }

  const votes = readVotes();
  votes[photo] = (votes[photo] || 0) + 1;
  writeVotes(votes);

  res.json({ success: true, votes: votes[photo] });
});

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
// Get votes
app.get("/votes", (req, res) => {
  const votes = readVotes();
  res.json(votes);
});

// Vote for a photo
app.post("/vote", (req, res) => {
  const { photo } = req.body;
  if (!photo) return res.status(400).send("No photo provided");

  const votes = readVotes();
  votes[photo] = (votes[photo] || 0) + 1;
  writeVotes(votes);

  res.json({ success: true, votes: votes[photo] });
});
