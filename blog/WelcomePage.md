---
slug: welcome-page
title: Welcome Page
authors: [Stuartwastaken]
tags: [welcome, documentation, interactivity]
---

This is the documentation for the Welcome Page of the Lived Religion project.

The Welcome Page was designed to create an engaging visual experience that reacts to the user's mouse movements. The interactive elements provide a dynamic and visually appealing introduction to the site.

## Important Notes Before You Proceed

1. **Dynamic Interaction**: The page features a title "Where's Religion?" that changes visually in response to cursor movements. This effect adds a layer of interactivity that makes the initial engagement with the site more intriguing.
1. **Sensitive Effects**: Changes to the visual effect parameters directly influence how users perceive the site on their first visit. It's crucial to test any adjustments thoroughly to maintain a positive user experience.

## Main Features

- **Mouse Movement Detection**: Detects and responds to the cursor's position, providing a personalized interactive experience.
  1. **Interactive Text Effects**: The main title "Where's Religion?" uses gradients and masking to create a visual effect that changes based on cursor location.
  1. **Cursor Customization**: Incorporates a custom cursor for a unique visual style and improved user interaction.

## Accessing the Welcome Page

Navigate to the root URL of the site, and you will be directed to the Welcome Page. Here, you will see the interactive title and have the opportunity to explore the initial offerings of the site.

## Visual Interaction

Upon visiting the Welcome Page, you'll notice the title text "Where's Religion?" responds dynamically to mouse movements. Below are screenshots depicting different states of interaction:

### Initial State

![Initial State](../assets/welcomePage/WelcomePageInitial.png)

### Cursor Interaction

When the cursor moves over the text, the visual effects activate, creating a vibrant color shift.

![Cursor Interaction](../assets/welcomePage/WelcomePageInteractive.png)

## Code Insights

This section would provide insights into the React code structure, especially the use of `useState` and `useRef` for managing cursor positions and DOM references.

```jsx
// Simplified code snippet highlighting key parts
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = textRef.current.getBoundingClientRect();
    setCursorPos({
        x: e.clientX - rect.left - rect.width / 200,
        y: e.clientY - rect.top - rect.height / 200,
    });
};
```