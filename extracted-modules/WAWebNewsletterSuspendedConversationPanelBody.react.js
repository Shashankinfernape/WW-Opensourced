__d("WAWebNewsletterSuspendedConversationPanelBody.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    const p = {
        linkColor: {
            color: "x1bvqhpb",
            textDecoration: "x1hl2dhg",
            $$css: true
        }
    };
    function Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { isAdminOrOwner, isGeosuspended } = e;
        if (isGeosuspended) {
            let i;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                i = <F7Component/>;
                t[0] = i;
            } else {
                i = t[0];
            }
            return i;
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "x13m54ha"
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            c = <h2 {...babelHelpers.extends({}, l, {
                "data-testid": "newsletter-suspended-conversation-panel-system-message-header",
                children: <Component type="Body1Emphasized" textAlign="center" colorName="contentDeemphasized" testid="newsletter-suspended-title">{s._("This channel is no longer available")}</Component>
            })}/>;
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== isAdminOrOwner) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebWrapperSystemBubble.react");
            d = <Component_1 theme="center">{c}<p data-testid="newsletter-suspended-conversation-panel-system-message-paragraph"><Component type="Body2" textAlign="center" colorName="contentDeemphasized" testid="newsletter-suspended-description">{isAdminOrOwner ? s._("Followers can't see channel history and new updates can't be shared.") : s._("You can't see channel history and new updates aren't available.")}</Component></p></Component_1>;
            t[3] = isAdminOrOwner;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function F7Component() {
        const e = o("react-compiler-runtime").c(10);
        const t = useState(null);
        const a = t[0];
        const i = t[1];
        let l;
        let c;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                const e = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const e = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString({
                            isPreview: false
                        });
                        i(e);
                    });
                    function t() {
                        return e.apply(this, arguments);
                    }
                    return t;
                })();
                e();
            };
            c = [];
            e[0] = l;
            e[1] = c;
        } else {
            l = e[0];
            c = e[1];
        }
        useEffect(l, c);
        if (a != null) {
            let _;
            if (e[2] !== a) {
                const Component = r("WDSText.react");
                _ = <Component type="Body2" textAlign="center" colorName="systemsBubbleContentDeemphasized" testid="newsletter-geosuspended-description">{a}</Component>;
                e[2] = a;
                e[3] = _;
            } else {
                _ = e[3];
            }
            let f;
            if (e[4] !== a || e[5] !== _) {
                f = <p aria-label={a} data-testid="newsletter-geosuspended-conversation-panel-system-message-paragraph">{_}</p>;
                e[4] = a;
                e[5] = _;
                e[6] = f;
            } else {
                f = e[6];
            }
            let h;
            if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WDSText.react");
                h = <p data-testid="newsletter-geosuspended-learn-more-paragraph"><Component type="Body2" textAlign="center" colorName="systemsBubbleContentDeemphasized" testid="newsletter-geosuspended-learn-more">{s._("Click to learn more")}</Component></p>;
                e[7] = h;
            } else {
                h = e[7];
            }
            let y;
            if (e[8] !== f) {
                const Component = r("WAWebClickableLink.react");
                const Component_1 = r("WAWebWrapperSystemBubble.react");
                y = <Component_1 theme="center"><Component testid="newsletter-geosuspended-conversation-panel-system-message-link" onClick={g} xstyle={p.linkColor}>{f}{h}</Component></Component_1>;
                e[8] = f;
                e[9] = y;
            } else {
                y = e[9];
            }
            return y;
        }
    }
    function g() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGeosuspendFaqUrl());
    }
    l.default = Component;
}, 226);