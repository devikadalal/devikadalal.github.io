$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '6320938276',
        limit: 100,
        resolution: 'standard_resolution',
        accessToken: '6320938276.d90570a.501a6ea3c44c4155bfb0d8172f9aa520',
        sortBy: 'most-recent',
        template: '<div class="instagram-post"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="instagram-img"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
