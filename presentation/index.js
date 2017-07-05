// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  dinaLogo: require("../assets/dina-logo.png"),
  reactLogo: require("../assets/react-logo.png"),
  graphQLLogo: require("../assets/graphql-logo.png"),
  oneEndpoint: require("../assets/endpoints.png"),
  graphiql: require("../assets/graphiql.png"),
  apolloDevToolsGraphiQL: require("../assets/apollo-devtools-graphiql.png"),
  launchpad: require("../assets/launchpad.png"),
  apolloVsRelay: require("../assets/apollo-vs-relay.png")
};

const examples = {
  query: require("raw-loader!../examples/query.example"),
  queryImplementation: require("raw-loader!../examples/query-implementation.example"),
  queryWithOptions: require("raw-loader!../examples/query-with-options.example"),
  mutation: require("raw-loader!../examples/mutation.example")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#F7646B",
  tertiary: "black",
  quartenary: "#5EC5C7"
  // quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} margin="2em 0 0" textColor="secondary">
            GraphQL on the Front-end
          </Heading>
          <Text textColor="tertiary" size={1} fit bold>
            Using a GraphQL endpoint in a React app
          </Text>
          <Text textColor="quartenary" margin=".5em 0 2.5em" textSize="2rem">
            by Nándor Bíró
          </Text>
          <Image src={images.dinaLogo} width="20%"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <List>
            <ListItem>What is this?</ListItem>
            <ListItem>Pros and Cons</ListItem>
            <ListItem>Tools</ListItem>
            <ListItem>Queries and mutations</ListItem>
            <ListItem>Example</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What is this?</Heading>
          <Image margin="2.5em 1em 1em" src={images.reactLogo} width="300px"/>
          <Image margin="2.5em 1em 1em" src={images.graphQLLogo} width="330px"/>

          <Text textColor="tertiary" margin="0 0 2em" size={1} >
            my aspect
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Pros #1</Heading>

          <Image margin="2.5em 1em 1em" src={images.oneEndpoint} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Pros #2</Heading>

          <List>
            <ListItem>Easy to get started (eg.:
            <Link
              href="https://reactql.org/"
              target="_blank"
              textColor="quartenary"
            >
              ReactQL
            </Link>)</ListItem>
            <ListItem>Easy to understand the basics</ListItem>
            <ListItem>Client performance first</ListItem>
            <ListItem>Always up-to-date documentation</ListItem>
            <ListItem>Reuse query parts</ListItem>
            <ListItem>Hot topic</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Cons</Heading>

          <List>
            <ListItem>Breaking changes</ListItem>
            <ListItem>Deep understanding takes time</ListItem>
            <ListItem>Extra configuration on the front-end</ListItem>
            <ListItem>Not that wide toolset</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Tools #1</Heading>

          <List>
            <ListItem>
              <Link
                href="https://graphql-europe.org/graphql"
                target="_blank"
                textColor="quartenary"
              >
                GraphiQL
              </Link>
              <Image src={images.graphiql} width="75%" display="block" />
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Tools #2</Heading>

          <List>
            <ListItem>Apollo DevTools</ListItem>
            <Image src={images.apolloDevToolsGraphiQL} width="75%" display="block" />
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Tools #3</Heading>

          <List>
            <ListItem>Launchpad</ListItem>
            <Image src={images.launchpad} width="75%" display="block" />
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Clients</Heading>

          <Image src={images.apolloVsRelay} width="100%" display="block" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Queries #1</Heading>

          <List>
            <ListItem>For get data</ListItem>
          </List>

          <CodePane lang="graphql" source={examples.query} margin="0 0 1rem" />

          <CodePane lang="jsx" source={examples.queryImplementation} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Queries #2</Heading>

          <List>
            <ListItem>Options and variables</ListItem>
          </List>

          <CodePane lang="jsx" source={examples.queryWithOptions} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Mutations #1</Heading>

          <List>
            <ListItem>Submit changes on the back-end</ListItem>
          </List>

          <CodePane lang="jsx" source={examples.mutation} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Mutations #2</Heading>

          <List>
            <ListItem>Refetch / update</ListItem>
            <ListItem>Optimistic UI</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
