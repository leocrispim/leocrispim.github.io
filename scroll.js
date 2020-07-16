document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const isMobile = window.innerWidth <= 600;
const MOBILE_THRESHOLD = 0.25;
const DESKTOP_THRESHOLD = 0.6;

const threshold = isMobile ? MOBILE_THRESHOLD : DESKTOP_THRESHOLD;

const createIntersectionObserver = (elementId, className) => new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting === true && isMobile) 
        document.querySelector(`[href="${elementId}"]`).classList.add(className)
    else
        document.querySelector(`[href="${elementId}"]`).classList.remove(className)
}, { threshold });

const highlightedClassName = "highlighted-link";
const firstFoldId = "#first-fold";
const fourthFoldId = "#fourth-fold";
const fifthFoldId = "#fifth-fold";

const aboutFold = document.querySelector(firstFoldId);
const projectsFold = document.querySelector(fourthFoldId);
const contactFold = document.querySelector(fifthFoldId);

const aboutFoldObserver = createIntersectionObserver(firstFoldId, highlightedClassName)
const projectFoldObserver = createIntersectionObserver(fourthFoldId, highlightedClassName)
const contactFoldObserver = createIntersectionObserver(fifthFoldId, highlightedClassName)

aboutFoldObserver.observe(aboutFold);
projectFoldObserver.observe(projectsFold);
contactFoldObserver.observe(contactFold);
