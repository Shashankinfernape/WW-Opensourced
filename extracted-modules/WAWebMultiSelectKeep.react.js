__d("WAWebMultiSelectKeep.react", [
    "fbt",
    "WALogger",
    "WAWebKeepInChatActions",
    "WAWebKeepInChatMsgUtils",
    "WAWebMsgGetters",
    "WAWebMultiSelectBar.react",
    "WAWebMultiSelectUtils",
    "WAWebTabOrder",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcBookmark.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(entryPoint) {
        if (entryPoint == null) {
            return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA;
        }
        switch(entryPoint){
            case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.CONVERSATION_PANEL:
                return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT;
            case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.MEDIA:
                return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA;
            case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.DOCS:
                return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.DOCS;
            case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.LINKS:
            case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.PRODUCTS:
                return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.LINKS;
        }
    }
    const p = {
        btnMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function _(t) {
        "use no forget";
        const { entryPoint, onCancel, onKeep, onUnkeep, selectedMessages, theme } = t;
        const g = selectedMessages.getSelected();
        const h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const g_length = g.length;
        const C = g.every((e)=>o("WAWebMsgGetters").getIsKept(e));
        const b = g.every((e)=>o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e));
        const v = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = selectedMessages.getSelected();
                try {
                    yield o("WAWebKeepInChatActions").runBulkUndoKeepInChatUX(t, m(entryPoint), theme === "mediaHub");
                    onCancel();
                    onUnkeep?.();
                } catch (error) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Bulk unkeep operation not complete. Reason: ",
                        ""
                    ])), r("getErrorSafe")(error).message ?? "unknown");
                }
                o("WAWebMultiSelectUtils").logMessageActionClickMetric(t, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const S = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = selectedMessages.getSelected();
                try {
                    yield o("WAWebKeepInChatActions").runBulkKeepInChatUX(e, m(entryPoint), theme === "mediaHub");
                    onCancel();
                    onKeep?.();
                } catch (error) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Bulk keep operation not complete. Reason: ",
                        ""
                    ])), r("getErrorSafe")(error).message ?? "unknown");
                }
                o("WAWebMultiSelectUtils").logMessageActionClickMetric(e, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        let R;
        let L;
        let E;
        if (g_length && C) {
            R = r("WDSIconWdsIcBookmarkSlash.react");
            L = s._("Unkeep");
            E = v;
        } else {
            R = r("WDSIconIcBookmark.react");
            L = s._("Keep");
            E = S;
        }
        o("useWAWebListener").useListeners(g.map((e)=>({
                source: e,
                eventOrEvents: "change:kicState",
                callback: h
            })));
        const Component = r("WDSMenuBarItem.react");
        return <Component icon={R} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} disabled={!g_length || !b} title={L} testid={C ? "unkeep-refreshed" : "keep-refreshed"} onClick={E} marginInlineXstyle={p.btnMargin}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);