__d("WAWebPrivacySettings", [], function(t, n, r, o, a, i) {
    const e = {
        all: "all",
        contacts: "contacts",
        contact_blacklist: "contact_blacklist",
        none: "none"
    };
    const l = babelHelpers.extends({}, e, {
        error: "error"
    });
    const s = {
        all: "all",
        none: "none"
    };
    const u = {
        all: "all",
        match_last_seen: "match_last_seen"
    };
    const c = babelHelpers.extends({}, u, {
        error: "error"
    });
    const d = babelHelpers.extends({}, s, {
        error: "error"
    });
    const m = {
        all: "all",
        contacts: "contacts"
    };
    const p = {
        all: "all",
        known: "known",
        contacts: "contacts"
    };
    const _ = babelHelpers.extends({}, p, {
        error: "error"
    });
    const f = {
        off: "off",
        on_standard: "on_standard"
    };
    i.VISIBILITY = e;
    i.VISIBILITY_WITH_ERROR = l;
    i.ALL_NONE = s;
    i.ONLINE_VISIBILITY = u;
    i.ONLINE_VISIBILITY_WITH_ERROR = c;
    i.ALL_NONE_WITH_ERROR = d;
    i.ALL_CONTACTS = m;
    i.CALL_ADD = p;
    i.CALL_ADD_WITH_ERROR = _;
    i.DEFENSE_MODE_STATE = f;
}, 66);