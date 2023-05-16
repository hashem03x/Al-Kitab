getmornzekr();
function getmornzekr() {
  let screen = document.querySelector(".morn");
  let back = document.querySelector(".morback");
  let next = document.querySelector(".mornext");
  let screencount = document.querySelector(".morncount");
  let counter = 1;

  fetch(
    "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"
  )
    .then((result) => {
      let data = result.json();
      return data;
    })
    .then((data) => {
      let morningazkar = data["أذكار الصباح"];
      console.log(morningazkar);
      return morningazkar;
    })
    .then((data) => {
      screen.innerHTML = `
        <p>${data[1].content}</p>
        `;
      back.addEventListener("click", () => {
        if (counter != 0) {
          screen.innerHTML = `
            <p>${data[counter--].content}</p>
            `;
          screencount.innerHTML = `
            ${counter} من  23
            `;
        }
      });
      next.addEventListener("click", () => {
        if (counter != 23) {
          screen.innerHTML = `
            <p>${data[counter++].content}</p>
            `;
          screencount.innerHTML = `
            ${counter} من  23
            `;
        }
      });
    });
}

getnizekr();
function getnizekr() {
  let screen = document.querySelector(".night");
  let back = document.querySelector(".niback");
  let next = document.querySelector(".ninext");
  let screencount = document.querySelector(".nicount");
  let counter = 1;

  fetch(
    "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"
  )
    .then((result) => {
      let data = result.json();
      return data;
    })
    .then((data) => {
      let morningazkar = data["أذكار المساء"];
      console.log(morningazkar);
      return morningazkar;
    })
    .then((data) => {
      screen.innerHTML = `
        <p>${data[0].content}</p>
        `;
      back.addEventListener("click", () => {
        if (counter != 1) {
          screen.innerHTML = `
            <p>${data[counter--].content}</p>
            `;
          screencount.innerHTML = `
            ${counter} من  25
            `;
        }
      });
      next.addEventListener("click", () => {
        if (counter != 25) {
          screen.innerHTML = `
            <p>${data[counter++].content}</p>
            `;
          screencount.innerHTML = `
            ${counter} من  25
            `;
        }
      });
    });
}
