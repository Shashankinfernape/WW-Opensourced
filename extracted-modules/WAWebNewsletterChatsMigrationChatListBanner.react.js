__d("WAWebNewsletterChatsMigrationChatListBanner.react", [
    "fbt",
    "WAWebDrawerManagerContext",
    "WAWebNewsletterChatsMigrationBanners",
    "WAWebNewsletterTabNavigateTo",
    "WAWebTabOrder",
    "WDSBanner.react",
    "WDSIconWdsIcChannels.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIntersection"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        const t = o("react-compiler-runtime").c(27);
        const e_banner = e.banner;
        const a = r("useWAWebIntersection")();
        const i = a[0];
        const l = a[1];
        const l_isIntersecting = l.isIntersecting;
        const _ = o("WAWebDrawerManagerContext").useDrawerManagerContext("left");
        let f;
        if (t[0] !== _) {
            f = _.existsDrawer();
            t[0] = _;
            t[1] = f;
        } else {
            f = t[1];
        }
        const h = l_isIntersecting && !f;
        let y;
        let C;
        if (t[2] !== e_banner || t[3] !== h) {
            y = function() {
                if (h) {
                    o("WAWebNewsletterChatsMigrationBanners").recordNewsletterChatsMigrationBannerImpression(e_banner);
                }
            };
            C = [
                e_banner,
                h
            ];
            t[2] = e_banner;
            t[3] = h;
            t[4] = y;
            t[5] = C;
        } else {
            y = t[4];
            C = t[5];
        }
        e_useEffect(y, C);
        let b;
        if (t[6] !== e_banner) {
            b = function() {
                o("WAWebNewsletterChatsMigrationBanners").dismissNewsletterChatsMigrationBanner(e_banner);
            };
            t[6] = e_banner;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        if (t[8] !== e_banner) {
            S = function() {
                o("WAWebNewsletterTabNavigateTo").navigateToNewsletterTab();
                o("WAWebNewsletterChatsMigrationBanners").dismissNewsletterChatsMigrationBanner(e_banner);
            };
            t[8] = e_banner;
            t[9] = S;
        } else {
            S = t[9];
        }
        const R = S;
        const L = e_banner === "rollback";
        let E;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            E = {
                className: "x1uvdrpn x14mko6t x1380le5 xefnzgg"
            };
            t[10] = E;
        } else {
            E = t[10];
        }
        let k;
        if (t[11] !== e_banner) {
            k = m(e_banner);
            t[11] = e_banner;
            t[12] = k;
        } else {
            k = t[12];
        }
        let I;
        if (t[13] !== e_banner) {
            I = p(e_banner);
            t[13] = e_banner;
            t[14] = I;
        } else {
            I = t[14];
        }
        let T;
        if (t[15] !== L) {
            T = L ? s._("Go to Channels") : undefined;
            t[15] = L;
            t[16] = T;
        } else {
            T = t[16];
        }
        const D = L ? R : undefined;
        const x = `chatlist_channels_migration_banner_${e_banner}`;
        let $;
        if (t[17] !== v || t[18] !== I || t[19] !== T || t[20] !== D || t[21] !== x || t[22] !== k) {
            const Component = r("WDSBanner.react");
            $ = <Component type="default" icon={r("WDSIconWdsIcChannels.react")} title={k} body={I} actionText={T} onAction={D} onDismiss={v} tabOrder={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR} testid={x}/>;
            t[17] = v;
            t[18] = I;
            t[19] = T;
            t[20] = D;
            t[21] = x;
            t[22] = k;
            t[23] = $;
        } else {
            $ = t[23];
        }
        let P;
        if (t[24] !== i || t[25] !== $) {
            P = <div {...babelHelpers.extends({
                ref: i,
                role: "status",
                "data-testid": "chatlist_channels_migration_banner_wrapper"
            }, E, {
                children: $
            })}/>;
            t[24] = i;
            t[25] = $;
            t[26] = P;
        } else {
            P = t[26];
        }
        return P;
    }
    function m(e) {
        switch(e){
            case "countdown_last_day":
                return s._("Channels are moving soon");
            case "day0":
                return s._("Channels have moved");
            case "rollback":
                return s._("Channels moved out of Chats");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function p(e) {
        switch(e){
            case "countdown_last_day":
                return s._("Channels you follow will move to the Chats tab tomorrow. Use your phone to review.");
            case "day0":
                return s._("Channels you follow now show in Chats or Archived. Use your phone to manage.");
            case "rollback":
                return s._("Channels you follow now show in the Channels tab.");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    l.default = d;
}, 226);