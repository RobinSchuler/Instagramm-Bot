import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

class Follow extends React.Component {
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
    const clickElement = (elements, name, nameCount) => {
      if (name.length > nameCount) {
        if (name[nameCount].innerHTML == "janniswe97") {
          console.log("reached last name");
          return;
        }
      } else {
        console.log("error that should never appear");
        --nameCount;
        //does that fix it? XD
      }

      console.log("remaining elem length=", elements.length);
      if (elements.length == 0) {
        console.log("scrolling");
        window.scrollBy(0, 300);
        setTimeout(function() {
          clickElement(elements, name, nameCount);
        }, 10000);
      } else {
        elements[0].click();
        var timeout = Math.random() * 60000 + 10000;
        console.log("next in", timeout / 1000 / 60, "min");
        setTimeout(function() {
          clickElement(elements, name, ++nameCount);
        }, timeout);
      }
      // scrollToBotom(0);
    };

    console.log("start");
    var name = document.getElementsByClassName("_2g7d5 notranslate _o5iw8 ");
    var elements = document.getElementsByClassName(
      "_qv64e       _gexxb _4tgw8     _njrw0   "
    );
    // for(elem in elements)
    // {
    //     elem.click();return false;
    //     await sleep(2000);
    // }
    clickElement(elements, name, 0);
    return <div> Hallo </div>;
  }
}

class Unfollow extends React.Component {
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
    const namesToKeep = {
      patrickb_94: "null",
      pirminb_97: "null",
      "kreisligafussball.de": "null",
      fussball_de: "null",
      kicker: "null",
      transfermarkt_official: "null",
      robinschuler1: "null",
      patwoz_insta: "null",
      "1_fc_nuernberg": "null",
      fanpagefcbayernmunich: "null",
      ruhrpott_photography: "null",
      anoris_de: "null",
      bolzr: "null",
      championsleague: "null",
      kreisligafakten: "null",
      laura_schree: "null"
    };
    const unabo = (name, button, nameCount, buttonCount) => {
      console.log("remaining names", name.length - 1 - nameCount);
      if (name.length - 1 == nameCount) {
        console.log("scrolling");
        window.scrollBy(0, 300);
        setTimeout(function() {
          unabo(name, button, nameCount, buttonCount);
        }, 10000);
      } else {
        if (!namesToKeep.hasOwnProperty(name[nameCount].innerHTML)) {
          button[buttonCount].click();
          var timeout = Math.random() * 60000 + 10000;
          console.log("next in", timeout / 1000 / 60, "min");
          setTimeout(function() {
            unabo(name, button, ++nameCount, buttonCount);
          }, timeout);
        } else {
          //kept a name => dont delete it
          var timeout = Math.random() * 30000 + 10000;
          console.log("next in", timeout / 1000 / 60, "min");
          setTimeout(function() {
            unabo(name, button, ++nameCount, ++buttonCount);
          }, timeout);
        }
      }

      // console.log("remaining elem length=", elements.length);
      // if (elements.length == 0) {
      //   console.log("scrolling");
      //   window.scrollBy(0, 100);
      //   setTimeout(function() {
      //     clickElement(elements);
      //   }, 2000);
      // } else {
      //   elements[0].click();
      //   var timeout = Math.random() * 60000 + 10000;
      //   console.log("next in", timeout / 1000 / 60, "min");
      //   setTimeout(function() {
      //     clickElement(elements);
      //   }, timeout);
      // }
      // // scrollToBotom(0);
    };

    console.log("start");
    var name = document.getElementsByClassName("_2g7d5 notranslate _o5iw8 ");
    var button = document.getElementsByClassName(
      "_qv64e    _t78yp    _4tgw8     _njrw0   "
    );
    // for(elem in elements)
    // {
    //     elem.click();return false;
    //     await sleep(2000);
    // }
    unabo(name, button, 0, 0);
    return <div> </div>;
  }
}
// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  console.log("runtimeMessage", request);
  // If message is injectApp
  if (request.follow) {
    console.log("follow");
    // Inject our app to DOM and send response
    follow();
    response({
      startedExtension: true
    });
  } else if (request.unfollow) {
    console.log("unfollow");
    unfollow();
    response({
      startedExtension: true
    });
  }
});

function follow() {
  console.log("func follow");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<Follow />, newDiv);
}

function unfollow() {
  console.log("func unfollow");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<Unfollow />, newDiv);
}
