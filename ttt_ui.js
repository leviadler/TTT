$(document).ready(function(){

  var game = new TTT.Game();

  $('.alert').html(game.player + ": make a move!");

  $(".grid").on("click", "li", function(event) {
    var $li = $(this);

    var row = Math.floor(($li.index()) / 3);
    var col = Math.floor(($li.index()) % 3);

    if(game.isEmptyPos([row, col])){
      if (game.player == "x") {
        $li.addClass("x");
      } else {
        $li.addClass("o");
      }

      game.move([row, col]);

      $('.alert').html(game.player + ": make a move!");

      if(game.winner()){
        $('.alert').html(game.player + " has lost!!! Play again!");
        $('.grid li').removeClass("x");
        $('.grid li').removeClass("o");
        game = new TTT.Game();
      }
    } else {
      $('.alert').html("Not a valid move. Try again, " + game.player);
    }
  });

});