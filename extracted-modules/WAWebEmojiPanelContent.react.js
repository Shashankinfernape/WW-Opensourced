__d("WAWebEmojiPanelContent.react", [
    "fbt",
    "Promise",
    "WAMemoizeOne",
    "WAWebEmoji",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiPanelContentSectionScrollList.react",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelSearchResultsAnnouncement.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebRecentEmojiCollection",
    "WAWebRecentReactionsCollection",
    "WAWebStopEvent",
    "WAWebVelocityTransitionGroup",
    "WDSSearchBar.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useRef, useState } = m;
    const h = {
        search: {
            position: "x1n2onr6",
            zIndex: "x12xzxwr",
            display: "x1lliihq",
            flexShrink: "x2lah0s",
            $$css: true
        },
        searchBarWrapper: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            $$css: true
        }
    };
    const y = 15;
    const C = 5;
    function B1Component(e) {
        const t = o("react-compiler-runtime").c(15);
        const { displayLocation, onFocusUp, onSearchChange, onSearchDownKey, onSearchEnterKey, searchInputRef, searchText, transitionName } = e;
        let _;
        if (t[0] !== displayLocation) {
            _ = displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions ? s._("Search reaction") : s._("Search emoji");
            t[0] = displayLocation;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = _;
        let g;
        if (t[2] !== onFocusUp || t[3] !== onSearchDownKey) {
            g = function(t) {
                if (t.key === "ArrowUp") {
                    onFocusUp();
                    return false;
                }
                if (t.key === "ArrowDown") {
                    onSearchDownKey();
                    return false;
                }
            };
            t[2] = onFocusUp;
            t[3] = onSearchDownKey;
            t[4] = g;
        } else {
            g = t[4];
        }
        const y = g;
        let C;
        if (t[5] !== y || t[6] !== onSearchChange || t[7] !== onSearchEnterKey || t[8] !== searchInputRef || t[9] !== f || t[10] !== searchText) {
            const Component = r("WDSSearchBar.react");
            C = <Component hintText={f} onValueChange={onSearchChange} onKeyDown={y} onEnter={onSearchEnterKey} ref={searchInputRef} value={searchText} xstyle={h.searchBarWrapper} testid="emoji_panel_search_bar"/>;
            t[5] = y;
            t[6] = onSearchChange;
            t[7] = onSearchEnterKey;
            t[8] = searchInputRef;
            t[9] = f;
            t[10] = searchText;
            t[11] = C;
        } else {
            C = t[11];
        }
        let b;
        if (t[12] !== C || t[13] !== transitionName) {
            const Component = r("WAWebVelocityTransitionGroup");
            b = <Component transitionName={transitionName} xstyle={h.search}>{C}</Component>;
            t[12] = C;
            t[13] = transitionName;
            t[14] = b;
        } else {
            b = t[14];
        }
        return b;
    }
    function V1Component(e) {
        const t = o("react-compiler-runtime").c(10);
        const { data, displayLocation, onEmoji, onEmojiFocus, onSearchResultsFocusAbove, searchResultsRef, targetWindow, width } = e;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j"
            };
            t[0] = m;
        } else {
            m = t[0];
        }
        let p;
        if (t[1] !== data || t[2] !== displayLocation || t[3] !== onEmoji || t[4] !== onEmojiFocus || t[5] !== onSearchResultsFocusAbove || t[6] !== searchResultsRef || t[7] !== targetWindow || t[8] !== width) {
            const Component = o("WAWebEmojiPanelContentSectionScrollList.react").EmojiSectionScrollList;
            p = <div {...babelHelpers.extends({}, m, {
                children: <Component data={data} width={width} initialScrollTop={0} searchInputVisible onFocusUp={onSearchResultsFocusAbove} onEmoji={onEmoji} onEmojiFocus={onEmojiFocus} ref={searchResultsRef} showTitles={false} displayLocation={displayLocation} targetWindow={targetWindow}/>
            })}/>;
            t[1] = data;
            t[2] = displayLocation;
            t[3] = onEmoji;
            t[4] = onEmojiFocus;
            t[5] = onSearchResultsFocusAbove;
            t[6] = searchResultsRef;
            t[7] = targetWindow;
            t[8] = width;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    function SComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { displayLocation, onChange, onEmoji, onFocusNext, onFocusPrev, onFocusUp, onSection, sectionIds, width } = i;
        const TRef = useRef(null);
        const DRef = useRef(null);
        const xRef = useRef(null);
        const $RefRef = useRef(null);
        const PRef = useRef(false);
        const NRef = useRef(false);
        const MRef = useRef(false);
        const wRef = useRef(i.displayCache.scrollTop);
        const ARef = useRef(i.displayCache.sectionId);
        const F = useState(i.defaultSearchText || "");
        const O = F[0];
        const B = F[1];
        const W = useState(i.displayCache.showSearchInput);
        const searchInputVisible = W[0];
        const U = W[1];
        const V = useState(function() {
            return sectionIds.map((e)=>{
                let t = [];
                switch(e){
                    case "RECENT":
                        t = R();
                        break;
                    case "RECENT_REACTIONS":
                        t = L();
                        break;
                    default:
                        t = o("WAWebEmoji").EmojiUtil.getEmojisInCategory(e);
                }
                return {
                    sectionId: e,
                    emojis: t
                };
            });
        });
        const data = V[0];
        const G = o("useWAWebTimeout").useTimeout(function() {
            MRef.current = false;
        }, 200);
        const z = G[0];
        const j = function(t, n) {
            MRef.current = true;
            z();
            const n_scrollTop = n.scrollTop;
            const r = t.getBoundingClientRect().top - n.getBoundingClientRect().top + n_scrollTop;
            const a = 2;
            const i = r - n.clientHeight + t.clientHeight + a;
            const l = searchInputVisible ? r - o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT : r - a;
            n.scrollTop = Math.min(Math.max(n_scrollTop, i), l);
        };
        const focusSearchInput = function(t) {
            if (!DRef.current) {
                PRef.current = true;
                U(true);
                return;
            }
            DRef.current.focus();
        };
        useEffect(function() {
            if (searchInputVisible) {
                focusSearchInput(true);
            }
        }, [
            searchInputVisible
        ]);
        const Q = ()=>{
            MRef.current = true;
            z();
            focusSearchInput();
            if (TRef.current) {
                TRef.current.scrollToTop();
            }
        };
        const X = ()=>{
            const e = wRef.current === 0;
            if (e) {
                U(true);
            }
            return e;
        };
        const Y = function(t) {
            const e = t - wRef.current;
            wRef.current = t;
            if (!MRef.current && !NRef.current && !X()) {
                const n = Math.abs(e);
                PRef.current = n > y;
                const r = e >= 0 ? 1 : -1;
                if (t < o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT) {
                    U(true);
                    return;
                }
                if (!(n < C)) {
                    if (searchInputVisible) {
                        if (r === 1) {
                            U(false);
                        }
                    } else if (r === -1) {
                        U(true);
                    }
                }
            }
        };
        const J = function(t) {
            if (!NRef.current) {
                ARef.current = t;
                onSection(t);
            }
        };
        const onSearchResultsFocusAbove = function() {
            Q();
        };
        const onSearchChange = function(t) {
            onChange?.(t);
            B(t);
        };
        const te = function() {
            Q();
        };
        const onSearchDownKey = function() {
            if (O) {
                if (!xRef.current) {
                    return;
                }
                xRef.current.focusFirstVisibleEmoji();
                return;
            }
            if (TRef.current) {
                TRef.current.focusFirstVisibleEmoji(o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT);
            }
        };
        const onSearchEnterKey = function() {
            if (O && xRef.current) {
                xRef.current.selectFirstVisibleEmoji();
            }
        };
        const oe = function(t) {
            t.preventDefault();
            t.stopPropagation();
            if (DRef.current) {
                if (document.activeElement !== DRef.current) {
                    return focusSearchInput();
                }
                onFocusPrev?.();
            }
        };
        const tab = function(t) {
            t.preventDefault();
            t.stopPropagation();
            if (DRef.current) {
                if (document.activeElement !== DRef.current) {
                    return focusSearchInput();
                }
                onFocusNext?.();
            }
        };
        const ie = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                ARef.current = e;
                yield new (u || (u = n("Promise")))(function(e) {
                    PRef.current = true;
                    B("");
                    U(true);
                    e();
                });
                NRef.current = true;
                const t = TRef.current ? TRef.current.scrollToSection(e, 0 - o("WAWebEmojiPanelContentSectionScrollList.react").TOTAL_SEARCH_HEIGHT) : (u || (u = n("Promise"))).resolve();
                t.finally(()=>{
                    if (t === t) {
                        NRef.current = false;
                        X();
                    }
                });
                $RefRef.current = t;
                return t;
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const le = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            focusSearchInput();
        };
        const se = r("WAMemoizeOne")(function({ searchText }) {
            const n = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(searchText.trimEnd());
            return [
                {
                    sectionId: o("WAWebEmojiPanelEmojiSections").SECTIONS.SEARCH_RESULT,
                    emojis: n
                }
            ];
        });
        const ue = ()=>{
            const searchText = O.replace(/^\s+/, "");
            return se({
                searchText
            });
        };
        useImperativeHandle(t_ref, function() {
            return {
                focusSearchInput,
                scrollToSection: ie
            };
        });
        const ce = O ? ue() : null;
        const Component = o("WAWebEmojiPanelContentSectionScrollList.react").EmojiSectionScrollList;
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 handlers={{
            tab,
            "shift+tab": oe
        }} tabIndex={null} className="xqr4tnt" onClick={le}><div {...babelHelpers.extends({}, {
            0: {
                className: "x1n2onr6 xhjsbib x5yr21d x78zum5 xdt5ytf"
            },
            2: {
                className: "x1n2onr6 xhjsbib x5yr21d x78zum5 xdt5ytf xfl633f"
            },
            1: {
                className: "x1n2onr6 x5yr21d x78zum5 xdt5ytf x16w0wmm"
            },
            3: {
                className: "x1n2onr6 x5yr21d x78zum5 xdt5ytf xfl633f x16w0wmm"
            }
        }[(displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions || displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel || displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown) << 0], {
            children: [
                <B1Component transitionName={PRef.current ? "emoji-search-slide-away-fast" : "emoji-search-slide-away"} onFocusUp={onFocusUp} searchInputRef={DRef} searchText={O} onSearchChange={onSearchChange} onSearchDownKey={onSearchDownKey} onSearchEnterKey={onSearchEnterKey} displayLocation={displayLocation}/>,
                ce != null ? <>{d.jsx(r("WAWebEmojiPanelSearchResultsAnnouncement.react"), {
                    data: ce,
                    displayLocation
                })}<V1Component width={width} onEmoji={onEmoji} data={ce} searchResultsRef={xRef} onEmojiFocus={j} onSearchResultsFocusAbove={onSearchResultsFocusAbove} displayLocation={displayLocation} targetWindow={i.targetWindow}/></> : null,
                <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j"
                    },
                    1: {
                        className: "x1s85apg x1n2onr6 xupqr0c x1iyjqo2 xs83m0k x1r8uery x2lwn1j"
                    }
                }[!!O << 0], {
                    children: <Component data={data} width={i.width} onFocusUp={te} initialScrollTop={i.displayCache.scrollTop} searchInputVisible={searchInputVisible} onEmoji={i.onEmoji} onEmojiFocus={j} onScroll={Y} onSection={J} ref={TRef} showTitles displayLocation={displayLocation} targetWindow={i.targetWindow}/>
                })}/>
            ]
        })}/></Component_1>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    function R() {
        return Array.from(new Set(o("WAWebRecentEmojiCollection").RecentEmojiCollection.reduce((acc, item)=>{
            const n = o("WAWebEmoji").EmojiUtil.getSkinToneBase(item.id) || item.id;
            const r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
            if (r != null) {
                acc.push(n);
            }
            return acc;
        }, [])));
    }
    function L() {
        return Array.from(new Set(o("WAWebRecentReactionsCollection").RecentReactionsCollection.reduce((acc, item)=>{
            const n = o("WAWebEmoji").EmojiUtil.getSkinToneBase(item.id) || item.id;
            const r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
            const a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
            if (r != null && a != null) {
                acc.push(a);
            }
            return acc;
        }, [])));
    }
    l.default = SComponent;
}, 226);