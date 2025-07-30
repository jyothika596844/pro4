
fetch('http://localhost:5001/courses')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('courseList');
        data.forEach(course => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><video controls src="${course.video}" width="400"></video>`;
            container.appendChild(div);
        });
    });
