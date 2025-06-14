var navLinks = document.getElementById("navLinks");

      function showMenu() {
        navLinks.classList.add("show");
      }

      function hideMenu() {
        navLinks.classList.remove("show");
      }

      // Add this to close the menu when a link is clicked
      var links = document.querySelectorAll("#navLinks a");
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("show");
        });
      });