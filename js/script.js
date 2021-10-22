$(function() {
    $.get("/header.html", function (data) {
        $(data).each(function(i, element) {

            if (element.id == "header")
                $("#header").replaceWith(element)

            if (element.tagName == "FOOTER") {
                $("footer").replaceWith(element)

                let year = new Date().getFullYear()
                $("footer .copyright").html(`© ${year} FloatingBanana`)
            }
        });
    })

    initCollapsibles()
    requestAnimationFrame(animationLoop)
    
    if ($("#disqus_thread").length)
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

function initCollapsibles() {
    var collapsibleBehavior = function() {
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
}


var step = 0
function animationLoop() {
    $(".wave-animation").each(function(index, element) {
        let canvas = element.firstElementChild
        let context = canvas.getContext("2d")

        let cs = getComputedStyle(element)
        context.width = parseInt(cs.getPropertyValue("width"), 10)
        context.height = parseInt(cs.getPropertyValue("height"), 10)
        canvas.width = context.width
        canvas.height = context.height

        drawWave(context, element.hasAttribute("flipped"))
    })

    step++
    requestAnimationFrame(animationLoop)
}

function drawWave(ctx, flipped) {
    const frequency = 20
    const speed = .005
    width = ctx.width
    height = ctx.height

    ctx.fillStyle = "#00B1F6"
    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()
    
    for (let i = 0; i < width/frequency + 1; i++) {
        let amp = Math.abs((step * speed) % 2 - 1)

        let xpos = i * frequency
        let ypos = height * (i % 2 == 0 ? amp : 1 - amp)
        
        let xnext = (i + 1) * frequency
        let ynext = height * ((i + 1) % 2 == 0 ? amp : 1 - amp)

        let xc = (xpos + xnext) / 2;
        let yc = (ypos + ynext) / 2;

        ctx.quadraticCurveTo(xpos, ypos, xc, yc);
    }

    ctx.lineTo(width, 0)
    ctx.lineTo(0, 0)

    ctx.closePath()
    ctx.fill()
}