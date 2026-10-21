__d("WAWebDeleteSelectedChatsPopup.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebDeleteSelectedChatsAction",
    "WAWebModalManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    function MComponent(t) {
        const a = o("react-compiler-runtime").c(12);
        const { chats, onComplete } = t;
        const chats_length = chats.length;
        const m = u_useState(false);
        const p = m[0];
        const _ = m[1];
        let f;
        if (a[0] !== chats || a[1] !== onComplete) {
            f = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    _(true);
                    try {
                        yield o("WAWebDeleteSelectedChatsAction").deleteSelectedChats(chats, {});
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Bulk delete of selected chats failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("delete-selected-chats-popup-failed");
                    }
                    o("WAWebModalManager").ModalManager.close();
                    onComplete?.();
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            a[0] = chats;
            a[1] = onComplete;
            a[2] = f;
        } else {
            f = a[2];
        }
        const g = f;
        let h;
        if (a[3] !== chats_length) {
            h = s._("_j{\"*\":\"Delete {number} chats?\",\"_1\":\"Delete this chat?\"}", [
                s._plural(chats_length, "number")
            ]);
            a[3] = chats_length;
            a[4] = h;
        } else {
            h = a[4];
        }
        const y = h;
        let C;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            C = <Component type="Body2" colorName="contentDeemphasized" testid="delete-selected-chats-popup-body">{s._("Messages will be removed from all devices.")}</Component>;
            a[5] = C;
        } else {
            C = a[5];
        }
        const b = C;
        let v;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                surface: "unknown",
                viewName: "delete-selected-chats"
            };
            a[6] = v;
        } else {
            v = a[6];
        }
        let S;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = s._("Delete");
            a[7] = S;
        } else {
            S = a[7];
        }
        let R;
        if (a[8] !== g || a[9] !== p || a[10] !== y) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            R = <Component tsNavigationData={v} testid="delete-selected-chats-popup" title={y} onOK={g} okText={S} okButtonType="solid-warning" okDisabled={p} okSpinner={p} cancelDisabled={p} onCancel={o("WAWebModalManager").closeModalManager}>{b}</Component>;
            a[8] = g;
            a[9] = p;
            a[10] = y;
            a[11] = R;
        } else {
            R = a[11];
        }
        return R;
    }
    l.default = MComponent;
}, 226);