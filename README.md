## My Movie Collection

A single page application where a user can manage their movie collection.

###Features

- Redux as our stores source of truth
- Full CRUD functionality
- Store is persisted to local storage
- Image Uploads & rendering from store

###Assumptions

1. This projects image upload functionality converts uploaded files to a Base64 string. We assume that users will only attempt to upload images.
2. Let's assume that users will upload images of a relatively similar size.

## Getting Started
`git clone https://github.com/Tinusw/myMovieCollection.git`

`cd movie-collection`

`npm install`

### To Be Noted
In this project we make use of an npm package named [react-file-base64](https://github.com/BosNaufal/react-file-base64). You may run into the following error:

```
ERROR in ./~/react-file-base64/src/js/components/react-file-base64.js
Module parse failed: /Users/wilfred.godfrey/www/ffxnz-quiz-authoring-frontend/node_modules/react-file-base64/src/js/components/react-file-base64.js Unexpected token (70:6)
You may need an appropriate loader to handle this file type.
...
```

To resolve this error install the package from the following branch which is currently pending approval in the [following PR](https://github.com/BosNaufal/react-file-base64/pull/4)

`npm install https://github.com/lrojas94/react-file-base64`

`npm start`

## Tech & Tools

### [Slingshot Boilerplate](https://github.com/coryhouse/react-slingshot)

React Slingshot is a comprehensive starter kit for rapid application development using React.

Why Slingshot?

1. **One command to get started** - Type `npm start` to start development in your default browser.
2. **Rapid feedback** - Each time you hit save, changes hot reload and linting and automated tests run.
3. **One command line to check** - All feedback is displayed on a single command line.
4. **No more JavaScript fatigue** - Slingshot uses the most popular and powerful libraries for working with React.
5. **Automated production build** - Type `npm run build`

### [Redux](http://redux.js.org/)
A predictable state container for JavaScript apps.

#### Why Redux?
The purpose of this challenge was to exclusively use localStorage, that immediately got me thinking [about this video](https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage), which lead me to dig into Redux as an option.

What I like about redux, and what I think relates very well to this project is what [Redux calls it's First Principle](http://redux.js.org/docs/introduction/ThreePrinciples.html), it has a single source of truth, a single store.

In my opinion that makes perfect sense for this particular project, I think Redux is appropriate because :

1. It gives us the ability to persist all our films in a single store that's easy to observe and manipulate thanks to the developer tools and the nature of pure functions (redux loves pure functions).

2. Organise our components a manner that responds specifically to an action (State Change), so logically finding problems is relatively straightforward.
3. In theory, it should be relatively easy to test which can generally speaking be boiled down to evaluating the effects of a single action. Basically Pure Functions once again.

4. Having not used Redux before I was curious to experiment with it :)


### [React Router](https://github.com/ReactTraining/react-router)
Declarative routing for React

###[Redux Persist](https://github.com/rt2zz/redux-persist)
persist and rehydrate a redux store

###[React-fa](https://github.com/andreypopp/react-fa)
For all our icon needs

###[React-slick](https://github.com/akiran/react-slick)
A react carousel component
