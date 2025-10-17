import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/random', (req, res) => {
    res.status(201).json(jokes[Math.floor(Math.random() * jokes.length)]);
});

app.get('/jokes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const joke = jokes.find(j => j.id === id);
    if (joke) {
        res.json(joke);
    } else {
        res.status(404).json({ error: "Joke not found" });
    }
});

app.get('/filter', (req, res) => {
    const { category, type } = req.query;
    try {
        let filtered = jokes;
        if (category) {
            filtered = filtered.filter(j => j.category && j.category.toLowerCase() === category.toLowerCase());
        }
        if (type) {
            filtered = filtered.filter(j => j.type && j.type.toLowerCase() === type.toLowerCase());
        }
        res.json(filtered);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

var jokes = [
    {
        id: 1,
        category: "Programming",
        type: "single",
        joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
        id: 2,
        category: "General",
        type: "single",
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
        id: 3,
        category: "Programming",
        type: "single",
        joke: "There are only 10 types of people in the world: those who understand binary and those who don't.",
    },
    {
        id: 4,
        category: "General",
        type: "single",
        joke: "I told my computer I needed a break, and it said 'No problem — I'll go to sleep.'",
    },
    {
        id: 5,
        category: "Programming",
        type: "single",
        joke: "Debugging: Removing the needles from the haystack one by one.",
    },
    {
        id: 6,
        category: "Puns",
        type: "single",
        joke: "I would tell you a UDP joke, but you might not get it.",
    },
    {
        id: 7,
        category: "Dad",
        type: "single",
        joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
        id: 8,
        category: "General",
        type: "single",
        joke: "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
        id: 9,
        category: "One-liner",
        type: "single",
        joke: "I changed my iPod's name to Titanic. It's syncing now.",
    },
    {
        id: 10,
        category: "Programming",
        type: "single",
        joke: "To understand recursion, you must first understand recursion.",
    },
    {
        id: 11,
        category: "Puns",
        type: "single",
        joke: "I wondered why the baseball was getting bigger. Then it hit me.",
    },
    {
        id: 12,
        category: "General",
        type: "single",
        joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
    },
];