__d("useWAWebBestQuickPromotionForSurface", [
    "WAWebImg.react",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionSanitize.react",
    "WAWebThemeContext",
    "react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useMemo, useState } = u;
    function _(e, t, n = []) {
        const e_surfaceId = e.surfaceId;
        const i = t?.fireImpression;
        const l = t?.eligibilityCheck;
        const u = useCallback(function() {
            if (l != null && !l()) {
                return null;
            }
            return o("WAWebQuickPromotionCollection").QuickPromotionCollection.bestPromotionForSurface(e) ?? null;
        }, [
            e_surfaceId
        ].concat(n, [
            l
        ]));
        const _ = o("WAWebThemeContext").useIsDarkTheme();
        const f = useState();
        const promotion = f[0];
        const h = f[1];
        useEffect(function() {
            h(u());
        }, [
            h,
            u
        ]);
        useEffect(function() {
            if (promotion != null && i === true) {
                promotion.impression();
            }
        }, [
            e_surfaceId,
            promotion,
            i
        ]);
        const y = promotion?.promotion.data.image;
        const C = useMemo(function() {
            if (y != null) {
                const n = _ ? y.dark?.elementValue : y.light?.elementValue;
                if (n != null) {
                    try {
                        return window.URL.createObjectURL(new Blob([
                            n
                        ]));
                    } catch (e) {}
                }
            }
        }, [
            y,
            _
        ]);
        useEffect(function() {
            return function() {
                if (C != null) {
                    window.URL.revokeObjectURL(C);
                }
            };
        }, [
            C
        ]);
        const b = function() {
            const n = u();
            if (n?.id !== promotion?.id || n?.promotion?.ts !== promotion?.promotion?.ts) {
                h(n);
            }
        };
        o("useWAWebListener").useListener(o("WAWebQuickPromotionCollection").QuickPromotionCollection, "add", b);
        o("useWAWebListener").useListener(o("WAWebQuickPromotionCollection").QuickPromotionCollection, "change", function() {
            h(u());
        });
        o("useWAWebListener").useListener(o("WAWebQuickPromotionCollection").QuickPromotionCollection, "emptied_by_refresh", b);
        if (promotion == null) {
            return promotion;
        }
        let v;
        if (C != null) {
            const Component = r("WAWebImg.react");
            v = <Component src={C} alt={promotion.promotion.data.image?.description} className="xh8yej3 x5yr21d"/>;
        }
        const sanitizedText = s.jsx(r("WAWebQuickPromotionSanitize.react"), {
            dirty: promotion.promotion.data.textElementValue
        });
        const dismiss = promotion.promotion.data.qpConfigDismissable === "true" ? function() {
            promotion.dismiss();
            h(u());
        } : null;
        const impression = function() {
            promotion.impression();
        };
        const primaryActionClick = function() {
            promotion.primaryActionClick();
            h(u());
        };
        return {
            dismiss,
            impression,
            primaryActionClick,
            sanitizedText,
            image: v,
            promotion
        };
    }
    l.useBestQuickPromotionForSurface = _;
}, 98);