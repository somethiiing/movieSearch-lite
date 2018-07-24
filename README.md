### Intro
MovieSearch-Lite is a web app that uses The Movie Database API to allow users to search for their favorite movies by title.

Features include:
- Search by title
- Displays visual results as user types
- Pagination
- Loading spinner
- Debouncing searches
- Click on movie items to see movie summary.

### How to start:

- inside src, create a file called `config.js`, follow example in `config.example.js`. Enter your API Key.
- `npm install`
- `npm start`
- go to `localhost:3000`

### Challenges

- Probably the most difficult part of this was dealing with the different searches/pages. Some other ways of doing it would be to pull a list of all movies and perform search/sort functions based off of that data. But because the movie database is too big to pull all at one time, it makes alot of sense to pull this data based off of the search queries. After all, why would you do so much search logic on the front end, when the API does it for you.
- Another challenge was implementing pagination. While the idea behind pagination is fairly simple, implementing it from scratch could take a little bit of effort in terms of debugging and making sure it functions properly. I didn't exactly want to re-invent the wheel, so I used relatively popular npm package `react-paginate`.

### Design Decisions
- `create-react-app` to bootstrap the application. Quickest, easiest way to bootstrap a application.
- Most of the components are dumb components in that it only takes in data and renders it. The one that isn't is `MovieItem` because I added the functionality of being able to show details when you clicked on it. The `App` component handles pretty much all of the logic for the application. It's state is basically the app's central state, all functionality of what goes on is basically routed through `App`.
- The reason I broke up the different components is for clarity, and modularity. By separating things like `Pagination` or `Loading`, they can be reused elsewhere. Also by styling the components individually, it helps push the general "feel" of the brand.
- Debounce was implemented by scratch to help not fire off API calls after every key stroke. Currently it's set at 200ms, but could be lowered or increased based off of design preference. Debounce timer can be changed in `App.js` in `DEBOUNCE_TIMER`.
- Pagination: As mentioned previously under challenges, pagination was one of the minor challenges I had to face. Although it's not very difficult to manually implement, I felt that doing so would've taken a little bit of time to debug and make sure all functionality was how I wanted it. But I also knew that there were probably a large number of pagination libraries implemented already. Instead of re-inventing the wheel, I decided to use third-party library, `react-paginate`. It came unstyled, so I had to implement and style that myself.
- Loading: I added a loading spinner for better UX for the end user. It also makes sense with the debounce happening at the same time. In case network is slow, the loading spinner helps alleviate some of the boredom associated with waiting for the data to arrive.

### Future Improvements/Production Changes/Scaling
- Flux Architecture: There isn't a Flux/Redux architecture implemented currently. I felt that the app was fairly simple and having everything handled inside `app`'s state would be acceptable. If more features were added, using Redux or some sort of Flux architecture might be preferred.
- API Logic: I have all the API calls using Axios just inside the handleSearchChange/handlePageChange functions. I think ideally, those API calls would be refactored into a helper function that took in arguments like query, page, etc. This also increases reusabililty and modularity. But since it's only used twice, it might be okay for this smaller application.
- CSS: App currently uses plain CSS to handle all of it's design. In a production environment, I would probably use something like SASS, for more reusability in the long term. Because I am using just normal CSS, all the styles could be inside one large CSS file inside `App.css`, but I felt that breaking it all down is cleaner and easier to maintain.
- CSS Grid: I'm just using flexbox and percentages to handle the positioning and sizes. In a production environment, I'd probably use some sort of grid to maintain responsiveness and better UX for mobile users. Also would probably have breakpoints for certain screen sizes.
- Debounce: I manually implemented debounce using a timer inside `handleSearchChange`. In a production environment, I would probably use something like underscore or lodash just so other developers wouldn't get confused. It's an easy enough function to manually implement, but could look confusing at first glance.
- Showing more details/movie information. I have all the information from the API call already there. I can definitely implement or add more data displayed. But I think it looks clean just the way it is, and I'm not sure what other information is important to the end user. Title + Year + Synopsis is fine for now.
- Styling: I'm probably not the best designer, all of this CSS is very minimal and very simple.