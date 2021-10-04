function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (!pageID) {
    MODEL.getPageData("home");
  } else {
    MODEL.getPageData(pageID);
  }
}

function addSignInListener() {
  $(".login__button").click(function (e) {
    e.preventDefault();
    $(".login").html(`<h1> Signed In </h1> <div class="checkmark"></div>`);
  });
}

function addModalListener() {
  $(".modal__click").click(function (e) {
    $(".modal").css("display", "none");
  });
}

function initListeners() {
  $(".modal").css("display", "none");

  $(window).on("hashchange", route);
  route();

  $("#login").click(function (e) {
    $(".modal").css("display", "flex");
    $(".modal").html(`
    <div class="modal__click"></div>
    <div class="login">
        <h1 class="login__header">
            Sign in
        </h1>
        <div class="login__form">
            <div class="login__form__input">
              <label for="username" >Username</label>
              <input id="username" name="username" type="text" placeholder="Username...">
            </div>

            <div class="login__form__input">
              <label for="password" >Password</label>
              <input id="password" name="password" type="text" placeholder="Password...">
            </div>
        </div>
        <div class="login__button">Sign In</div>
    </div>
    `);
    addSignInListener();
    addModalListener();
  });
}

$(document).ready(function () {
  initListeners();
});
