/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

const divEl = document.querySelector("#output");

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      divEl.insertAdjacentHTML(
        "beforeend",
        `<div id="brand">Brand -->${post.brand} 🚗</div> 
      <div id="models">🚙Models --> ${post.models}<-- Models</div> 
      `
      );
    });
  });

function showDiv() {
  document.getElementById("#output").style.display = "block";
}
