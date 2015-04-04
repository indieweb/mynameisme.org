jQuery.noConflict();
(function($) {
    $(function() {
        $('img').lazyload({ 
            effect : "fadeIn"
        });
        
        $('.comment-reply-link').click(function(){
            $('#author, #email, #url, #comment').width($('#commentform').width()-22);
        });
        $('#cancel-comment-reply-link').click(function(){
            $('#author, #email, #url, #comment').removeAttr('style');
        });
        
        var high = 0;
        var blocks = $('.bottom');
        blocks.each(function(){
            var height = $(this).height();
            if (high <= height) high = height;
        });
        blocks.each(function(){
            $(this).height(high);
        });
        
    });
})(jQuery);
