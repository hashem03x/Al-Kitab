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
          fetch(
            `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${
              index + 1
            }`
          )
            .then((result) => result.json())
            .then((data) => {
              ayaContainer.innerHTML = "";
              let ayat = data.result;
              console.log(ayat);
              ayat.forEach((aya) => {
                displayer.classList.add("active");
                ayaContainer.innerHTML += `
                <div style="background:rgb(255, 250, 240); background-size: cover;padding: 10px 5px;margin-bottom: 15px;">
                <span style="font-size:20px;color:#556255; ">(${aya.aya}) - ( ${aya.arabic_text} )  => </span>
                <span style="font-size:20px; margin:20px;"> ${aya.translation}</span>
            </div>`;
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
