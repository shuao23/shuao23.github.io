$(function() {
    $("slide-previews, slide-previews-container").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });
});