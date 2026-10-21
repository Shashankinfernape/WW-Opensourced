__d("WAWebClearChatDialogV2.react", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebSendClearChatAction",
    "WAWebWamChatPSALogger",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useState } = c;
    const p = 5;
    const _ = 14;
    function FComponent({ chat, onClearConfirmed }) {
        const a = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getKind,
            o("WAWebChatGetters").getIsPSA
        ]);
        const i = a[0];
        const l = a[1];
        const c = useState(o("WAWebBoolFunc").returnFalse);
        const f = c[0];
        const h = c[1];
        const y = function() {
            onClearConfirmed?.();
            chat.pendingAction++;
            if (l) {
                const e = chat.msgs.last();
                o("WAWebWamChatPSALogger").logChatPSARemove(e, p, _);
            }
            o("WAWebSendClearChatAction").sendClear(chat, f).finally(()=>{
                chat.pendingAction--;
            });
            o("WDSDialogBridge").closeWDSDialog();
        };
        const C = useMemo(function() {
            return g(i);
        }, [
            i
        ]);
        if (C == null) {
            return null;
        }
        const b = s._("This chat will be empty but will remain in your chat list.");
        const Component = r("WDSConfirmDialog.react");
        return <Component title={C} description={b} conditional={{
            title: s._("Keep starred messages"),
            checked: f,
            onChange: function(t) {
                return h(t);
            }
        }} confirmLabel={s._("Clear chat")} destructive onConfirm={y} onDismiss={o("WDSDialogBridge").closeWDSDialog} open/>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    function g(e) {
        if (e == null) {
            return null;
        }
        if (e === o("WAWebChatFlowTypes").ChatKindType.Group) {
            return s._("Clear this chat?");
        }
        if (e === o("WAWebChatFlowTypes").ChatKindType.Chat) {
            return s._("Clear this chat?");
        }
        if (e === o("WAWebChatFlowTypes").ChatKindType.Broadcast) {
            return s._("Clear this chat?");
        }
        if (e === o("WAWebChatFlowTypes").ChatKindType.Newsletter || e === o("WAWebChatFlowTypes").ChatKindType.Community) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.default = FComponent;
}, 226);