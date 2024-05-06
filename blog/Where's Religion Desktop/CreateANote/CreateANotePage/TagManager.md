# `TagManager` Component Documentation

## Overview

`TagManager` is a React component designed to manage tags for items such as notes or articles. It allows users to add new tags and remove existing ones, enforcing certain input rules like tag length and space restriction.

## Imports

- **React**: Uses `useState` and `useEffect` for state management.
- **Components**: `XIcon` from `lucide-react` for the delete button on each tag.
- **Input**: Custom UI input component for entering new tags.
- **Toast**: Used to display notifications for tag validation errors.

## Properties

- `inputTags`: Optional array of initial tags.
- `onTagsChange`: Function to be called when the list of tags changes.

## Functionality

- The component initializes with a set of tags and sets up listeners to update these tags based on user input.
- Users can add new tags by entering text and pressing "Enter". Tags cannot contain spaces, must be longer than two characters, and must be unique.
- Tags can be removed by clicking on the delete icon next to each tag.