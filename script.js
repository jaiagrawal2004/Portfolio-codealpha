// ======================
// Loader
// ======================

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// ======================
// Custom Cursor
// ======================

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = (e.clientX - 15) + "px";
    cursor2.style.top = (e.clientY - 15) + "px";
});

// ======================
// Typing Effect
// ======================

const words = [
    "Java Developer",
    "Spring Boot Developer",
    "Full Stack Developer",
    "Backend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let currentChar = "";

function typeEffect() {

    if (wordIndex === words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];
    currentChar = currentWord.slice(0, ++charIndex);

    document.getElementById("typing").textContent =
        currentChar;

    if (currentChar.length === currentWord.length) {

        wordIndex++;
        charIndex = 0;

        setTimeout(typeEffect, 1500);

    } else {

        setTimeout(typeEffect, 120);
    }
}

typeEffect();

// ======================
// Dark Mode
// ======================

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

// ======================
// Music Button
// ======================

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }
});

// ======================
// Back To Top
// ======================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// ======================
// AOS
// ======================

AOS.init({
    duration: 1000,
    once: true
});

// ======================
// GSAP
// ======================

gsap.from(".hero h1", {
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".hero p", {
    opacity: 0,
    duration: 2
});

gsap.from(".btn", {
    scale: 0,
    duration: 1
});

// ======================
// Project Filter
// ======================

function filterProject(type) {

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        if (type === "all") {

            card.style.display = "block";

        }

        else if (
            card.classList.contains(type)
        ) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });
}

// ======================
// GitHub API
// ======================

// Replace YOUR_USERNAME

fetch(
    "https://api.github.com/users/jaiagrawal2004/repos"
)

.then(response => response.json())

.then(data => {

    let output = "";

    data.slice(0, 6).forEach(repo => {

        output += `

        <div class="project-card">

            <h3>${repo.name}</h3>

            <p>
            ${repo.description || "No description"}
            </p>

            <a href="${repo.html_url}"
               target="_blank">

               View Repository

            </a>

        </div>

        `;
    });

    document.getElementById(
        "githubProjects"
    ).innerHTML = output;

})

.catch(error => {

    console.log(error);

});

// ======================
// EmailJS
// ======================

emailjs.init("9gDT-CUOaQLxSIP2I");

document
.getElementById("contactForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(

        "service_vhyeirg",

        "template_rthxn7h",

        this

    )

    .then(() => {

        alert(
            "Message Sent Successfully!"
        );

        this.reset();

    })

    .catch(() => {

        alert(
            "Message Failed!"
        );

    });

});

// ======================
// Particles JS
// ======================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 90
        },

        color: {
            value: "#00adb5"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 4
        },

        move: {
            speed: 2
        },

        line_linked: {

            enable: true,

            color: "#00adb5"

        }
    },

    interactivity: {

        events: {

            onhover: {

                enable: true,

                mode: "repulse"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        }

    }

});

// ======================
// Three.js 3D Effect
// ======================

const scene =
    new THREE.Scene();

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth /
        window.innerHeight,
        0.1,
        1000
    );

const renderer =
    new THREE.WebGLRenderer({
        alpha: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.domElement.style.position =
    "fixed";

renderer.domElement.style.top =
    "0";

renderer.domElement.style.left =
    "0";

renderer.domElement.style.zIndex =
    "-2";

document.body.appendChild(
    renderer.domElement
);

const geometry =
    new THREE.TorusGeometry(
        10,
        3,
        16,
        100
    );

const material =
    new THREE.MeshBasicMaterial({

        color: 0x00adb5,

        wireframe: true

    });

const torus =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(torus);

camera.position.z = 30;

function animate() {

    requestAnimationFrame(
        animate
    );

    torus.rotation.x += 0.01;

    torus.rotation.y += 0.01;

    renderer.render(
        scene,
        camera
    );
}

animate();

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);