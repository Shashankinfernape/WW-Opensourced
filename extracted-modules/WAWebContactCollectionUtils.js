__d("WAWebContactCollectionUtils", [
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e, { cancelAt = null, filterFn = null, showMe = false, showWithoutName = false }) {
        let m = [];
        for (const p of e._models){
            if (cancelAt != null && m.length >= cancelAt) {
                m = [];
                break;
            }
            if (s(p, {
                filterFn,
                showMe,
                showWithoutName
            })) {
                m.push(p);
            }
        }
        return m.sort(o("WAWebContactComparator").ContactComparator);
    }
    function s(e, { filterFn = null, showMe = false, showWithoutName = false }) {
        if (e.id.isLid()) {
            if (e.id.isBot()) {
                return false;
            }
            if (r("WAWebWid").isPSA(e.id)) {
                return false;
            }
            if (o("WAWebContactGetters").getIsMe(e)) {
                return showMe && (filterFn == null || filterFn(e) === true);
            }
        } else {
            return false;
        }
        return !((!(e.name || showWithoutName) || !o("WAWebContactGetters").getIsWAContact(e)) && !o("WAWebFrontendContactGetters").getIsUsernameContact(e) || !e.isActive() || filterFn != null && filterFn(e) !== true);
    }
    l.getFilteredContacts = e;
    l.passesContactFilter = s;
}, 98);