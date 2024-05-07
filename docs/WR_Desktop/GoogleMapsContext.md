---
slug: google-maps-context
title: Google Maps Context
authors: [Stuartwastaken]
tags: [context, maps, documentation]
---

This document explains the `GoogleMapsContext` utility, a React context designed to handle the state of the Google Maps API loading status throughout the application, particularly on the Maps Page.

## Overview

`GoogleMapsContext` provides a centralized way to access and manage the loading state of the Google Maps API across the application. This context ensures that components dependent on Google Maps API can react appropriately to its loading state.

## Key Features

- **Centralized API Load Management**: Manages the loading state of the Google Maps API centrally to avoid redundant API calls and ensure consistency across all components that use the map features.
- **Custom Hook for Easy Access**: Includes a custom hook, `useGoogleMaps`, for easy access to the context's value, enhancing modularity and reusability.
- **Integration with `useJsApiLoader`**: Utilizes the `useJsApiLoader` hook from `@react-google-maps/api` to handle the actual API script loading, ensuring efficient and error-free loading of the necessary libraries.

## Component Architecture

### Context Definition

The `GoogleMapsContext` is created using React's `createContext` method, initialized with a default state indicating that the Google Maps API is not loaded.

```jsx
const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isMapsApiLoaded: false,
});
```