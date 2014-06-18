(function() {

    
    var terminal = utils.instantiate(term.Terminal, term.TerminalView);
    
    $('.body').append(terminal.view.render().el);

    game.character = new game.characters.Player();
    terminal.model.set({'stdout': terminal.model.evaluate('look')});
    
})();
