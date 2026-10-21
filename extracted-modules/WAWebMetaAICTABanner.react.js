__d("WAWebMetaAICTABanner.react", [
    "fbt",
    "WAHttpUtils",
    "WAWebBotProfileGetters",
    "WAWebConversationBanner.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLogMetaAICtaUpsellOperation",
    "WAWebMetaAIBannerSessionTracker",
    "WAWebMobilePlatforms",
    "WAWebNux",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebWamEnumMetaAiUpsellCtaOperationType",
    "WDSHoverStateStyles",
    "WDSIconIcOpenInNew.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useVisibility",
    "useWAWebNux",
    "useWAWebOptionalBotProfileValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useRef, useState } = c;
    const _ = "https://www.meta.ai";
    const utm_source = "ww_maib";
    const g = {
        banner: {
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        },
        row: {
            columnGap: "x1vg3z9j",
            $$css: true
        },
        underline: {
            textDecoration: "x1bvjpef",
            $$css: true
        },
        paddingHoriz16: {
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingVert8: {
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            $$css: true
        }
    };
    function HComponent(e) {
        const t = o("react-compiler-runtime").c(16);
        const e_ref = e.ref;
        const a = useState(false);
        const i = a[0];
        const l = a[1];
        const cRef = useRef(false);
        const d = r("useWAWebNux")(o("WAWebNux").NUX.META_AI_CTA_BANNER);
        const _ = d[1];
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                if (!cRef.current) {
                    o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(o("WAWebWamEnumMetaAiUpsellCtaOperationType").META_AI_UPSELL_CTA_OPERATION_TYPE.IMPRESSION);
                    cRef.current = true;
                }
            };
            t[0] = f;
        } else {
            f = t[0];
        }
        const h = f;
        let y;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                onVisible: function() {
                    h();
                }
            };
            t[1] = y;
        } else {
            y = t[1];
        }
        const b = r("useVisibility")(y);
        const v = b[0];
        const S = r("useMergeRefs")(e_ref, v);
        let R;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            R = C();
            t[2] = R;
        } else {
            R = t[2];
        }
        const href = R;
        let E;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            E = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(o("WAWebWamEnumMetaAiUpsellCtaOperationType").META_AI_UPSELL_CTA_OPERATION_TYPE.BUTTON_CLICK);
                o("WAWebExternalLink.react").openExternalLink(href);
            };
            t[3] = E;
        } else {
            E = t[3];
        }
        const k = E;
        let I;
        if (t[4] !== _) {
            I = function() {
                o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(o("WAWebWamEnumMetaAiUpsellCtaOperationType").META_AI_UPSELL_CTA_OPERATION_TYPE.DISMISS);
                _();
                o("WAWebMetaAIBannerSessionTracker").markMetaAIBannerDismissed(o("WAWebMetaAIBannerSessionTracker").MetaAIBannerTypes.META_AI_CTA_BANNER);
            };
            t[4] = _;
            t[5] = I;
        } else {
            I = t[5];
        }
        const T = I;
        const D = i && o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent;
        let x;
        if (t[6] !== D) {
            x = [
                g.paddingHoriz16,
                g.paddingVert8,
                g.banner,
                D
            ];
            t[6] = D;
            t[7] = x;
        } else {
            x = t[7];
        }
        let $;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            $ = <Component padding={8} shrink={0}>{u.jsx(r("WDSIconIcOpenInNew.react"), {
                width: 24,
                height: 24,
                iconXstyle: g.icon
            })}</Component>;
            t[8] = $;
        } else {
            $ = t[8];
        }
        let P;
        if (t[9] !== i) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebText.react").WAWebTextSectionTitle;
            const Component_2 = r("WAWebFlexItem.react");
            const Component_3 = o("WAWebFlex.react").FlexRow;
            P = <Component_3 align="center" xstyle={g.row}>{$}<Component_2 grow={1}><Component_1 color="wdsContentDeemphasized">{s._("On Meta AI web you can organise your Meta AI chats by topic, create AI-powered docs and more. {=m2}", [
                s._implicitParam("=m2", <Component href={href} xstyle={i && g.underline}>{s._("Try it")}</Component>)
            ])}</Component_1></Component_2></Component_3>;
            t[9] = i;
            t[10] = P;
        } else {
            P = t[10];
        }
        let N;
        if (t[11] !== T || t[12] !== S || t[13] !== x || t[14] !== P) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            N = <Component_1 displayName="MetaAICTABanner>"><Component ref={S} xstyle={x} onClick={k} onHoverChange={l} onClose={T}>{P}</Component></Component_1>;
            t[11] = T;
            t[12] = S;
            t[13] = x;
            t[14] = P;
            t[15] = N;
        } else {
            N = t[15];
        }
        return N;
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebBotProfileGetters").getIsDefault
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(e.id, n);
        const i = a[0];
        const l = r("useWAWebNux")(o("WAWebNux").NUX.META_AI_CTA_BANNER);
        const s = l[0];
        let u;
        if (t[1] !== i || t[2] !== s) {
            u = !o("WAWebMobilePlatforms").isSMB() && i === true && s;
            t[1] = i;
            t[2] = s;
            t[3] = u;
        } else {
            u = t[3];
        }
        return u;
    }
    function C() {
        const e = o("WAHttpUtils").buildUrl(_, "/", {
            utm_source
        });
        return e;
    }
    l.MetaAICTABanner = HComponent;
    l.useMetaAICTABanner = y;
}, 226);