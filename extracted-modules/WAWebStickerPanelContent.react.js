__d("WAWebStickerPanelContent.react", [
    "fbt",
    "WAFilterObjectNullishProps",
    "WALogger",
    "WAWebEmojiPickerConstants",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebStickerPanelContentStickerPackStickersFavorite.react",
    "WAWebStickerPanelContentStickerPackStickersRecentMd.react",
    "WAWebStickerPanelContentStickerSearchResultsScrollGrid.react",
    "WAWebStickerSearchCollection",
    "WAWebStopEvent",
    "WAWebWamEnumStickerSendOriginType",
    "WDSPaddings.stylex",
    "WDSSearchBar.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebThrottledCallback"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useEffect, useImperativeHandle, useRef, useState } = p;
    const y = 250;
    function C({ displayLocation, isAvatarStickers = false, onDownloadEnd, onDownloadStart, onFocusPrev, onStickerClick, ref, resetScroll, searchText, selectedTab }) {
        if (searchText) {
            const Component = r("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react");
            return <Component ref={ref} onFocusPrev={onFocusPrev} onStickerClick={onStickerClick} searchText={searchText} resetScroll={resetScroll} displayLocation={displayLocation}/>;
        }
        if (selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES) {
            const Component = r("WAWebStickerPanelContentStickerPackStickersFavorite.react");
            return <Component ref={ref} onFocusPrev={onFocusPrev} onStickerClick={onStickerClick} resetScroll={resetScroll} displayLocation={displayLocation} onDownloadStart={function() {
                onDownloadStart?.(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
            }} onDownloadEnd={function() {
                onDownloadEnd?.(o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES);
            }}/>;
        }
        if (selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS) {
            const Component = o("WAWebStickerPanelContentStickerPackStickersRecentMd.react").StickerPackStickersRecent;
            return <Component ref={ref} onFocusPrev={onFocusPrev} onStickerClick={onStickerClick} resetScroll={resetScroll} displayLocation={displayLocation} onDownloadStart={function() {
                onDownloadStart?.(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
            }} onDownloadEnd={function() {
                onDownloadEnd?.(o("WAWebEmojiPickerConstants").StickerTabs.RECENTS);
            }} isAvatarStickers={isAvatarStickers}/>;
        }
        const g = o("WAWebEmojiPickerConstants").convertTabToMood(selectedTab);
        if (g != null) {
            const Component = r("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react");
            return <Component ref={ref} selectedTab={selectedTab} onFocusPrev={onFocusPrev} onStickerClick={onStickerClick} searchText={searchText} resetScroll={resetScroll} displayLocation={displayLocation}/>;
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[_renderStickerScrollGrid] invalid tab: ",
            ""
        ])), selectedTab).sendLogs("_renderStickerScrollGrid invalid tab");
        return null;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    const b = {
        searchBarWrapper: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xf7dkkf",
            paddingInlineEnd: "xv54qhq",
            $$css: true
        },
        containerSearch: {
            boxSizing: "x9f619",
            height: "xqr4tnt",
            backgroundColor: "xhjsbib",
            $$css: true
        },
        containerSearchExpressionsPanel: {
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        contentAvatar: {
            height: "x5yr21d",
            $$css: true
        }
    };
    function VComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { defaultSearchText, selectedTab } = i;
        const dRef = useRef(false);
        const pRef = useRef();
        const vRef = useRef(0);
        const SRef = useRef(0);
        const RRef = useRef();
        const L = useState(true);
        const E = L[0];
        const k = L[1];
        const resetScroll = function() {
            const pRef_current = pRef.current;
            if (pRef_current != null) {
                pRef_current.scrollTop = 0;
                SRef.current = 0;
                vRef.current = 0;
                k(true);
            }
        };
        const T = useState(defaultSearchText || "");
        const D = T[0];
        const x = T[1];
        const $RefRef = useRef(false);
        useEffect(function() {
            if ($RefRef.current) {
                x("");
            } else {
                $RefRef.current = true;
            }
        }, [
            selectedTab
        ]);
        const P = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                resetScroll();
                try {
                    yield o("WAWebStickerSearchCollection").StickerSearchCollection.search(e);
                } catch (error) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Sticker search promise failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("sticker-search-unexpected-failure");
                }
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const N = r("useWAWebDebouncedCallback")(P, y);
        const onValueChange = function(t) {
            i.onChange?.(t);
            x(t);
            if (t !== "") {
                N(t);
            } else {
                N.cancel();
            }
        };
        const w = function() {
            const RRef_current = RRef.current;
            if (!RRef_current) {
                dRef.current = true;
                k(true);
                return;
            }
            RRef_current.focus();
        };
        const A = function(t) {
            o("WAWebStopEvent").stopEvent(t);
            w();
        };
        useEffect(function() {
            w();
            if (defaultSearchText != null && defaultSearchText !== "") {
                P(defaultSearchText);
            }
        }, []);
        useImperativeHandle(t_ref, function() {
            return {
                focus: function() {
                    RRef.current?.focus();
                },
                clearSearchText: function() {
                    x("");
                }
            };
        });
        const F = r("useWAWebThrottledCallback")(function() {
            const pRef_current = pRef.current;
            if (pRef_current) {
                i.onScroll?.(pRef_current);
                const t = pRef_current.scrollTop;
                const n = SRef.current - t;
                if (n === o("WAWebEmojiPickerConstants").INPUT_BAR_TOTAL_HEIGHT) {
                    vRef.current = n;
                    SRef.current = t;
                    return;
                }
                const r = Math.abs(n) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_SENSITIVITY;
                dRef.current = Math.abs(n) > o("WAWebEmojiPickerConstants").INPUT_BAR_SCROLL_FAST;
                if (n < 0) {
                    if (E && (t > o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && r || SRef.current < o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT && t >= o("WAWebEmojiPickerConstants").INPUT_HIDE_POINT)) {
                        k(false);
                    }
                } else if (!E) {
                    const a = document.activeElement instanceof HTMLElement && document.activeElement.dataset.id === "sticker-item";
                    if (!a && (r || t < o("WAWebEmojiPickerConstants").INPUT_SHOW_POINT)) {
                        k(true);
                    }
                }
                SRef.current = t;
                vRef.current = n;
            }
        }, o("WAWebEmojiPickerConstants").SCROLL_THROTTLE_TIME);
        const onStickerClick = function(t, n) {
            let e;
            if (D) {
                e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_SEARCH;
            } else if (selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS) {
                e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_RECENTS;
            } else if (selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES) {
                e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_FAVORITES;
            } else {
                e = o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_EMOTION;
            }
            i.onSticker(t, e, n);
            if (D) {
                RRef.current?.focus();
            }
        };
        const BRef = useRef();
        const W = ()=>{
            BRef.current?.focus();
        };
        const qRef = useRef(null);
        const onDownloadStart = function(t) {
            qRef.current = t;
        };
        const onDownloadEnd = function(t) {
            if (t === qRef.current) {
                qRef.current = null;
            }
        };
        const H = function(t) {
            if (t.key === "ArrowUp") {
                i.onFocusUp();
                return false;
            }
            if (t.key === "ArrowDown") {
                W();
                return false;
            }
        };
        const Component = r("WDSSearchBar.react");
        const G = i.isAvatarStickers ? null : <Component hintText={s._("Search via WhatsApp sticker store")} onValueChange={onValueChange} value={D || ""} ref={RRef} onKeyDown={H} xstyle={b.searchBarWrapper} testid="sticker_panel_search_bar"/>;
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 xstyle={[
            b.containerSearch,
            i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0 : o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
            i.isAvatarStickers && b.contentAvatar,
            i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel && b.containerSearchExpressionsPanel
        ]} handlers={o("WAFilterObjectNullishProps").filterObjectNullishProps({
            "shift+tab": i.onFocusPrev,
            tab: i.onFocusNext
        })} onClick={A}><div {...babelHelpers.extends({}, {
            0: {
                className: "x1n2onr6 x1280gxy x5yr21d"
            },
            2: {
                className: "x1n2onr6 x5yr21d x16w0wmm"
            },
            1: {
                className: "x1n2onr6 x1280gxy x5yr21d xfl633f"
            },
            3: {
                className: "x1n2onr6 x5yr21d x16w0wmm xfl633f"
            }
        }[(i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 1 | (i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0], {
            children: [
                G,
                <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x1n2onr6 x9f619 xjifopm x1zti42 x4tejmo x1rife3k"
                    },
                    2: {
                        className: "x1n2onr6 x9f619 x1zti42 x4tejmo x1rife3k x5yr21d"
                    },
                    1: {
                        className: "x1n2onr6 x9f619 xjifopm x1zti42 x4tejmo x1rife3k x16w0wmm"
                    },
                    3: {
                        className: "x1n2onr6 x9f619 x1zti42 x4tejmo x1rife3k x5yr21d x16w0wmm"
                    }
                }[!!i.isAvatarStickers << 1 | (i.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel) << 0], {
                    onScroll: F,
                    ref: pRef,
                    children: <C ref={BRef} onFocusPrev={w} onStickerClick={onStickerClick} searchText={D.trim()} selectedTab={i.selectedTab} resetScroll={resetScroll} displayLocation={i.displayLocation} onDownloadStart={onDownloadStart} onDownloadEnd={onDownloadEnd} isAvatarStickers={i.isAvatarStickers}/>
                })}/>
            ]
        })}/></Component_1>;
    }
    VComponent.displayName = `${VComponent.name} [from ${i.id}]`;
    l.default = VComponent;
}, 226);