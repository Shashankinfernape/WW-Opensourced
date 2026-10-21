__d("WAWebDBPollsGetParentMessages", [
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(e, null);
            const n = t[0];
            const r = t[1];
            const pollUpdateMsgsToParentMsgs = new Map;
            const i = [];
            for (const l of r){
                const s = n.get(u(l));
                if (s == null || s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
                    i.push(l);
                } else {
                    pollUpdateMsgsToParentMsgs.set(l, s);
                }
            }
            return {
                pollUpdateMsgsToParentMsgs,
                orphans: i
            };
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return r("nullthrows")(e.pollUpdateParentKey).toString();
    }
    l.getParentMessages = e;
}, 98);