/**
 * Created by yunrui001 on 2017-10-20.
 */
(function init() {
    $('#removeMask').click(function () {
        $(this).addClass('not-display')
        $('#mask').addClass('not-display')
        $('#content').css('max-height', 'none')
    })

    function closure() {
        var fixed = false
        return function (event) {
            if ($(window).scrollTop() > 61) {
                if (!fixed) {
                    fixed = true
                    $('#classification').css('top', '15px')
                    $('#classification').css('left', $('#classification').offset().left + 'px')
                    $('#classification').addClass('fixed')
                }
            } else {
                if (fixed) {
                    fixed = false
                    $('#classification').css('top', '')
                    $('#classification').css('left', '')
                    $('#classification').removeClass('fixed')
                }
            }
        }
    }

    window.addEventListener('scroll', closure())

})()