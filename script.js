document.addEventListener("DOMContentLoaded",  () => {
    new TypeIt("#digitando", {
        speed: 200,
        // strings: ["Web Developer", "Ui Designer"],
        loop: true
    }).type('Web Developer', {delay: 900}).delete(13)
      .type('Ui/Ux Designer', {delay: 900})
        .go();
  });