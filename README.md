# ClickView Programming Practical

Please try and complete as much of this practical as possible in the allotted time. You will be judged on your overall OO design skills, use of language best practices, code reuse and design patterns. Keep in mind that this is not an assignment and there are no strict marking criteria or rules. We are simply looking for a demonstration of your ability to design and implement software. You may use any programming languages and frameworks that you are comfortable with.

## Background

ClickView enables educators to manage media across many platforms. One component of this is to navigate videos by folders and filter them by tags. In this practical you will create a web API for managing and browsing videos

## Task 1: Set up a public git repository

You will submit your code to us via a public git repository. We strongly recommend using GitHub or GitLab, but any public git provider is acceptable. **Please commit your code at the end of every task at the very minimum.**

## Task 2: Read the videos.json file and store it in memory

When your web server starts up, it should read the videos.json file and parse it into a collection of video objects that are stored in memory, which should persist during the lifetime of the webserver. The classes that you choose to serialise the video data into should be designed in a way to help you achieve Task 5 and 6, even if you run out of time before getting to that stage.

## Task 3: Setup a Basic CRUD API

Create an API that exposes the following actions and persists the changes to the in-memory data store.

- Create a new video
- Retrieve all videos
- Update an existing video
- Delete an existing video

During this task you should abstract the manipulation of your in-memory data in preparation for Task 4

## Task 4: Persist the data to permanent storage

Improve your API to now work with permanent storage that will persist between starting and stopping your web server.

Your web server should only seed the videos.json data to the permanent storage on the first time it starts up.

We strongly recommend something that does not need too many steps to set up, such as SQLite or even just another JSON File.

Please do not use an ORM such as Entity Framework.


## Task 5: Add a way to fetch videos by folder

Add functionality that allows videos to be fetched by folder.

Folders are nested, there is no limitation on how deep this nesting goes and the relationship between parent and child is denoted by “->” (hyphen + greater than sign).

Example: `Senior` -> `English` -> `Journalism`

## Task 6: Add a way to fetch videos by Tag

Add functionality that allows videos to be fetched by tags.

## Task 7: Create a readme.md [Compulsory]

Provide instructions on how to get your code up and running as a readme.md file in your git repository. Please also list any dependencies that are not managed by a package manager.