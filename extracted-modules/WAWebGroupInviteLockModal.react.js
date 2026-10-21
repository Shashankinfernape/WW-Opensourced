__d("WAWebGroupInviteLockModal.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ children, onLearnMoreClicked, onOkClicked, title }) {
        const l = function(t) {
            t.stopPropagation();
            t.preventDefault();
            onLearnMoreClicked?.();
        };
        const c = function(t) {
            t.stopPropagation();
            t.preventDefault();
            onOkClicked?.();
        };
        const Component = o("WAWebButton.react").Button;
        const d = <Component testid="popup-controls-learn-more" type="secondary" onClick={l}>{s._("Learn more")}</Component>;
        const Component_1 = o("WAWebButton.react").Button;
        const m = <Component_1 testid="popup-controls-ok" type="primary" onClick={c}>{r("WAWebFbtCommon")("OK")}</Component_1>;
        const p = {
            escape: onLearnMoreClicked ? l : r("WAWebNoop")
        };
        const Component_2 = o("WAWebButton.react").ButtonGroup;
        const _ = <Component_2 direction="horizontal">{d}{m}</Component_2>;
        const Component_3 = o("WAWebModal.react").Modal;
        const Component_4 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_4 handlers={p}><Component_3 actions={_} title={title}>{children}</Component_3></Component_4>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);