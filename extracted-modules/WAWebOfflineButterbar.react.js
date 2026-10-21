__d("WAWebOfflineButterbar.react", [
    "fbt",
    "WAShiftTimer",
    "WAWebSocketModel",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
    "WAWebWebcButterbarEventWamEvent",
    "WDSBanner.react",
    "react",
    "useLazyRef"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    const p = 3000;
    function _() {
        const e = useState(true);
        const t = e[0];
        const n = e[1];
        const a = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(function() {
                n(true);
            });
        });
        useEffect(function() {
            return function() {
                a.current.cancel();
            };
        }, []);
        const i = ()=>{
            o("WAWebSocketModel").Socket.reconnect();
            n(false);
            a.current.onOrAfter(p);
        };
        let l;
        let c;
        let _;
        let f;
        if (t) {
            _ = s._("Reconnect");
            f = function() {
                new (o("WAWebWebcButterbarEventWamEvent")).WebcButterbarEventWamEvent({
                    webcButterbarType: o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE,
                    webcButterbarAction: o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA
                }).commit();
                i();
            };
            l = s._("Make sure your computer has an active internet connection.");
            c = s._("Computer not connected");
        } else {
            l = undefined;
            c = s._("Connecting");
        }
        const Component = r("WDSBanner.react");
        return <div className="x1380le5 x14mko6t xefnzgg x1uvdrpn"><Component type="warning" title={l == null ? null : c} body={l ?? c} actionText={_} onAction={f} testid="chat-butterbar-offline"/></div>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);