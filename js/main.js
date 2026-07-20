const projects = Object.freeze([
    {
        title: "Solar Skid Design",
        category: "Mechanical Design / CAD Drafting",
        filterCategory: "mechanical cad modeling",
        description:
            "A mechanical skid concept showing layout, rendering, and technical drawing presentation.",
        caseStudy: "solar-skid-case-study.html",

        images: [
            {
                title: "Skid Rendering",
                file: "assets/images/portfolio/skid-rendering.jpg"
            },
            {
                title: "Skid Drawing",
                file: "assets/images/portfolio/skid-drawing.jpg"
            }
        ],

        pdfs: [
            {
                title: "Solar Skid Rendering PDF",
                file: "assets/files/projects/Solar-Skid-Rendering.pdf"
            }
        ]
    },

    {
        title: "3D CAD Modeling Samples",
        category: "3D Modeling / CAD",
        filterCategory: "cad modeling mechanical",
        description:
            "Sample 3D CAD modeling, capture, wireframe, and rendering outputs.",

        images: [
            {
                title: "3D CAD Design",
                file: "assets/images/portfolio/3d-cad.jpg"
            },
            {
                title: "3D Capture",
                file: "assets/images/portfolio/3d-capture.jpg"
            },
            {
                title: "3D Modeling",
                file: "assets/images/portfolio/3d-modeling.jpg"
            },
            {
                title: "3D Wireframe",
                file: "assets/images/portfolio/3d-wireframe.jpg"
            },
            {
                title: "Engineering Rendering",
                file: "assets/images/portfolio/rendering.jpg"
            }
        ],

        pdfs: [
            {
                title: "Drawing Sample Portfolio",
                file: "assets/files/portfolio/Drawing-Sample-Portfolio.pdf"
            }
        ]
    }
]);

const documents = Object.freeze([
    {
        title: "Professional Resume",
        category: "Resume / CV",
        description:
            "Professional mechanical CAD drafting and engineering resume.",
        file: "assets/files/resume/Daren-Sombilon-Resume.pdf"
    },

    {
        title: "Drawing Sample Portfolio",
        category: "Engineering Portfolio",
        description:
            "Selected CAD models, drawings, and technical presentation samples.",
        file: "assets/files/portfolio/Drawing-Sample-Portfolio.pdf"
    }
]);

/* =========================================================
   PORTFOLIO PROJECTS
========================================================= */

const portfolioContainer = document.getElementById("portfolioProjects");

if (portfolioContainer) {
    portfolioContainer.innerHTML = projects
        .map(
            (project) => `
                <div
                    class="project-showcase-card"
                    data-category="${project.filterCategory}"
                >
                    <div class="project-header">
                        <span>${project.category}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>

                    <div class="project-section-box">
                        <h4>Image Gallery</h4>

                        <div class="portfolio-gallery">
                            ${project.images
                                .map(
                                    (image) => `
                                        <a
                                            href="${image.file}"
                                            class="portfolio-card lightbox-trigger"
                                        >
                                            <img
                                                src="${image.file}"
                                                alt="${image.title}"
                                                loading="lazy"
                                            >

                                            <h5>${image.title}</h5>
                                            <span>View Image</span>
                                        </a>
                                    `
                                )
                                .join("")}
                        </div>
                    </div>

                    <div class="project-section-box">
                        <h4>PDF Documents</h4>

                        <div class="pdf-grid">
                            ${project.pdfs
                                .map(
                                    (pdf) => `
                                        <a
                                            href="${pdf.file}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="pdf-card"
                                        >
                                            <h5>${pdf.title}</h5>

                                            <p>
                                                Technical document / drawing
                                                package.
                                            </p>

                                            <span>View PDF</span>
                                        </a>
                                    `
                                )
                                .join("")}
                        </div>
                    </div>

                    ${
                        project.caseStudy
                            ? `
                                <div class="project-section-box">
                                    <h4>Full Case Study</h4>

                                    <a
                                        href="${project.caseStudy}"
                                        class="pdf-card"
                                    >
                                        <h5>${project.title}</h5>

                                        <p>
                                            View the full project story,
                                            design process, gallery, and
                                            outcome.
                                        </p>

                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            `
                            : ""
                    }
                </div>
            `
        )
        .join("");
}

/* =========================================================
   DOCUMENTS
========================================================= */

const documentsContainer = document.getElementById(
    "documentsContainer"
);

if (documentsContainer) {
    documentsContainer.innerHTML = documents
        .map(
            (documentItem) => `
                <a
                    href="${documentItem.file}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="document-card"
                >
                    <span>${documentItem.category}</span>
                    <h3>${documentItem.title}</h3>
                    <p>${documentItem.description}</p>
                    <strong>View Document</strong>
                </a>
            `
        )
        .join("");
}

/* =========================================================
   PAGE LOADED HOOK
========================================================= */

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

/* =========================================================
   ANIMATED STATISTICS COUNTER
========================================================= */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
    const target = Number(counter.dataset.target);

    if (!Number.isFinite(target)) {
        return;
    }

    const duration = 1200;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        counter.textContent = Math.floor(progress * target);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
}

if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });
}

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".card, " +
        ".process-card, " +
        ".why-card, " +
        ".skill-card, " +
        ".pricing-card, " +
        ".testimonial-card, " +
        ".stat-card, " +
        ".case-study-card, " +
        ".project-showcase-card, " +
        ".document-card, " +
        ".project-list-item"
);

if (revealElements.length > 0) {
    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
}

/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================================================
   SMART NAVBAR
========================================================= */

const navbar = document.getElementById("navbar");

if (navbar) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

/* =========================================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            const href = link.getAttribute("href") || "";

            link.classList.remove("active");

            if (
                currentSection &&
                (
                    href === "#" + currentSection ||
                    href.endsWith("#" + currentSection)
                )
            ) {
                link.classList.add("active");
            }
        });
    });
}

/* =========================================================
   PORTFOLIO FILTER SYSTEM
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");

function applyPortfolioFilter(filterValue) {
    const filterableProjects = document.querySelectorAll(
        ".project-showcase-card, .project-list-item"
    );

    filterableProjects.forEach(function (project) {
        const categories = (
            project.dataset.category || ""
        )
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);

        const shouldShow =
            filterValue === "all" ||
            categories.includes(filterValue);

        project.style.display = shouldShow ? "" : "none";
    });
}

if (filterButtons.length > 0) {
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (filterButton) {
                filterButton.classList.remove("active");
            });

            button.classList.add("active");

            const filterValue = (
                button.dataset.filter || "all"
            ).toLowerCase();

            applyPortfolioFilter(filterValue);
        });
    });
}
/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function closeLightbox() {
    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.classList.remove("lightbox-open");
}

document.addEventListener("click", function (event) {
    const imageLink = event.target.closest(".lightbox-trigger");

    if (!imageLink || !lightbox || !lightboxImage) return;

    event.preventDefault();

    lightboxImage.src = imageLink.getAttribute("href");
    lightboxImage.alt =
        imageLink.querySelector("img")?.alt || "Portfolio Preview";

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
});

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});