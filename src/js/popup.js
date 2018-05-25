window.onload = () => {
  const $followButton = document.querySelector('.follow');
  const $unfollowButton = document.querySelector('.unfollow');

  $followButton.onclick = () => {
    var number = prompt('enter number from where to follow');
    var lastP = prompt('last person to follow');
    console.log('follow clicked');
    // Get active tab
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      tabs => {
        // Send message to script file
        chrome.tabs.sendMessage(
          tabs[0].id,
          { follow: true, number: number, lastP: lastP },
          response => window.close()
        );
      }
    );
  };

  $unfollowButton.onclick = () => {
    // Get active tab
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      tabs => {
        // Send message to script file
        chrome.tabs.sendMessage(tabs[0].id, { unfollow: true }, response =>
          window.close()
        );
      }
    );
  };
};
