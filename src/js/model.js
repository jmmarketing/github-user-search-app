//[GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user)
//The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.
/*
Example Response:
{
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "html_url": "https://github.com/octocat",
    "name": "The Octocat",
    "company": "@github",
    "blog": "https://github.blog",
    "location": "San Francisco",
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "followers": 16870,
    "following": 9,
    "created_at": "2011-01-25T18:44:36Z",
}*/

export let model = {};

export async function searchGithub(searchParam) {
  const url = `https://api.github.com/users/${searchParam}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Github Status Response: ${response.status}`);
    }

    const data = await response.json();

    model = Object.fromEntries(
      [
        "login",
        "avatar_url",
        "html_url",
        "name",
        "company",
        "blog",
        "location",
        "bio",
        "twitter_username",
        "public_repos",
        "followers",
        "following",
        "created_at",
      ].map((key) => [key, data[key]])
    );

    //   clearError(); // Call with View
    //   clearInput();  // Call with View

    console.log(model);

    //   renderUserData(model); // Call With View
  } catch (error) {
    console.log(error);
    //   displayError(); // Call with View
  }
}
