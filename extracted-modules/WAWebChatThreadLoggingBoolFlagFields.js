__d("WAWebChatThreadLoggingBoolFlagFields", [], function(t, n, r, o, a, i) {
    const e = {
        isCartAddClicked: false,
        isCtaOnPdpClicked: false,
        isCommerceViewed: false,
        viaContactlessChats: false
    };
    const l = {
        afterReadTurnedOn: false,
        afterReadTurnedOff: false
    };
    const s = babelHelpers.extends({}, e, l);
    const u = Object.freeze(s);
    const c = Object.freeze(Object.keys(s));
    const d = Object.freeze(Object.keys(e));
    function m(e) {
        return c.find((t)=>t === e);
    }
    i.FLAG_FIELDS = u;
    i.FLAG_FIELD_NAMES = c;
    i.REGULAR_FLAG_FIELD_NAMES = d;
    i.toMaybeBoolFlagActionType = m;
}, 66);