// ==UserScript==
// @name         Flocus Tweaks
// @namespace    https://github.com/torin-stephen/FlocusTweaks
// @version      1.6.9
// @description  Tweak that flocus!
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @author       TKMSMC
// @match        https://app.flocus.com/
// @icon         data:image/png;base64,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
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// ==/UserScript==
// Font Jura
// Color #222 #8D8
// Toast settings: https://codeshack.io/elegant-toast-notifications-javascript/
(function () {
    "use strict";
    var $ = window.jQuery;
    var scriptVersion = GM_info.script.version;
    const configItems = ["option1", "option2", "option3", "option4", "option5"];

    function getConfigOptions() {
        const storedValues = {};
        for (let i = 1; i <= 5; i++) {
            const itemName = "option" + i;
            const storedValue = GM_getValue(itemName, true); // Default value is true if not found
            storedValues[itemName] = storedValue;
        }
        return storedValues;
    }

    // Playlist id separator
    const getPlaylistID = (url) => {
        let operatorRemoved = url.split("?")[0];
        let id = operatorRemoved.substring(operatorRemoved.lastIndexOf("/") + 1);
        return id;
    };

    $(window).load(function () {
        //Setup display name
        if (getConfigOptions().option6) {
            $(".greeting").ready(function () {
                if (GM_getValue("displayname") != undefined) {
                    updateDisplayName(GM_getValue("displayname"))
                }
            });
        };


        ////////////////////////////////
        // VISUAL SETTINGS
        ////////////////////////////////

        if (getConfigOptions().option1) {
            // Replace logo with better one
            $(".logo").attr(
                "src",
                "https://raw.githubusercontent.com/torin-stephen/FlocusTweaks/main/logo.png"
            );
        }
        // Fix the strange visual choices
        $(".offcanvas-content").removeClass();

        if (getConfigOptions().option2) {
            // Remove ads for plus
            $("plus-badge").remove();
            $(".upgrade-button").remove();
            $(".dash-mode").click(function () {
                $("div.flocus-free-only").attr("class", "flocus-plus-only");
            });
        }

        if (getConfigOptions().option3) {
            // When the dash is changed, remove ads for plus, add emoji
            $(".dash-mode").click(function () {
                $("div.flocus-free-only").attr("class", "flocus-plus-only");
                prioritiesEmoji();
            });

            // Creating a MutationObserver instance
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    // Checking if the class of the body has changed
                    if ($(mutation.target).hasClass("modal-open")) {
                        // If class changed to "modal-open", run prioritiesEmoji function
                        prioritiesEmoji();
                        console.log("mutated");
                    }
                });
            });

            // Configuring the MutationObserver to observe changes in attributes of the body element
            var config = {
                attributes: true,
                attributeFilter: ["class"]
            };

            // Start observing the body element
            observer.observe(document.body, config);

            // Priorities Tab
            // Define the new styles for the tab
            const tabStyles = `
        flocus-listitem:not(.flocus-is-plus) button {
            display: block !important;
            pointer-events: auto !important; /* Override the existing style */
            /* Add any additional styles here */
        }

        .emoji-clear {
            display: none;
        }

        flocus-listitem .tag-wrapper {
            width: 130px;
            height: 120px;
            padding: .5rem;
            background-color: #353535;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            z-index: 1;
            position: relative !important;
            border-radius: 6px;
        }
    `;

            // Create a new <style> element and append it to the <head> of the document
            const styleElement = document.createElement("style");
            styleElement.textContent = tabStyles;
            document.head.appendChild(styleElement);

            // This finds the emoji from local storage
            // Get the span element with class "title" within a div with class "task"

            const prioritiesEmoji = () => {
                var spanText = $("div.task span.title").text().trim();

                if (spanText) {
                    // Get data from local storage
                    var localStorageData = JSON.parse(
                        localStorage.getItem("flocus_priorities_settings")
                    );

                    // Find the object with the same name as the text of the span
                    var matchingObject = $.grep(localStorageData, function (obj) {
                        return obj.name === spanText;
                    })[0];

                    if (matchingObject) {
                        // Output the emoji
                        console.log("Emoji for " + spanText + ": " + matchingObject.emoji);
                        $("div.task span.emoji").html(matchingObject.emoji);
                    } else {
                        console.log("No matching object found for " + spanText);
                    }
                } else {
                    console.log(
                        "No span element with class 'title' found within a div with class 'task'"
                    );
                }
            };
        }
        ////////////////////////////////
        // MUSIC PLAYER SETTINGS
        ////////////////////////////////

        if (getConfigOptions().option4) {
            // Replace existing input box with new one
            $('input[name="custom-playlist"]').replaceWith(
                $("<input>").attr({
                    type: "text",
                    placeholder: "Paste spotify playlist URL here",
                    class: "form-control mb-3",
                    id: "playlistURL",
                })
            );

            // Remove Load Spotify Player Button
            // Check if the button with class 'load-spotify' exists
            if ($('.load-spotify').length) {

                // Replace the button with a new button
                $('.load-spotify').replaceWith(
                    $('<button/>', {
                        class: 'btn btn-primary align-self-start btn-sm mb-5 load-spotify-tweaked',
                        text: 'Load Spotify Playlist'
                    })
                );

                $('.load-spotify-tweaked').on('click', function () {
                    // Create the iframe element for the Spotify embed
                    const iframe = $('<iframe>', {
                        frameborder: '0',
                        allowfullscreen: '',
                        allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
                        loading: 'lazy',
                        width: '310',
                        height: '400',
                        src: 'https://open.spotify.com/embed/playlist/0z0aNrtMCDHsVuLjyz1goV?theme=0&utm_source=iframe-api',
                        class: 'music-player spotify'
                    });
                    $(this).parent().append(iframe);
                    $('.offcanvas-body.d-flex.flex-column.justify-content-center .mb-5').eq(1).remove();
                    $(this).hide()

                });

            }

            // Remove disabled attribute from button with class "btn btn-primary align-self-start custom-save"
            $(".btn.btn-primary.align-self-start.custom-save")
                .removeAttr("disabled")
                .attr("id", "playlistUpdate");

            $("#playlistUpdate").click(function () {
                var inputValue = $("#playlistURL").val();
                var id = getPlaylistID(inputValue);
                $(".music-player.spotify").attr(
                    "src",
                    `https://open.spotify.com/embed/playlist/${id}?theme=0&amp;utm_source=iframe-api`
                );
            });

            // Remove custom music section from secondary source
            $("#settModal-music").find(".mb-6").remove();
        }

        ////////////////////////////////
        // SETTINGS TAB
        ////////////////////////////////

        // Replace Support Tab with Flocus Tweaks Settings tab
        $("#settModal-support-tab").html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM15.714 6.408L13.212 7.443C12.753 6.219 11.79 5.247 10.557 4.797L11.592 2.295C13.482 3.015 14.985 4.518 15.714 6.408ZM9 11.7C7.506 11.7 6.3 10.494 6.3 9C6.3 7.506 7.506 6.3 9 6.3C10.494 6.3 11.7 7.506 11.7 9C11.7 10.494 10.494 11.7 9 11.7ZM6.417 2.286L7.47 4.788C6.228 5.238 5.247 6.219 4.788 7.461L2.286 6.417C3.015 4.518 4.518 3.015 6.417 2.286ZM2.286 11.583L4.788 10.548C5.247 11.79 6.219 12.762 7.461 13.212L6.408 15.714C4.518 14.985 3.015 13.482 2.286 11.583ZM11.592 15.714L10.557 13.212C11.79 12.753 12.762 11.781 13.212 10.539L15.714 11.592C14.985 13.482 13.482 14.985 11.592 15.714Z" fill="white"></path></svg>  Flocus Tweaks '
        );
        $(".container-fluid.support").attr(
            "class",
            "container-fluid flocus-tweaks-settings"
        );
        $(".flocus-tweaks-settings").html(
            '<div class="row"><div class="col-12"><h3 class="mb-4">Flocus Tweaks</h3></div></div>'
        );

        // Load content of the settings.html file into the Flocus Tweaks tab
        $(".flocus-tweaks-settings").load(
            "https://raw.githubusercontent.com/torin-stephen/FlocusTweaks/main/settings.html",
            function () {
                $(".tweaks-version.version").text(`v${scriptVersion}`);
                updateChecks(configItems);
                configItems.forEach((item) => {
                    const checkbox = $("#ft-" + item);
                    checkbox.on("change", function () {
                        updateConfigValues(configItems);
                        console.log(GM_getValue(item));
                    });
                });
            }
        );

        // Background Button
        $(".flocus-tweaks-settings").append(
            $("<button>")
                .attr({
                    type: "button",
                    class: "btn btn-primary align-self-start custom-save",
                    id: "backgroundUpdate",
                    disabled: true
                })
                .html("Change Background")
        );
        // Name change
        $(".flocus-tweaks-settings").append(
            $("<button>")
                .attr({
                    type: "button",
                    class: "btn btn-primary align-self-start custom-save",
                    id: "nameUpdate",
                    disabled: true
                })
                .html("Change Name")
        );

        configSetup();

        // Config setup

        function checkAndCreate(items) {
            function check(item) {
                return GM_getValue(item) !== undefined;
            }

            function create(item) {
                GM_setValue(item, true);
            }

            items.forEach((item) => {
                if (!check(item)) {
                    create(item);
                    console.log(`Created ${item} in Tampermonkey local storage.`);
                } else {
                    console.log(`${item} already exists in Tampermonkey local storage.`);
                }
            });
        }

        function updateChecks(items) {
            items.forEach((item) => {
                const checkbox = $("#ft-" + item);
                const storedValue = GM_getValue(item);
                checkbox.prop("checked", storedValue);
            });
        }

        function updateConfigValues(items) {
            items.forEach((item) => {
                const checkbox = $("#ft-" + item);
                const storedValue = GM_getValue(item);
                GM_setValue(item, checkbox.prop("checked"));
            });
        }

        function configSetup() {
            checkAndCreate(configItems);
        }

        if (getConfigOptions().option5) {
            // Display Name change without full account name change
            $("#settModal-profile").append(`<div class="mb-4"> <label for="displayName" class="form-label">Display Name</label> <div class="row row-cols-lg-auto g-0"> <input style="width:calc(100% - 130px);" type="text" name="custom-displayName" id="custom-displayName" placeholder="Set your display name here" class="form-control me-4" autocomplete="off"> <button type="button" class="btn btn-primary" id="setDisplayName">Save</button> </div> </div>`)
            $(document).on("click", "#setDisplayName", function () {
                var input = $("#custom-displayName").val();
                updateDisplayName(input)
            });
        }
        function updateDisplayName(newName) {
            var nameToChange = GM_getValue("displayname") || localStorage.getItem("flocus-name")
            $(".account-name").html(newName);
            $(".greeting").text(function (index, text) {
                // Replace occurrences of the original name and nameToChange with the new name
                var modifiedText = text
                    .replace(new RegExp(localStorage.getItem("flocus-name"), "g"), newName)
                    .replace(new RegExp(nameToChange, "g"), newName);
                return modifiedText;
            });
            GM_setValue("displayname", newName);
        };

        // Welcome message
        console.log(`%cFlocus Tweaks v${scriptVersion} 🚀`, 'color:#0dd8d8; background:#0b1021; font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold; text-shadow: 1px 1px 1px #00af87bf;');
    });
})();
