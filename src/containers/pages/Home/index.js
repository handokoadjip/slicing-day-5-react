import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionContent,
  SectionStory,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Station Seven | COASTAL & CO";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionContent />
          <SectionStory />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
