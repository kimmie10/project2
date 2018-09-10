// module.exports = function(exphbs) {
//   return exphbs.create({
//     helpers: {
//       trimString: function(passedString) {
//         var theString = passedString.substring(0,150);
//         return new Handlebars.SafeString(theString);
//       },
//       defaultLayout: "main"
//     }
//   });
// };

// Handlebars.registerHelper('trimString', function(passedString) {
//   var theString = passedString.substring(0,150);
//   return new Handlebars.SafeString(theString)
// });

var register = function(Handlebars) {
  var helpers = {
    trimString: function(passedString) {
      var theString = passedString.substring(0, 300);
      console.log(theString);
      return theString + "...";
    },
    googleResults: function(data) {
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
