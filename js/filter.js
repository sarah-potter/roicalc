$("[data-toggle='extraFilters']").click(function( ev ) {
    ev.preventDefault();
    var target;
    if (this.hasAttribute('data-target')) {
        target = $(this.getAttribute('data-target'));
    } else {
        target = $(this.getAttribute('href'));
    };
    target.toggleClass("in");
    console.log(target.hasClass('in'));
});