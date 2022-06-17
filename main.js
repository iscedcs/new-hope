const cleaveCC = new Cleave("#card_number", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    const cardBrand = document.getElementById("cardBrand"),
      visa = "fab fa-cc-visa",
      mastercard = "fab fa-cc-mastercard",
      amex = "fab fa-cc-amex",
      diners = "fab fa-cc-diners-club",
      jcb = "fab fa-cc-jcb",
      discover = "fab fa-cc-discover",
      empty = "fa fa-credit-card-alt";

    switch (type) {
      case "visa":
        cardBrand.setAttribute("class", visa);
        break;
      case "mastercard":
        cardBrand.setAttribute("class", mastercard);
        break;
      case "amex":
        cardBrand.setAttribute("class", amex);
        break;
      case "diners":
        cardBrand.setAttribute("class", diners);
        break;
      case "jcb":
        cardBrand.setAttribute("class", jcb);
        break;
      case "discover":
        cardBrand.setAttribute("class", discover);
        break;
      default:
        cardBrand.setAttribute("class", empty);
        break;
    }
  },
});

const cleaveDate = new Cleave("#expiry_date", {
  date: true,
  datePattern: ["m", "y"],
});

const cleaveCCV = new Cleave("#cvc", {
  blocks: [3],
});
