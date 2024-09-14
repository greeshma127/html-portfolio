const projects = [
    {
        title: "Movie Ranking Project",
        image: "./assets/images/Movie.png",
        width: "80%",
        link: "./public/movie-ranking.html"
    },
    {
        title: "Birthday Invite Project",
        image: "./assets/images/Bday.png",
        width: "70%",
        link: "./public/birthday-invite.html"
    },
    {
        title: "Motivation Project",
        image: "./assets/images/Motivation.png",
        width: "100%",
        link: "./public/motivation-meme.html"
    },
    {
        title: "Colour Vocab Project",
        image: "./assets/images/colour-vocab.png",
        width: "100%",
        link: "./public/colour-vocab.html"
    },
    {
        title: "Flag Project",
        image: "./assets/images/Flag.png",
        width: "100%",
        link: "./public/flag.html"
    },
    {
        title: "Web Design Agency Project",
        image: "./assets/images/Web-design.png",
        width: "100%",
        link: "./public/webdesign_agency.html"
    },
    {
        title: "Pricing Table Project",
        image: "./assets/images/pricing.png",
        width: "100%",
        link: "./public/pricing-table.html"
    },
    {
        title: "Mondrian Painting Project",
        image: "./assets/images/mondrian.png",
        width: "100%",
        link: "./public/mondrian.html"
    },
    {
        title: "Moving Company Website Project",
        image: "./assets/images/moving-company.png",
        width: "100%",
        link: "./public/moving-company.html"
    },
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
