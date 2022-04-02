/* pojava */
function pojava() {
  var isti = document.querySelectorAll(".isti");
  var ekran = window.innerHeight / 1.3;
  isti.forEach((i) => {
    var pozicija = i.getBoundingClientRect().top;
    if (pozicija < ekran) {
      i.classList.add("pojava");
    }
  });
  var autorh3 = document.getElementById("hatri");
  var pozicija2 = autorh3.getBoundingClientRect().top;
  if (pozicija2 < ekran) {
    autorh3.style.opacity = "1";
    autorh3.style.marginLeft = "0px";
  }
  var text = document.getElementById("text");
  var pozicija3 = text.getBoundingClientRect().top;
  if (pozicija3 < ekran) {
    text.style.opacity = "1";
    text.style.marginLeft = "60px";
  }
  var slika = document.querySelector("#oautoru img");
  var pozicija4 = slika.getBoundingClientRect().top;
  if (pozicija4 < ekran) {
    slika.style.opacity = "1";
    slika.style.marginRight = "150px";
  }
  var kontakt = document.querySelector("#kontakt h3");
  var pozicija5 = kontakt.getBoundingClientRect().top;
  if (pozicija5 < ekran) {
    kontakt.style.opacity = "1";
    kontakt.style.marginLeft = "0px";
  }
  var tabela = document.querySelector("table");
  var pozicija6 = tabela.getBoundingClientRect().top;
  if (pozicija6 < ekran) {
    tabela.style.opacity = "1";
    tabela.style.marginRight = "0px";
  }
}
window.addEventListener("scroll", pojava);
window.onload = function () {
  //ime
  var ime = document.getElementById("ime");
  ime.style.border = "1px solid grey";
  ime.addEventListener("input", zaime);

  //prezime
  var prezime = document.getElementById("prezime");
  prezime.style.border = "1px solid grey";
  prezime.addEventListener("input", zaprezime);

  //GRADOVI
  var grad = this.document.getElementById("grad");
  grad.style.border = "1px solid grey";
  grad.addEventListener("change", zagrad);

  //gradovi
  var gradovi = [
    "Beograd",
    "Niš",
    "Novi Sad",
    "Zrenjanin",
    "Pančevo",
    "Кragujevac",
    "Kraljevo",
    "Vršac",
    "Jagodina",
  ];

  var ispisGradova = `<option value="0">Izaberite grad</option>`;

  for (var i = 0; i < gradovi.length; i++) {
    ispisGradova += `<option value="${i + 1}">${gradovi[i]}</option>`;
  }
  document.getElementById("grad").innerHTML = ispisGradova;

  //email
  var email = document.getElementById("email");
  email.style.border = "1px solid grey";
  email.addEventListener("input", zaemail);
  //broj
  var broj = document.getElementById("broj");
  broj.style.border = "1px solid grey";
  broj.addEventListener("input", zabroj);
  //poruka
  var poruka = document.getElementById("poruka");
  poruka.style.border = "1px solid grey";
  poruka.addEventListener("input", zaporuku);
  //dugme
  var dugme = document.getElementById("dugme");
  dugme.addEventListener("click", zadugme);
  //DINAMICKI ISPIS HEADERA
  var header = document.getElementById("header");
  var linkoviLevo = ["Početna", "Recepti"];
  var linkoviDesno = ["Kontakt", "O Autoru"];
  var linkovi = ["#", "#recepti", "#kontakt", "#oautoru"];

  //DINAMICKI ISPIS JELA
  var jeloNaslov = [
    "Štrudla",
    "Zanimljiva pita",
    "Teleća čorba",
    "Gulaš",
    "Doboš",
    "Salata",
  ];
  var jeloSlika = [
    "ssdz.jpg",
    "zp.jpg",
    "tc.jpg",
    "g.jpg",
    "dobos.jpg",
    "salata.jpg",
  ];
  var jeloRecept = [
    "<li>500g brašna</li><li>250 ml mleka</li><li>100 ml ulja</li><li>2 јаја</li><li>1/2 kašičice soli</li><li>5 kašičica šećera</li>",
    "<li>200ml vode</li><li>1 kašika masti</li><li>1 kašičica šećera</li><li>1 kašičica soli</li><li>450g brašna</li><li>10g svežeg kvasac</li><li>300g sira</li>",
    "<li>600g telećeg mesa</li><li>1 glavica luka</li><li>2-3 kašike ulja</li><li>2 krompira</li><li>2 kašike brašna</li><li>2 žumanca</li><li>200ml kisele pavlake</li>",
    "<li>500g svinjskog mesa</li><li>3 glavica luka</li><li>1 kašika masti</li><li>2 kašičice soli</li><li>1 kašičica bibera</li><li>2 kašike brašna</li><li>1 kašičica aleve paprike</li>",
    "<li>10 jaja</li><li>400g šećera</li><li>200g čokolade</li><li>500g maslaca</li>",
    "<li>100g rendane jabuke</li><li>50g rendanog celera</li><li>prstohvat soli</li><li>prstohvat bibera</li><li>1 kašičica limuna</li><li>1 kašičica ulja</li><li>1 šaka matovilca</li>",
  ];
  var jeloTekst = [
    "Uzeti u 250 ml mlakog mleka razmutiti kvasac i dodati mu kašiku šećera, pa ostaviti da naraste 15-ak minuta. U brašno dodati nadošli kvasac, jaja, ulje, šećer i so. Umsti glatko testo. Možete ga mešati dodacima za testo uz pomoć miksera. Sjedinjeno testo mesiti još malo na malo pobrašnjanoj podlozi.</br>Testo podeliti na dva dela (dve jufke), prekriti krpom i ostaviti 45 minuta da naraste.</br>Jufke istanjiti što više može, pa celu površinu testa obilno namazati džemom. Urolati i ređati u podmazan pleh. Rolate premazati žumancem u koji se stavi nekoliko kapi ulja. Peći oko 45 minuta na temperaturi od 200 stepeni.</br>Gotovu štrudlu vrlo malo poprskati vodom, prekriti i ostaviti da se malo ohladi. Rolate posipati prah šećerom i poslužiti tople.",
    "Uzeti tepsiju br 28 može i 30 podmazati uljem i odgore posipati susam. Zatim staviti oblikovano testo u tepsiju preko susama blago rukama pretisnuti i pokriti da naraste oko 30-ak minuta.</br>Kada je testo naraslo rukama fino rastanjiti u tepsiju. Potom prste umakati u ulje i praviti krugove tj. udubljenja prstima.</br>Zatim udubljenja popuniti nadevom</br>Potom premazom premazati stranice bez nadeva.</br>I peći na 200 stepeni oko 30-ak minuta. Prijatno!!!",
    "Iseckati sitno luk. U dublji lonac sipati ulje, zagrejati ga, pa na njemu izdinstati sitno seckani luk. Dodati meso seckano na kockice, promešati i ostaviti da se malo dinsta. Sipati 2 l vode. Staviti biber u zrnu, lovorov list, na kockice seckanu šargarepu i krompir, smanjiti temperaturu, posoliti, poklopiti i kuvati sve dok povrće i meso ne omeknu.</br>U posebnom lončetu izmešati brašno, alevu papriku i malo vode, tako da nema grudvica, pa to dodati u čorbu.</br>Opet kuvati dok ne provri. 2 žumanca viljuškom umutiti i dodati kiselu pavlaku, pa dobro sve promešati. Vrijuću čorbu skloniti sa ringle, pa je polako kutlačom sipati u smesu od žumanaca i pavlake stalno mešajući viljuškom. Sipati dve-tri kutlače. Dobro promešati, pa opet jednom po jednom kutlačom vraćati smesu u lonac. Polako promešati i poklopiti.",
    "U šerpu staviti mast, pa dodati crni luk da se dobro izdinsta, dodati so i po potrebi dodavati vode. Kada luk bude dobro upržen, dodati meso isečeno na kocke i naliti vode, toliko da može lepo da se krčka.</br>U toku kuvanja po potrebi dolivati vodu. Kada meso bude kuvano, dodati zašine. U posebnu posudu dodati brašno, alevu papriku i 1,5 dl vode, dobro umutiti da nema grudvica i sipati u gulaš. Ostaviti da se kuva još 5 minuta i skloniti sa šporeta. Prijatno! :)",
    "Penasto umutiti belanca, lagano dodavati šećer i jedno po jedno žumance. Kada je masa penasta, dodati joj jednu po jednu kašiku brašna, uz neprestano mešanje. Od ove mase peći deset kora u posebnom plehu za doboš tortu.</br>U međuvremenu, ulupati cela jaja sa šećerom u prahu i kuvati na pari. Kada krem počne da se zgušnjava, dodavati omekšalu čokoladu i kuvati još kratko vreme na pari. Ostaviti da se ohladi. Maslac penasto umutiti i dodavati mu jednu po jednu kašiku ohlađenog krema. Ovim nadevom premazati svaku koru i ređati ih jednu na drugu.</br>Gornju koru preliti ušpinovanim šećerom zlatnožute boje, pa kada se glazura učvrsti, vrelim nožem seći na režnjeve.",
    "Izmešajte rendanu jabuku i celer, dodajte so, biber, ulje i limunov sok, promešajte, pa dodajte matilovac. Salatu pripremajte neposredno pre upotrebe.</br>Salatu možete pripremati od čistog matovilca uz dodatak ulja, soli i sirćeta ili limunovog soka, ali ga možete iskombinovati i sa drugim sastojcima. Matovilac je lagan, tako da jedna šaka nema više od 10-tak grama. Moja mama kaže da ga je kupovala kada smo bile male, a ne može da se seti kako su ga bake zvale. Inače, tada ova salata nije bila skupa kao sada ;).",
  ];
  var recepti = document.getElementById("recepti");
  function mediaquery(x) {
    if (x.matches) {
      header.innerHTML = "";
      for (let br = 0; br < linkoviLevo.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br] + "'>" + linkoviLevo[br] + "</a>";
      }
      for (let br = 0; br < linkoviDesno.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br + 2] + "'>" + linkoviDesno[br] + "</a>";
      }
      recepti.innerHTML = "<h3>Recepti</h3>";
      for (let i = 0; i < jeloRecept.length; i += 2) {
        //LEVO

        recepti.innerHTML +=
          "<div class='novi'><h4 class='naslovi'>" +
          jeloNaslov[i] +
          "</h4><ul class='recepti'>" +
          jeloRecept[i] +
          "</ul><p class='tekstovi'>" +
          jeloTekst[i] +
          "</p><a width='60%' data-magnify='gallery' data-caption='" +
          jeloNaslov[i] +
          "' href='img/" +
          jeloSlika[i] +
          "'><img width='50%' src='img/" +
          jeloSlika[i] +
          "' alt='" +
          jeloNaslov[i] +
          "'></a> </div>";
        //DESNO
        if (i == jeloRecept.length - 1) break;
        recepti.innerHTML +=
          "<div class='novi boja'><h4 class='naslovi'>" +
          jeloNaslov[i + 1] +
          "</h4><ul class='recepti'>" +
          jeloRecept[i + 1] +
          "</ul><p class='tekstovi'>" +
          jeloTekst[i + 1] +
          "</p><a width='60%' data-magnify='gallery' data-caption='" +
          jeloNaslov[i + 1] +
          "' href='img/" +
          jeloSlika[i + 1] +
          "'><img width='50%' src='img/" +
          jeloSlika[i + 1] +
          "' alt='" +
          jeloNaslov[i + 1] +
          "'></a> </div>";
      }
    } else {
      header.innerHTML = "";
      for (let br = 0; br < linkoviLevo.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br] + "'>" + linkoviLevo[br] + "</a>";
      }
      header.innerHTML += "<img src='img/logo.png' alt='logo' />";
      for (let br = 0; br < linkoviDesno.length; br++) {
        header.innerHTML +=
          "<a href='" + linkovi[br + 2] + "'>" + linkoviDesno[br] + "</a>";
      }
      recepti.innerHTML = "<h3>Recepti</h3>";
      for (let i = 0; i < jeloRecept.length; i += 2) {
        //LEVO
        recepti.innerHTML +=
          "<div class='isti'><a data-magnify='gallery' data-caption='" +
          jeloNaslov[i] +
          "' href='img/" +
          jeloSlika[i] +
          "'><img class='left' src='img/" +
          jeloSlika[i] +
          "' alt='" +
          jeloNaslov +
          "' /></a><div class='right desnitekst'><h4>" +
          jeloNaslov[i] +
          "</h4><ul class='left sastojci'>" +
          jeloRecept[i] +
          "</ul><div class='tekstovi right'><p>" +
          jeloTekst[i] +
          "</p></div><div class='cleaner'></div></div><div class='cleaner'></div></div>";
        //DESNO
        if (i == jeloRecept.length - 1) break;
        recepti.innerHTML +=
          "<div class='isti boja'><div class='left levitekst'><h4>" +
          jeloNaslov[i + 1] +
          "</h4><ul class='left sastojci'>" +
          jeloRecept[i + 1] +
          "</ul><div class='tekstovi right'><p>" +
          jeloTekst[i + 1] +
          "</p></div>  <div class='cleaner'></div> </div><a data-magnify='gallery' data-caption='" +
          jeloNaslov[i + 1] +
          "' href='img/" +
          jeloSlika[i + 1] +
          "'><img class='right' src='img/" +
          jeloSlika[i + 1] +
          "' alt='" +
          jeloNaslov[i + 1] +
          "' /> </a><div class='cleaner'></div></div>";
      }
    }
  }

  var z = window.matchMedia("(max-width: 768px)");
  mediaquery(z);
  z.addListener(mediaquery);
  //DINAMICKI FOOTER IKONICE
  var mreze = document.getElementById("mreze");
  var ikoniceLinkovi = [
    "sitemap.xml",
    "rss.xml",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://twitter.com/login",
    "https://web.whatsapp.com/",
  ];
  var ikoniceTitlovi = [
    "Sitemap",
    "RSS",
    "Facebook",
    "Instagram",
    "Twitter",
    "Whatsapp",
  ];
  var ikoniceKlase = [
    "fas fa-sitemap",
    "fas fa-rss",
    "fab fa-facebook-f",
    "fab fa-instagram",
    "fab fa-twitter",
    "fab fa-whatsapp",
  ];
  for (let b = 0; b < ikoniceKlase.length; b++) {
    mreze.innerHTML +=
      "<a href='" +
      ikoniceLinkovi[b] +
      "'title='" +
      ikoniceTitlovi[b] +
      "'target='_blank'class='" +
      ikoniceKlase[b] +
      "'>";
  }
  setInterval(Slider, 2000);
};
//SLAJDER
var slajderSlike = ["thumb.jpg", "thumb1.jpg", "thumb2.jpg"];
var brojac = 0;
var slajder = document.getElementById("thumb");
function Slider() {
  if (brojac === slajderSlike.length) {
    brojac = 0;
  }

  slajder.style.backgroundImage =
    "linear-gradient(rgba(252, 191, 73, 0.3),rgba(252, 191, 73, 0.3)),url('img/" +
    slajderSlike[brojac] +
    "')";
  brojac++;
}
// GRESKE
var gime = true;
var gprezime = true;
var ggrad = true;
var gemail = true;
var gbroj = true;
var gporuka = true;

function zaime() {
  var regExpIme = /^\w{3,12}$/;
  var x = document.getElementById("greskaime");
  if (regExpIme.test(ime.value)) {
    ime.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gime = false;
  } else if (ime.value.length == 0) {
    ime.style.border = "1px solid grey";
    x.textContent = "";
    gime = true;
  } else {
    ime.style.border = "1px solid red";
    x.textContent = "* Ime mora da ima bar 3 slova";
    gime = true;
  }
}
function zaprezime() {
  var regExpPrezime = /^[\wćĆđĐšŠžŽčČ]{3,15}$/;
  var x = document.getElementById("greskaprezime");
  if (regExpPrezime.test(prezime.value)) {
    prezime.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gprezime = false;
  } else if (prezime.value.length == 0) {
    prezime.style.border = "1px solid grey";
    x.textContent = "";
    gpreime = true;
  } else {
    prezime.style.border = "1px solid red";
    x.textContent = "* Prezime mora da ima bar 3 slova";
    gprezime = true;
  }
}
function zaemail() {
  var x = document.getElementById("greskaemail");
  var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regExpEmail.test(email.value)) {
    email.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gemail = false;
  } else if (email.value.length == 0) {
    email.style.border = "1px solid grey";
    x.textContent = "";
    gemail = true;
  } else {
    email.style.border = "1px solid red";
    x.textContent = "* Unesite validan email";
    gemail = true;
  }
}
function zabroj() {
  var x = document.getElementById("greskabroj");
  var regExpBroj = /^06[0-9]\/[0-9]{4}\-[0-9]{3,4}$/;
  if (regExpBroj.test(broj.value)) {
    broj.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gbroj = false;
  } else if (broj.value.length == 0) {
    broj.style.border = "1px solid grey";
    x.textContent = "";
    gbroj = true;
  } else {
    broj.style.border = "1px solid red";
    x.textContent = "* Validan format broja:  060/1234-567";
    gbroj = true;
  }
}
function zagrad() {
  var x = document.getElementById("greskagrad");
  if (grad.value == 0) {
    grad.style.border = "1px solid grey";
    x.textContent = "";
    ggrad = true;
  } else {
    grad.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    ggrad = false;
  }
}
function zaporuku() {
  var x = document.getElementById("greskaporuka");
  if (poruka.value == "") {
    poruka.style.border = "1px solid red";
    x.textContent = "* Ne smete ostaviti praznu poruku";
    gporuka = true;
  } else if (poruka.value.length == 0) {
    poruka.style.border = "1px solid grey";
    x.textContent = "";
    gporuka = true;
  } else {
    poruka.style.border = "1px solid green";
    x.innerHTML = `<i class="fas fa-check"></i>`;
    gporuka = false;
  }
}
function zadugme() {
  var greskaime = document.getElementById("greskaime");

  var greskaprezime = document.getElementById("greskaprezime");

  var greskaemail = document.getElementById("greskaemail");

  var greskabroj = document.getElementById("greskabroj");

  var greskagrad = document.getElementById("greskagrad");

  var greskaporuka = document.getElementById("greskaporuka");
  var x = document.getElementById("uspesno");
  var f = document.getElementById("forma");
  if (
    gime == false &&
    gprezime == false &&
    ggrad == false &&
    gemail == false &&
    gbroj == false &&
    gporuka == false
  ) {
    ime.style.border = "1px solid grey";
    greskaime.innerHTML = "";
    prezime.style.border = "1px solid grey";
    greskaprezime.innerHTML = "";
    email.style.border = "1px solid grey";
    greskaemail.innerHTML = "";
    broj.style.border = "1px solid grey";
    greskabroj.innerHTML = "";
    grad.style.border = "1px solid grey";
    greskagrad.innerHTML = "";
    poruka.style.border = "1px solid grey";
    greskaporuka.innerHTML = "";

    x.style.color = "green";
    x.innerHTML = `<i class="fas fa-check"></i> Uspesno ste poslali poruku!`;
    f.reset();
    gime = true;
    gprezime = true;
    ggrad = true;
    gemail = true;
    gbroj = true;
    gporuka = true;
  } else {
    x.style.color = "red";
    x.textContent = "Unesite sve podatke!";
  }
}
$(document).ready(function () {
  $("[data-magnify=gallery]").magnify();
  $("#prikazivise").on("click", function () {
    $("#vise").slideToggle();
  });
  var datum = new Date();
  function updateTime() {
    datum = new Date(datum.getTime() + 1000);
    var dan = datum.getDate();
    if (dan < 10) {
      dan = "0" + dan;
    }
    var mesec = datum.getMonth() + 1;
    if (mesec < 10) {
      mesec = "0" + mesec;
    }
    var sat = datum.getHours();
    if (sat < 10) {
      sat = "0" + sat;
    }
    var minut = datum.getMinutes();
    if (minut < 10) {
      minut = "0" + minut;
    }
    var sekund = datum.getSeconds();
    if (sekund < 10) {
      sekund = "0" + sekund;
    }

    $("#vreme").html(
      "<b>" +
        dan +
        "/" +
        mesec +
        "/" +
        datum.getFullYear() +
        " " +
        sat +
        ":" +
        minut +
        ":" +
        sekund +
        "</b>"
    );
  }
  setInterval(updateTime, 1000);
  //NA VRH STRELICA
  $("#vrh").on("click", function () {
    $(document).scrollTop($(document).scrollTop() + " px");
  });
});
