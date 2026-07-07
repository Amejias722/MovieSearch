# 🎬 Movie Search Automation

## 📖 About This Project

This project demonstrates **end-to-end (E2E) test automation** using **Cypress** to validate a movie search application. The test suite verifies core user functionality, including movie search, result validation, pagination, URL synchronization, and accessibility checks. Test scenarios are documented using **Behavior-Driven Development (BDD)** principles to improve readability, maintainability, and traceability.

---

## ✨ Features

* 🔍 Search for movies by title or phrase
* 🎥 Validate movie details
* ⭐ Verify ratings and number of raters
* 📅 Validate release date formatting
* 🖼️ Verify movie posters and alt text
* 📄 Validate pagination (20 results per page)
* 🔗 Verify URL synchronization for shareable search results
* ✅ End-to-End Testing with Cypress
* 🧪 BDD-Style Test Documentation

---

## 📝 BDD Test Cases

### Feature: Movie Search

> **As a user**
> I want to search for movies by title or phrase
> So that I can view relevant movie details and share my results.

#### Background

```gherkin
Given I am on the Movie Search homepage
And I can see the welcome message
```

---

### 🔍 Scenario: Search for a movie and view its details

```gherkin
When I search for a movie title
Then I should see search results for that movie
And each result should display the full movie title
And the movie description should display no more than the first 50 words
And the movie rating should be displayed
And the number of raters should be displayed
And the release date should be displayed in "MMM DD, YYYY" format
And the movie poster should be displayed
```

---

### 🖼️ Scenario: Verify movie poster

```gherkin
Given I have searched for a movie
When the search results are displayed
Then the movie poster should have alt text
And the alt text should include the movie title
```

---

### 📄 Scenario: View additional search results

```gherkin
When I search for a movie with multiple pages of results
Then I should see no more than 20 results per page
And pagination controls should be available
```

---

### ➡️ Scenario: Navigate between result pages

```gherkin
Given I have searched for a movie with multiple pages of results
When I click a pagination page number
Then the selected page of results should be displayed
And the URL should include the selected page number
And the page should display no more than 20 results
```

---

### 🔗 Scenario: Verify URL synchronization

```gherkin
When I search for a movie title
Then the URL should include the search query
And the search results should match the query in the URL
```

---

### 📋 Scenario: Share search results

```gherkin
Given I have searched for a movie
When I copy the current search results URL
Then the copied URL should match the current browser URL
And the URL can be shared with another user to view the same search results
```

---

## 🚀 Running the Tests

Install project dependencies:

```bash
npm install
```

Run the Cypress test suite:

```bash
npm test
```
