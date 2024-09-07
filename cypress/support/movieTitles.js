// movieTitles.js
const movieTitles = {
    titles: [
      "Romy and Michele's High School Reunion",
      "Ace Ventura: Pet Detective",
      "Jennifer's Body",
      "Superbad",
      "Anchorman: The Legend of Ron Burgundy",
      "Step Brothers",
      "The Hangover",
      "Dumb and Dumber",
      "Wedding Crashers",
      "Pineapple Express",
      "White Men Can't Jump",
      "Chicago: The Musical"
    ]
  };
  
  // Function to get a random movie title from the object above
  const getRandomTitle = (titles) => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };

  const checkResultsPerPage = (expectedMaxCount) => {
    cy.get(ids.image).should('have.length.lte', expectedMaxCount);
  };

  //custom ids to write tests
  const ids = {
    searchBar: '[name="query"]',
    submitBtn: '[data-cy="submitSearch"]',
    cardTitle: '[class="card-title h5"]',
    description: '[class="card-text"]',
    listGroup: '[class="list-group-flush list-group"]',
    searchResult: '[data-cy="searchResult"]',
    pagination: '[data-cy="pagination"]',
    image: '[class="rounded-start img-fluid"]',
    autoResults: '[data-cy="autoResults"]'
    }
  
  module.exports = {
    movieTitles,
    getRandomTitle,
    ids,
    checkResultsPerPage
  };
  