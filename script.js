document.addEventListener("DOMContentLoaded", () => {
    const text = 'A Passionate Data Scientist & ML Engineer';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }
    typeWriter();
    
    
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });
  