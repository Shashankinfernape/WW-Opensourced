__d("useWAWebVoipPermissionStatus", [
    "WALogger",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipLocalVideoPolicy",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useState } = u;
    function useM(t, a) {
        const i = o("react-compiler-runtime").c(16);
        let l;
        if (i[0] !== t) {
            l = t && o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed();
            i[0] = t;
            i[1] = l;
        } else {
            l = i[1];
        }
        const s = l;
        const u = useState(0);
        const m = u[0];
        const _ = u[1];
        let f;
        let g;
        if (i[2] !== s) {
            f = function() {
                o("WAWebMediaPermissionsUtils").listenForMediaPermissionChanges(navigator);
                const t = function() {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [PermissionStatus] permission changed, triggering re-query"
                    ])));
                    _(p);
                };
                const n = o("WAWebMediaPermissionsUtils").subscribeToMediaPermissionChange("microphone", t);
                const r = s ? o("WAWebMediaPermissionsUtils").subscribeToMediaPermissionChange("camera", t) : null;
                return function() {
                    n();
                    r?.();
                };
            };
            g = [
                s
            ];
            i[2] = s;
            i[3] = f;
            i[4] = g;
        } else {
            f = i[3];
            g = i[4];
        }
        useEffect(f, g);
        let h;
        if (i[5] !== s) {
            h = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return o("WAWebVoipAcquireMediaStream").queryPermissionStatus(s);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            i[5] = s;
            i[6] = h;
        } else {
            h = i[6];
        }
        let y;
        if (i[7] !== a || i[8] !== m || i[9] !== s) {
            y = [
                s,
                a,
                m
            ];
            i[7] = a;
            i[8] = m;
            i[9] = s;
            i[10] = y;
        } else {
            y = i[10];
        }
        const C = r("useWAWebAsync")(h, y);
        let b;
        if (i[11] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                cameraPermission: "prompt",
                micPermission: "prompt"
            };
            i[11] = b;
        } else {
            b = i[11];
        }
        const v = useState(b);
        const S = v[0];
        const R = v[1];
        const C_value = C.value;
        if (C_value != null && (C_value.micPermission !== S.micPermission || C_value.cameraPermission !== S.cameraPermission)) {
            R({
                cameraPermission: C_value.cameraPermission,
                micPermission: C_value.micPermission
            });
        }
        const E = C_value ?? S;
        let k;
        if (i[12] !== C.loading || i[13] !== E.cameraPermission || i[14] !== E.micPermission) {
            k = {
                micPermission: E.micPermission,
                cameraPermission: E.cameraPermission,
                isLoading: C.loading
            };
            i[12] = C.loading;
            i[13] = E.cameraPermission;
            i[14] = E.micPermission;
            i[15] = k;
        } else {
            k = i[15];
        }
        return k;
    }
    function p(e) {
        return e + 1;
    }
    l.default = useM;
}, 98);