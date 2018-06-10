$(function () { 
  $(".slide-show").each(function (){
    var $this = $(this);
    var slideshow = new SlideShow($this);
    slideshow.init();
  });
});

function SlideShow($slideShow){
  //Constants
  var fadePadding = 15;
  //Cache for progress text
  var progress;
  //Cache for preview fadeouts
  var rightFadeout, leftFadeout;
  //Cache for read more
  var moreButton, gradient, slideCaptionContainer;
  //Cache for parent containers
  var slides, slidePreviews, slideCaptions;
  //Cache for arrays of child elements
  var childSlides, childPreviews, childCaptions;
  //Cache for storing number of slides
  var length;

  var readMore = false;
  var active = 0;


  this.nextSlide = function (){
    var idx = active + 1;
    if(idx >= length)
      idx = 0;
    this.chooseSlide(idx);
  }

  this.prevSlide = function (){
    var idx = active - 1;
    if(idx < 0)
      idx = length - 1;
    this.chooseSlide(idx);
  }

  this.chooseSlide = function (idx){
    childSlides.eq(active).removeClass("active");
    childPreviews.eq(active).removeClass("active");
    childCaptions.eq(active).removeClass("active");

    childSlides.eq(idx).addClass("active");
    childPreviews.eq(idx).addClass("active");
    childCaptions.eq(idx).addClass("active");

    var previewElem = childPreviews[idx];
    var scrollElem = slidePreviews[0];
    var peOffsetRight = previewElem.offsetLeft + previewElem.clientWidth

    if(previewElem.offsetLeft < scrollElem.scrollLeft){
      //If preview element is hidden on left side
      scrollElem.scrollLeft = previewElem.offsetLeft;
    }else if(peOffsetRight > scrollElem.scrollLeft + scrollElem.clientWidth){ 
      //else if preview is hidden on the right side
      scrollElem.scrollLeft = peOffsetRight - scrollElem.clientWidth; 
    }

    active = idx;
    this.updateCaption();
    this.updateProgress();
  }

  this.updateFadeout = function(){
    var elem = slidePreviews[0];

    if(elem.clientWidth == elem.scrollWidth){
      leftFadeout.removeClass("active");
      rightFadeout.removeClass("active");
      return;
    }

    //When scrolled all the way to the left
    if(elem.scrollLeft <= fadePadding){
      leftFadeout.removeClass("active");
    }else{
      leftFadeout.addClass("active");
    }

    //When scrolled all the way to the right
    if(elem.scrollLeft >= elem.scrollWidth - elem.clientWidth - fadePadding){
      rightFadeout.removeClass("active");
    }else{
      rightFadeout.addClass("active");
    }
  }

  this.toggleReadMore = function(){
    readMore = !readMore;
    this.updateCaption();
  }

  this.isCaptionExpanded = function(){ return readMore; }

  this.updateCaption = function(){
    if(childCaptions.length == 0){
      return;
    }

    var currentCap = childCaptions.eq(active);

    if(currentCap.children().length == 0){
      //If the contents of caption is empty
      gradient.removeClass("active");
      moreButton.removeClass("active");
    }else{
      gradient.addClass("active");
      moreButton.addClass("active");
      if(readMore){
        gradient.removeClass("active");
        currentCap.removeClass("collapsed");
        slideCaptionContainer.removeClass("cursor");
        moreButton.html("<i class=\"ui up arrow icon\"></i>Read Less");
      }else{
        gradient.addClass("active");
        currentCap.addClass("collapsed");
        slideCaptionContainer.addClass("cursor");
        moreButton.html("<i class=\"ui down arrow icon\"></i>Read More");
      }
    }
  }

  this.updateProgress = function(){
    progress.text((active + 1) + "/" + length);
  }

  this.init = function(){
    this.reset();
    var ts = this;

    $slideShow.find(".left.slide-navi").click(function(){
      ts.prevSlide();
    });

    $slideShow.find(".right.slide-navi").click(function(){
      ts.nextSlide();
    });

    slides.click(function(){
      ts.nextSlide();
    });

    $slideShow.find(".slide-preview").click(function (){
      ts.chooseSlide($(this).index());
      ts.updateFadeout();
    });

    $slideShow.find(".read-more").click(function (){
      ts.toggleReadMore();
    });

    slideCaptionContainer.click(function (){
      if(!ts.isCaptionExpanded()){
        ts.toggleReadMore();
      }
    });

    //Vertically scroll the preview pane
    slidePreviews.on({
      "scroll":ts.updateFadeout
      /*"mousewheel":function (event, delta) {
        if(this.scrollWidth > this.offsetWidth){
          this.scrollLeft -= delta;
          event.preventDefault();
        }
      },*/
    });

    //Use arrows keys to navigate the slides
    $slideShow.keydown(function(e){
        if(e.keyCode == 37){
          ts.prevSlide();
          e.preventDefault();
        }else if(e.keyCode == 39){
          ts.nextSlide();
          e.preventDefault();
        }else if(e.keyCode == 13){
          ts.toggleReadMore();
        }
      }
    );
  }

  this.reset = function() {
    //Cache progress text
    progress = $slideShow.find(".progress");

    //Cache fadeout elements
    rightFadeout = $slideShow.find(".right.fadeout");
    leftFadeout = $slideShow.find(".left.fadeout");

    //Cache read more 
    moreButton = $slideShow.find(".read-more");
    gradient = $slideShow.find(".gradient");
    slideCaptionContainer = $slideShow.find(".slide-caption-container");

    //Cache parent elements
    slides = $slideShow.find(".slide-container");
    slidePreviews = $slideShow.find(".slide-previews");
    slideCaptions = $slideShow.find(".slide-captions");

    //Cache array of child elements
    childSlides = slides.children();
    childPreviews = slidePreviews.children();
    childCaptions = slideCaptions.children();

    //Cache the number of slides
    length = childSlides.length;

    this.active = 0;

    //Make sure only the active slides are properly set active
    childSlides.removeClass("active");
    childPreviews.removeClass("active");
    childCaptions.removeClass("active");
    childSlides.eq(active).addClass("active");
    childPreviews.eq(active).addClass("active");
    childCaptions.eq(active).addClass("active");

    this.updateFadeout();
    this.updateCaption();
    this.updateProgress();
  }
}