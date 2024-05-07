---
slug: search-bar-ui
title: Search Bar UI
authors: [Stuartwastaken]
tags: [search, ui, documentation]
---

This documentation details the `SearchBarUI` component, which provides a user interface for inputting search queries within the Maps Page. It serves as the visual front-end for the `SearchBarMap` component.

## Overview

`SearchBarUI` is a React component designed to render an input field with customized styling. It is specifically tailored to handle search functionality, providing a clean and responsive interface for user interactions.

## Key Features

- **Stylized Input Field**: Offers a visually appealing input field with rounded borders and subtle shadow effects.
- **Responsive Design**: Adjusts its style on focus, enhancing the user experience by highlighting the active element.

## Component Props

- `searchText`: String that represents the current text in the search bar.
- `onInputChange`: Function to execute when the user types into the input field, facilitating real-time search functionality.

## Usage

### Integration

The component is integrated into parent components where a search functionality is needed. It binds the `searchText` to the input's value and triggers `onInputChange` on user input to process and display search results dynamically.

### Styling

The input field uses Tailwind CSS for styling, which allows for easy customization and responsive design. The class names applied ensure the input field is both functional and aesthetically pleasing.

## Code Example

Below is a simplified code example of the `SearchBarUI` component:

```jsx
class SearchBarUI extends React.Component<SearchBarUIProps> {
  render() {
    const { searchText, onInputChange } = this.props;

    return (
      <div className="flex flex-col w-full">
        <Input
          type="text"
          placeholder="🔍 Search..."
          className="border-2 border-gray-300 focus:border-blue-500 rounded-full py-2 px-4 w-full bg-white shadow-sm transition-all focus:ring-2 focus:ring-blue-300 outline-none"
          value={searchText}
          onChange={onInputChange}
        />
      </div>
    );
  }
}
```