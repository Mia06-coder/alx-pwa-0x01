## API Overview

The MoviesDatabase API provides comprehensive and regularly updated data for over **9 million** titles, including movies, series, and episodes. It offers a wide range of endpoints that support querying titles by various filters, searching by keywords, titles, or alternative names (akas), and retrieving detailed information about actors and their profiles.

### Key features include:

- Extensive data coverage with weekly updates for recent titles and daily updates for ratings and episode details.
- Flexible querying capabilities with optional parameters allowing filtering by genre, year, title type, sorting options, and more.
- Multiple endpoints support bulk fetching of titles by lists or by ID arrays, as well as specific endpoints for upcoming titles.
- Detailed information retrieval for single titles or episodes, including ratings and votes.
- Series-specific endpoints that provide information on seasons, episodes, and number of seasons.
- Actor-related endpoints for accessing actor lists and individual actor details.
- Utility endpoints that return metadata such as available title types, genres, and predefined lists.
- All data responses include a uniform structure with a `results` key and pagination support where applicable.

> This API is designed to support developers needing a robust and flexible movie and series database with up-to-date and rich metadata coverage. It also offers support through a donation link to help sustain development.

---

## API Version

Currently v1

---

## Available Endpoints

Here is a list of the main endpoints available in the **MoviesDatabase API** along with brief descriptions of what each endpoint provides:

- `/titles` - Returns an array of titles filtered or sorted according to the provided query parameters.

- `/x/titles-by-ids` - Returns an array of titles based on an array of provided title IDs.

- `/titles/{id}` - Retrieves detailed information about a specific title by its IMDb ID.

- `/titles/{id}/ratings` - Fetches the rating and number of votes for a specific title.

- `/titles/series/{id}` - Returns an array of episodes for a series, including episode IDs, episode numbers, and season numbers.

- `/titles/seasons/{id}` -
  Provides the total number of seasons for a given series.

- `/titles/series/{id}/{season}` - Retrieves episodes of a specific season within a series.

- `/titles/episode/{id}` - Returns detailed information about a specific episode by its IMDb ID.

- `/titles/x/upcoming` - Lists upcoming titles according to filters or sorting provided.

- `/titles/search/keyword/{keyword}` - Searches titles by a keyword.

- `/titles/search/title/{title}` - Searches titles by a title or part of a title, with an option for exact matching.

- `/titles/search/akas/{aka}` - Searches titles by their alternative names (aka), exact and case-sensitive.

- `/actors` - Returns a list of actors with optional pagination.

- `/actors/{id}` - Retrieves detailed information about an actor by their IMDb ID.

- `/title/utils/titleType` - Provides a list of available title types.

- `/title/utils/genres` - Returns the list of available genres.

- `/title/utils/lists` - Returns predefined lists of titles used for filtering and querying.

> This set of endpoints enables comprehensive access to extensive movie, series, episode, and actor data, supporting a wide variety of queries and data retrieval needs.

---

## Request and Response Forma

...............

---

## Authentication

The MoviesDatabase API on RapidAPI requires authentication via an API key provided by RapidAPI. To authenticate your requests, you must include the following HTTP headers in each API call:

- `X-RapidAPI-Key`: Your personal RapidAPI key (unique to your RapidAPI account).
- `X-RapidAPI-Host`: The host name of the API on RapidAPI, which in this case is "**moviesdatabase.p.rapidapi.com**".

### Example of headers for a fetch or HTTP request:

```plaintext
X-RapidAPI-Key: YOUR_RAPIDAPI_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

This approach ensures your requests are authenticated and authorized by **RapidAPI** before they reach the **MoviesDatabase API**. You obtain your API key by signing up on RapidAPI and subscribing to this API. All requests must be sent over HTTPS with these headers included.

---

## Error Handling

The MoviesDatabase API uses standard HTTP status codes to indicate the success or failure of requests, and returns error details in the response to help diagnose issues. Common error responses include:

- `400 Bad Request:` The request is malformed or missing required/valid parameters. Verify the query parameters and request format.

- `401 Unauthorized:` Authentication failed due to missing or invalid API key. Check that your RapidAPI key is correctly included in the headers.

- `403 Forbidden:` Your API key is valid but does not have permission to access the requested resource.

- `404 Not Found:` The requested title, actor, or resource does not exist.

- `429 Too Many Requests:` You have exceeded the allowed request rate limit. Slow down or implement retry logic after the specified wait time.

- `500 Internal Server Error:` An unexpected error occurred on the server side. Retry the request later.

### Handling Errors in Code

When using the API, implement error handling by checking HTTP response status codes and parsing error messages. For example, in JavaScript fetch:

```jS
fetch("https://moviesdatabase.p.rapidapi.com/titles", {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
  }
})
.then(response => {
  if (!response.ok) {
    return response.json().then(err => {
      throw new Error(`API Error: ${err.error.message}`);
    });
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error.message));
```

Implement retries with backoff for `429 errors` and verify your requests to avoid `400 errors`. For `500 errors`, retrying after a delay is recommended.

This approach ensures your application gracefully handles errors and provides informative feedback for troubleshooting.

---

## Usage Limits and Best Practices

- `Implement rate limit handling:` Detect 429 errors and use exponential backoff or delayed retries to avoid being blocked.
- `Use pagination:` Avoid requesting too much data in a single call; retrieve data page by page to optimize performance and avoid timeouts.
- `Cache responses:` Cache frequently requested data locally to reduce the number of API calls and improve response times.
- `Use incremental updates:` Instead of fetching all data repeatedly, store timestamps and request only new or updated records to minimize requests and processing time.
- `Secure your API key:` Store your RapidAPI key securely (e.g., environment variables) and never expose it publicly.
- `Validate API responses:` Implement error handling for malformed responses or missing fields to prevent application crashes.
- `Monitor your usage`: Regularly check your quota on the RapidAPI dashboard to avoid unexpected service interruptions.
