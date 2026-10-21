__d("WAWebBizBroadcastProDownloadProgressHost.react", [
    "WAWebBizBroadcastProDownloadProgressCardLoadable",
    "WAWebBizBroadcastProSubscriberDownloadRegistry",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebNullFunc",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e.useState;
    const c = {
        container: {
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            insetInlineEnd: "xtijo5x",
            left: null,
            right: null,
            marginTop: "x98l61r",
            marginBottom: "x1ua1l7f",
            marginInlineStart: "xlese2p",
            marginInlineEnd: "xviac27",
            marginLeft: null,
            marginRight: null,
            pointerEvents: "x47corl",
            position: "xixxii4",
            rowGap: "x1qvou4u",
            zIndex: "xc9l9hb",
            $$css: true
        },
        entry: {
            maxWidth: "x193iq5w",
            pointerEvents: "x67bb7w",
            width: "xauvat3",
            $$css: true
        },
        preparing: {
            alignSelf: "xqcrz7y",
            width: "xeq5yr9",
            $$css: true
        },
        settled: {
            alignSelf: "xpvyfi4",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(26);
        const t = u(o("WAWebBizBroadcastProSubscriberDownloadRegistry").getSubscriberDownloads);
        const n = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                r(o("WAWebBizBroadcastProSubscriberDownloadRegistry").getSubscriberDownloads());
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebBizBroadcastProSubscriberDownloadRegistry").SubscriberDownloadEmitter, o("WAWebBizBroadcastProSubscriberDownloadRegistry").SUBSCRIBER_DOWNLOADS_CHANGED, a);
        if (n.length === 0) {
            return null;
        }
        let i;
        if (e[1] !== n) {
            i = n.find(p)?.key;
            e[1] = n;
            e[2] = i;
        } else {
            i = e[2];
        }
        const d = i;
        let _;
        let f;
        let g;
        let h;
        let y;
        let C;
        let b;
        let v;
        if (e[3] !== n || e[4] !== d) {
            let S;
            if (e[13] !== d) {
                S = function(t) {
                    return t.status !== "ready" || t.key === d;
                };
                e[13] = d;
                e[14] = S;
            } else {
                S = e[14];
            }
            const R = n.filter(S);
            f = o("WAWebErrorBoundary.react").ErrorBoundary;
            b = o("WAWebNullFunc").returnNull;
            v = "bb-pro-download-progress-list";
            _ = o("WAWebFlex.react").FlexColumn;
            g = "stretch";
            h = "bb_pro_download_progress_host";
            y = c.container;
            C = R.map(m);
            e[3] = n;
            e[4] = d;
            e[5] = _;
            e[6] = f;
            e[7] = g;
            e[8] = h;
            e[9] = y;
            e[10] = C;
            e[11] = b;
            e[12] = v;
        } else {
            _ = e[5];
            f = e[6];
            g = e[7];
            h = e[8];
            y = e[9];
            C = e[10];
            b = e[11];
            v = e[12];
        }
        let L;
        if (e[15] !== _ || e[16] !== g || e[17] !== h || e[18] !== y || e[19] !== C) {
            L = <_ align={g} testid={h} xstyle={y}>{C}</_>;
            e[15] = _;
            e[16] = g;
            e[17] = h;
            e[18] = y;
            e[19] = C;
            e[20] = L;
        } else {
            L = e[20];
        }
        let E;
        if (e[21] !== f || e[22] !== b || e[23] !== v || e[24] !== L) {
            E = s.jsx(f, {
                fallback: b,
                name: v,
                children: L
            });
            e[21] = f;
            e[22] = b;
            e[23] = v;
            e[24] = L;
            e[25] = E;
        } else {
            E = e[25];
        }
        return E;
    }
    function m(e) {
        const Component = o("WAWebFlex.react").FlexColumn;
        return <Component key={e.key} align="stretch" xstyle={[
            c.entry,
            e.status === "preparing" ? c.preparing : c.settled
        ]}>{s.jsx(o("WAWebBizBroadcastProDownloadProgressCardLoadable").WAWebBizBroadcastProDownloadProgressCardLoadable, {
            entry: e
        })}</Component>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(e) {
        return e.status === "ready";
    }
    l.default = d;
}, 98);