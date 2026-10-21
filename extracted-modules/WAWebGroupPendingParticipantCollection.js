__d("WAWebGroupPendingParticipantCollection", [
    "WAWebCollection",
    "WAWebContactComparator",
    "WAWebDebounce",
    "WAWebGroupParticipantComparator",
    "WAWebGroupParticipantGetters",
    "WAWebGroupParticipantModel",
    "WAWebL10N",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n = {}) {
            let o;
            o = e.call(this, t, n) || this;
            o.$PendingParticipantCollection$p_1 = r("WAWebDebounce")(function() {
                return o.sort();
            }, 1000);
            o.listenTo(o, "change:contact.name", o.$PendingParticipantCollection$p_1);
            o.listenTo(r("WAWebL10N"), "locale_change", o.$PendingParticipantCollection$p_1);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            this.forEach((e)=>{
                e.delete();
            });
            this.stopListening();
            this.reset();
        };
        t_prototype.ensureSorted = function() {
            this.$PendingParticipantCollection$p_1.flush();
        };
        t_prototype.createSortComparator = function() {
            if (r("gkx")("7")) {
                return o("WAWebContactComparator").createContactSortComparator(function(e) {
                    return e.contact;
                });
            }
            return e.prototype.createSortComparator.call(this);
        };
        t_prototype.set = function(n, r = {}) {
            if (r.isParticipantCollectionAdd !== true) {
                r.remove = true;
            }
            return e.prototype.set.call(this, n, r);
        };
        t_prototype.add = function(n, r = {}) {
            r.isParticipantCollectionAdd = true;
            return e.prototype.add.call(this, n, r);
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
    e.comparator = r("WAWebGroupParticipantComparator");
    l.default = e;
}, 98);