__d("WAWebBizBroadcastsChatlistHeaderDropdownItem.react", [
    "WAWebBizBroadcastsToolsEntryStrings",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebWamEnumEntryPoint",
    "WDSIconWdsIcBroadcastMessage.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastEntrypointEnabled"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function c() {
        const e = o("react-compiler-runtime").c(4);
        const t = o("useWAWebBizBroadcastEntrypointEnabled").useWAWebBizBroadcastEntrypointEnabled();
        let n;
        let a;
        if (e[0] !== t) {
            n = function() {
                if (t) {
                    o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.chatOverflowMenuEntryPointViewed();
                }
            };
            a = [
                t
            ];
            e[0] = t;
            e[1] = n;
            e[2] = a;
        } else {
            n = e[1];
            a = e[2];
        }
        e_useEffect(n, a);
        if (!t) {
            return null;
        }
        const i = d;
        let l;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const c = o("WAWebBizBroadcastsToolsEntryStrings").getBizBroadcastsToolsEntryPrimaryText();
            const Component = r("WDSMenuItem.react");
            l = <Component testid="mi-biz-broadcasts menu-item" Icon={r("WDSIconWdsIcBroadcastMessage.react")} onPress={i} title={c}/>;
            e[3] = l;
        } else {
            l = e[3];
        }
        return l;
    }
    function d() {
        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.chatOverflowMenuEntryPointClicked();
        const Component = o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.OVERFLOW_MENU} onClose={m}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function m() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    l.default = c;
}, 98);