// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
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
  mutation: require("raw-loader!../examples/mutation.example"),
  config: require("raw-loader!../examples/config.example"),
  mainApp: require("raw-loader!../examples/main-app.example"),
  shopList: require("raw-loader!../examples/shop-list.example"),
  newShop: require("raw-loader!../examples/new-shop.example"),
  newShopWithMutation: require("raw-loader!../examples/new-shop-with-mutation.example")
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
            <Appear><ListItem>Pros and Cons</ListItem></Appear>
            <Appear><ListItem>Tools</ListItem></Appear>
            <Appear><ListItem>Queries and mutations</ListItem></Appear>
            <Appear><ListItem>Example</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What is this?</Heading>
          <Appear><Image margin="2.5em 1em 1em" src={images.reactLogo} width="300px"/></Appear>
          <Appear><Image margin="2.5em 1em 1em" src={images.graphQLLogo} width="330px"/></Appear>

          <Appear><Text textColor="tertiary" margin="0 0 2em" size={1} >
            my aspect
          </Text></Appear>
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
            <Appear><ListItem>Client performance first</ListItem></Appear>
            <Appear><ListItem>Always up-to-date documentation</ListItem></Appear>
            <Appear><ListItem>Reuse query parts</ListItem></Appear>
            <Appear><ListItem>Hot topic</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Cons</Heading>

          <List>
            <ListItem>Breaking changes</ListItem>
            <Appear><ListItem>Deep understanding takes time</ListItem></Appear>
            <Appear><ListItem>Extra configuration on the front-end</ListItem></Appear>
            <Appear><ListItem>Not that wide toolset</ListItem></Appear>
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

          <Appear><Image src={images.apolloVsRelay} width="100%" display="block" /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Queries #1</Heading>

          <List>
            <ListItem>For get data</ListItem>
          </List>

          <Appear><CodePane lang="graphql" source={examples.query} margin="0 0 1rem" /></Appear>

          <Appear><CodePane lang="jsx" source={examples.queryImplementation} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Queries #2</Heading>

          <List>
            <ListItem>Options and variables</ListItem>
          </List>

          <Appear><CodePane lang="jsx" source={examples.queryWithOptions} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Mutations #1</Heading>

          <List>
            <ListItem>Submit changes on the back-end</ListItem>
          </List>

          <Appear><CodePane lang="jsx" source={examples.mutation} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Mutations #2</Heading>

          <List>
            <ListItem>Refetch / update</ListItem>
            <Appear><ListItem>Optimistic UI</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Demo time! - config</Heading>

          <List>
            <Appear><ListItem><Code>npm i -g reactql</Code></ListItem></Appear>
            <Appear><ListItem><Code>reactql new</Code></ListItem></Appear>
            <Appear><ListItem>Clear <Code>src</Code> folder</ListItem></Appear>
          </List>

          <Appear><CodePane lang="jsx" source={examples.config} /></Appear>

          <List>
            <Appear><ListItem>Create <Code>src/app.js</Code></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Main app</Heading>
          <Appear><CodePane lang="jsx" source={examples.mainApp} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>List shops</Heading>
          <Appear><CodePane lang="jsx" source={examples.shopList} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>New shop</Heading>
          <Appear><CodePane lang="jsx" source={examples.newShop} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>New shop with mutation</Heading>
          <Appear><CodePane lang="jsx" source={examples.newShopWithMutation} /></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps margin="4.5em 0 0">Thanks!</Heading>

          <Text textColor="tertiary" size={1} bold margin=".5em 0 2.5em">
            questions?
          </Text>

          <Image src={images.dinaLogo} width="20%"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Sources</Heading>

          <List>
            <ListItem>
              <Link
                href="https://dev-blog.apollodata.com/why-graphql-is-the-future-3bec28193807"
                target="_blank"
                textColor="quartenary"
              >
                Jonas Helfer - Why GraphQL is the future
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/"
                target="_blank"
                textColor="quartenary"
              >
                Phil Sturgeon - GraphQL vs REST: Overview
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://dev-blog.apollodata.com/graphql-vs-falcor-4f1e9cbf7504"
                target="_blank"
                textColor="quartenary"
              >
                Jonas Helfer - GraphQL vs Falcor
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="http://dev.apollodata.com/react/initialization.html"
                target="_blank"
                textColor="quartenary"
              >
                Apollo client documentation
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b"
                target="_blank"
                textColor="quartenary"
              >
                Sashko Stubailo - GraphQL vs REST
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.graph.cool/docs/tutorials/relay-vs-apollo-iechu0shia/"
                target="_blank"
                textColor="quartenary"
              >
                Relay vs Apollo - Comparing GraphQL clients for React apps
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
