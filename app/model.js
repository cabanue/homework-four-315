var MODEL = (function () {
  var _getPageData = function (pageID) {
    let pageData = pageID;

    $.get(`pages/${pageData}/${pageData}.html`, function (data) {
      $("#app").html(data);
    });
  };

  return {
    getPageData: _getPageData,
  };
})();
