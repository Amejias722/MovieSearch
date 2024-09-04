// - As a user, I am able to search for a movie using a phrase such as "Legally Blonde" or "Star Wars".
// - The search result should show me the following information:
//     - The full title
//     - The first 50 words of the description
//     - The rating of the movie and the number of raters
//     - The release date in the format "month day, year" (i.e. Feb 01, 2022).
//     - The poster of the movie.
// - If the results have additional pages, I want to have a mechanism to view the additional results (20 per page).
// - There should be "search as you type" capability, ie. return results as the user is typing.
// - I want to be able to share my search results with others by sharing the URL to it. In other words, make sure that
// the query parameters are in sync with the search query/results on the page.

import { getRandomTitle, movieTitles, ids, checkResultsPerPage } from "../support/movieTitles"

const titles = movieTitles.titles;
const randomTitle = getRandomTitle(titles);

describe("User tests movie search functionality", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/"); 
        cy.contains('Welcome to Movie Search.').should('be.visible')
    });

    it("User can search for movie and verify title, description, ratings/release dates, and poster", () => {

       cy.step('Searches for a movie')
       cy.get(ids.searchBar).type(`${randomTitle} {enter}`)
       cy.wait(500)
       
       cy.step('Verifies title is displayed')
       cy.get(ids.cardTitle).contains(`${randomTitle}`).should('be.visible')
       
       cy.step('Verifies 50 words in description')
       cy.get(ids.description).first()
       .invoke('text') 
       .then((text) => {
         const wordCount = text.trim().split(/\s+/).length; 
         expect(wordCount).to.be.lte(50); 
       });
       
       cy.step('Verifies rating and release date')
       cy.get(ids.listGroup).contains(/^Rating: \d+\.\d+ \(by \d+ raters\)$/).should('be.visible');
       cy.get(ids.listGroup).contains(/^Release Date: \w{3} \d{2}, \d{4}$/).should('be.visible');

       cy.step('Verifies poster of the movie exists and matches search input')
       cy.get(ids.cardTitle).first()
       .invoke('text')
       .then((cardTitleText) => {
         cy.get(ids.image).first()
           .should('have.attr', 'alt')
           .then((alt) => {
             expect(alt).to.include(`Poster for ${cardTitleText.trim()}`);
           });
       });
    })

    it('Review Additional Results Per Page - Pagination', () => { 
            cy.step('Searches for a movie')
            cy.get(ids.searchBar).type('Alien{enter}');

            cy.step('Paginate through each page, verify the URL, and check for 20 results per page')
            checkResultsPerPage(20);
            [2, 3, 4, 5].forEach(pageNumber => {
              cy.get(ids.pagination).contains(pageNumber).click();
              cy.wait(500);
              cy.url().should('include', `page=${pageNumber}`)
              checkResultsPerPage(20);
            });
          });

        it('Should copy the search results URL to the clipboard', () => {
            cy.step('Searches for a movie')
            cy.get(ids.searchBar).type(`${randomTitle} {enter}`)
            cy.wait(500)
           
            cy.step('Copies search results url to clipboard')
            cy.url().then((currentUrl) => {
              cy.window().then((win) => {
                win.navigator.clipboard.writeText(currentUrl).then(() => {
                  win.navigator.clipboard.readText().then((clipboardText) => {
                    expect(clipboardText).to.equal(currentUrl);
                    win.alert('URL has been copied to clipboard! Open a new tab and paste.')
                  });
                });
              });
            });
         
          
    });


    /*Uncomment test and run to check type ahead results. The suggestions do not match the search
    input.*/ 

    // it.only('User can search and select movie using type ahead', () => {
    // cy.get(ids.searchBar).type("Lord of The") 
    //     });
        
    });




