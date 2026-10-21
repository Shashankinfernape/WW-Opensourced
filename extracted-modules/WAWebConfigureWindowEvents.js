__d("WAWebConfigureWindowEvents", [
    "WAComms",
    "WALogger",
    "WATypeUtils",
    "WAWebApp.react",
    "WAWebAppTracker",
    "WAWebBuildConstants",
    "WAWebExternalLink.react",
    "WAWebMiscBrowserUtils",
    "WAWebTrackBrowserTabHidden",
    "fbs"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m() {
        p();
        window.onbeforeunload = function() {
            let t = false;
            const n = o("WAWebApp.react").hasPendingActions();
            if (!n && !o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab()) {
                try {
                    t = true;
                    o("WAComms").closeSocketAndPreventRetry();
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "error while stopping comms onbeforeunload: ",
                        ""
                    ])), t);
                }
            }
            if (r("WAWebMiscBrowserUtils").isDownloading()) {
                r("WAWebMiscBrowserUtils").clearDownloading();
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "onbeforeunload triggered, version: ",
                ""
            ])), o("WAWebBuildConstants").VERSION_STR);
            if (!(r("WAWebMiscBrowserUtils").promptUnloadGuards > 0)) {
                if (n) {
                    o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab);
                    self.setTimeout(function() {
                        o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.ClosingBrowserTab);
                    }, 0);
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Prompt onbeforeunload due to pending actions"
                    ])));
                    return r("fbs")._("You are closing WhatsApp.").toString();
                }
                if (t) {
                    const a = 15000;
                    self.setTimeout(function() {
                        try {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "unload failed, force restarting comms"
                            ])));
                            o("WAComms").socketLoopIteration();
                        } catch (e) {
                            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "error while force restarting comms after unload failure: ",
                                ""
                            ])), e);
                        }
                    }, a);
                }
            }
        };
        window.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        window.addEventListener("drop", function(e) {
            e.preventDefault();
        });
        o("WAWebTrackBrowserTabHidden").trackBrowserTabHidden();
    }
    function p() {
        [
            "getSelection",
            "open",
            "focus"
        ].forEach((e)=>{
            const t = Object.getPrototypeOf(window);
            const n = t[e];
            if (o("WATypeUtils").isFunction(n) && window[e] !== n) {
                window[e] = n;
            }
        });
    }
    l.configureWindowEvents = m;
}, 226);