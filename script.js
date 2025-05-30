const projects = [
    {
        title: "BMI Calculator",
        image: "./assets/images/bmi.png",
        width: "100%",
        link: "./public/bmi_html.html"
    },
    {
        title: "Blog",
        image: "./assets/images/Blog.png",
        width: "100%",
        link: "https://github.com/greeshma127/Blog"
    },
    {
        title: "Historical Event Finder",
        image: "./assets/images/hef.png",
        width: "100%",
        link: "https://github.com/greeshma127/Historical-Event-Finder"
    },
    {
        title: "Book Notes",
        image: "./assets/images/booknotes.png",
        width: "100%",
        link: "https://github.com/greeshma127/Book-Notes"
    },
    {
        title: "Word Scramble",
        image: "./assets/images/word_scramble.png",
        width: "100%",
        link: "./public/word_scramble_html.html"
    },
    {
        title: "Vision Tracker",
        image: "./assets/images/bg'.png",
        width: "100%",
        link: "https://github.com/greeshma127/Vision-Tracker"
    },
    {
        title: "Qurio - Quiz App",
        image: "./assets/images/qurio.png",
        width:"100%",
        link:"https://github.com/greeshma127/Qurio-Quiz-App"
    },
    {
        title: "AuralMind",
        image: "./assets/images/AuralMind.png",
        width:"100%",
        link:"https://github.com/greeshma127/AuralMind"
    }
];

// Use the correct ID from the HTML
const projectContainer = document.getElementById('projects-container');

projects.forEach((project) => {
    const projectCard = `
        <div class="col">
            <div class="card shadow-sm">
                <img src="${project.image}" width="${project.width}" height="225">
                <div class="card-body">
                    <h5>${project.title}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="window.location.href='${project.link}'" class="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    projectContainer.innerHTML += projectCard;
});
