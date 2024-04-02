// ==UserScript==
// @name         Flocus Player
// @namespace    http://tampermonkey.net/
// @version      2024-02-16
// @description  Allows you to change the playlist on flocus from spotify. Check "sounds" tab for input area.
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @author       TKMSMC
// @match        https://app.flocus.com/
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const getPlaylistID = (url) => {
        let operatorRemoved = url.split("?")[0];
        let id = operatorRemoved.substring(operatorRemoved.lastIndexOf('/') + 1);
        return id;
    }

    // Replace existing input box with new one
    $('input[name="custom-playlist"]').replaceWith($('<input>').attr({
        type: 'text',
        placeholder: 'Paste playlist or video URL here',
        class: 'form-control mb-3',
        id: 'playlistURL'
    }));

    // Remove disabled attribute from element with name "custom-playlist"
    $('input[name="custom-playlist"]').removeAttr('disabled').attr('id', 'playlistURL');

    // Remove disabled attribute from button with class "btn btn-primary align-self-start custom-save"
    $('.btn.btn-primary.align-self-start.custom-save').removeAttr('disabled').attr('id', 'playlistUpdate');

    $(document).ready(function() {
        $("#playlistUpdate").click(function(){
            var inputValue = $('#playlistURL').val();
            var id = getPlaylistID(inputValue);
            $('.music-player.spotify').attr('src', `https://open.spotify.com/embed/playlist/${id}?theme=0&amp;utm_source=iframe-api`);
        });
    });
})();
