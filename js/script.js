$(function() {
    $.get("/header.html", function (data) {
        $(data).each(function(i, element) {

            if (element.id == "header")
                $("#header").replaceWith(element)

            // if (element.id == "comment-section")
                // $("#comment-section").replaceWith(element)

            if (element.tagName == "FOOTER") {
                $("footer").replaceWith(element)

                let year = new Date().getFullYear()
                $("footer .copyright").html(`© ${year} FloatingBanana`)
            }
        });
    })

    function collapsibleBehavior() {
        let icon = this.firstChild
    
        this.classList.toggle("collapsible-active")
        icon.classList.toggle("fa-chevron-right")
        icon.classList.toggle("fa-chevron-down")
    
    
        var content = this.nextElementSibling
        if (content.style.display == "block") {
            content.style.display = "none"
        }
        else {
            content.style.display = "block"
        }
    }
    
    $(".collapsible").each(function() {
        $(this).prepend(`<i class="fas fa-chevron-right"></i>`)
        $(this).on("click", collapsibleBehavior)
    })
    
    loadDisqus()
})

var disqus_config;
function loadDisqus() {
    var url = document.location.protocol + "//" + document.location.hostname + document.location.pathname
    var identifier = document.location.pathname

    disqus_config = function () {
        this.page.url = url;
        this.page.identifier = identifier;
    };

    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://floatingbanana.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}