__d("WAWebMediaPermissionsUtils", [
    "Promise",
    "WALogger",
    "WAWebNoop",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipPerfOptimizations",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new WeakMap;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.PERMISSIONS_API_OPTIMIZATION)) {
                return {
                    granted: false,
                    denied: false
                };
            }
            const n = yield p(e, t);
            return {
                granted: n === "granted",
                denied: n === "denied"
            };
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(name, t) {
            try {
                const n = t ?? navigator;
                if (!n.permissions) {
                    return "unknown";
                }
                const r = yield n.permissions.query({
                    name
                });
                return r.state;
            } catch (e) {
                return "unknown";
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n) {
        const permissions = (n ?? navigator).permissions;
        if (permissions == null) {
            return r("WAWebNoop");
        }
        const a = v(permissions, e);
        const a_listeners = a.listeners;
        const l = function(n) {
            return t(n);
        };
        a_listeners.add(l);
        return function() {
            a_listeners.delete(l);
        };
    }
    function g(e, t, n) {
        let r = true;
        const o = function(n) {
            if (r) {
                t(n);
            }
        };
        const permissions = (n ?? navigator).permissions;
        if (permissions == null) {
            queueMicrotask(()=>o("unknown"));
            return function() {
                r = false;
            };
        }
        const i = v(permissions, e);
        const { listeners, status } = i;
        status.then((e)=>{
            if (r) {
                listeners.add(o);
                t(e.state);
            }
        }, ()=>o("unknown"));
        return function() {
            r = false;
            listeners.delete(o);
        };
    }
    function h({ permissions }) {
        if (permissions != null) {
            if (o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()) {
                v(permissions, "camera");
            }
            v(permissions, "microphone");
        }
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield (u || (u = n("Promise"))).all(e.map((e)=>d(e, t)));
            return r.some((e)=>e.denied);
        });
        return C.apply(this, arguments);
    }
    function b(micGranted, camGranted) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.micGranted === true && e.camGranted === false) {
                return "camera";
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.micGranted === false && e.camGranted === true) {
                return "mic";
            }
            return "camera_and_mic";
        })({
            micGranted,
            camGranted
        });
    }
    function v(permissions, n) {
        const a = S(permissions);
        const i = a.get(n);
        if (i != null) {
            return i;
        }
        const listeners = new Set;
        const status = permissions.query({
            name: n
        }).then((e)=>{
            e.addEventListener("change", function() {
                return R(listeners, e.state);
            });
            return e;
        });
        const u = {
            listeners,
            status
        };
        a.set(n, u);
        status.catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MediaPermissions] could not watch the ",
                " permission"
            ])), n).catching(r("getErrorSafe")(t));
        });
        return u;
    }
    function S(permissions) {
        const t = c.get(permissions);
        if (t != null) {
            return t;
        }
        const n = new Map;
        c.set(permissions, n);
        return n;
    }
    function R(listeners, state) {
        for (const n of Array.from(listeners)){
            if (listeners.has(n)) {
                try {
                    n(state);
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MediaPermissions] permission change listener failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-media-permission-listener-failed");
                }
            }
        }
    }
    l.checkMediaPermissionState = d;
    l.queryMediaPermissionStateStrict = p;
    l.subscribeToMediaPermissionChange = f;
    l.watchMediaPermissionState = g;
    l.listenForMediaPermissionChanges = h;
    l.isAnyMediaPermissionDenied = y;
    l.getDeviceSpecificPermissionMessaging = b;
}, 98);