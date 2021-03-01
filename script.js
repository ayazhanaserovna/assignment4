let letter = document.querySelector("#letter");

const calculate = () => {
  let name = document.querySelector("#name");
  let price = document.querySelector("#price");
  let education = document.querySelector("#education");
  let condition = document.querySelector("#condition");
  let skills = document.querySelectorAll(".skills");
  let sParents = document.querySelector("#s-parents");
  let sCharacter = document.querySelector("#s-character");
  let sNem = document.querySelector("#s-nem");
  let result = document.querySelector(".result");
  let aAge = document.getElementsByName("age");

  let age;
  let vSkills = [];

  if (name.value === "" || price.value === "") {
    result.innerHTML = `write name and price`;
    return;
  }

  skills.forEach((i) => vSkills.push(i.checked ? i.value : 0));
  vSkills = vSkills.reduce((a, b) => +a + +b);

  for (const key in aAge) {
    if (aAge[key].checked) {
      age = +aAge[key].value;
    }
  }

  vSParents = sParents.checked ? +sParents.value : 1;
  vSCharacter = sCharacter.checked ? +sCharacter.value : 1;
  vSNem = sNem.checked ? +sNem.value : 0;
  vAge = age !== undefined ? age : 1;

  let vResult =
    +price.value *
      +education.value *
      +condition.value *
      vSParents *
      vSCharacter *
      vAge +
    vSkills +
    vSNem;

  console.log(vResult);

  let person = {
    bride_name: name.value,
    bride_price: vResult,
    letter_to_bride: letter.value,
  };
  result.innerHTML = `<p>Bride name ${person.bride_name}</p> <p>Bride price ${person.bride_price}</p> <p>Letter to bride </br> ${person.letter_to_bride}</p>`;
};

document.querySelector("#count").onclick = calculate;
letter.onchange = () => {
  if (+letter.value.length >= 500) {
    letter.setAttribute("disabled", true);
  }
};
