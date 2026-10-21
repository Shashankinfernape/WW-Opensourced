__d("WAWebTPDummy.react", [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebOpenFilePreviewFlow",
    "WAWebSelectModal.react",
    "WAWebSendFilesToChats",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function d() {
        const e = o("react-compiler-runtime").c(2);
        const t = p;
        const n = m;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_file_forward_modal", t);
        let r;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = function(r, o) {
                const a = o?.showPreview ?? true;
                if (a) {
                    n(r, o);
                } else {
                    t(r);
                }
            };
            e[0] = r;
        } else {
            r = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_file_forward_modal_with_preview", r);
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = <div/>;
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    function m(e, t) {
        const n = t ?? {};
        const { onCancel, onSend } = n;
        const Component = o("WAWebSelectModal.react").SelectModal;
        o("WAWebModalManager").ModalManager.open(<Component title={s._("Select chats")} listType={o("WAWebSelectModal.react").ListType.ChatSelectModal} onConfirm={function({ selectedItems }) {
            const i = selectedItems;
            o("WAWebModalManager").ModalManager.close();
            if (i.length === 0) {
                onCancel?.();
                return;
            }
            const l = i[0];
            const s = babelHelpers.arrayLikeToArray(i).slice(1);
            o("WAWebCmd").Cmd.openChatFromUnread({
                chat: l,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug
            }).then(()=>{
                o("WAWebOpenFilePreviewFlow").openFilePreviewFlowMulticast(l, e, s, {
                    onComplete: function(t) {
                        if (t) {
                            if (onSend != null) {
                                onSend();
                            }
                        }
                    },
                    onCancel
                });
            });
        }}/>);
    }
    function p(e) {
        const Component = o("WAWebSelectModal.react").SelectModal;
        o("WAWebModalManager").ModalManager.open(<Component title={s._("Select chats")} listType={o("WAWebSelectModal.react").ListType.ChatSelectModal} onConfirm={function({ selectedItems }) {
            return r("WAWebSendFilesToChats")(selectedItems, [
                e
            ]);
        }}/>);
    }
    l.default = d;
}, 226);