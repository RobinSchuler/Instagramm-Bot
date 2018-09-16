import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';

const namesToKeep = {
  patrickb_94: 'null',
  pirminb_97: 'null',
  'kreisligafussball.de': 'null',
  fussball_de: 'null',
  kicker: 'null',
  transfermarkt_official: 'null',
  robinschuler1: 'null',
  patwoz_insta: 'null',
  '1_fc_nuernberg': 'null',
  fanpagefcbayernmunich: 'null',
  ruhrpott_photography: 'null',
  anoris_de: 'null',
  bolzr: 'null',
  championsleague: 'null',
  kreisligafakten: 'null',
  laura_schree: 'null',
};

class Follow extends React.Component {
  render() {
    const number = parseInt(this.props.number);
    const lastP = this.props.lastP;

    const clickElement = (elements, nameCount) => {
      console.log(
        'current elements = ',
        elements.length,
        ' next number to follow =  ',
        nameCount
      );
      if (elements.length >= nameCount) {
        const name = elements[nameCount].getElementsByClassName(
          'FPmhX notranslate zsYNt '
        )[0].innerHTML;
        const button = elements[nameCount].getElementsByClassName(
          'oF4XW sqdOP L3NKy'
        )[0];
        if (name == lastP) {
          console.log('reached last name');
          return;
        } else {
          if (
            button == undefined ||
            button === undefined ||
            button.innerHTML !== 'Folgen'
          ) {
            //skip if no follow button
            clickElement(elements, ++nameCount);
          } else {
            button.click();
            var timeout = Math.random() * 60000 + 10000;
            console.log('next in', timeout / 1000 / 60, 'min');
            setTimeout(function() {
              clickElement(elements, ++nameCount);
            }, timeout);
          }
        }
      } else {
        console.log('scrolling');
        window.scrollBy(0, 300);
        setTimeout(function() {
          clickElement(elements, nameCount);
        }, 10000);
      }
    };

    console.log('start');

    var test = document.getElementsByClassName('ywte8');

    clickElement(test, number);
    return <div> Hallo </div>;
  }
}

class Unfollow extends React.Component {
  render() {
    const unabo = (name, button, nameCount, buttonCount) => {
      console.log(
        'remaining names',
        name.length - 1 - nameCount,
        name[nameCount].innerHTML
      );
      if (name.length - 1 == nameCount) {
        console.log('scrolling');
        window.scrollBy(0, 300);
        setTimeout(function() {
          unabo(name, button, nameCount, buttonCount);
        }, 10000);
      } else {
        if (!namesToKeep.hasOwnProperty(name[nameCount].innerHTML)) {
          button[buttonCount + 1].click();
          var confirmationPopupButton;
          setTimeout(function() {
            confirmationPopupButton = document.getElementsByClassName(
              'aOOlW -Cab_   '
            );
            confirmationPopupButton[0].click();
          }, 2000);

          //weird non existing button at 0
          var timeout = Math.random() * 60000 + 10000;
          console.log('unfollow, next in', timeout / 1000 / 60, 'min');
          setTimeout(function() {
            unabo(name, button, ++nameCount, buttonCount);
          }, timeout);
        } else {
          //kept a name => dont delete it
          var timeout = Math.random() * 30000 + 10000;
          console.log('skip, next in', timeout / 1000 / 60, 'min');
          setTimeout(function() {
            unabo(name, button, ++nameCount, ++buttonCount);
          }, timeout);
        }
      }
    };

    //console.log('start');
    var name = document.getElementsByClassName('FPmhX notranslate _0imsa ');
    var button = document.getElementsByClassName(
      'oF4XW sqdOP  L3NKy   _8A5w5   '
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
  //console.log('runtimeMessage', request);
  // If message is injectApp
  if (request.follow) {
    //console.log('follow');
    // Inject our app to DOM and send response
    follow(request.number, request.lastP);
    response({
      startedExtension: true,
    });
  } else if (request.unfollow) {
    //console.log('unfollow');
    unfollow();
    response({
      startedExtension: true,
    });
  }
});

function follow(number, lastP) {
  var num = number;
  if (num == '' || num === '') {
    num = '0';
  }
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'chromeExtensionReactApp');
  document.body.appendChild(newDiv);
  ReactDOM.render(<Follow number={num} lastP={lastP} />, newDiv);
}

function unfollow() {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'chromeExtensionReactApp');
  document.body.appendChild(newDiv);
  ReactDOM.render(<Unfollow />, newDiv);
}
