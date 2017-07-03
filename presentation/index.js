// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
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
  oneEndpoint: require("../assets/endpoints.png")
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
          <Text margin="10px 0 0" textColor="tertiary" margin="0 0 4em" size={1} fit bold>
            Using a GraphQL endpoint on the Front-end side
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Pros</TableHeaderItem>
                <TableHeaderItem>Cons</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>1 endpoint</TableItem>
                <TableItem>Breaking changes</TableItem>
                {/* (because of the rapid development) */}
              </TableRow>

              <TableRow>
                <TableItem>Easy to understand the basics</TableItem>
                <TableItem>Deep understanding takes time</TableItem>
              </TableRow>

              <TableRow>
                <TableItem>Client performance first</TableItem>
                {/* always deal with the required minimum amount of data */}
                <TableItem>Extra configuration on the front-end</TableItem>
              </TableRow>

              <TableRow>
                <TableItem>Always up-to-date documentation</TableItem>
                {/* The schema ^^^  */}
                <TableItem />
              </TableRow>

              <TableRow>
                <TableItem>Reuse query parts</TableItem>
                 {/* (fragments) */}
                <TableItem />
              </TableRow>

              <TableRow>
                <TableItem>Hot topic</TableItem>
                {/* many articles, tutorials, active community */}
                <TableItem />
              </TableRow>
            </TableBody>
          </Table>
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
