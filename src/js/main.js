
console.log("main js")
//document.addEventListener("load", hidePinterestChat);
window.onload = hidePinterestChat;

function hidePinterestChat() {
  const button = document.getElementById("buy-now-button");
  console.log("add to cart 500ms", button);
  if(button)
  {
    setTimeout(function(){ button.click(); }, 500);
  }
  else
  {
    console.log("force cart")
  document
    .querySelector('#addToCart')
    .insertAdjacentHTML(
      'afterbegin',
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