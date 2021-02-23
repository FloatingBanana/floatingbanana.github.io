$(function() {
    $.get("/header.html", function (data) {
        $(data).each(function(i, element) {

            if (element.id == "header")
                $("#header").replaceWith(element)

            // if (element.id == "comment-section")
                // $("#comment-section").replaceWith(element)

            if (element.id == "pagefooter")
                $("#pagefooter").replaceWith(element)
        });

    })
    
    
    $(".collapsible").on("click", function() {
        this.classList.toggle("collapsible-active")
    
        var content = this.nextElementSibling
        if (content.style.display == "block") {
            content.style.display = "none"
        }
        else {
            content.style.display = "block"
        }
    })
})