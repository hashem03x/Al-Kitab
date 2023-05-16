const timesDiv = document.querySelector(".time-container");
let showbtn = document.getElementById("show");
let city = document.querySelector(".city");
let homepage = document.querySelector(".home");

showbtn.onclick = function () {
  getPrayTime(city.value);
};

function getPrayTime(city) {
  fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=egypt&method=5`
  )
    .then((response) => response.json())
    .then((data) => {
      let times = data.data.timings;

      // Calculating time according to the 12-hour system
      const prayersTimes = {
        الفجر: new Date(`01/01/2000 ${times.Fajr}`).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        الشروق: new Date(`01/01/2000 ${times.Sunrise}`).toLocaleString(
          "en-US",
          { hour: "numeric", minute: "numeric", hour12: true }
        ),
        الظهر: new Date(`01/01/2000 ${times.Dhuhr}`).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        العصر: new Date(`01/01/2000 ${times.Asr}`).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        المغرب: new Date(`01/01/2000 ${times.Maghrib}`).toLocaleString(
          "en-US",
          { hour: "numeric", minute: "numeric", hour12: true }
        ),
        العشاء: new Date(`01/01/2000 ${times.Isha}`).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      };

      timesDiv.innerHTML = "";
      for (let time in prayersTimes) {
        timesDiv.innerHTML += `<div class="card">
        <i class="fa-solid fa-mosque"></i>
        <p class="pray-name">${time}</p>
        <p class="time">${prayersTimes[time]}</p>
    </div>`;
      }
    });
}
