__d("WAWebResumeButterbar.react", [
    "fbt",
    "WAShiftTimer",
    "WAWeb-moment",
    "WAWebSocketModel",
    "WAWebStreamGetters",
    "WAWebStreamModel",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
    "WAWebWebcButterbarEventWamEvent",
    "WDSBanner.react",
    "react",
    "useWAWebButterbarVisibilityReport",
    "useWAWebInterval",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    function p(e) {
        "use no forget";
        const e_onVisibilityChange = e.onVisibilityChange;
        const n = useState(false);
        const a = n[0];
        const i = n[1];
        const l = useState(false);
        const c = l[0];
        const p = l[1];
        const _ = useState(function() {
            return Date.now();
        });
        const f = _[0];
        const g = _[1];
        const h = r("useWAWebInterval")(function() {
            g(Date.now());
        }, 1000);
        const y = h[0];
        const C = h[1];
        const b = r("useWAWebStableCallback")(function() {
            g(Date.now());
            i(true);
            p(true);
            y();
        });
        const v = useState(function() {
            return new (o("WAShiftTimer")).ShiftTimer(b);
        });
        const S = v[0];
        useEffect(function() {
            S.onOrBefore(3000);
            return function() {
                S.cancel();
            };
        }, [
            S
        ]);
        const R = function() {
            C();
            S.onOrBefore(3000);
            i(false);
        };
        o("useWAWebListener").useListener(o("WAWebSocketModel").Socket, "change:state", R);
        let L = null;
        if (o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream) === o("WAWebStreamModel").StreamInfo.OPENING) {
            L = s._("Connecting to WhatsApp");
        } else if (o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream) === o("WAWebStreamModel").StreamInfo.CONNECTING) {
            L = s._("Connecting");
        }
        r("useWAWebButterbarVisibilityReport")(L != null, e_onVisibilityChange);
        if (L == null) {
            return null;
        }
        const E = ()=>{
            o("WAWebSocketModel").Socket.reconnect();
            R();
        };
        if (a) {
            const k = o("WAWebSocketModel").Socket.retryTimestamp - f;
            let I;
            if (isNaN(k) || k < 1) {
                I = s._("Retrying…");
            } else if (k < 60000) {
                const T = Math.ceil(k / 1000);
                I = s._("_j{\"*\":\"Retrying in {number} seconds\\u2026\",\"_1\":\"Retrying in 1 second\\u2026\"}", [
                    s._plural(T, "number")
                ]);
            } else {
                I = s._("Retrying in {duration}…", [
                    s._param("duration", r("WAWeb-moment").duration(k).humanize())
                ]);
            }
            const Component = r("WDSBanner.react");
            return <div className="x1380le5 x14mko6t xefnzgg x1uvdrpn"><Component type="warning" title={L} body={I} actionText={s._("Retry now")} onAction={function() {
                new (o("WAWebWebcButterbarEventWamEvent")).WebcButterbarEventWamEvent({
                    webcButterbarType: o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.RESUME_CONNECTING,
                    webcButterbarAction: o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA
                }).commit();
                E();
            }}/></div>;
        } else if (c) {
            return <div className="x1380le5 x14mko6t xefnzgg x1uvdrpn">{u.jsx(r("WDSBanner.react"), {
                type: "warning",
                title: L,
                body: s._("Retrying…")
            })}</div>;
        }
        return <div className="x1380le5 x14mko6t xefnzgg x1uvdrpn">{u.jsx(r("WDSBanner.react"), {
            type: "warning",
            body: L
        })}</div>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 226);