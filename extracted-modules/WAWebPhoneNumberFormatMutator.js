__d("WAWebPhoneNumberFormatMutator", [
    "WAWebFormatMutator",
    "WAWebInternFormatMutator",
    "WAWebLinkFormatMutator",
    "WAWebMentionFormatMutator",
    "WAWebPhoneNumberMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, { canonicalPhone, phone }, { fromMe, selectable = false }) {
            return s.jsx(r("WAWebPhoneNumberMutatorComponent.react"), {
                phoneNumber: phone,
                canonicalPhone,
                selectable,
                fromMe
            });
        };
        return t;
    })(r("WAWebFormatMutator"));
    u.format = false;
    u.compatibility = true;
    u.nestable = function(e) {
        return e !== r("WAWebLinkFormatMutator") && e !== r("WAWebInternFormatMutator") && e !== r("WAWebMentionFormatMutator");
    };
    u.match = function(e, t, n) {
        if (!t) {
            return [];
        }
        const t_phoneNumbers = t.phoneNumbers;
        const o = t_phoneNumbers === undefined ? [] : t_phoneNumbers;
        return o.map(c);
    };
    function c(e) {
        const { index, phone } = e;
        const r = index + phone.length - 1;
        return [
            index,
            index,
            r,
            r,
            e
        ];
    }
    l.default = u;
}, 98);