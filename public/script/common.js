/**
 * Created by yunrui001 on 2017-10-20.
 */
(function init() {
    $('#removeMask').click(function () {
        $(this).addClass('not-display')
        $('#mask').addClass('not-display')
        $('#content').css('max-height', 'none')
    })
})()