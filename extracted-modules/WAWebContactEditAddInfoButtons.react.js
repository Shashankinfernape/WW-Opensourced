__d("WAWebContactEditAddInfoButtons.react", [
    "fbt",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcCall.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        container: {
            rowGap: "x1f0uite",
            columnGap: "xs2akgl",
            paddingTop: "x16ovd2e",
            paddingInlineStart: "x15ahnlz",
            paddingInlineEnd: "x1a4sjiy",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { onAddPhoneNumber, onAddUsername } = e;
        if (onAddPhoneNumber == null && onAddUsername == null) {
            return null;
        }
        let i;
        if (t[0] !== onAddPhoneNumber) {
            const Component = r("WDSButton.react");
            i = onAddPhoneNumber != null ? <Component Icon={r("WDSIconIcCall.react")} label={s._("Add phone number")} onPress={onAddPhoneNumber} testid="add-contact-phone-number-btn" variant="outline" widthMode="flexible"/> : null;
            t[0] = onAddPhoneNumber;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== onAddUsername) {
            const Component = r("WDSButton.react");
            l = onAddUsername != null ? <Component Icon={r("WDSIconIcAlternateEmail.react")} label={s._("Add username")} onPress={onAddUsername} testid="add-contact-username-btn" variant="outline" widthMode="flexible"/> : null;
            t[2] = onAddUsername;
            t[3] = l;
        } else {
            l = t[3];
        }
        let d;
        if (t[4] !== i || t[5] !== l) {
            const Component = o("WAWebFlex.react").FlexColumn;
            d = <Component xstyle={c.container}>{i}{l}</Component>;
            t[4] = i;
            t[5] = l;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    l.default = d;
}, 226);