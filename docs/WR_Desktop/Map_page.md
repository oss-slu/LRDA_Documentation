---
slug: maps-page
title: Maps Page
authors: [Stuartwastaken]
tags: [maps, documentation, user interaction]
---

This documentation provides a comprehensive overview of the Maps Page in the Lived Religion project. This page is central for visualizing and interacting with geographical data related to personal and global notes.

## Key Considerations

1. **User Location**: Automatically attempts to fetch the user's current location upon loading the page. If unsuccessful, it defaults to a pre-set location.
1. **Interactive Map**: Users can interact with the map to explore different notes pinned at various locations. The interaction includes clicking on markers, which display more details about the notes.

## Main Components

- **Google Map**: Integrates Google Maps to display and manage geographical data.
- **Search Bar**: Allows users to search for notes based on location or content.
- **Note Cards**: Displays clickable cards for notes that appear based on the map's current view.

## Functionality

### Dynamic Note Loading

- The map loads notes dynamically based on the user's location and map movements. Notes are categorized into personal and global, which can be toggled by the user.

### Search and Filter

- Users can search for notes using the search bar, which filters notes both textually and by location.
- Notes outside the current map view will not be displayed until the user moves the map to include them in the view.

### User Interaction

- Clicking on a note marker opens a detailed view of the note directly on the map.
- Users can switch between personal and global notes, which updates the map display accordingly.

## Access

Access the Maps Page by navigating to `/maps` in the application. Upon entry, the map will attempt to load the user's current location and populate nearby notes.

## Map Interactions

### Initial Load

![Map Initial Load](../assets/mapsPage/MapInitialLoad.png)

### Note Interaction

When a user interacts with a note marker, it expands to show more details.

![Note Interaction](../assets/mapsPage/NoteInteraction.png)

### Search Functionality

Demonstrates the search bar in action as a user types in a query.

![Search Functionality](../assets/mapsPage/SearchFunctionality.png)

## Technical Insights

The page utilizes multiple `useEffect` hooks to manage component lifecycle and state transitions related to map interactions, user location, and note loading.

```jsx
// Key useEffect for fetching initial location
useEffect(() => {
  const fetchLastLocation = async () => {
    try {
      const lastLocationString = await getItem("LastLocation");
      const lastLocation = lastLocationString
        ? JSON.parse(lastLocationString)
        : null;
      setMapCenter(lastLocation);
      setMapZoom(10);
      setLocationFound(true);
    } catch (error) {
      console.error("Failed to fetch the last location", error);
    }
  };
  fetchLastLocation();
}, []);
```