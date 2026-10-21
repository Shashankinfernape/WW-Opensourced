__d("WAWebAttachMediaViewOnce.react", [
    "fbt",
    "WAWebAttachMediaViewOnceNux.react",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebNux",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSButton.react",
    "WDSIconWdsIcViewOnce.react",
    "WDSIconWdsIcViewOnceFilled.react",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    function m({ containerXstyle, dataTab, disabled, isOn, mediaType, onChange, shouldShowNux = true, shouldSkipNuxAndToast = false }) {
        const h = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE);
        const y = h[0];
        const C = h[1];
        u_useEffect(function() {
            if (!(!isOn || shouldSkipNuxAndToast)) {
                if (y && shouldShowNux) {
                    const onOkClick = function() {
                        C();
                        o("WAWebModalManager").ModalManager.close();
                    };
                    const Component = r("WAWebAttachMediaViewOnceNux.react");
                    const t = <Component onOkClick={onOkClick}/>;
                    o("WAWebModalManager").ModalManager.open(t);
                    return;
                }
                let n;
                switch(mediaType){
                    case o("WAWebMsgType").MSG_TYPE.VIDEO:
                        n = s._("Video set to view once");
                        break;
                    case o("WAWebMsgType").MSG_TYPE.IMAGE:
                        n = s._("Photo set to view once");
                        break;
                    case o("WAWebMsgType").MSG_TYPE.PTT:
                        n = s._("Voice message set to view once");
                        break;
                }
                const a = o("WAWebToast.react").genId("view-once-toast");
                if (n != null) {
                    const i = c.jsx(o("WAWebToast.react").Toast, {
                        msg: n,
                        id: a
                    });
                    o("WAWebToastManager").ToastManager.open(i);
                }
                return function() {
                    if (n != null) {
                        o("WAWebToastManager").ToastManager.close(a);
                    }
                };
            }
        }, [
            y,
            isOn
        ]);
        const b = isOn ? s._("Turn off view once") : s._("Turn on view once");
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSTooltip.react");
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(containerXstyle), {
            children: <Component_1 label={b} position="above"><Component variant="borderless" size="medium" Icon={r(isOn ? "WDSIconWdsIcViewOnceFilled.react" : "WDSIconWdsIcViewOnce.react")} onPress={onChange} aria-label={b} aria-pressed={isOn} disabled={disabled} testid="view-once-toggle" tabOrder={dataTab}/></Component_1>
        })}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 226);