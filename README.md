<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Nando-C/Buildweek2">
    <img src="assets/linkedIn-logo.png" alt="Logo" height="100">
  </a>

<h3 align="center">LinkedIn - Clone</h3>

  <p align="center">
    A project that clones LinkedIn, developed during Strive School's Full Stack program!
    <br />
    <br />
    <a href="https://my-linkedin-benchmarkm6.vercel.app/">View Demo</a>
    <!-- ·
    <a href="https://github.com/Nando-C/Buildweek2/issues">Report Bug</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#models">Models</a>
     <ul>
        <li><a href="#profile-">Profile</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#post">Post</a></li>
      </ul>
    </li>
    <li><a href="#api">Api</a>
     <ul>
        <li><a href="#profile-end-points">Profile</a></li>
        <li><a href="#experience-end-points">Experience</a></li>
        <li><a href="#post-end-points">Post</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This is the Back-End for a LinkedIn clone project, created as part of the Full Stack Master Camp at Strive School.
Developed in 4 days by a distributed team of 3 students.

This repo is connected to a Front-End, which was develped with a different team and can be found here: [LinkedIn's FrontEnd](https://github.com/Nando-C/BuildWeek2)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MODELS EXAMPLES -->

## Models

### Profile

```js
PROFILE Model:
    {
        "_id": "5d84937322b7b54d848eb41b", //server generated
        "name": "Diego",
        "surname": "Banovaz",
        "email": "diego@strive.school",
        "bio": "SW ENG",
        "title": "COO @ Strive School",
        "area": "Berlin",
        "image": ..., //server generated on upload, set a default here
        "username": "admin",
        "createdAt": "2019-09-20T08:53:07.094Z", //server generated
        "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
    }
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Experience

```js
EXPERIENCE Model:
    {
        "_id": "5d925e677360c41e0046d1f5", //server generated
        "role": "CTO",
        "company": "Strive School",
        "startDate": "2019-06-16T22:00:00.000Z",
        "endDate": "2019-06-16T22:00:00.000Z", //could be null
        "description": "Doing stuff here and there",
        "area": "Berlin",
        "username": "admin",
        "createdAt": "2019-09-30T19:58:31.019Z", //server generated
        "updatedAt": "2019-09-30T19:58:31.019Z", //server generated
        "image": ... //server generated on upload, set a default here
    }
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Post

```js
POST Model:
    {
        "_id": "5d93ac84b86e220017e76ae1", //server generated
        "text": "this is a text 12312 1 3 1", // THIS IS THE ONLY ONE YOU'LL BE SENDING!!!
        "username": "admin",
        "user": {
            "_id": "5d84937322b7b54d848eb41b", //server generated
            "name": "Diego",
            "surname": "Banovaz",
            "email": "diego@strive.school",
            "bio": "SW ENG",
            "title": "COO @ Strive School",
            "area": "Berlin",
            "image": ..., //server generated on upload, set a default here
            "username": "admin",
            "createdAt": "2019-09-20T08:53:07.094Z", //server generated
            "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
        },
        "createdAt": "2019-10-01T19:44:04.496Z", //server generated
        "updatedAt": "2019-10-01T19:44:04.496Z", //server generated
        "image": ... //server generated on upload, set a default here
    }
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- API ENDPOINTS -->

## API

### Profiles

- GET https://baseURL-api/profile/
  Retrieves list of profiles

- GET https://baseURL-api/profile/{userId}
  Retrieves the profile with userId = {userId}

- POST https://baseURL-api/profile/
  Create the user profile with all his details

- PUT https://baseURL-api/profile/
  Update current user profile details

- POST https://baseURL-api/profile/{userId}/picture
  Replace user profile picture (name = profile)

- GET https://baseURL-api/profile/{userId}/CV
  Generates and download a PDF with the CV of the user (details, picture, experiences)

<p align="right">(<a href="#top">back to top</a>)</p>

### Experience

- GET https://baseURL-api/profile/userName/experiences
  Get user experiences

- POST https://baseURL-api/profile/userName/experiences
  Create an experience.

- GET https://baseURL-api/profile/userName/experiences/:expId
  Get a specific experience

- PUT https://baseURL-api/profile/userName/experiences/:expId
  Get a specific experience

- DELETE https://baseURL-api/profile/userName/experiences/:expId
  Get a specific experience

- POST https://baseURL-api/profile/userName/experiences/:expId/picture
  Change the experience picture

- GET https://baseURL-api/profile/userName/experiences/CSV
  Download the experiences as a CSV

<p align="right">(<a href="#top">back to top</a>)</p>

### Posts

- GET https://baseURL-api/posts/
  Retrieve posts

- POST https://baseURL-api/posts/
  Creates a new post

- GET https://baseURL-api/posts/{postId}
  Retrieves the specified post

- PUT https://baseURL-api/posts/{postId}
  Edit a given post

- DELETE https://baseURL-api/posts/{postId}
  Removes a post

- POST https://baseURL-api/posts/{postId}
  Add an image to the post under the name of "post"

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[@Nando](https://hernando-crespo.vercel.app/) - Get in touch and let me know what do you think of this project! 😉

<p align="right">(<a href="#top">back to top</a>)</p>
