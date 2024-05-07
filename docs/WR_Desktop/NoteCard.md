---
slug: note-card
title: Note Card
authors: [Stuartwastaken]
tags: [note, ui component, documentation]
---

This document provides details about the `NoteCard` component, which is designed to display individual notes on the Maps Page of the Lived Religion project. This component showcases notes with their associated media, creator information, and tags in a compact and visually appealing format.

## Overview

The `NoteCard` component is a React functional component that renders detailed information about a note, including title, creator, date, tags, and media content such as images or videos. It is designed to be both informative and user-friendly, making it easy for users to quickly grasp the key details of each note.

## Key Features

- **Media Display**: Utilizes a `CompactCarousel` for navigating through multiple media items or a static image placeholder if no media is available.
- **Creator Information**: Fetches and displays the creator's name asynchronously.
- **Date Formatting**: Displays the date of the note using a custom formatting utility.
- **Tag Visualization**: Tags are displayed using a horizontal scrollable area for easy viewing without taking up too much space.

## Component Props

- `note`: The `Note` object containing all the data to be displayed, including title, media, creator, date, and tags.

## Usage

### Structure

The component is structured with a media display area on the top and a content area below that includes the note's title, creator, date, and tags. The content area is designed to adaptively display information based on the data availability and length.

### Error Handling

Creator information is fetched asynchronously; in case of an error, the component gracefully handles it by displaying an error message.

## Code Example

Below is a simplified code example of the `NoteCard` component:

```jsx
const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [creator, setCreator] = useState("Loading...");

  useEffect(() => {
    ApiService.fetchCreatorName(note.creator)
      .then((name) => setCreator(name))
      .catch((error) => {
        console.error("Error fetching creator name:", error);
        setCreator("Error loading name");
      });
  }, [note.creator]);

  return (
    <div className="note-card-container">
      {/* Media handling */}
      {note.media.length > 0 ? (
        <CompactCarousel mediaArray={note.media} />
      ) : (
        <img src={placeholderImage.src} alt="Placeholder" />
      )}
      {/* Content display */}
      <div className="note-details">
        <h3>{note.title}</h3>
        <p>{creator}</p>
        <p>{formatDateTime(note.time)}</p>
        {/* Tags display */}
        {note.tags.length > 0 && (
          <ScrollArea>
            {note.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </ScrollArea>
        )}
      </div>
    </div>
  );
};
