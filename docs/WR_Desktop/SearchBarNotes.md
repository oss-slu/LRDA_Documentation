---
slug: search-bar-notes
title: Search Bar Notes
authors: [Stuartwastaken]
tags: [notes, search, ui, documentation]
---

This document provides details about the `SearchBarNotes` component, which is designed to facilitate search functionality specifically for notes within the sidebar of the application.

## Overview

`SearchBarNotes` extends the `SearchBarUI` component, inheriting its visual style and behavior. It is tailored to handle search queries that are specific to notes, allowing users to filter notes displayed in the sidebar based on their input.

## Key Features

- **Inherited UI**: Inherits the stylized input field from `SearchBarUI`, ensuring consistent look and feel across the application.
- **Search Functionality**: Implements a real-time search feature that filters notes as the user types.

## Component Props

- `onSearch`: Function to execute when the user types into the search bar. This function is intended to handle the filtering of notes based on the user's query.

## Usage

### Interaction Flow

When a user types into the search bar, `SearchBarNotes` captures the input through an event handler which updates the component’s state with the user’s query and simultaneously invokes the `onSearch` callback prop. This mechanism ensures that the sidebar reflects the search results instantaneously.

### Integration

`SearchBarNotes` is typically used within a sidebar or a similar component that displays a list of notes. It interacts with its parent component or the application's state management system to filter and display notes based on the search criteria.

## Code Example

Below is a brief example illustrating how `SearchBarNotes` is implemented:

```jsx
class SearchBarNotes extends React.Component<SearchBarNotesProps, SearchBarNotesState> {
  constructor(props: SearchBarNotesProps) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    this.setState({ searchText: query }, () => {
      this.props.onSearch(query);
    });
  };

  render() {
    return (
      <SearchBarUI
        searchText={this.state.searchText}
        onInputChange={this.handleInputChange}
      />
    );
  }
}
