__d("WAWebFormatOversizedMsg", [
    "fbt",
    "WAWebFbtAppName",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function CComponent() {
        const Component = o("WAWebFbtAppName").WAWebAppShortName;
        return s._("This message can't be viewed in {=m1}. View it on your phone instead.", [
            s._implicitParam("=m1", <Component>{s._("")}</Component>)
        ]);
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    function d(e) {
        const Component = o("WAWebFbtAppName").WAWebAppShortName;
        return s._("This message can't be viewed in {=m1}. View it on your phone instead.", [
            s._implicitParam("=m1", <Component>{s._("")}</Component>)
        ]);
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.formatOversizedMsgText = CComponent;
    l.formatOversizedMsgNotification = d;
}, 226);