let req = new XMLHttpRequest();
let suarDiv = document.querySelector(".suar");
let container = document.querySelector(".suar .container");

function getsuar() {
  fetch("https://api.alquran.cloud/v1/meta")
    .then((result) => {
      let data = result.json();
      console.log(data);
      return data;
    })
    .then((data) => {
      surahs = data.data.surahs.references;
      console.log(surahs);
      for (let i = 0; i < 114; i++) {
        let surah = document.createElement("div");
        surah.className = "surah";
        surah.setAttribute("surahNum", `${surahs[i].number}`);
        container.appendChild(surah);

        let title = document.createElement("p");
        title.className = "title";
        title.appendChild(document.createTextNode(surahs[i].name));
        surah.appendChild(title);

        let engTitle = document.createElement("p");
        engTitle.className = "engTitle";
        engTitle.appendChild(document.createTextNode(surahs[i].englishName));
        surah.appendChild(engTitle);
      }
      let suar = document.querySelectorAll(".surah");
      let displayer = document.querySelector(".surahDisplay");
      let ayaContainer = document.querySelector(".ayatContainer");
      suar.forEach((title, index) => {
        title.addEventListener("click", () => {
          title.scrollTo({
            behavior: "smooth",
          });
          fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
            .then((result) => result.json())
            .then((data) => {
              ayaContainer.innerHTML = "";
              let ayat = data.data.ayahs;
              console.log(ayat);
              ayat.forEach((aya) => {
                displayer.classList.add("active");
                ayaContainer.innerHTML += `
          <div>
          <span style="font-size:20px;color:#556255; "> ( ${aya.numberInSurah} )  - </span>
          <span style="font-size:20px; margin:8px;">${aya.text} .</span>
          </div>
          <br>`;
              });
            });
          let closeDisplay = document.querySelector(".closeDisplay");
          closeDisplay.addEventListener("click", () => {
            displayer.classList.remove("active");
          });
        });
      });
    });
}
getsuar();
