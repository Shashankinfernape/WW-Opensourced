__d("WAWebBrazilPixKeyFormattingUtils", [
    "fbt",
    "WAWebUserPrefsTypes"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = /^(\d{3})(\d{3})(\d{3})(\d{2})$/g;
    const u = "$1.$2.$3-$4";
    const c = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/g;
    const d = "$1.$2.$3/$4-$5";
    const m = /^(\+\d{2})(\d{2})(\d{4,5})(\d{4})$/g;
    const p = "$2 $3-$4";
    function _(e, t) {
        if (t == null) {
            return e;
        }
        switch(t){
            case o("WAWebUserPrefsTypes").PixKeyType.CPF:
                return h(e);
            case o("WAWebUserPrefsTypes").PixKeyType.CNPJ:
                return y(e);
            case o("WAWebUserPrefsTypes").PixKeyType.PHONE:
                return C(e);
            case o("WAWebUserPrefsTypes").PixKeyType.EMAIL:
            case o("WAWebUserPrefsTypes").PixKeyType.EVP:
                return e;
        }
    }
    function f(e, t) {
        if (t == null) {
            return e;
        }
        switch(t){
            case o("WAWebUserPrefsTypes").PixKeyType.PHONE:
                return e.substr(3);
            default:
                return e;
        }
    }
    function g(e) {
        const n = o("WAWebUserPrefsTypes").PixKeyType.cast(e) ?? o("WAWebUserPrefsTypes").PixKeyType.PHONE;
        switch(n){
            case o("WAWebUserPrefsTypes").PixKeyType.CPF:
                return s._("CPF");
            case o("WAWebUserPrefsTypes").PixKeyType.CNPJ:
                return s._("CNPJ");
            case o("WAWebUserPrefsTypes").PixKeyType.PHONE:
                return s._("Phone");
            case o("WAWebUserPrefsTypes").PixKeyType.EMAIL:
                return s._("Email");
            case o("WAWebUserPrefsTypes").PixKeyType.EVP:
                return s._("EVP");
        }
    }
    function h(t) {
        return t.replace(e, u);
    }
    function y(e) {
        return e.replace(c, d);
    }
    function C(e) {
        return e.replace(m, p);
    }
    l.getFormattedPixKey = _;
    l.getCopiedPixKey = f;
    l.getPixKeyTypeLabel = g;
}, 226);