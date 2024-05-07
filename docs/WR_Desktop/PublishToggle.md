## `PublishToggle` 

### Overview
`PublishToggle` is a React component used to toggle the publication status of a content piece, such as a note. It provides visual feedback and executes a callback when the publication status is changed.

### Imports
- **React Hooks**: `useState`, `useEffect`
- **Components**: `GlobeIcon` from `lucide-react`, `Switch` from `@/components/ui/switch`
- **Tooltip Components**: `Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger` from `@/components/tooltip`

### Props
- `isPublished`: Boolean indicating if the item is published.
- `onPublishChange`: Optional callback function that executes when the published state changes.

### Functionality
- Toggles the `published` state when the switch is clicked.
- If provided, the `onPublishChange` callback is called with the new state.