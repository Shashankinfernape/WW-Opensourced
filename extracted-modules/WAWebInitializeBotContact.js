__d("WAWebInitializeBotContact", [
    "fbt",
    "WAWebAIHatchIdentityStore",
    "WAWebAIHatchIdentitySync",
    "WAWebBotUtils",
    "WAWebMetaAiRingAssetResolver",
    "WAWebProfilePicThumbCollection"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
        return s._("AI").toString();
    }
    function u(t) {
        if (o("WAWebBotUtils").isHatchBot(t.id)) {
            const n = o("WAWebAIHatchIdentityStore").getHatchInitialIdentity();
            const { name, profileThumb } = n;
            t.set({
                name
            });
            if (profileThumb !== "") {
                o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(t.id).set({
                    eurl: profileThumb,
                    previewEurl: profileThumb,
                    tag: "hat",
                    stale: false,
                    timestamp: Date.now()
                });
            }
            o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
                contact: t,
                wid: t.id
            });
        } else if (o("WAWebBotUtils").isMetaAiBot(t.id) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)) {
            t.set({
                name: "Meta AI"
            });
            const i = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(t.id).set({
                eurl: i,
                previewEurl: i,
                tag: "man",
                stale: false,
                timestamp: Date.now()
            });
        } else if (o("WAWebBotUtils").isBusinessAssistantBot(t.id)) {
            t.set({
                name: s._("Business assistant").toString()
            });
            const l = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(t.id).set({
                eurl: l,
                previewEurl: l,
                tag: "man",
                stale: false,
                timestamp: Date.now()
            });
        } else {
            if (t.name) {
                return;
            }
            t.set({
                name: e()
            });
        }
        t.set({
            type: "out"
        });
    }
    l.getBotPlaceholderName = e;
    l.initializeBotContact = u;
}, 226);