(function($){
  $(function(){
    
    
  	/* Rectify images line-height */
  	var $imgs = $("#content article.hentry > div.content img").each(function(){
  	  var $this = $(this),
  	      thisHeight = $this.height(),
  	      $target = ($this.parent().is("a,figure"))? $this.parent() : $this;
  	  
  	  $target.css({
  	    "display": "inline-block",
  	    "marginBottom": (24 - thisHeight % 24) + "px"
  	    
  	    // Ajouter limite : si marginBottom <= 10, ajouter 24
  	  });
  	  
  	});
    
    /* HTML Help animation */
    var $htmlHelp = $("#respond p.html-help");
    $htmlHelp.height($htmlHelp.height()).hide();
    $("#respond textarea").focus(function(){
    	if (!$htmlHelp.is(":visible")) {
    		$htmlHelp.slideDown(150);
    	}
    });
    
    /* Post comment animation */
  	$('#comments .post-comment a').click(function(e){
  		e.preventDefault();
  		var curHref = $(this).attr("href");
  		$('html').animate({scrollTop: $(curHref).offset().top}, 100, function(){
  			window.location.hash = curHref.slice(1);
  			$(curHref).focus();
  		});
  	});
  });
})(jQuery);