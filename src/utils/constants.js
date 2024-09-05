export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOUzaY7EMljNYkBOZvUGyx0yheyjfrXAwTg&s";

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg'

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTVhNTgyNzg5MzJjYmRhMTE2YmUyYmQyYTM4OTdkNCIsIm5iZiI6MTcyNTQzNTIyMi43Mzk3NDQsInN1YiI6IjY2Y2Q3NTFlYzExNGU0NzgzNDhiZWVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Enq5jWnTh1loJFUheZlwjQVkIAMfzWxiINLM7aIeA0s',
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES =[
  {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"}
];

export const GEMINIAI_KEY = process.env.REACT_APP_GEMINIAI_KEY;