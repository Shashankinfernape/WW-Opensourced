__d("WAWebEmojiPanel.react", [
    "WAWebDropdown.react",
    "WAWebEmojiPanelContent.react",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelMenuSectionTab.react",
    "WAWebExpressionsPanelPicker.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenu.react",
    "WAWebRecentEmojiCollection",
    "WAWebRecentReactionsCollection",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebUiIdle"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useImperativeHandle, useRef, useState } = d;
    const g = {
        emojiPanel: {
            height: "xyi23a7",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            transform: "x17dzmu4",
            transformOrigin: "xm4efwp",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        },
        emojiPanelRefreshed: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        widthContainer: function(t) {
            return [
                {
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        heightOverride: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        panelReactions: {
            height: "xu3xrit",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            transform: "x17dzmu4",
            transformOrigin: "xm4efwp",
            paddingBottom: "x1120s5i",
            $$css: true
        },
        expressionsPanel: {
            height: "x1mf5yl2",
            maxHeight: "x1cipttk",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            transform: "x17dzmu4",
            transformOrigin: "xm4efwp",
            $$css: true
        },
        expressionsPanelSmaller: {
            height: "x1kaczmr",
            $$css: true
        },
        panelDropdown: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        }
    };
    function HComponent(t) {
        "use no forget";
        let n;
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i_displayLocation = i.displayLocation;
        const u = i_displayLocation === undefined ? o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown : i_displayLocation;
        const i_size = i.size;
        const hRef = useRef();
        const yRef = useRef();
        const C = r("useLazyRef")(function() {
            const e = u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions;
            const t = [];
            if (!e && o("WAWebRecentEmojiCollection").RecentEmojiCollection.length > 0) {
                t.push(o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT);
            }
            if (e && o("WAWebRecentReactionsCollection").RecentReactionsCollection.length > 0) {
                t.push(o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS);
            }
            const n = [].concat(t, o("WAWebEmojiPanelEmojiSections").ORDERED_TAB_SECTION_IDS);
            return n;
        });
        const b = r("useLazyRef")(function() {
            return C.current;
        });
        const v = r("useLazyRef")(function() {
            return i.displayCache ?? {
                scrollTop: 0,
                sectionId: C.current[0],
                showSearchInput: true
            };
        });
        const SRef = useRef();
        const R = useState(v.current.sectionId);
        const L = R[0];
        const E = R[1];
        const k = useState(-1);
        const I = k[0];
        const T = k[1];
        const D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const xRef = useRef(new Map);
        const $ = (t)=>{
            yRef.current?.focusSearchInput(t);
        };
        const P = function(t) {
            $(t);
        };
        const N = r("useWAWebUiIdle")();
        useEffect(function() {
            N(P);
        }, []);
        useImperativeHandle(t_ref, function() {
            return {
                getElement: function() {
                    return SRef.current;
                },
                restoreFocus: P
            };
        });
        const M = function() {
            T(-1);
            $();
        };
        const w = function(t) {
            if (!hRef.current) {
                if (L !== t) {
                    E(t);
                }
            }
        };
        const A = (t)=>{
            if (yRef.current) {
                const e = yRef.current.scrollToSection(t);
                hRef.current = e;
                e.finally(()=>{
                    if (e === hRef.current) {
                        hRef.current = null;
                    }
                });
            }
        };
        const F = (t)=>{
            if (L !== t) {
                E(t);
                A(t);
            }
        };
        const O = function(t) {
            i.onChange?.(t);
            D();
        };
        const onEmoji = function(t) {
            const e = u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions;
            if (!e) {
                o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t);
            }
            i.onEmoji(t);
        };
        const W = function(t, n) {
            F(t);
            i.onChange?.("");
            $();
            n?.preventDefault();
        };
        const q = function() {
            const C_current = C.current;
            const n = (C_current.length + I - 1) % C_current.length;
            const r = C_current[n];
            xRef.current.get(r)?.focus();
            T(n);
        };
        const U = function() {
            const C_current = C.current;
            const n = (I + 1) % C_current.length;
            const r = C_current[n];
            xRef.current.get(r)?.focus();
            T(n);
        };
        const V = function(t) {
            t?.preventDefault();
            const e = C.current[I];
            T(-1);
            W(e);
        };
        const H = function() {
            xRef.current.get(L)?.focus();
            T(C.current.indexOf(L));
        };
        const GComponent = function(t, n) {
            const Component = r("WAWebEmojiPanelMenuSectionTab.react");
            return <Component key={t} onClick={W} sectionId={t} selected={n} showFocusIndicator={I !== -1} ref={function(n) {
                xRef.current.set(t, n);
            }}/>;
        };
        const z = u === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel && i_size !== o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL;
        const i_width = i.width;
        const width = i_width === undefined ? o("WAWebDropdown.react").EMOJI_PICKER_WIDTH : i_width;
        const Component = r("WAWebPanelsMenu.react");
        const Component_1 = r("WAWebEmojiPanelContent.react");
        return <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(i.width != null ? g.widthContainer(i.width) : null), {
            children: <div {...babelHelpers.extends({}, s.props(g.emojiPanel, u === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown && g.panelDropdown, u === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions && g.panelReactions, z && g.expressionsPanel, z && g.expressionsPanelSmaller, g.emojiPanelRefreshed, i.height != null ? g.heightOverride(i.height) : null), {
                ref: SRef,
                role: "grid",
                children: [
                    <Component selectedSectionId={L} sectionIds={C.current} renderSectionTab={GComponent} showTabHighlight={!((n = i.defaultSearchText) != null && n.trim())} onFocusPrev={q} onFocusNext={U} onFocusLeave={M} onEnter={V} displayLocation={u}/>,
                    <Component_1 displayCache={v.current} width={width} onFocusUp={H} onFocusPrev={i.onFocusPrev} onFocusNext={i.onFocusNext} onEmoji={onEmoji} onSection={w} ref={yRef} sectionIds={b.current} onChange={O} defaultSearchText={i.defaultSearchText} displayLocation={u} targetWindow={i.targetWindow}/>
                ]
            })}/>
        })}/>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 98);