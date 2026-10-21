__d("WAWebQuickRepliesChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebQuickRepliesFlowLoadable",
    "WAWebQuickReplyGatingUtils",
    "WDSIconIcBolt.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(1);
        if (!o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled()) {
            return null;
        }
        const t = d;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const a = s._("Quick replies");
            const Component = r("WDSMenuItem.react");
            n = <Component testid="mi-quick-replies menu-item" Icon={r("WDSIconIcBolt.react")} onPress={t} title={a}/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        e?.stopPropagation();
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebQuickRepliesFlowLoadable").QuickRepliesFlowLoadable, {
            isInitialStep: true
        }), {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    l.default = c;
}, 226);