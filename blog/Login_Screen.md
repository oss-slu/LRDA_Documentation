---
slug: Login-Screen
title: Login Screen
authors: izakrobles
tags: [login, documentation, user]
---

This is the documentation for the login screen for the lived religion desktop.

## Properties of Login Feature

- The login feature is simply a layering of shadc/ui componenets.
- Login screen can be accessed through the NavBar along the top by selecting the login button on the top right. Or, by typing in address/lib/pages/loginPage
- Authentication made through a POST Request to the lived-religion-dev.rerum.io

![Unlocked](../assets/loginScreen/loginUI.png)

## User Class

The user class can be seen below, but for more implementation details. See the user_class.ts file located in the project directory `@/lib/model/user_class.ts`
![Unlocked](../assets/loginScreen/userClass.png)

### Login Function

Below is the login function as a member of the `User` class.
![Unlocked](../assets/loginScreen/loginFunction.png)
The username and password are passed into the where they are parsed as the body contents of the POST request to the Rerum database. Where the user's request is either authenticated or rejected made known by the return body of the request. If a response 200 is returned the user is authenticated as the sole member of the user class and all functions are available throughout the site :)
