__d("WAWebUserPrefsSettingChangeHandler", [], function(t, n, r, o, a, i) {
    let e = null;
    let l = null;
    function s(t) {
        e = t;
    }
    function u(t, n) {
        e?.(t, n);
    }
    function c(e) {
        l = e;
    }
    function d(e, t) {
        l?.(e, t);
    }
    i.registerSettingChangeHandler = s;
    i.notifySettingChangeHandler = u;
    i.registerUserSettingChangeHandler = c;
    i.notifyUserSettingChangeHandler = d;
}, 66);