__d("WAWebStickerPanelContentStickerSearchResultsScrollGrid.react", [
    "fbt",
    "WAWebEmojiPickerConstants",
    "WAWebStickerPanelContentEmpty.react",
    "WAWebStickerPanelContentStickersScrollGridPresentational.react",
    "WAWebStickerSearchCollection",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useImperativeHandle, useRef, useState } = d;
    const g = 250;
    function HComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const a_selectedTab = a.selectedTab;
        const l = useState(function() {
            return o("WAWebStickerSearchCollection").StickerSearchCollection.toArray();
        });
        const stickers = l[0];
        const d = l[1];
        const h = function() {
            d(o("WAWebStickerSearchCollection").StickerSearchCollection.toArray());
            a.resetScroll();
        };
        const y = r("useWAWebDebouncedCallback")(h, g);
        o("useWAWebListener").useListener(o("WAWebStickerSearchCollection").StickerSearchCollection, [
            "add",
            "remove",
            "reset"
        ], y);
        useEffect(function() {
            if (a_selectedTab) {
                const e = o("WAWebEmojiPickerConstants").convertTabToMood(a_selectedTab);
                if (e != null) {
                    o("WAWebStickerSearchCollection").StickerSearchCollection.searchMood(e);
                }
                if (o("WAWebStickerSearchCollection").StickerSearchCollection.hasFetchedData()) {
                    y();
                }
            }
        }, [
            a_selectedTab
        ]);
        const CRef = useRef();
        useImperativeHandle(t_ref, function() {
            return {
                focus: function(t) {
                    const CRef_current = CRef.current;
                    if (CRef_current) {
                        CRef_current.focus(t);
                    }
                }
            };
        });
        if (a.searchText && o("WAWebStickerSearchCollection").StickerSearchCollection.isFetchingData() === false && o("WAWebStickerSearchCollection").StickerSearchCollection.length === 0) {
            return c.jsx(r("WAWebStickerPanelContentEmpty.react"), {
                text: s._("No results")
            });
        }
        const Component = o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational;
        return <Component ref={CRef} onFocusPrev={a.onFocusPrev} onScroll={a.onScroll} resetScroll={a.resetScroll} onStickerClick={a.onStickerClick} onStickerEnter={a.onStickerClick} stickers={stickers} theme="searchable" displayLocation={a.displayLocation} loadOneRow/>;
    }
    HComponent.displayName = `${HComponent.name} [from ${i.id}]`;
    l.default = HComponent;
}, 226);