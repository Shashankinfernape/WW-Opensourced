__d("WAWebMessageEditActionsModal.react", [
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(17);
        const { ref, cancelText, modalText, okText, onCancel, onOk, titleText, type } = e;
        const p = cancelText === undefined ? null : cancelText;
        const _ = onCancel === undefined ? null : onCancel;
        const f = titleText === undefined ? null : titleText;
        let g;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                surface: "unknown",
                viewName: "message-edit-actions"
            };
            t[0] = g;
        } else {
            g = t[0];
        }
        let h;
        if (t[1] !== f) {
            h = ({
                0: {
                    className: "xg6s713"
                },
                1: {
                    className: "x98l61r xg6s713"
                }
            })[!f << 0];
            t[1] = f;
            t[2] = h;
        } else {
            h = t[2];
        }
        let y;
        if (t[3] !== modalText) {
            const Component = r("WDSText.react");
            y = <Component type="Body2" colorName="contentDefault" testid="message-edit-actions-description">{modalText}</Component>;
            t[3] = modalText;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] !== h || t[6] !== y) {
            const Component = o("WAWebFlex.react").FlexRow;
            C = <Component align="center" justify="center"><p {...babelHelpers.extends({
                "data-testid": "message-edit-actions-description-paragraph"
            }, h, {
                children: y
            })}/></Component>;
            t[5] = h;
            t[6] = y;
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== p || t[9] !== okText || t[10] !== _ || t[11] !== onOk || t[12] !== ref || t[13] !== C || t[14] !== f || t[15] !== type) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            b = <Component tsNavigationData={g} ref={ref} type={type} title={f} okText={okText} onOK={onOk} cancelText={p} onCancel={_}>{C}</Component>;
            t[8] = p;
            t[9] = okText;
            t[10] = _;
            t[11] = onOk;
            t[12] = ref;
            t[13] = C;
            t[14] = f;
            t[15] = type;
            t[16] = b;
        } else {
            b = t[16];
        }
        return b;
    }
    l.default = u;
}, 98);