
/*
let i = 5;
let games = true;
while (games == true) {
    if (i > 0) {
        alert(i);
        i -= 1;
    } else {
        console.log('Close game')
        games = false
    };
};


let num = 5;

for (; num >= 0; num -= 1) {
    if (num <= 0) {
        console.log('Game over')
    } else {
        console.log(num);
    }
}
*/

/*
function generateQRCode(username) {
  // Формируем ссылку на Telegram
  const telegramUrl = `https://t.me/${username}`;

  // Создаем QR-код
  QRCode.toCanvas(
    document.getElementById("qr-code"),
    telegramUrl,
    {
      width: 200,
      height: 200,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    },
    function (error) {
      if (error) console.error(error);
    }
  );
}

generateQRCode("@mishamandarin1");
console.log(generateQRCode("@mishamandarin1")) */


const no = document.getElementById("no");
const yes = document.getElementById("yes");
const text = document.getElementById("gameover");

no.addEventListener("mouseover", function () {
  no.style.position = "absolute";
  no.style.marginLeft = `${Math.ceil(Math.random() * 90)}%`;
  no.style.marginTop = `${Math.ceil(Math.random() * 30)}%`;
});

no.addEventListener("click", function () {
  alert("Ответ неверный!");
});

yes.addEventListener("click", function () {
  text.innerHTML = "Я и не сомнивался!";
  text.style.background = 'red'
  setTimeout(function () {
    text.innerHTML = "";
    text.style.background = "none";
  }, 5000); // текст будет отображаться 5 секунд
});