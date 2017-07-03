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

# Tools
# Queries and mutations
# Example

# Summary
  * GraphQL could be an option
  * It can be used next to the REST
  * Worth to try

# Sources
