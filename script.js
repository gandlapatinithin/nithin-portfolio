document.addEventListener("DOMContentLoaded", function() {
  // For internal smooth scrolling (if any in-page anchors)
  const links = document.querySelectorAll("a[href^='#']");
  
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      if (this.getAttribute("href").length > 1) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
