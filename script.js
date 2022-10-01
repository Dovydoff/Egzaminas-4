/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

const divEl = document.querySelector("div");

fetch("./cars.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      divEl.insertAdjacentHTML(
        "beforeend",
        `<div id="brand">⏬${post.brand}⏬ </div> 
      <div id="models">🚗Models --> ${post.models}<-- Models🚗</div> 
      `
      );
    });
  });

function showDiv() {
  document.getElementById("#output").style.display = "block";
}

//!
// fetch("./cars.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//!

// const renderUserCard = (user) => {
//   const intro = document.createElement("h4");
//   intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;

//   const contacts = document.createElement("h5");
//   contacts.innerText = user.email;

//   const card = document.createElement("div");
//   card.append(img, intro, contacts);
//   document.body.append(card);
// };

// const fetchData = async () => {
//   try {
//     ENDPOINT = await fetch;
//   } catch (error) {
//     console.log("Data could not be read", error);
//   }
// };
