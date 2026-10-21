__d("WAWebChatlistBanners.react", [
    "WAWebChatButterbar.react",
    "WAWebChatlistCallingActivationBanner.react",
    "WAWebChatlistCallingActivationBannerGating",
    "WAWebChatlistMissedCallBannerLoadable",
    "WAWebChatlistPanelNuxBanners.react",
    "WAWebMuteCollection",
    "WAWebNewsletterChatsMigrationChatListBanner.react",
    "WAWebPrivacyScreenUpsellBanner.react",
    "WAWebVoipGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterChatsMigrationBanners"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function c() {
        const e = o("react-compiler-runtime").c(4);
        const t = e_useState(true);
        const isButterbarVisible = t[0];
        const a = t[1];
        let i;
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebChatButterbar.react");
            i = <Component onVisibilityChange={a}/>;
            l = o("WAWebVoipGatingUtils").isChatlistMissedCallBannerEnabled() && s.jsx(o("WAWebChatlistMissedCallBannerLoadable").ChatlistMissedCallBannerContainerLoadable, {});
            e[0] = i;
            e[1] = l;
        } else {
            i = e[0];
            l = e[1];
        }
        let c;
        if (e[2] !== isButterbarVisible) {
            c = <>{i}{l}<D7Component isButterbarVisible={isButterbarVisible}/></>;
            e[2] = isButterbarVisible;
            e[3] = c;
        } else {
            c = e[3];
        }
        return c;
    }
    function D7Component(e) {
        const t = o("react-compiler-runtime").c(15);
        const e_isButterbarVisible = e.isButterbarVisible;
        const a = o("WAWebPrivacyScreenUpsellBanner.react").useShowPrivacyScreenUpsellBanner();
        const i = a[0];
        const l = a[1];
        const c = e_useState(false);
        const d = c[0];
        const m = c[1];
        const p = e_useState(true);
        const _ = p[0];
        const f = p[1];
        const g = o("useWAWebNewsletterChatsMigrationBanners").useNewsletterChatsMigrationChatListBanner();
        if (i) {
            let h;
            if (t[0] !== l) {
                const Component = o("WAWebPrivacyScreenUpsellBanner.react").PrivacyScreenUpsellBanner;
                h = <Component onClose={function() {
                    return l(false);
                }}/>;
                t[0] = l;
                t[1] = h;
            } else {
                h = t[1];
            }
            return h;
        }
        let y;
        if (t[2] !== d || t[3] !== e_isButterbarVisible || t[4] !== _ || t[5] !== g) {
            y = !e_isButterbarVisible && !_ && g == null && !d && o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications() && o("WAWebChatlistCallingActivationBannerGating").shouldShowChatlistCallingActivationBanner();
            t[2] = d;
            t[3] = e_isButterbarVisible;
            t[4] = _;
            t[5] = g;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y;
        let b;
        if (t[7] !== g) {
            b = g != null ? s.jsx(r("WAWebNewsletterChatsMigrationChatListBanner.react"), {
                banner: g
            }) : null;
            t[7] = g;
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebChatlistPanelNuxBanners.react");
            v = <Component onVisibilityChange={f}/>;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] !== C) {
            const Component = r("WAWebChatlistCallingActivationBanner.react");
            S = C ? <Component onClose={function() {
                return m(true);
            }}/> : null;
            t[10] = C;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] !== b || t[13] !== S) {
            R = <>{b}{v}{S}</>;
            t[12] = b;
            t[13] = S;
            t[14] = R;
        } else {
            R = t[14];
        }
        return R;
    }
    l.default = c;
}, 98);