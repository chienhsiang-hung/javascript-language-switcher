$(function(){
    var includes = $('[data-include]');
    $.each(includes, function(){
        
        var file = 'src/html/' + $(this).data('include') + '.html';

        $(this).load(file);
        $(`${this} > *`).unwrap();
    })
});