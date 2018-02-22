$(function() {
    $('.slidebttn').hover(
        function () {
            var $this 		= $(this);
            var $slidelem 	= $this.prev();
            $slidelem.stop().animate({'width':'225px'},300);
            $slidelem.find('span').stop(true,true).fadeIn();
            $this.addClass('button_c');
        },
        function () {
            var $this 		= $(this);
            var $slidelem 	= $this.prev();
            $slidelem.stop().animate({'width':'70px'},200);
            $slidelem.find('span').stop(true,true).fadeOut();
            $this.removeClass('button_c');
        }
    );
});