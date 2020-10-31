const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    $.querySelector("button").setAttribute("disabled", "disabled");

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      description: $.querySelector("#description").value,
    };
    console.log(data);

    const response = await axios.post(
      "https://formulaire-exercice.herokuapp.com/",
      data
    );
    if (response.status === 200) {
      alert("Un mail vous a été envoyé");
      $.querySelector("button").removeAttribute("disabled");
    } else {
      alert("Une erreur est survenue");
      $.querySelector("button").removeAttribute("disabled");
    }
  });
});
