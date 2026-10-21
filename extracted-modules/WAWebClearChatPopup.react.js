__d("WAWebClearChatPopup.react", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebSendClearChatAction",
    "WAWebText.react",
    "WAWebWamChatPSALogger",
    "react",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useState } = c;
    function PComponent({ chat, onClearConfirmed }) {
        const r = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getKind,
            o("WAWebChatGetters").getIsPSA
        ]);
        const a = r[0];
        const i = r[1];
        const l = useState(o("WAWebBoolFunc").returnFalse);
        const c = l[0];
        const p = l[1];
        const _ = function() {
            p(!c);
        };
        const f = function() {
            onClearConfirmed?.();
            chat.pendingAction++;
            if (i) {
                const e = chat.msgs.last();
                o("WAWebWamChatPSALogger").logChatPSARemove(e, 5, 14);
            }
            o("WAWebSendClearChatAction").sendClear(chat, c).finally(()=>{
                chat.pendingAction--;
            });
            o("WAWebModalManager").ModalManager.close();
        };
        const g = useMemo(function() {
            if (a != null) {
                switch(a){
                    case o("WAWebChatFlowTypes").ChatKindType.Group:
                        return s._("Clear this chat?");
                    case o("WAWebChatFlowTypes").ChatKindType.Chat:
                        return s._("Clear this chat?");
                    case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                        return s._("Clear this chat?");
                    case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                    case o("WAWebChatFlowTypes").ChatKindType.Community:
                        return "";
                }
            }
            return "";
        }, [
            a
        ]);
        const Component = o("WAWebCheckBox.react").CheckBox;
        const h = <div className="x78zum5 x1f6kntn x16h55sf xhrpt6u"><div data-testid="menu-icon-clear-chat" className="x1rg5ohu x1okw0bk x1uuroth xqz5vs7 x1sa5p1d"><Component onChange={_} checked={c} id="menu-icon-clear-chat"/></div><label htmlFor="menu-icon-clear-chat" className="x98rzlu x1ypdohk xqz5vs7">{s._("Keep starred messages")}</label></div>;
        const Component_1 = o("WAWebText.react").WAWebTextMuted;
        const y = <div><Component_1 as="p">{s._("This chat will be empty but will remain in your chat list.")}</Component_1>{h}</div>;
        const Component_2 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_2 tsNavigationData={{
            surface: "clear-chat",
            viewName: "clear-chat"
        }} title={g} onOK={f} okText={s._("Clear chat")} okButtonType="solid-warning" onCancel={o("WAWebModalManager").closeModalManager}>{y}</Component_2>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    l.default = PComponent;
}, 226);