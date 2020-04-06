 const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });


sign// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");


const showModal = () => {
  signupModal.style.display = "block";
};


const closeModal = () => {
  signupModal.style.display = "none";
};


signup.addEventListener("click", () => {
  showModal();
});


closeButton.addEventListener("click", () => {
  closeModal();
});


window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});



    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

   
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });

    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
      data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "Jamacia": null,
        "Europe": null,
      }
    });

\
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

  
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});
