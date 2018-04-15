import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

class App extends React.Component {
  //  console.log("penis");
  render() {
    // const scrollToBotom = prevScroll => {
    //   var scrollH = document.body.scrollHeight;
    //   if (scrollH > prevScroll) {
    //     window.scrollTo(0, scrollH);
    //     setTimeout(function() {
    //       scrollToBotom(scrollH);
    //     }, 500);
    //   }
    // };
    const clickElement = elements => {
      console.log("remaining elem length=", elements.length);
      if (elements.length == 0) {
        console.log("done");
        window.scrollBy(0, 100);
        setTimeout(function() {
          clickElement(elements);
        }, 2000);
      } else {
        elements[0].click();
        var timeout = Math.random() * 180000 + 60000;
        console.log("next in", timeout / 1000 / 60, "min");
        setTimeout(function() {
          clickElement(elements);
        }, timeout);
      }
      // scrollToBotom(0);
    };

    console.log("penis3");
    var elements = document.getElementsByClassName(
      "_qv64e       _gexxb _4tgw8     _njrw0   "
    );
    // for(elem in elements)
    // {
    //     elem.click();return false;
    //     await sleep(2000);
    // }
    clickElement(elements, 0);
    return <div>Your App injected to DOM correctly!</div>;
  }
}

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
  if (request.injectApp) {
    // Inject our app to DOM and send response
    injectApp();
    response({
      startedExtension: true
    });
  }
});

function injectApp() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);
}
