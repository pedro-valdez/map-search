# Map Search
Visit [Map Search](https://map-search-nu.vercel.app/) to view a working demo.

## Features TODO:
- Search
    - [x] When I type, results show
    - [x] When I type, results are shown in map
    - [x] When I focus searchbar, results show again
    - [x] When I press up/down arrow keys, I navigate through results
    - [x] When I hover or navigate results, map marker is highlighted
    - When I press enter or click on result
        - [x] Text is autocompleted
        - [x] Modal is opened
        - [x] Map gets centered around location
- Map
    - [x] When I click on map, results aren't shown
    - When I hover over marker
        - [x] Name of location is shown as popup
        - [x] Marker is highlighted
    - [x] When I click marker, modal is shown

## Code overview
A quick high level overview of the code.

The purpose of this website is to display store locations in a map from a search query.
When the user types in the search bar, results are listed in text as well as displayed in the map.
The user can then click on the text result or the marker in the map to show a popup with more information about the location.
While the search bar is focused, the up/down arrow keys can be used to autocomplete text based on the search results.

### Libraries
Some of my reasoning for using the following libraries:
- jotai (state management)
    - During my first interview it was mentioned that jotai was used as the state management library. So I felt compelled to check it out.
    - jotai is a simple `useState` replacement, making it easy to adopt.
    - Other libraries like Redux are excessive for a project like this.
- fuse.js (fuzzy search)
    - I knew I wanted to provide a similar search experience to Google.
    - fuse.js makes sense for fuzzy-searching client-side small to medium data sets, since map-locations.ts isn't that big it made sense to use.
    - I needed a way of searching through map-locations.ts, and fuzzy searching was the first thing that came to mind.
- daisyui (TailwindCSS UI library)
    - Writing CSS with TailwindCSS is already fast, daisyui makes it even faster.
    - daisyui makes it easy to keep a theme and consistent styling.
- react-leaflet (react components for leaflet maps)
    - react-leaflet made it easier to integrate the leaflet library into the react ecosystem.

### State and state logic
- `searchText`
    - Controls the input element in the search bar.
- `searchQuery`
    - Fulfills similar role to searchText, more on their differences later.
- `searchResults`
    - Gets updated everytime searchQuery is updated.
    - Holds the results of fuzzily searching `map-locations.ts` with searchQuery as the, well, query.
- `autocompleteIndex`
    - Keeps track of what search result the user is currently "looking at."
    - By "looking at" I mean clicking or using the arrow keys to navigate to a specific search restult.
- `locationForModal`
    - Holds information for populating the modal (title, description, etc).
- `mapCenter`
    - Used for updating the center of the map.
    - Whenever a user clicks on a "locate me" button (the ones with the pin image), this atom gets updated and triggers a map event.

#### Difference between `searchText` and `searchQuery`?
`searchText`'s purpose is to control the input element in the search bar.
`searchQuery`'s purpose is to be what updates `searchResults`. This might seem kind of redundant, like their value should be the same.
However, you need an extra variable to hold what the user typed originally.
Also, `searchQuery` performs some data cleansing, like removing empty spaces at the beginning and end of the input.

### Components
- LeafletMap
    - Simply displays a map, with markers based on `searchResults`.
    - The Events subcomponent is note worthy.
        - This component only exists to react to external variable changes.
        - Example: when `mapCenter` chages, the map "flies to" mapCenter.
- LocationModal
    - Modal opens when:
        - User clicks on Marker in map.
        - User clicks on search result.
        - User presses enter while input element in searchbar is focused.
    - It displays the corresponding location based on `locationForModal`.
- Search
    - The Searchbar subcomponent:
        - When the user types `searchText`, `searchQuery` and `searchResults` get updated.
        - While searchbar is focused:
            - Using up/down arrow keys navigates through `searchResults` and updates `autocompleteIndex`.
            - Pressing enter opens modal, setting `locationForModal` to `searchResults[autocompleteIndex]`.
    - The Results subcomponent:
        - Displays a text list based on `searchResults`.
