function krediHesapla() {
  let cekilecekTutar, faizOrani, vade, KKDF_orani, BSMV_orani;
  let aylikTaksit, odenecekToplamTutar, vergiliToplamTutar, KKDF, BSMV;

  cekilecekTutar = +document.getElementById("cekilecekKredi").value;

  faizOrani =
    +document.getElementById("faizOrani").value.replace(",", ".") / 100;

  vade = +document.getElementById("vade").value;

  KKDF_orani = parseFloat(
    document.getElementById("KKDF").value.replace(",", ".")
  );

  BSMV_orani = parseFloat(
    document.getElementById("BSMV").value.replace(",", ".")
  );

  odenecekToplamTutar =
    vade * ((cekilecekTutar * faizOrani) / (1 - 1 / (1 + faizOrani) ** vade));

  KKDF = (odenecekToplamTutar - cekilecekTutar) * KKDF_orani;
  BSMV = (odenecekToplamTutar - cekilecekTutar) * BSMV_orani;

  vergiliToplamTutar = odenecekToplamTutar + KKDF + BSMV;

  aylikTaksit = vergiliToplamTutar / vade;

  if (!cekilecekTutar || !faizOrani || !vade) {
    document.querySelector(
      "#krediBilgiler"
    ).innerHTML = `<p>Lütfen tüm alanları doldurunuz</p>`;
  } else {
    document.querySelector("#krediBilgiler").innerHTML =
      `<p>Çekilecek Kredi Tutarı ➡️ <span>
    ${cekilecekTutar.toFixed(2)}</span> </p>` +
      "<br>" +
      `<p>Vade Sayısı ➡️ <span>
    ${vade}</span> </p>` +
      "<br>" +
      `<p>Aylık Faiz Oranı ➡️ <span>
      ${faizOrani * 100} %</span> </p>` +
      "<br>" +
      `<p>Geri Ödeme Toplamı ➡️ <span>
    ${vergiliToplamTutar.toFixed(2)}</span> </p>` +
      "<br>" +
      `<p>Aylık taksit tutarınız: ➡️ <span>
    ${aylikTaksit.toFixed(2)}</span> </p>`;
  }

  document.getElementById("cekilecekKredi").value = "";
  document.getElementById("faizOrani").value = "";
  document.getElementById("vade").value = "";
}
