__d("WAWebEmojiPanelContentEmojiRow.react", [
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiSkinTonePicker.react",
    "WAWebEmojiVariantCollection",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "WAWebPanelsDisplayLocation",
    "WAWebReactionsSelectionContext",
    "WAWebRecentReactionsCollection",
    "WAWebStopEvent",
    "WAWebThemeContext",
    "WAWebUimUie.react",
    "WAWebUimUieTooltip.react",
    "WAWebUimUtils",
    "isStringNullOrEmpty",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useContext, useImperativeHandle, useRef, useState } = c;
    const f = {
        emoji: {
            marginTop: "x1k70j0n",
            marginInlineEnd: "xbelrpt",
            marginBottom: "xzueoph",
            marginInlineStart: "xdzw4kq",
            cursor: "x1ypdohk",
            borderStartStartRadius: "x7uoqk1",
            borderStartEndRadius: "x1p4qogd",
            borderEndEndRadius: "x1fr94nc",
            borderEndStartRadius: "x1633rxx",
            $$css: true
        }
    };
    const g = 250;
    const h = 12;
    const y = 44;
    const C = 44;
    function BComponent(t) {
        "use no forget";
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { allowVariantPrompt, displayLocation, emojis, focusAbove, focusBelow, numColumns, onEmoji, onEmojiFocus } = a;
        const v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const L = o("useWAWebListener").useAddListenerOnce();
        const E = L[0];
        const kRef = useRef(null);
        const IRef = useRef(null);
        const TRef = useRef(null);
        const DRef = useRef(null);
        const xRef = useRef(false);
        const $RefRef = useRef(null);
        const P = useState(null);
        const tooltip = P[0];
        const M = P[1];
        const w = displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions;
        const darkMode = o("WAWebThemeContext").useIsDarkTheme();
        const F = useContext(r("WAWebReactionsSelectionContext"));
        const O = (t, n)=>{
            let e = t;
            if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
                let r = o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariantIfExists(e);
                if (w) {
                    if (n != null) {
                        const a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
                        r = a ?? e;
                    } else {
                        const l = R(t);
                        if (l != null) {
                            r = l;
                        }
                    }
                }
                if (r != null) {
                    e = r;
                } else if (allowVariantPrompt) {
                    return true;
                }
            }
            onEmoji(e);
        };
        const B = function(t, n, r) {
            if (o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled()) {
                M(null);
            }
            o("WAWebStopEvent").stopEvent(t);
            if (!w) {
                o("WAWebEmojiVariantCollection").EmojiVariantCollection.setVariant(n, r);
            }
            O(n, r);
        };
        const W = (unicode, anchor, autoFocus)=>{
            const base = o("WAWebEmoji").EmojiUtil.getSkinToneBase(unicode);
            if (!(base == null || base.length === 0)) {
                $RefRef.current = unicode;
                xRef.current = true;
                M({
                    menu: u.jsx(r("WAWebEmojiSkinTonePicker.react"), {
                        base,
                        action: B,
                        unicode,
                        preVariant: anchor.dataset.emoji
                    }),
                    anchor,
                    type: o("WAWebDropdown.react").MenuType.Picker,
                    dirX: o("WAWebDropdown.react").DirX.RIGHT,
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    horizontal: true,
                    autoFocus,
                    findFirstItem: true,
                    raiseAboveMenu: w,
                    isMenuContent: w,
                    darkMode
                });
            }
        };
        const q = o("useWAWebTimeout").useTimeout(function() {
            if (TRef.current != null && DRef.current != null) {
                W(TRef.current, DRef.current);
            }
            E(o("WAWebCmd").Cmd, "window_click", o("WAWebStopEvent").stopEvent);
        }, g);
        const U = q[0];
        const V = q[1];
        const H = (t)=>{
            const e = parseInt(t.dataset.emojiIndex, 10);
            if (!isNaN(e)) {
                r("WAWebFocusTracer").focus(t, {
                    preventScroll: true
                });
                onEmojiFocus(t);
                IRef.current = t;
            }
        };
        const G = r("useWAWebStableCallback")(function() {
            if (xRef.current) {
                xRef.current = false;
            }
            const e = tooltip?.anchor;
            if (e && e instanceof HTMLElement) {
                H(e);
            }
            M(null);
        });
        const z = (t)=>{
            const e = S(t);
            if (e != null) {
                const n = emojis[e];
                return n || null;
            }
        };
        const j = (t)=>{
            const n = emojis.length - 1;
            const r = Math.max(Math.min(t, n), 0);
            if (kRef.current != null) {
                const o = kRef.current.children[r];
                if (o != null) {
                    return o.querySelector("[data-emoji]") ?? o;
                }
            }
        };
        const K = (t, n)=>{
            TRef.current = t;
            DRef.current = n;
            U();
            E(window, "mouseup", V, {
                capture: true
            });
        };
        const Q = (t)=>{
            if (t != null) {
                const e = emojis[t];
                if (e) {
                    const n = j(t);
                    if (n) {
                        V();
                        const r = O(e);
                        if (r) {
                            W(e, n, true);
                        }
                    }
                }
            }
        };
        const X = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const e = S(t);
            if (e != null && focusBelow) {
                focusBelow(e);
            }
        };
        const focusEmojiAt = function(t) {
            const e = j(t);
            if (e) {
                H(e);
            }
        };
        const J = (t)=>{
            o("WAWebStopEvent").stopEvent(t);
            const e = S(t);
            if (e != null) {
                const n = e - 1;
                if (n < 0) {
                    focusAbove(numColumns - 1);
                    return;
                }
                focusEmojiAt(n);
            }
        };
        const Z = (t)=>{
            o("WAWebStopEvent").stopEvent(t);
            const e = S(t);
            if (e != null) {
                const n = e + 1;
                if (n >= emojis.length) {
                    focusBelow?.(0);
                    return;
                }
                focusEmojiAt(n);
            }
        };
        const ee = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const e = S(t);
            if (e != null) {
                focusAbove(e);
            }
        };
        const te = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const e = S(t);
            Q(e);
        };
        const ne = function(t) {
            if (r("WAWebL10N").isRTL()) {
                Z(t);
            } else {
                J(t);
            }
        };
        const re = function(t) {
            if (r("WAWebL10N").isRTL()) {
                J(t);
            } else {
                Z(t);
            }
        };
        const oe = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const e = S(t);
            if (z(t) != null && $RefRef.current != null && $RefRef.current !== z(t)) {
                Q(e);
                $RefRef.current = z(t);
                xRef.current = false;
            } else if (xRef.current) {
                xRef.current = false;
            } else {
                Q(e);
            }
        };
        const onContextMenu = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            const e = z(t);
            if (e != null && t.target instanceof HTMLElement) {
                W(e, t.target);
            }
        };
        const ie = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            M(null);
            const t_target = t.target;
            if (t_target instanceof HTMLElement) {
                const n = z(t);
                if (!r("isStringNullOrEmpty")(n)) {
                    K(n, t_target);
                }
            }
        };
        const selectFirstEmoji = function() {
            Q(0);
        };
        const restoreFocus = function() {
            if (IRef.current) {
                H(IRef.current);
            }
        };
        o("useWAWebListener").useListener(o("WAWebEmojiVariantCollection").EmojiVariantCollection, [
            "add",
            "remove",
            "change:variant"
        ], v);
        useImperativeHandle(t_ref, function() {
            return {
                focusEmojiAt,
                selectFirstEmoji,
                restoreFocus
            };
        });
        let ue;
        if (tooltip) {
            const Component = o("WAWebUimUie.react").UIE;
            ue = <Component displayName="SkinTonePicker" popable escapable dismissOnWindowResize requestDismiss={G} requestRecentFocusOnUnmount={false}>{u.jsx(r("WAWebUimUieTooltip.react"), {
                tooltip
            })}</Component>;
        }
        if (!emojis.length) {
            return null;
        }
        let ce = null;
        if (F != null) {
            ce = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(F);
        }
        const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <div className="xbmvrgn x1diwwjn"><Component onMouseDown={ie} onClick={oe} onContextMenu={onContextMenu} tabIndex={null} handlers={{
            up: ee,
            down: X,
            left: ne,
            right: re,
            enter: te,
            space: te
        }}><div {...babelHelpers.extends({
            ref: kRef
        }, {
            0: {
                className: "xuxw1ft"
            },
            1: {
                className: "xuxw1ft x1nn3v0j x1120s5i x1c1uobl xyri2b"
            }
        }[(displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions) << 0], {
            role: "row",
            children: emojis.map((e, t)=>{
                let n = o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariantIfExists(e);
                let a = false;
                if (w) {
                    a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e) === ce;
                    const i = R(e);
                    if (i != null) {
                        n = i;
                    }
                }
                const l = u.jsx(r("WAWebEmoji.react"), {
                    element: "span",
                    emoji: n ?? e,
                    size: "large",
                    tabIndex: -1,
                    "data-emoji-index": t,
                    xstyle: f.emoji
                }, e);
                if (w) {
                    return <div key={e} {...babelHelpers.extends({
                        tabIndex: -1,
                        role: "gridcell",
                        "aria-label": e,
                        "data-emoji-index": t
                    }, {
                        0: {
                            className: "x1rg5ohu x7uoqk1 x1p4qogd x1fr94nc x1633rxx x1s2ixkd"
                        },
                        1: {
                            className: "x1rg5ohu x9f619 xzuapc8 xqvfhly x4wrhlh x1c9tyrk xeusxvb x1pahc9y x1ertn4p"
                        }
                    }[!!a << 0], {
                        children: l
                    })}/>;
                }
                return l;
            })
        })}/></Component>{ue}</div>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    const v = BComponent;
    function S(e) {
        if (!(o("WAWebUimUtils").isCrossWindowHTMLElement(e.target) || e.target instanceof HTMLElement)) {
            return null;
        }
        const t = parseInt(e.target.dataset.emojiIndex, 10);
        if (isNaN(t)) {
            return null;
        }
        return t;
    }
    function R(e) {
        const t = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e);
        const n = o("WAWebRecentReactionsCollection").RecentReactionsCollection.get(t);
        if (n) {
            return o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n.reactionText);
        }
    }
    l.SIDE_MARGIN = h;
    l.EMOJI_HEIGHT = y;
    l.EMOJI_WIDTH = C;
    l.EmojiRow = v;
}, 98);