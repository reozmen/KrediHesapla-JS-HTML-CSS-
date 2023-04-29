function krediHesapla() {
  let cekilecekTutar, vadeSayisi, faizOrani;
  let aylikTaksit, odenecekToplamTutar, vergiliToplamTutar, KKDF, BSMV;

  cekilecekTutar = +document.getElementById("txtKrediTutari").value;

  faizOrani = +document.getElementById("faizOrani").value;
  let liste = document.getElementById("listeVade");
  vadeSayisi = liste.options[liste.selectedIndex].value;

  console.log(faizOrani);
  if (vadeSayisi == 12) {
    odenecekToplamTutar =
      12 * ((cekilecekTutar * faizOrani) / (1 - 1 / (1 + faizOrani) ** 12));
  } else if (vadeSayisi == 24) {
    odenecekToplamTutar =
      24 * ((cekilecekTutar * faizOrani) / (1 - 1 / (1 + faizOrani) ** 12));
  } else if (vadeSayisi == 36) {
    odenecekToplamTutar =
      36 * ((cekilecekTutar * faizOrani) / (1 - 1 / (1 + faizOrani) ** 12));
  } else if (vadeSayisi == 48) {
    odenecekToplamTutar =
      48 * ((cekilecekTutar * faizOrani) / (1 - 1 / (1 + faizOrani) ** 12));
  }

  KKDF = (odenecekToplamTutar - cekilecekTutar) * 0.15;
  BSMV = (odenecekToplamTutar - cekilecekTutar) * 0.1;
  vergiliToplamTutar = odenecekToplamTutar + KKDF + BSMV;

  aylikTaksit = vergiliToplamTutar / vadeSayisi;

  document.querySelector("#sonuc").innerHTML =
    "Geri ödeme toplamı: " +
    vergiliToplamTutar.toFixed(2) +
    "<br>" +
    "Aylık taksit tutarınız: " +
    aylikTaksit.toFixed(2);
}
