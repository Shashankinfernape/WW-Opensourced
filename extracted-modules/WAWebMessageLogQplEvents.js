__d("WAWebMessageLogQplEvents", [
    "WAWebQplFlowWrapper",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(774770248, "3424");
    const s = r("qpl")._(774769843, "3425");
    function u(EntryPoint) {
        o("WAWebQplFlowWrapper").QPL.markerStart(e, {
            annotations: {
                string: {
                    EntryPoint
                }
            }
        });
    }
    function c(t) {
        o("WAWebQplFlowWrapper").QPL.markerEnd(e, t);
    }
    function d(IsCached) {
        o("WAWebQplFlowWrapper").QPL.markerStart(s, {
            annotations: {
                bool: {
                    IsCached
                }
            }
        });
    }
    l.qplStartProfileView = u;
    l.qplEndProfileView = c;
    l.qplStartOrderView = d;
}, 98);