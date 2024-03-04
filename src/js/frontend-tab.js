; (function ($) {
    const setImageUrl = (number) => {
        const imageUrl = $(`.hidden${number}`).val();
        const imageAlt = $(`.hidden${number}`).attr('alt');
        $('.tab_image_frontend').attr('src', imageUrl);
        $('.tab_image_frontend').attr('alt', imageAlt);
    }
    $('#btn-tab1').on('click', function () {
        setImageUrl(1);
    });
    $('#btn-tab2').on('click', function () {
        setImageUrl(2);
    });
    $('#btn-tab3').on('click', function () {
        setImageUrl(3);
    });

})(jQuery);
