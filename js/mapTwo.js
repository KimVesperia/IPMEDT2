$(document).ready(function(){

	$(".poptv").hide();
    $(".pop14").hide();
    $(".pop15").hide();
    $(".pop16").hide();
    $(".pop18").hide();
    $(".pop25").hide();
    $(".popuppyong").hide();


    $(".tvimg").click(function(){
          $(".poptv").fadeIn(800);


    });
    $(".14img").click(function(){
          $(".pop14").fadeIn(800);
          $(".pop15").fadeOut(800);
          $(".pop16").fadeOut(800);
          $(".pop18").fadeOut(800);
          $(".pop25").fadeOut(800);
          $(".popuppyong").fadeOut(800);
    });
        $(".15img").click(function(){
          $(".pop15").fadeIn(800);
          $(".pop14").fadeOut(800);
          $(".pop16").fadeOut(800);
          $(".pop18").fadeOut(800);
          $(".pop25").fadeOut(800);
          $(".popuppyong").fadeOut(800);

    });
            $(".16img").click(function(){
          $(".pop16").fadeIn(800);
          $(".pop15").fadeOut(800);
          $(".pop14").fadeOut(800);
          $(".pop18").fadeOut(800);
          $(".pop25").fadeOut(800);
          $(".popuppyong").fadeOut(800);
    });
         $(".18img").click(function(){
          $(".pop18").fadeIn(800);
          $(".pop15").fadeOut(800);
          $(".pop16").fadeOut(800);
          $(".pop14").fadeOut(800);
          $(".pop25").fadeOut(800);
          $(".popuppyong").fadeOut(800);
    });
           $(".25img").click(function(){
          $(".pop25").fadeIn(800);
          $(".pop15").fadeOut(800);
          $(".pop16").fadeOut(800);
          $(".pop18").fadeOut(800);
          $(".pop14").fadeOut(800);
          $(".popuppyong").fadeOut(800);
    });
    $(".pyongimg").click(function(){
          $(".popuppyong").fadeIn(800);
          $(".pop15").fadeOut(800);
          $(".pop16").fadeOut(800);
          $(".pop18").fadeOut(800);
          $(".pop25").fadeOut(800);
          $(".pop14").fadeOut(800);
    });
    $(".popupsluiter").click(function(){
    	 $(".poptv").fadeOut(800);
         $(".pop14").fadeOut(800);
         $(".pop15").fadeOut(800);
         $(".pop16").fadeOut(800);
         $(".pop18").fadeOut(800);
         $(".pop25").fadeOut(800);
         $(".popuppyong").fadeOut(800);
    });

  });
$(document).ready(function() {
  $('img[usemap]').rwdImageMaps();
});
;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;

		var rwdImageMap = function() {
			$img.each(function() {
				if (typeof($(this).attr('usemap')) == 'undefined')
					return;

				var that = this,
					$that = $(that);

				// resizen van map zodat coordinaten veranderen en je erop kan klikken
				$('<img />').on('load', function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);

					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w)
							w = temp.width;
						if (!h)
							h = temp.height;
					}

					var wPercent = $that.width()/100,
						hPercent = $that.height()/100,
						map = $that.attr('usemap').replace('.', ''),
						c = 'coords';

					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						if (!$this.data(c))
							$this.data(c, $this.attr(c));

						var coords = $this.data(c).split(','),
							coordsPercent = new Array(coords.length);

						for (var i = 0; i < coordsPercent.length; ++i) {
							if (i % 2 === 0)
								coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
							else
								coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
						}
						$this.attr(c, coordsPercent.toString());
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');

		return this;
	};
})(jQuery);
