$(function () {
  
  $(".slide-show").each(function (){
    var $this = $(this);
    var slideshow = new SlideShow(
      $this.find(".slide-container"),
      $this.find(".slide-previews"),
      $this.find(".slide-captions")
    );

    //Initialize the slide show
    slideshow.reset();

    //Initialize slide buttons
    $this.find(".left.slide-navi").click(function (){
      slideshow.prevSlide();
    });
    $this.find(".right.slide-navi").click(function (){
      slideshow.nextSlide();
    });

    //Initialize previews
    $this.find(".slide-preview").click(function (){
      slideshow.chooseSlide($(this).index());
    });

    //Vertically scroll the preview pane
    $this.find(".slide-previews").on({
      "mousewheel":function (event, delta) {
        this.scrollLeft -= delta;
        event.preventDefault();
      }
    });
  });
});

function SlideShow($slides, $slidePreviews, $slideCaptions){
  var slides = $slides;
  var slidePreviews = $slidePreviews;
  var slideCaptions = $slideCaptions;

  var childSlides = $slides.children();
  var childPreviews = $slidePreviews.children();
  var childCaptions = $slideCaptions.children();
  var length = childSlides.length;
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

    active = idx;
  }

  this.reset = function() {
    childSlides = $slides.children();
    childPreviews = $slidePreviews.children();
    childCaptions = $slideCaptions.children();
    length = childSlides.length;

    if(active < 0)
      active = 0;
    else if(active >= length)
      active = length;

    childSlides.removeClass("active");
    childPreviews.removeClass("active");
    childCaptions.removeClass("active");

    childSlides.eq(active).addClass("active");
    childPreviews.eq(active).addClass("active");
    childCaptions.eq(active).addClass("active");
  }
}