// likes.js
const BIN_ID = "695bc0d343b1c97be91aa4d2";
const MASTER_KEY = "$2a$10$z1oJCSDdJekg8mehGj8W..RFX8qFM4p4mNF7su8oSPMsNUFakj1ly";
const BIN_URL = `https://api.jsonbin.io/v3/b/${695bc0d343b1c97be91aa4d2}`;

// Load likes from JSONBin
async function loadLikes() {
  try {
    const res = await fetch(https://api.jsonbin.io/v3/b/${695bc0d343b1c97be91aa4d2}, {
      headers: {
        "X-Master-Key": $2a$10$z1oJCSDdJekg8mehGj8W..RFX8qFM4p4mNF7su8oSPMsNUFakj1ly
      }
    });

    if (!res.ok) throw new Error("Failed to fetch likes from JSONBin");

    const data = await res.json();
    return data.record && data.record.likes ? data.record.likes : {};
  } catch (err) {
    console.error("Error loading likes:", err);
    return {}; // fallback so gallery still renders
  }
}

// Save likes to JSONBin
async function saveLikes(likes) {
  try {
    await fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": $2a$10$z1oJCSDdJekg8mehGj8W..RFX8qFM4p4mNF7su8oSPMsNUFakj1ly
      },
      body: JSON.stringify({ likes })
    });
  } catch (err) {
    console.error("Error saving likes:", err);
  }
}
