__d("WAWebBizVPVDebugOverlay.react", [
    "WAWebWamEnumContactType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function m(e) {
        const r = o("react-compiler-runtime").c(15);
        const { visibilityData, visible } = e;
        const l = useState(0);
        const u = l[0];
        const m = l[1];
        let p;
        let _;
        if (r[0] !== visible) {
            p = function() {
                if (visible) {
                    const e = Date.now();
                    let t;
                    const n = function() {
                        m(Date.now() - e);
                        t = window.setTimeout(n, 200);
                    };
                    t = window.setTimeout(n, 200);
                    return function() {
                        return window.clearTimeout(t);
                    };
                }
            };
            _ = [
                visible
            ];
            r[0] = visible;
            r[1] = p;
            r[2] = _;
        } else {
            p = r[1];
            _ = r[2];
        }
        useEffect(p, _);
        const f = visible ? u : 0;
        const g = visibilityData.contactType === o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE ? "ENT" : visibilityData.contactType === o("WAWebWamEnumContactType").CONTACT_TYPE.SMB ? "SMB" : "?";
        const h = visibilityData.hsmTagStr ?? "none";
        let y = "msg";
        if (visibilityData.messageBodyType != null && visibilityData.mmCarouselCardIndex != null) {
            y = `card[${visibilityData.mmCarouselCardIndex}]`;
        }
        const C = visibilityData.messageId ?? "?";
        let b;
        if (r[3] !== visible) {
            b = ({
                0: {
                    className: "xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1ey2m1c x1o0tod x47corl x10l6tqk xtijo5x x13vifvy xxbqhct x18f80mm x13jlqud x1uq2z3b x1k8cpsg"
                },
                1: {
                    className: "xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1ey2m1c x1o0tod x47corl x10l6tqk xtijo5x x13vifvy xxbqhct x15ihhs7 xisjqss x1hwcez3 x18jpft8"
                }
            })[!!visible << 0];
            r[3] = visible;
            r[4] = b;
        } else {
            b = r[4];
        }
        let v;
        if (r[5] !== b) {
            v = <div {...babelHelpers.extends({}, b)}/>;
            r[5] = b;
            r[6] = v;
        } else {
            v = r[6];
        }
        let S;
        if (r[7] !== visible) {
            S = ({
                0: {
                    className: "xbrszos xea3l6g x18isctg x2q3nzr x1awj2ng x1ey7xld x190qgfh x117nqv4 x1gxa6cn xa0aww2 x181vq82 x1uc92m x47corl x10l6tqk xxx7yvo xndqk7f x1fj9vlw x1q2oy4v xmfd7z5"
                },
                1: {
                    className: "xbrszos xea3l6g x18isctg x2q3nzr x1awj2ng x1ey7xld x190qgfh x117nqv4 x1gxa6cn xa0aww2 x181vq82 x1uc92m x47corl x10l6tqk xxx7yvo xndqk7f x1fj9vlw x1q2oy4v x8trml7"
                }
            })[!!visible << 0];
            r[7] = visible;
            r[8] = S;
        } else {
            S = r[8];
        }
        const R = `VPV ${y} ${g} ${h} ${visible ? "VIS" : "HID"} ${f}ms
${C}`;
        let L;
        if (r[9] !== S || r[10] !== R) {
            L = <div {...babelHelpers.extends({}, S, {
                children: R
            })}/>;
            r[9] = S;
            r[10] = R;
            r[11] = L;
        } else {
            L = r[11];
        }
        let E;
        if (r[12] !== v || r[13] !== L) {
            E = <>{v}{L}</>;
            r[12] = v;
            r[13] = L;
            r[14] = E;
        } else {
            E = r[14];
        }
        return E;
    }
    l.default = m;
}, 98);