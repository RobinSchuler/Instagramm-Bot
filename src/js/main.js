console.log("main js", new Date(), new Date().getMilliseconds());
//document.addEventListener("load", hidePinterestChat);
window.onload = hidePinterestChat;

function hidePinterestChat() {
  let int = null;
  const button = document.getElementById("buy-now-button");
  console.log(
    "opening insta buy",
    button,
    new Date(),
    new Date().getMilliseconds()
  );
  if (button) {
    int = setInterval(() => {
      const frame = document.getElementById("turbo-checkout-iframe");
      console.log(
        "button ready ? " + frame &&
          frame.contentWindow.document.getElementById(
            "turbo-checkout-pyo-button"
          )
      );
      if (
        frame &&
        frame.contentWindow.document.getElementById("turbo-checkout-pyo-button")
      ) {
        console.log(
          "button found at",
          new Date(),
          new Date().getMilliseconds()
        );
        clearInterval(int);
      }
    }, 100);
  } else {
    console.log("force cart");
    document.querySelector("#addToCart").insertAdjacentHTML(
      "afterbegin",
      `
        <div id="buyNow_feature_div" class="celwidget" data-feature-name="buyNow">
          <div class="a-button-stack">
          <div id="buyNow" class="a-section a-spacing-base">
          <div id="turboState" class="a-section a-spacing-none a-padding-none">
          </div>
          <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;turbo&quot;}" id="turbo-checkout-modal"></span>
          <span id="submit.buy-now" class="a-button a-button-oneclick a-button-icon onml-buy-now-button"><span class="a-button-inner"><i class="a-icon a-icon-buynow"></i><input id="buy-now-button" name="submit.buy-now" data-hover="__dims__" class="a-button-input" type="submit" aria-labelledby="submit.buy-now-announce"><span id="submit.buy-now-announce" class="a-button-text" aria-hidden="true">
          Jetzt kaufen
          </span></span></span>
          </div>
          </div>
        </div>
      `
    );
    const addToCartBtn = document.querySelector("#buy-now-button");
    addToCartBtn.click();
  }
}
