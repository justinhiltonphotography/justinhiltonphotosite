// likes.js
const BIN_ID = "695bc0d343b1c97be91aa4d2";
const MASTER_KEY = "$2a$10$z1oJCSDdJekg8mehGj8W..RFX8qFM4p4mNF7su8oSPMsNUFakj1ly";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function loadLikes() {
  try {
    const res = await fetch(BIN_URL, {
      headers: { "X-Master-Key": MASTER_KEY }
    });
    if (!res.ok) throw new Error("Failed to fetch likes");
    const data = await res.json();
    return data.record?.likes || {};
  } catch (err) {
    console.error("Error loading likes:", err);
    return {};
  }
}

async function saveLikes(likes) {
  try {
    await fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY
      },
      body: JSON.stringify({ likes })
    });
  } catch (err) {
    console.error("Error saving likes:", err);
  }
}
