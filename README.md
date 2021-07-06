
# 🍿BIOSCOPE

The Project “BIOSCOPE” is a web app(pwa) that lets us to know the information related to the movies. This app will be helpful to find the release date of movies, people can search for movies even by voice. Find out recommendations,also see cast and reviews and trailers of all movies and web series and review any movie and tv shows easily.
Also app helps you keep track of your "Favourite list" which the "firestore-db" keeps safe and sound according to users-login.

In this project, we have used the Recycler view to show the list of the movies. As we click on a movie, it directs the user to another activity that contains the poster along with release date and ratings. On the front page, we have a search interface to search for any movie of our liking. It also contains a spinner that contains options like top rated movies, upcoming movies, now playing and popular movies for the users to choose from.

Plus it will recommend you about the movie/series based on your search and you can even sort the movie/series based on "genre"

Moreover it is a PWA which is an awesome technology through which you can install the app in any device such as android/ios/PC so it is platform independent and also you can obviously access the web app through the given link😀✌


It is very benefecial for movie addictive people who can't keep track of the movies they saw/willing to see and can ultimately buy/rent out the movie/series from platforms.

BIOSCOPE has user-aunthentication and user-uid based db's records and and keeping the security in mind we added "email-push" notification when a user wants to change password and it has "email & password validation" for protected surfing🐱‍👤.

## Demo

Insert gif or link to demo

  
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
## API Reference

Api used : [The Movie Database(tmdb)🎬](https://developers.themoviedb.org/3/getting-started/introduction)

#### Get trending movie/series

```http
  GET /api/trending/all/day?api_key=?{...}&page={...}

  https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `pages` | `string` | **Required**. Number of Pages |

#### Get all tv-series(sort by genre)

```http
  GET /api/discover/tv?api_key=?{...}&page={...}&with_genres=${...}

  https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key |
| `page`      | `string` | **Required**. Number of Pages |
| `genres`      | `string` | **Required**. Genre of Tv-Series |

#### Get all movies(sort by genre)

```http
  GET /api/discover/movie?api_key=?{...}&page={...}&with_genres=${...}

  https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key |
| `page`      | `string` | **Required**. Number of Pages |
| `genres`      | `string` | **Required**. Genre of Movies |

#### Get searched movies/tv-series

```http
  GET /api/search/type{...media_type...}api_key=?{...}&querarcy=${...searchText...}&page={...}

  https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&querarcy=${searchText}&page=${page}&include_adult=false
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. Your API key |
| `page`      | `string` | **Required**. Number of Pages |
| `query`      | `string` | **Required**. Your Search Text |
