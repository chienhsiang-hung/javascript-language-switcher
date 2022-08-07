$(function(){
    var includes = $('[data-include]');
    $.each(includes, function(){
        
        var file = 'src/html/' + $(this).data('include') + '.html';

        $.get(file, function(data){
            $(this).replaceWith(data);
        });
    })
});