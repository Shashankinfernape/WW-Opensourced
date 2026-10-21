__d("WAWebChatCellDebugMenuItems.react", [
    "WAWebCopyToClipboard",
    "WAWebDevOnlyBadge.react",
    "WAWebFrontendChatGetters",
    "WDSIconIcSmartToy.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "gkx",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        if (r("gkx")("26258")) {
            return [];
        }
        const t = [];
        const n = [];
        const a = o("WAWebFrontendChatGetters").getKind(e);
        n.push(...o("WAWebDevOnlyBadge.react").getDEVChatMenuOptions(e.id, a));
        if (e.isCAG()) {
            const u = e.groupMetadata?.parentGroup?.toString() ?? "";
            const c = "copy-parent-group-id";
            const Component = r("WDSMenuItem.react");
            n.push(<Component key={c} title="Copy Parent Group ID" onPress={function() {
                o("WAWebCopyToClipboard").copyTextToClipboard(u);
            }} testid={`test-${c}`}/>);
        }
        if (n.length > 0) {
            const Component = r("WDSMenu.react");
            t.push(s.jsx(r("WDSMenuItem.react"), {
                title: "Developer",
                Icon: r("WDSIconIcSmartToy.react"),
                submenuContent: <Component>{n}</Component>,
                hasSubmenu: true
            }, "developer-submenu"));
        }
        return t;
    }
    l.getWAWebChatCellDebugMenuItems = UComponent;
}, 98);