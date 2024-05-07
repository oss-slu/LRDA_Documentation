---
slug: search-bar-map
title: Search Bar Map
authors: [Stuartwastaken]
tags: [search, maps, documentation]
---

This document outlines the functionality and integration of the `SearchBarMap` component within the Maps Page. It enables users to search for locations or notes directly on the map through an intuitive interface.

## Overview

The `SearchBarMap` component combines Google Places Autocomplete service with custom note searching functionality. It helps users quickly find specific locations or notes by typing into the search bar, providing suggestions and results dynamically.

## Key Features

- **Google Places Autocomplete**: Leverages Google's Autocomplete service to suggest places as the user types.
- **Note Searching**: Allows searching within the notes based on the input text.
- **Dual Result Display**: Displays both place suggestions and note matches in a unified dropdown list.

## Component Props

- `onSearch`: Function to execute when a place or note is selected from the search results.
- `onNotesSearch`: Function to filter notes based on user input.
- `isLoaded`: Boolean indicating if the map APIs are fully loaded.
- `filteredNotes`: Array of notes that are currently filtered based on the map bounds and other criteria.

## Usage

### Initialization

Upon mounting, the component initializes the Google Places Autocomplete service, assuming the Google Maps API has been loaded into the window context.

### Search Interaction

Users can start typing in the search bar, triggering the Autocomplete service after typing two characters. The component listens for changes in the input field and provides relevant place suggestions and note matches.

### Selection Handling

When a user selects a suggestion from the dropdown, the component distinguishes between place suggestions and note entries:
- For place suggestions, it retrieves detailed place information and updates the map view accordingly.
- For notes, it pans the map to the note's location and possibly triggers additional actions like highlighting the note.

## Code Snippet

Below is a simplified code snippet illustrating the search handling logic:

```jsx
handleInputChange = (e) => {
  const query = e.target.value;
  this.setState({ searchText: query });

  if (query.length > 2) {
    this.autocompleteService.getPlacePredictions(
      { input: query },
      this.handlePredictions
    );
    this.props.onNotesSearch(query);
  } else {
    this.setState({ suggestions: [] });
  }
};

handleSelectSuggestion = (placeId) => {
  const placesService = new window.google.maps.places.PlacesService(document.createElement("div"));
  placesService.getDetails({ placeId }, this.handlePlaceDetails);
};
```