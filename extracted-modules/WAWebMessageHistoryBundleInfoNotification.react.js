__d("WAWebMessageHistoryBundleInfoNotification.react", [
    "fbt",
    "WAWebFaqUrl",
    "WAWebGroupHistoryBundleInfoContext",
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { use, useEffect, useRef, useState } = c;
    const f = {
        historyInfoBubble: {
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            $$css: true
        },
        transitionGroup: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            position: "x7wzq59",
            bottom: "x1ey2m1c",
            zIndex: "x12xzxwr",
            $$css: true
        },
        staticBundleInfo: {
            marginBottom: "xcytdqz",
            $$css: true
        }
    };
    const href = o("WAWebFaqUrl").getGroupHistoryFAQUrl();
    function h(e) {
        const t = o("react-compiler-runtime").c(19);
        const { authorName, firstBundleMsgElement, groupId } = e;
        const l = useState(false);
        const c = l[0];
        const h = l[1];
        const CRef = useRef(null);
        const bRef = useRef(false);
        const vRef = useRef(false);
        const S = use(o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext);
        const S_setVisibleGroupHistoryBundleSenders = S.setVisibleGroupHistoryBundleSenders;
        let L;
        let E;
        if (t[0] !== authorName || t[1] !== firstBundleMsgElement || t[2] !== groupId || t[3] !== S_setVisibleGroupHistoryBundleSenders) {
            L = function() {
                const CRef_current = CRef.current;
                if (CRef_current != null) {
                    let t = false;
                    let r = false;
                    let l = false;
                    const s = ()=>{
                        const e = r && !l;
                        const a = t || e;
                        if (t && !bRef.current) {
                            bRef.current = true;
                            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.footerInlineShown(groupId);
                        }
                        if (e && !vRef.current) {
                            vRef.current = true;
                            o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.footerFloatingShown(groupId);
                        }
                        h(e);
                        S_setVisibleGroupHistoryBundleSenders(function(e) {
                            const t = e.has(authorName);
                            if (a === t) {
                                return e;
                            }
                            const r = new Set(e);
                            if (a) {
                                r.add(authorName);
                            } else {
                                r.delete(authorName);
                            }
                            return r;
                        });
                    };
                    const u = y;
                    const c = new IntersectionObserver(function(e) {
                        const n = e[e.length - 1];
                        t = n.intersectionRatio > 0;
                        r = u(n);
                        s();
                    });
                    const d = new IntersectionObserver(function(e) {
                        const t = e[e.length - 1];
                        l = u(t);
                        s();
                    });
                    c.observe(CRef_current);
                    if (firstBundleMsgElement != null) {
                        d.observe(firstBundleMsgElement);
                    }
                    return function() {
                        c.disconnect();
                        d.disconnect();
                        S_setVisibleGroupHistoryBundleSenders(function(e) {
                            if (!e.has(authorName)) {
                                return e;
                            }
                            const t = new Set(e);
                            t.delete(authorName);
                            return t;
                        });
                    };
                }
            };
            E = [
                authorName,
                firstBundleMsgElement,
                groupId,
                S_setVisibleGroupHistoryBundleSenders
            ];
            t[0] = authorName;
            t[1] = firstBundleMsgElement;
            t[2] = groupId;
            t[3] = S_setVisibleGroupHistoryBundleSenders;
            t[4] = L;
            t[5] = E;
        } else {
            L = t[4];
            E = t[5];
        }
        useEffect(L, E);
        let k;
        if (t[6] !== authorName) {
            k = s._("Message history sent by {authorName}", [
                s._param("authorName", authorName)
            ]);
            t[6] = authorName;
            t[7] = k;
        } else {
            k = t[7];
        }
        let I;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSTextualLink.react");
            I = <Component href={href}>{s._("Learn more")}</Component>;
            t[8] = I;
        } else {
            I = t[8];
        }
        let T;
        if (t[9] !== k) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebWrapperSystemBubble.react");
            T = <Component_1 testid="group-history-bundle-footer" ref={CRef} isFocusable={false} groupHistoryBackground xstyle={f.staticBundleInfo}><Component type="Body3Emphasized" xstyle={f.historyInfoBubble} colorName="contentDefault">{k}. {I}</Component></Component_1>;
            t[9] = k;
            t[10] = T;
        } else {
            T = t[10];
        }
        let D;
        if (t[11] !== authorName || t[12] !== c) {
            const Component = r("WDSTextualLink.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = r("WAWebWrapperSystemBubble.react");
            D = c ? <Component_2 isFocusable={false}><Component_1 type="Body3Emphasized" xstyle={f.historyInfoBubble} colorName="contentDefault">{s._("Message history sent by {authorName}", [
                s._param("authorName", authorName)
            ])}. <Component href={href}>{s._("Learn more")}</Component></Component_1></Component_2> : null;
            t[11] = authorName;
            t[12] = c;
            t[13] = D;
        } else {
            D = t[13];
        }
        let x;
        if (t[14] !== D) {
            const Component = r("WAWebVelocityTransitionGroup");
            x = <Component xstyle={f.transitionGroup} transitionName="group-history-info">{D}</Component>;
            t[14] = D;
            t[15] = x;
        } else {
            x = t[15];
        }
        let $;
        if (t[16] !== T || t[17] !== x) {
            $ = <>{T}{x}</>;
            t[16] = T;
            t[17] = x;
            t[18] = $;
        } else {
            $ = t[18];
        }
        return $;
    }
    function y(e) {
        const r = e.rootBounds?.height ?? 0;
        return e.intersectionRatio === 0 && e.boundingClientRect.top > r / 2;
    }
    l.default = h;
}, 226);