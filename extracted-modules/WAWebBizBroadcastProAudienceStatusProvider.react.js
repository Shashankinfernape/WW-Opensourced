__d("WAWebBizBroadcastProAudienceStatusProvider.react", [
    "WAWebBizBroadcastProAudienceStatusContext",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastProAudienceStatusPreload"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(9);
        const { audienceId, children } = e;
        const i = o("useWAWebBizBroadcastProAudienceStatusPreload").useWAWebBizBroadcastProAudienceStatusPreload(audienceId);
        const { onStatusChange, preparedStatus, status } = i;
        let m;
        if (t[0] !== onStatusChange || t[1] !== preparedStatus) {
            m = preparedStatus != null ? <D1 onStatusChange={onStatusChange} preparedStatus={preparedStatus}/> : null;
            t[0] = onStatusChange;
            t[1] = preparedStatus;
            t[2] = m;
        } else {
            m = t[2];
        }
        const p = m;
        let _;
        if (t[3] !== children || t[4] !== status) {
            const Component = r("WAWebBizBroadcastProAudienceStatusContext").Provider;
            _ = <Component value={status}>{children}</Component>;
            t[3] = children;
            t[4] = status;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== p || t[7] !== _) {
            f = <>{p}{_}</>;
            t[6] = p;
            t[7] = _;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    function D1(e) {
        const t = o("react-compiler-runtime").c(6);
        const { onStatusChange, preparedStatus } = e;
        const preparedStatus_audienceId = preparedStatus.audienceId;
        let i;
        if (t[0] !== preparedStatus_audienceId || t[1] !== onStatusChange) {
            i = function(t) {
                return onStatusChange(preparedStatus_audienceId, t);
            };
            t[0] = preparedStatus_audienceId;
            t[1] = onStatusChange;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let s;
        if (t[3] !== l || t[4] !== preparedStatus) {
            s = preparedStatus.renderStatus(l);
            t[3] = l;
            t[4] = preparedStatus;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    l.default = CComponent;
}, 98);