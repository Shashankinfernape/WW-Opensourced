__d("WAWebFtsMsgsCallLogCollection", [
    "WAWebContactCollection",
    "WAWebFtsMsgsChatlessCollection",
    "WAWebMsgQueryUtils",
    "WAWebPhoneNumberSearch",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getNextMsgs = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, msgKeyAnchor }) {
                return o("WAWebMsgQueryUtils").getVoipCallLogMsgs(count, msgKeyAnchor);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.filterMsgs = function(t, n) {
            const e = t.filter(({ callParticipants })=>{
                if (callParticipants == null) {
                    return true;
                }
                const r = callParticipants.some((e)=>e.participant.isLid()) ?? false;
                const a = r ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                return callParticipants.some((e)=>!e.participant.equals(a));
            });
            if (n === "") {
                return e;
            }
            return e.filter((e)=>{
                const r = o("WAWebPhoneNumberSearch").numberSearch(n);
                const a = o("WAWebContactCollection").ContactCollection.get(e.from);
                return a?.searchMatchExact(n, r) ?? false;
            });
        };
        return t;
    })(r("WAWebFtsMsgsChatlessCollection"));
    l.default = e;
}, 98);