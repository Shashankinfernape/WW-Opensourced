__d("WAWebMainThreadQplHandler", [
    "WALogger",
    "WAWebWorkerQplTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = new Map;
    function d(markerId, instanceKey) {
        return `${markerId}:${instanceKey}`;
    }
    function m(t) {
        const n = t.getQPLAttrs();
        const { instanceKey, markerId } = n;
        if (t.isActive()) {
            return p(t);
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[QplHandler] inactive flow, skip registration"
        ])));
        return o("WAWebWorkerQplTypes").createSerializableQplHandle(markerId, instanceKey);
    }
    function p(e) {
        const t = e.getQPLAttrs();
        const { instanceKey, markerId } = t;
        const a = d(markerId, instanceKey);
        const i = ()=>c.delete(a);
        const { endSuccess, endFail, endFailWithError, endCancel } = e;
        e.endSuccess = function() {
            i();
            return endSuccess(...arguments);
        };
        e.endFail = function() {
            i();
            return endFail(...arguments);
        };
        e.endFailWithError = function() {
            i();
            return endFailWithError(...arguments);
        };
        e.endCancel = function() {
            i();
            return endCancel(...arguments);
        };
        c.set(a, e);
        return o("WAWebWorkerQplTypes").createSerializableQplHandle(markerId, instanceKey);
    }
    function _(e) {
        const t = d(e.markerId, e.instanceKey);
        const n = c.get(t);
        if (n == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebMainThreadQplHandler: no flow found for key=",
                ""
            ])), t);
            return;
        }
        if (!n.isActive()) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebMainThreadQplHandler: flow key=",
                " already ended"
            ])), t);
            c.delete(t);
            return;
        }
        e: {
            const r = e;
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "addAnnotations" && "annotations" in r) {
                const a = r.annotations;
                n.addAnnotations(a);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "addPoint" && "pointName" in r && "annotations" in r) {
                const { pointName, annotations } = r;
                n.addPoint(pointName, annotations ?? undefined);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "endSuccess" && "annotations" in r) {
                const m = r.annotations;
                n.endSuccess(m ?? undefined);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "endFail" && "errorName" in r && "annotations" in r) {
                const { errorName, annotations } = r;
                n.endFail(errorName, annotations ?? undefined);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "endFailWithError" && "errorName" in r && "failReason" in r && "annotations" in r) {
                const { errorName, failReason, annotations } = r;
                n.endFailWithError(errorName, failReason ?? undefined, annotations ?? undefined);
                break e;
            }
            if ((typeof r === "object" && r !== null || typeof r === "function") && r.type === "endCancel" && "cancelReason" in r && "annotations" in r) {
                const { cancelReason, annotations } = r;
                n.endCancel(cancelReason ?? undefined, annotations ?? undefined);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        }
    }
    l.serializeQplForBridge = m;
    l.handleQplBridgeMessage = _;
}, 98);