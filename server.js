
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const courses = [
    { id: 1, title: "Intro to JavaScript", description: "Beginner course", video: "https://res.cloudinary.com/demo/video/upload/sample.mp4" }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(5001, () => console.log('LMS backend running on port 5001'));
