document.addEventListener("DOMContentLoaded", function() {
    const name = "Danrlei Computer Scientist";
    const revealSpan = document.getElementById("revealName");
  
    let i = 0;
    setInterval(function() {
      if (i <= name.length) {
        revealSpan.textContent = name.substring(0, i);
        i++;
      }
    }, 3000 / name.length);
  });