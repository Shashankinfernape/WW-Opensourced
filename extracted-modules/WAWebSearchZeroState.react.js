__d("WAWebSearchZeroState.react", [
    "fbt",
    "Keys",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSearchZeroStateRecentSearchItem.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "setTimeout"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useImperativeHandle, useRef, useState } = c;
    const f = {
        wrapper: {
            paddingTop: "x1xrf6ya",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            paddingLeft: null,
            paddingRight: null,
            borderBottomStyle: "x1q0q8m5",
            borderBottomWidth: "xso031l",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        clearButton: {
            fontSize: "x1f6kntn",
            fontWeight: "x1s688f",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            height: "x10w6t97",
            $$css: true
        }
    };
    const style = {
        gridTemplateColumns: "repeat(4, minmax(0, 100px))"
    };
    function h({ onBlur, onChatClick, onClearAll, onKeyDown, onSearchFocus, onSetShowingClearConfirmation, recentChats, ref }) {
        const bRef = useRef([]);
        const vRef = useRef(0);
        const S = useState(0);
        const R = S[0];
        const L = S[1];
        const ERef = useRef(null);
        const kRef = useRef(null);
        const IRef = useRef(false);
        const T = useCallback(function(e) {
            vRef.current = e;
            L(e);
        }, []);
        const D = function() {
            T(0);
            bRef.current[0]?.focus();
        };
        useImperativeHandle(ref, function() {
            return {
                focus: D,
                getElement: function() {
                    return ERef.current;
                }
            };
        });
        if (recentChats.length === 0) {
            return null;
        }
        const x = (t, n)=>{
            bRef.current[n] = t;
        };
        const $ = 4;
        const P = (t)=>{
            const n = vRef.current + 1;
            if (n >= recentChats.length) {
                onKeyDown?.(t);
                return;
            }
            T(n);
            bRef.current[n]?.focus();
        };
        const N = ()=>{
            const t = vRef.current - 1;
            if (t < 0) {
                onSearchFocus();
                return;
            }
            T(t);
            bRef.current[t]?.focus();
        };
        const M = (t)=>{
            const n = vRef.current + $;
            if (n >= recentChats.length) {
                onKeyDown?.(t);
                return;
            }
            T(n);
            bRef.current[n]?.focus();
        };
        const w = ()=>{
            const t = vRef.current - $;
            if (t < 0) {
                onSearchFocus();
                return;
            }
            T(t);
            bRef.current[t]?.focus();
        };
        const A = ()=>{
            const ERef_current = ERef.current;
            if (ERef_current != null) {
                const t = document.querySelectorAll("[data-tab]");
                let n = false;
                for (const r of t){
                    if (ERef_current.contains(r)) {
                        n = true;
                        continue;
                    }
                    if (n && r instanceof HTMLElement && r.tabIndex !== -1) {
                        r.focus();
                        return;
                    }
                }
            }
        };
        const F = function(t) {
            switch(t.keyCode){
                case r("Keys").TAB:
                    if (!t.shiftKey) {
                        if (kRef.current != null && t.target instanceof Node && kRef.current.contains(t.target)) {
                            t.preventDefault();
                            t.stopPropagation();
                            D();
                        } else {
                            t.preventDefault();
                            t.stopPropagation();
                            A();
                        }
                    } else {
                        const e = kRef.current;
                        if (e != null && t.target instanceof Node && !e.contains(t.target)) {
                            t.preventDefault();
                            t.stopPropagation();
                            e.focus();
                        }
                    }
                    break;
                case r("Keys").RIGHT:
                    t.preventDefault();
                    P(t);
                    break;
                case r("Keys").LEFT:
                    t.preventDefault();
                    N();
                    break;
                case r("Keys").DOWN:
                    t.preventDefault();
                    M(t);
                    break;
                case r("Keys").UP:
                    t.preventDefault();
                    w();
                    break;
                default:
                    break;
            }
        };
        const onMouseDown = function(t) {
            const t_target = t.target;
            if (t_target instanceof HTMLElement && t_target.closest('button, a, [role="button"]') == null) {
                t.preventDefault();
                onSearchFocus();
            }
        };
        const B = function(n) {
            const ERef_current = ERef.current;
            const n_relatedTarget = n.relatedTarget;
            r("setTimeout")(function() {
                if (!(IRef.current || ERef_current != null && n_relatedTarget instanceof Node && ERef_current.contains(n_relatedTarget) || onBlur == null)) {
                    onBlur();
                }
            }, 0);
        };
        const W = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                IRef.current = true;
                onSetShowingClearConfirmation?.(true);
                const e = function() {
                    IRef.current = false;
                    onSetShowingClearConfirmation?.(false);
                };
                try {
                    const Component = r("WDSText.react");
                    const t = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                        title: s._("Clear search history?"),
                        okText: s._("Clear"),
                        cancelText: r("WAWebFbtCommon")("Cancel"),
                        children: <Component type="Body1" colorName="contentDeemphasized">{s._("You won't be able to undo this.")}</Component>,
                        onOK: e,
                        onCancel: e,
                        onOverlayClick: e
                    });
                    if (t) {
                        onClearAll();
                    }
                } finally{
                    e();
                    const n = ERef.current;
                    if (n == null || !n.contains(document.activeElement)) {
                        onSearchFocus();
                    }
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const Component = r("WDSText.react");
        const Component_1 = r("WDSButton.react");
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        return <div ref={ERef} role="group" aria-label={s._("Recent searches")} onBlur={B} onKeyDown={F} onMouseDown={onMouseDown} className="xscbp6u"><Component_3 align="stretch" xstyle={f.wrapper}><Component_2 align="center" justify="all" marginBottom={12}><Component type="Body1Emphasized" colorName="contentDefault">{s._("Recent searches")}</Component><Component_1 ref={kRef} onPress={function() {
            W();
        }} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH} xstyle={f.clearButton} variant="filled" type="media" label={s._("Clear all")}/></Component_2><div className="xrvj5dj x1qughib x3pnbk8" style={style}>{recentChats.map((e, t)=>{
            const Component = r("WAWebSearchZeroStateRecentSearchItem.react");
            return <Component key={e.id.toString()} ref={function(n) {
                return x(n, t);
            }} chat={e} onClick={function() {
                return onChatClick(e, t);
            }} onFocus={function() {
                return T(t);
            }} tabIndex={t === R ? o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH : -1}/>;
        })}</div></Component_3></div>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = h;
}, 226);