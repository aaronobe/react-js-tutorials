import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app'); // we are getting the "app" Element in the index.html line 11; and I'm going to render my layout into app (line 7) and that's my react App
ReactDOM.render(<Layout/>, app);

/**

*----------------------------------------------------------------------------------------------*

class Layout extends React.Component{
    render(){
        return (
            <h1>It works!</h1>
            );
    }
}

var div = document.createElement("div"); //EXAMPLES
div.innerHTML = "some content" //EXAMPLES

ReactDOM.render(<Layout/>, app)



****COMMENTING****

On line 1 & 2, we are importing "react" and "react-dom". ("react-dom" is a rendering engine).

N.B: React is awesome in a way that you don't have to render it to HTML, you can render to a
whole bunch of things; you can render to a String you can render it to the Dom which is our
(Active Web Page).

The actual rendering engine is separate from the react syntax Awesome concept :-) that make the
code you write extremely versatile even towards "NATIVE APPS" and things like that.

N.B: The code of React is that everything is a COMPONENTS if you were to look in index.html
everything is an element in HTML. i.e. body element with a div element. and that is the concept
behind React Components. (Everything is a component instead of an element).

In the code on line 13 to 19 we have a Layout Component and in the very basic you need a render method
for a component. Therefore, the render method (line 14) is what are we spitting out. On (line 16),
anything wrapped in "()" can convert a HTML to JavaScript created elements like shown on line 21.

N.B: if you want to render a component (class Layout extends React.Component)-(line 13 to 19) you use it as if it were an HTML tag like shown on line 24



*----------------------------------------------------------------------------------------------*

**/
