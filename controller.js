
var Controller = {

  init : function() {
    this.reset();
  },

  reset : function() {
    $("#main > div").hide();
    $("#intro").fadeIn();
  },

  loadQuestion : function(aQuestion) {
    $("#intro").fadeOut('fast');

    $("#questions").fadeOut('fast', function() {

      $("#question").text(aQuestion.question);
      $("#buttons").empty();

      for (var i = 0; i < aQuestion.choices.length; i++) {
        var button = Controller.createButton(aQuestion.choices[i]);
        $("#buttons").append(button);
      }

      $("#questions").fadeIn('fast');
    });
  },

  createButton : function(aChoice) {
    var button = $('<div></div>');
    button.text(aChoice.choice);
    button.click(function() {
      Controller.choiceMade(aChoice.answer);
    });
    return button;
  },

  choiceMade : function(aAnswer) {
    if (aAnswer.font) {

      $("#questions").fadeOut('fast', function() {
        $("#font").text(aAnswer.font);
        $("#font").attr({ "src" : "fonts/" + aAnswer.font + ".gif" });
        $("#font-link").attr({ "href" : "http://www.google.com/search?q=font+" + aAnswer.font });

        $("#result").fadeIn('slow');
      });
    }
    else {
      this.loadQuestion(aAnswer);
    }
  }
};

$(document).ready(function() { Controller.init(); });
