window.onload = () => {
  const $followButton = document.querySelector(".follow");
  const $unfollowButton = document.querySelector(".unfollow");

  $followButton.onclick = () => {
    console.log("follow clicked");
    // Get active tab
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      tabs => {
        // Send message to script file
        chrome.tabs.sendMessage(tabs[0].id, { follow: true }, response =>
          window.close()
        );
      }
    );
  };

  $unfollowButton.onclick = () => {
    // Get active tab
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
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
