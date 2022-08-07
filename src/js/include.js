$(function(){
    var includes = $('[data-include]');
    $.each(includes, function(){
        
        var file = 'src/html/' + $(this).data('include') + '.html';
        // var selected_div = $(this);

        $.get(file, function(data){
            $(this).replaceWith(data);
        });
    })
});