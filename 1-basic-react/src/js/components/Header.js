import React from "react";

import Title from "./Header/Title"; // The Header imports the title and uses it to simply print the title.

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

/**

Line 15
We want to change the title whenever the user types in our input; you can do this by the "onChange" event.
*****IT'S IMPORTANT TO BIND THIS BECAUSE YOU'VE ALWAYS GOT TO MAKE SURE IT'S BOUND TO THE RIGHT CONTEXT*****
In this case "hangleChange(e)"

The handleChange receives a JavaScript event in this case onChange (line 15)

"e.target": is the element that's receiving the on change so that's the input on line 15.

Now we've got our title on line 8, we are going to pass it onto changeTitle

<input value={this.props.title} (sets the textbox to the value of Welcome)

Again Line 15
Whenever you're binding a value you also want to set up a change listerner for that so it actually changes when
the value changes.

**/
