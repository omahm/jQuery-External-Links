(function($){
    $.fn.externalLinks = function(options){
        var defaults = {
            target      : '_blank',
            image       : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUeNpi/P//PwMuwMjICJdkYsAPzIH4NRD/AnH2AvF/JHwSaosZED8HYg+oOJhwAknCMJIiJyQxEI2h6AkQ26CJYyhcDcSWUPZhmDgjVCEjLl/D5Aj5mgEleIA6PbCYhiG2HS14kPF2mBsBAgwAHnpgZQ8cT2MAAAAASUVORK5CYII=',
            imageWidth  : '10',
            imageHeight	: '10',  
            className   : 'extlink',
            title	: 'Open this link in a new window/tab'	
	};

        var settings = $.extend(defaults, options);
        var classattr = (settings.className.length > 0) ? 'class="' + settings.className + '"' : ''; 
        var titleattr = (settings.title.length > 0) ? 'title="' + settings.title + '"' : '';
	
        return this.each(function(i,element){
            $this = $(this);
            $links = $(element).find("a[href*='http://']:not([href*='" + location.hostname.replace("www.","") + "'])").get();
            $.each($links, function(idx,link){			
                $(link).append('<a href="' + $(link).attr('href') + '" target="' + settings.target + '" ' + classattr + ' ' + titleattr +'><img width="' + settings.imageWidth + '" height="' + settings.imageHeight + '" src="' + settings.image + '"></a>');
            });
	});
    };
})(jQuery);
