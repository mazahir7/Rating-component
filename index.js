const sectionRating = document.querySelector(".section-rating");

const sectionThankYou = document.querySelector(".section-thank");
const thankRating = document.querySelector(".thank__rating");

document.querySelector(".rating__submit").addEventListener("click", function () {
   const checkedRadio = document.querySelector('input[name="r"]:checked');
   const rating = checkedRadio.nextElementSibling.querySelector("span").innerHTML;

   sectionRating.classList.add("display-none");

   sectionThankYou.classList.add("display-block");

   thankRating.innerHTML = `You selected ${rating} out of 5`;

   console.log(rating);
});
