function krediHesapla() {
  let cekilecekTutar, vadeSayisi, faizOrani;
  let aylikTaksit, odenecekToplamTutar, vergiliToplamTutar, KKDF, BSMV;

  cekilecekTutar = +document.getElementById("txtKrediTutari").value;

  faizOrani = +document.getElementById("faizOrani").value / 100;
  let vade = +document.getElementById("vade").value;
  let KKDF_orani = parseFloat(document.getElementById("KKDF").value);
  let BSMV_orani = parseFloat(document.getElementById("BSMV").value);

  console.log(vade);
  console.log(faizOrani);
  console.log(KKDF_orani);
  console.log(BSMV_orani);
  odenecekToplamTutar =
    vade * ((cekilecekTutar * faizOrani) / (1 - 1 / (1 + faizOrani) ** vade));

  KKDF = (odenecekToplamTutar - cekilecekTutar) * KKDF_orani;
  BSMV = (odenecekToplamTutar - cekilecekTutar) * BSMV_orani;
  vergiliToplamTutar = odenecekToplamTutar + KKDF + BSMV;

  aylikTaksit = vergiliToplamTutar / vade;

  document.querySelector("#sonuc").innerHTML =
    "Geri ödeme toplamı: " +
    vergiliToplamTutar.toFixed(2) +
    "<br>" +
    "Aylık taksit tutarınız: " +
    aylikTaksit.toFixed(2);
}
