# Prompt

Using The Movie DB API, we've created an app with basic search functionality using Next.js--but it's untested!

**Note: To get it running, an API key will be provided to you from wisp. You will need to update the `.env` file to include the API Key provided by Wisp.**

Please spend around 2 hours writing Cypress tests for this repository (We use Cypress here at Wisp!).
Below are the requirements for the application. If you have any questions, please feel free to reach out to the hiring manager from Wisp!

### Movie search requirements
- As a user, I am able to search for a movie using a phrase such as "Legally Blonde" or "Star Wars".
- The search result should show me the following information:
    - The full title
    - The first 50 words of the description
    - The rating of the movie and the number of raters
    - The release date in the format "month day, year" (i.e. Feb 01, 2022).
    - The poster of the movie.
- If the results have additional pages, I want to have a mechanism to view the additional results (20 per page).
- There should be "search as you type" capability, ie. return results as the user is typing.
- I want to be able to share my search results with others by sharing the URL to it. In other words, make sure that
the query parameters are in sync with the search query/results on the page.

### Running the tests
To run the Cypress tests, you can run:
- `yarn test` to open the Cypress Launchpad
- Note that this tests against a production build so you will need to rerun the command if you change application code.

If you want to play around with the app without running Cypress, you can run `yarn dev` and visit [http://localhost:3000](http://localhost:3000/).

