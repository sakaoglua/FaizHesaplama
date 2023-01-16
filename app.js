const select = document.getElementById("select");
const taksit = document.getElementById("taksit");
const miktar = document.getElementById("miktar");
const calculateBtn = document.querySelector(".calc-btn");
let oran = 0;
let installment = 0;

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (select.value === "Ev Kredisi") {
    oran = 1.29;
  } else if (select.value === "İhtiyaç Kredisi") {
    oran = 1.99;
  } else if (select.value === "Araç Kredisi") {
    oran = 1.79;
  }

  const faiz = oran / 100;
  installment =
    (miktar.value * (faiz * (1 + faiz) ** taksit.value)) /
    ((1 + faiz) ** taksit.value - 1);

  if (!select.value || !taksit.value || !miktar.value) {
    alert("Bütün bilgileri giriniz.");
  } else {
    showResults();
  }
});

const showResults = () => {
  const results = document.querySelector(".results");
  results.innerHTML = `
   <h2 class="mt-3 text-warning">Kredi Bilgilendirmesi</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>Kredi Miktarı</th>
      <td>${miktar.value} ₺</td>
      <th>Kredi Türü</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Taksit Sayısı</th>
      <td>${taksit.value}</td>
      <th>Faiz Oranı</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Miktar</th>
      <td>${(installment * taksit.value).toFixed(2)} ₺</td>
      <th>Faiz Miktarı</th>
      <td>${installment.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>
`;
};
