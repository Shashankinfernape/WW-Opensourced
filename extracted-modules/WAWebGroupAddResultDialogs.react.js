__d("WAWebGroupAddResultDialogs.react", [
    "WAWebGroupAgentConflictPopup.react",
    "WAWebGroupIncompatibleDeviceAddPopup.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ agentConflictWids, hasIncompatibleDeviceRejection }, t) {
        const a = [];
        if (hasIncompatibleDeviceRejection) {
            a.push(s.jsx(r("WAWebGroupIncompatibleDeviceAddPopup.react"), {}));
        }
        if (agentConflictWids.length > 0) {
            a.push(s.jsx(r("WAWebGroupAgentConflictPopup.react"), {
                agentWids: agentConflictWids
            }));
        }
        c(a, t);
    }
    function c(e, t) {
        const n = e[0];
        const r = babelHelpers.arrayLikeToArray(e).slice(1);
        if (n == null) {
            t();
            return;
        }
        o("WAWebModalManager").ModalManager.open(n);
        const a = {};
        const i = function() {
            o("WAWebModalManager").ModalManager.off(null, null, a);
        };
        o("WAWebModalManager").ModalManager.once("close_modal", function() {
            i();
            c(r, t);
        }, a);
        o("WAWebModalManager").ModalManager.once("open_modal", i, a);
    }
    l.runAfterAddResultDialogs = u;
}, 98);