const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  console.log(countries[0]);

  const allCountriesHTML = countries.map((country) =>
    getCountriesHTML(country)
  );
  //   console.log(allCountriesHTML[0]);
  const container = document.getElementById('countries');
  container.innerHTML = allCountriesHTML;
};
const getCountriesHTML = (country) => {
  return `
    <div>
        <div class="country">
          <h2>${country.name.common}</h2>
          <img src="${country.flags.png}"
        </div>
    </div>
    `;
};

loadCountries();
