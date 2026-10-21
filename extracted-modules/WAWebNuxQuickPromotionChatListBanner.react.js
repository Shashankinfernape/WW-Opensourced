__d("WAWebNuxQuickPromotionChatListBanner.react", [
    "WALogger",
    "WAWebButterbar.react",
    "WAWebDomSanitize",
    "WAWebNuxBannerText.react",
    "WAWebQuickPromotionCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebForceUpdate"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = new Set;
    function m(e) {
        if (p(e)) {
            return false;
        }
        if (_(e) != null) {
            return true;
        }
        f(e);
        return false;
    }
    function p(e) {
        const t = o("WAWebQuickPromotionCollection").QuickPromotionCollection.get(e.id);
        return t == null || t.isDismissedThisSession;
    }
    function _(e) {
        const primaryAction = e.data.primaryAction;
        const r = primaryAction?.deepLink ?? primaryAction?.universalLink;
        if (r == null || r === "") {
            return null;
        }
        return r;
    }
    function f(t) {
        if (!d.has(t.id)) {
            d.add(t.id);
            if (t.data.primaryAction == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "QuickPromotionChatListBanner: missing primary action"
                ]))).sendLogs("quick-promotion-missing-banner-action");
            } else {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "QuickPromotionChatListBanner: missing link"
                ]))).sendLogs("quick-promotion-missing-action-link");
            }
        }
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(24);
        const { onInteract, promotion } = e;
        const i = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        if (!m(promotion)) {
            return null;
        }
        const promotion_data = promotion.data;
        const { image, primaryAction, textElementValue, titleElementValue } = promotion_data;
        if (primaryAction == null) {
            return null;
        }
        const primaryAction_text = primaryAction.text;
        let f;
        if (t[0] !== i || t[1] !== onInteract || t[2] !== promotion.id) {
            f = function(t) {
                t.preventDefault();
                t.stopPropagation();
                o("WAWebQuickPromotionCollection").QuickPromotionCollection.promotionDismissed(promotion.id);
                i();
                onInteract?.();
            };
            t[0] = i;
            t[1] = onInteract;
            t[2] = promotion.id;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== textElementValue) {
            h = o("WAWebDomSanitize").sanitizeQuickPromotionText(textElementValue);
            t[4] = textElementValue;
            t[5] = h;
        } else {
            h = t[5];
        }
        const __html = h;
        const C = o("WAWebDomSanitize").doesQuickPromotionTextHaveTags(textElementValue);
        let b;
        if (t[6] !== __html) {
            b = <div dangerouslySetInnerHTML={{
                __html
            }}/>;
            t[6] = __html;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        if (t[8] !== primaryAction_text || t[9] !== v) {
            S = c.jsx(r("WAWebNuxBannerText.react"), {
                subtitle: v,
                actionText: primaryAction_text
            });
            t[8] = primaryAction_text;
            t[9] = v;
            t[10] = S;
        } else {
            S = t[10];
        }
        const R = S;
        let L;
        if (t[11] !== image) {
            L = image != null ? {
                description: image.description,
                iconLight: image.light?.elementValue,
                iconDark: image.dark?.elementValue
            } : null;
            t[11] = image;
            t[12] = L;
        } else {
            L = t[12];
        }
        const customIcons = L;
        o("WAWebQuickPromotionCollection").QuickPromotionCollection.promotionShown(promotion.id);
        let T;
        if (t[13] !== onInteract || t[14] !== promotion.id) {
            T = function() {
                onInteract?.();
                o("WAWebQuickPromotionCollection").QuickPromotionCollection.promotionPrimaryActionClicked(promotion.id);
            };
            t[13] = onInteract;
            t[14] = promotion.id;
            t[15] = T;
        } else {
            T = t[15];
        }
        const subtitleText = C ? undefined : __html;
        const x = C ? undefined : primaryAction_text;
        let $;
        if (t[16] !== R || t[17] !== g || t[18] !== customIcons || t[19] !== T || t[20] !== subtitleText || t[21] !== x || t[22] !== titleElementValue) {
            const Component = r("WAWebButterbar.react");
            $ = <Component type="quickPromotion" title={titleElementValue} text={R} onDismiss={g} action={T} customIcons={customIcons} subtitleText={subtitleText} actionText={x}/>;
            t[16] = R;
            t[17] = g;
            t[18] = customIcons;
            t[19] = T;
            t[20] = subtitleText;
            t[21] = x;
            t[22] = titleElementValue;
            t[23] = $;
        } else {
            $ = t[23];
        }
        return $;
    }
    l.canQuickPromotionChatListBannerPaint = m;
    l.QuickPromotionChatListBanner = g;
}, 98);