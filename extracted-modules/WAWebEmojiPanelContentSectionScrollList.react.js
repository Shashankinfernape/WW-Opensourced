__d("WAWebEmojiPanelContentSectionScrollList.react", [
    "fbt",
    "Promise",
    "WAMemoizeOne",
    "WAPromiseDelays",
    "WAWebEmojiPanelContentEmojiRow.react",
    "WAWebEmojiPanelContentSectionScrollList.stylex",
    "WAWebEmojiPanelEmojiCategories",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelGridMetrics",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebNoop",
    "WAWebPanelsDisplayLocation",
    "WAWebVelocityAnimate",
    "WDSText.react",
    "chunkArray",
    "compactMap",
    "cr:12433",
    "err",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useEffect, useImperativeHandle, useRef } = _;
    const Y1 = n("cr:12433") == null ? undefined : n("cr:12433").EmojiSearchEmpty;
    const C = n("cr:12433") == null ? undefined : n("cr:12433").EmojiSearchEmptyType;
    const b = 62;
    const v = 38;
    const S = {
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.SEARCH_RESULT]: function() {
            throw r("err")("Search results should not be shown with a title.");
        },
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT]: function() {
            return s._("Recent");
        },
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS]: function() {
            return s._("Recent reactions");
        },
        [r("WAWebEmojiPanelEmojiCategories").SMILEYS_PEOPLE]: function() {
            return s._("Smileys & People");
        },
        [r("WAWebEmojiPanelEmojiCategories").ANIMALS_NATURE]: function() {
            return s._("Animals & Nature");
        },
        [r("WAWebEmojiPanelEmojiCategories").FOOD_DRINK]: function() {
            return s._("Food & Drink");
        },
        [r("WAWebEmojiPanelEmojiCategories").ACTIVITY]: function() {
            return s._("Activity");
        },
        [r("WAWebEmojiPanelEmojiCategories").TRAVEL_PLACES]: function() {
            return s._("Travel & Places");
        },
        [r("WAWebEmojiPanelEmojiCategories").OBJECTS]: function() {
            return s._("Objects");
        },
        [r("WAWebEmojiPanelEmojiCategories").SYMBOLS]: function() {
            return s._("Symbols");
        },
        [r("WAWebEmojiPanelEmojiCategories").FLAGS]: function() {
            return s._("Flags");
        }
    };
    const R = 3;
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(13);
        const { displayLocation, focusAbove, focusBelow, numColumns, onEmoji, onEmojiFocus, onRef, row } = e;
        switch(row.kind){
            case "title":
                {
                    let m;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        m = {
                            className: "x1xrf6ya x12xbjc7 xdx6fka xvtqlqk"
                        };
                        t[0] = m;
                    } else {
                        m = t[0];
                    }
                    let _;
                    if (t[1] !== row.title) {
                        const Component = r("WDSText.react");
                        _ = <div {...babelHelpers.extends({}, m, {
                            children: <Component type="Body2Emphasized" colorName="contentDeemphasized">{row.title}</Component>
                        })}/>;
                        t[1] = row.title;
                        t[2] = _;
                    } else {
                        _ = t[2];
                    }
                    return _;
                }
            case "emojis":
                {
                    const allowVariantPrompt = row.sectionId !== o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT;
                    let g;
                    if (t[3] !== displayLocation || t[4] !== focusAbove || t[5] !== focusBelow || t[6] !== numColumns || t[7] !== onEmoji || t[8] !== onEmojiFocus || t[9] !== onRef || t[10] !== row.emojis || t[11] !== allowVariantPrompt) {
                        const Component = o("WAWebEmojiPanelContentEmojiRow.react").EmojiRow;
                        g = <Component emojis={row.emojis} focusAbove={focusAbove} focusBelow={focusBelow} numColumns={numColumns} onEmoji={onEmoji} onEmojiFocus={onEmojiFocus} ref={onRef} allowVariantPrompt={allowVariantPrompt} displayLocation={displayLocation}/>;
                        t[3] = displayLocation;
                        t[4] = focusAbove;
                        t[5] = focusBelow;
                        t[6] = numColumns;
                        t[7] = onEmoji;
                        t[8] = onEmojiFocus;
                        t[9] = onRef;
                        t[10] = row.emojis;
                        t[11] = allowVariantPrompt;
                        t[12] = g;
                    } else {
                        g = t[12];
                    }
                    return g;
                }
            default:
                throw r("err")(`Invalid row kind: ${row.kind}`);
        }
    }
    function EComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { data, displayLocation, initialScrollTop, onEmoji, onEmojiFocus, onFocusUp, onScroll, onSection, searchInputVisible, showTitles, targetWindow, width } = i;
        const N = r("useLazyRef")(function() {
            return new Map;
        });
        const M = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const wRef = useRef(null);
        const ARef = useRef(null);
        const FRef = useRef(null);
        const O = function(t) {
            const FRef_current = FRef.current;
            if (FRef_current) {
                onEmojiFocus(t, FRef_current);
            }
        };
        const B = ()=>o("WAWebEmojiPanelGridMetrics").getNumColumns(width);
        const W = r("WAMemoizeOne")(function(e) {
            let offsetTop_1 = b;
            const sectionData = {};
            const rows = [];
            e.data.forEach(({ emojis, sectionId }, u)=>{
                let m = 0;
                const offsetTop = offsetTop_1;
                if (emojis.length !== 0) {
                    if (e.showTitles) {
                        rows.push({
                            kind: "title",
                            itemKey: `section_${sectionId}_title`,
                            index: rows.length,
                            title: S[sectionId](),
                            sectionId,
                            height: v,
                            offsetTop: offsetTop_1
                        });
                        m += v;
                        offsetTop_1 += v;
                    }
                    const _ = r("chunkArray")(emojis, e.numColumns);
                    const f = u === data.length - 1;
                    _.forEach((e, n)=>{
                        const r = n === _.length - 1;
                        let i = r && !f ? o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_HEIGHT + 12 : o("WAWebEmojiPanelContentEmojiRow.react").EMOJI_HEIGHT;
                        if (displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions) {
                            i += 6;
                        }
                        rows.push({
                            kind: "emojis",
                            itemKey: `section_${sectionId}_emoji_${n}`,
                            index: rows.length,
                            emojis: e,
                            sectionId,
                            height: i,
                            offsetTop: offsetTop_1
                        });
                        m += i;
                        offsetTop_1 += i;
                    });
                    sectionData[sectionId] = {
                        height: m,
                        offsetTop
                    };
                }
            });
            return {
                rows,
                sectionData
            };
        });
        const q = ()=>W({
                numColumns: B(),
                data,
                showTitles
            });
        const U = (t)=>{
            const e = q();
            const e_rows = e.rows;
            return r("compactMap")(e_rows, function(e) {
                if (e.kind === "emojis") {
                    return e;
                }
                return null;
            }).find((e)=>e.offsetTop + e.height > t);
        };
        const V = ()=>{
            if (searchInputVisible) {
                return b;
            }
            return 0;
        };
        const H = (t)=>{
            const e = U(t + V());
            if (e) {
                return e.sectionId;
            }
        };
        const G = function() {
            ARef.current = null;
            if (FRef.current) {
                const e = FRef.current.scrollTop;
                onScroll?.(e);
                const t = H(e);
                if (t) {
                    if (onSection != null) {
                        onSection(t);
                    }
                }
            }
        };
        const z = function(t) {
            if (ARef.current == null) {
                ARef.current = (targetWindow ?? window).requestAnimationFrame(G);
            }
        };
        const j = ({ columnIndex, referenceRowIndex, verticalOffset })=>{
            const o = q();
            const o_rows = o.rows;
            const i = I({
                offset: verticalOffset,
                rows: o_rows,
                startingIndex: referenceRowIndex
            });
            if (i) {
                const l = N.current.get(i.itemKey);
                if (l) {
                    l.focusEmojiAt(columnIndex);
                }
            }
        };
        const K = (t)=>{
            if (FRef.current) {
                const e = FRef.current.scrollTop + t;
                const n = U(e);
                if (n) {
                    const r = N.current.get(n.itemKey);
                    return r;
                }
            }
        };
        const focusFirstVisibleEmoji = function(t) {
            const e = K(t || 0);
            if (e) {
                e.focusEmojiAt(0);
            }
        };
        const X = function(t, a) {
            const e = a || 0;
            const FRef_current = FRef.current;
            if (!FRef_current) {
                return (d || (d = n("Promise"))).resolve();
            }
            const l = q();
            const l_sectionData = l.sectionData;
            const u = l_sectionData[t];
            if (!u) {
                return (d || (d = n("Promise"))).resolve();
            }
            const u_offsetTop = u.offsetTop;
            if (FRef_current.scrollTop === u_offsetTop) {
                return (d || (d = n("Promise"))).resolve();
            }
            if (wRef.current) {
                if (wRef.current.sectionId === t) {
                    return wRef.current.promise;
                }
                r("WAWebVelocityAnimate")(wRef.current.scrollTarget, "stop");
            }
            if (FRef_current.scrollTop === u_offsetTop) {
                return (d || (d = n("Promise"))).resolve();
            }
            const scrollTarget = document.createElement("div");
            scrollTarget.style.position = "absolute";
            scrollTarget.style.top = `${u_offsetTop + e}px`;
            scrollTarget.style.left = "0px";
            FRef_current.appendChild(scrollTarget);
            const promise = r("WAWebVelocityAnimate")(scrollTarget, "scroll", {
                container: FRef_current,
                duration: 300,
                easing: [
                    0.99,
                    0.13,
                    0.13,
                    0.99
                ]
            }).then(r("WAWebNoop")).then(()=>o("WAPromiseDelays").delayMs(100));
            wRef.current = {
                promise,
                sectionId: t,
                scrollTarget
            };
            promise.finally(()=>{
                FRef_current.removeChild(scrollTarget);
                if (wRef.current?.promise === promise) {
                    wRef.current = null;
                }
            });
            return promise;
        };
        const scrollToTop = function() {
            if (FRef.current) {
                FRef.current.scrollTop = 0;
            }
        };
        const selectFirstVisibleEmoji = function(t) {
            const e = K(t || 0);
            if (e) {
                e.selectFirstEmoji();
            }
        };
        useImperativeHandle(t_ref, function() {
            return {
                focusFirstVisibleEmoji,
                scrollToSection: X,
                scrollToTop,
                selectFirstVisibleEmoji
            };
        });
        useEffect(function() {
            if (FRef.current && FRef.current.scrollTop !== initialScrollTop) {
                FRef.current.scrollTop = initialScrollTop;
            }
            q();
        }, []);
        const Z = q();
        const Z_rows = Z.rows;
        const extraItems = Math.min(Z_rows.length, R);
        if (r("gkx")("16539") && Z_rows.length === 0 && Y1 != null && C != null) {
            const emojiSearchEmptyType = displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox ? C.SHORTCUT_TIP : C.DEFAULT;
            return <div {...babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WAWebEmojiPanelContentSectionScrollList.stylex").styles.container), {
                children: <Y1 emojiSearchEmptyType={emojiSearchEmptyType}/>
            })}/>;
        }
        let re;
        if (i.onScroll || i.onSection) {
            re = z;
        }
        const Component = r("WAWebFlatListContainer.react");
        return <Component onScroll={re} className={(c || (c = r("stylex")))(o("WAWebEmojiPanelContentSectionScrollList.stylex").styles.container)} ref={FRef} flatListControllers={[
            M.current
        ]}>{p.jsx(o("WAWebFlatList.react").FlatList, {
            data: Z_rows,
            reorderAnimationsEnabled: false,
            forceConsistentRenderCount: false,
            flatListController: M.current,
            direction: "vertical",
            extraItems,
            initialScrollFromStart: i.initialScrollTop,
            targetWindow,
            renderItem: function(row) {
                return <LComponent row={row} focusAbove={function(n) {
                    if (showTitles && row.index === 1 || !showTitles && row.index === 0) {
                        if (onFocusUp != null) {
                            onFocusUp();
                        }
                    }
                    j({
                        columnIndex: n,
                        referenceRowIndex: row.index,
                        verticalOffset: -1
                    });
                }} focusBelow={function(n) {
                    j({
                        columnIndex: n,
                        referenceRowIndex: row.index,
                        verticalOffset: 1
                    });
                }} onRef={function(n) {
                    if (n) {
                        N.current.set(row.itemKey, n);
                    } else {
                        N.current.delete(row.itemKey);
                    }
                }} numColumns={B()} onEmoji={onEmoji} onEmojiFocus={O} displayLocation={displayLocation}/>;
            }
        })}</Component>;
    }
    EComponent.displayName = `${EComponent.name} [from ${i.id}]`;
    const k = EComponent;
    function I(e) {
        const e_offset = e.offset;
        for(let n = e.rows, r = e.startingIndex, o = e_offset < 0 ? -1 : 1, a = r + e_offset; a >= 0 && a < n.length;){
            const i = n[a];
            if (i.kind === "emojis") {
                return i;
            }
            a += o;
        }
    }
    l.TOTAL_SEARCH_HEIGHT = b;
    l.EmojiSectionScrollList = k;
}, 226);