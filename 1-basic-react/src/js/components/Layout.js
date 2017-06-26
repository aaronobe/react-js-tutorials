import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

/**

Line 14
To get the State to change (Data Changes) a changeTitle(title) method has been created and we've passed in the value title. So this.setState, in other words we are going to use ES6 and just use "{title}"; which is the same as doing title equals title.

Layout will fire change title which sets our state as soon as that state changes, the entire react tree does a re-render and if there's any changes that get printed out.

N.B: There is data living only in one place (The Layout.js Component) and this is a great thing because this has enabled us to make really dumb components. The file "Header.js"(Component) doesn't really care where the data comes from or what the data is; it just knows I'm going to pass title in here and whenever this input changes (line 15, Layout.js) I'm going to call the prop that was handed to me change title (which has a State). It doesn't care what it just knows its his job.

N.B: The file "Title.js"(Component) is even dumber basically it just Renders whatever you give it. On line 7 of the "Title.js" (Component file) "<h1>{this.prop.title}</h1>" it's not aware of the data, it doesn't care about the data you could move this to a completely different applicaiton, or the data could come from a completely different place it doesn't care.


**/
