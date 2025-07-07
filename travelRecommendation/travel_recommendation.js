const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);
function performSearch() {
    const input = document.getElementById("searchInput").value;
    if (input) {
      alert("Searching for: " + input);
      // In real projects, replace this with actual search logic
    } else {
      alert("Please enter a destination or keyword.");
    }
  }
  
  function resetSearch() {
    document.getElementById("searchInput").value = "";
    alert("Search cleared.");
  }
  function performSearch() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultContainer = document.getElementById("recommendation-results");
  
    fetch("travel_recommendation.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch travel recommendations");
        }
        return response.json();
      })
      .then(data => {
        const results = [];
  
        // Search in countries > cities
        data.countries.forEach(country => {
          country.cities.forEach(city => {
            if (
              city.name.toLowerCase().includes(input) ||
              city.description.toLowerCase().includes(input)
            ) {
              results.push({
                name: city.name,
                imageUrl: city.imageUrl,
                description: city.description
              });
            }
          });
        });
  
        // Search in temples
        data.temples.forEach(temple => {
          if (
            temple.name.toLowerCase().includes(input) ||
            temple.description.toLowerCase().includes(input)
          ) {
            results.push({
              name: temple.name,
              imageUrl: temple.imageUrl,
              description: temple.description
            });
          }
        });
  
        // Search in beaches
        data.beaches.forEach(beach => {
          if (
            beach.name.toLowerCase().includes(input) ||
            beach.description.toLowerCase().includes(input)
          ) {
            results.push({
              name: beach.name,
              imageUrl: beach.imageUrl,
              description: beach.description
            });
          }
        });
  
        // Display results
        resultContainer.innerHTML = "";
        if (results.length === 0) {
          resultContainer.innerHTML = "<p>No results found for your search.</p>";
          return;
        }
  
        results.forEach(place => {
          const card = `
            <div style="border: 1px solid #ccc; padding: 15px; margin-bottom: 20px;">
              <h2>${place.name}</h2>
              <img src="${place.imageUrl}" alt="${place.name}" style="width: 100%; max-width: 400px;">
              <p>${place.description}</p>
            </div>
          `;
          resultContainer.innerHTML += card;
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        resultContainer.innerHTML = "<p>Unable to load recommendations at the moment.</p>";
      });
  }
  
  function resetSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("recommendation-results").innerHTML = "";
  }
  