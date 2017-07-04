# First slide
  * Welcome
  * Introduce myself
    * Front-end developer at Digital Natives
    * Working in React

# Agenda

# What is this whole thing about?
  * What is React?
  * What is GraphQL?
  * What am I doing here?
    * My aspect
    * I'm not a senior front-end developer
    * Had a project where we used GraphQL besides the REST API
    * Share the experiences
    * Not the holy grail

# Pros and Cons
  * in general
  * Pros
    * One endpoint:
      * Define once, use it always
      * No need to provide requests for different kind of datas
      * Get all the necessary data with one query

    * Easy to get started
      * If you want to just start without doing the configuration as a first step, you can start with an universal starter kits with ready-to-use configuration
      * Boilerplates, like ReactQL https://reactql.org/
    * Client performance first
      * always deal with the required minimum amount of data
      * so get only the data, what you're going to use
      * if you just need the posts of the authors, don't fetch their email, profile picture, social site urls, etc.
    * Always up-to-date documentation
      * As the schema defines both data structure and the documentation, it is always consistent.
    * Reuse query parts
      * You can share parts of queries between queries
      * Like fetching the authors name, id, and profile picture: use a fragments, like a variable, and include it where you need it
    * Hot topic
      * Active Github projects, Slack channels, Stackoverflow threads
      * Easy to get help and then easy to help

  * Cons
    * Breaking changes
      * Because of the rapid development
    * Deep understanding takes time
      * If we want to make a more complex application, we have to leave the happy path. This time, we may won't find an out of the box solution. Usually this is the point when we have to stop and think about what happens exactly behind the scenes. And this takes time.
    * Extra configuration on the front-end
      * Related to the point above, more complex cases need some extra configuration or customization.
    * Not that wide toolset / case studies
      * On the next slide I will mention some great tools but it is easy to see that there far less tools and solutions for GraphQL than for REST

# Tools
  * GraphiQL
    * A graphical interactive in-browser GraphQL IDE
    * Perfect for testing, figure out how things should look like, what to get, prototyping
    * easy to install
    * https://github.com/graphql/graphiql

  * Apollo DevTools
    * Chrome extension, will appear in the DevTools as a new tab
    * By default only visible when the app is not in production mode and has apollo-client
    * Show it on the Lean Coffee

  * Launchpad
    * it does not belong to frontend, but worth to mention the Launchpad
    * codepen/jsfiddle for graphql
    * in-browser JS back-end with graphql
    * ideal for prototyping or sharing best practices
    * find examples on github: https://github.com/apollographql/launchpad

# Clients
  * To fetch the data from the GraphQL back-end, somehow we have to compose the proper queries send them to the back-end, wait for the response and then handle it.
  * This flow can be written from scratch, but there are nice clients to do the dirty parts.
  * You can find several clients, here I'd like to mention the 2 most popular one.
  * Relay is more complex, developed by Facebook
  * Apollo is more flexible, developed by Meteor Development Group
  * I did a test drive with both and when we needed to use one on a project, we decided to use Apollo, thus during the rest of this Presentation, I use examples from Apollo Client.

# Queries and mutations
# Example

# Summary
  * GraphQL could be an option
  * It can be used next to the REST
  * Worth to try

# Sources
