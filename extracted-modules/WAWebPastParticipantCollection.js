__d("WAWebPastParticipantCollection", [
    "WATimeUtils",
    "WAWebCollection",
    "WAWebGroupConstants",
    "WAWebGroupParticipantGetters",
    "WAWebGroupParticipantModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getValidRecords = function() {
            return this.filter((e)=>{
                const t = o("WATimeUtils").castToUnixTime(e.leaveTs);
                const n = o("WATimeUtils").DAY_SECONDS * o("WAWebGroupConstants").PAST_PARTICIPANT_EXPIRATION_DAYS;
                return o("WATimeUtils").happenedWithin(t, n);
            });
        };
        t_prototype.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebGroupParticipantGetters").clearGroupParticipantGetterCacheFor(e);
                }
            });
            return t;
        };
        t_prototype.reset = function() {
            this.forEach(o("WAWebGroupParticipantGetters").clearGroupParticipantGetterCacheFor);
            e.prototype.reset.call(this);
        };
        return t;
    })(r("WAWebCollection"));
    e.model = r("WAWebGroupParticipantModel");
    e.comparator = function(e, t) {
        return t.leaveTs - e.leaveTs;
    };
    l.default = e;
}, 98);