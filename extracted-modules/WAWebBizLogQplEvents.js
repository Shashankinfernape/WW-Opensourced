__d("WAWebBizLogQplEvents", [
    "WAWebQplFlowWrapper",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e = r("qpl"))._(774774619, "3426");
    const u = e._(774777556, "3427");
    const c = e._(774775117, "3428");
    const d = e._(774775607, "3430");
    const m = e._(774777097, "3431");
    const p = e._(774777518, "3433");
    const _ = e._(774769843, "3425");
    function f(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(s, e);
    }
    function g(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(u, e);
    }
    function h(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(c, e);
    }
    function y(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(d, e);
    }
    function C(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(m, e);
    }
    function b(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(p, e);
    }
    function v(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(_, e);
    }
    l.qplPointCartView = f;
    l.qplPointProfileCatsView = g;
    l.qplPointProfileSave = h;
    l.qplPointProductView = y;
    l.qplPointPLMDetailsView = C;
    l.qplPointOrderCreate = b;
    l.qplPointOrderView = v;
}, 98);