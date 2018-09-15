var register = function(Handlebars) {
  var helpers = {
    trimString: function(passedString, start = 0, end = 300) {
      var theString = "";
      if (passedString !== undefined && passedString.length > 0) {
        theString = passedString.substring(start, end);
        theString += " ...";
      }
      return theString;
    },
    imageTag: function(url) {
      var pTag = "<p class='image'>";
      var imageTag = pTag + "<img src=";
      if (url === undefined || url === null || url === "" || url.length === 0) {
        url = "https://bulma.io/images/placeholders/128x128.png";
      }
      imageTag += "'" + url + "'></p>";
      return imageTag;
    },
    joinList: function(listArray) {
      if (listArray !== undefined && listArray.length > 0) {
        return listArray.join(", ");
      }
    },
    partial: function(name) {
      return name;
    },
    // template: function(key, options) {
    //   var source = options.fn().replace("\\{{", "{{");
    //   var ret =
    //     "<script>\n" +
    //     key +
    //     " = function(opt){\n" +
    //     "return Handlebars.template(" +
    //     hbs.precompile(source) +
    //     ")(opt);\n" +
    //     "}\n" +
    //     "</script>";
    //   return ret;
    // },
    results: function(data) {
      var str = "<table>";
      for (var i = 0; i < data.length; i++) {
        str += "<tr>";
        for (var key in data[i]) {
          str += "<td>" + data[i][key] + "</td>";
        }
        str += "</tr>";
      }
      str += "</table>";
      return str;
    }
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    return helpers;
  }
};

module.exports.register = register;
module.exports.helpers = register(null);
