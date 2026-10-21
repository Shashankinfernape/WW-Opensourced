__d("WAWebDevOnlyBadge.react", [
    "WAWebApiContact",
    "WAWebCopyToClipboard",
    "WAWebPill.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_label = e.label;
        let r;
        if (t[0] !== e_label) {
            const Component = o("WAWebPill.react").LabelPill;
            r = <Component pillText="DEV ONLY">{e_label}</Component>;
            t[0] = e_label;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    const c = "Copy Group ID";
    function d(e, t) {
        const n = e ? "Copy LID" : "Copy PN";
        if (t) {
            return `${n} (Chat ID)`;
        }
        return n;
    }
    function m(e, t) {
        const n = [];
        const a = e.isLid();
        const i = t ?? "chat";
        const l = `copy-${i}-id`;
        const u = e.isGroup() ? c : d(a, true);
        const Component = r("WDSMenuItem.react");
        n.push(<Component key={l} title={u} onPress={function() {
            o("WAWebCopyToClipboard").copyTextToClipboard(e.toString());
        }} testid={l}/>);
        const m = e.isRegularUser() ? o("WAWebApiContact").getAlternateUserWid(e) : null;
        if (m) {
            const p = d(!a);
            const _ = "copy-alt-wid-id";
            const Component = r("WDSMenuItem.react");
            n.push(<Component key={_} title={p} onPress={function() {
                o("WAWebCopyToClipboard").copyTextToClipboard(m.toString());
            }} testid={_}/>);
        }
        return n;
    }
    l.DevOnlyBadge = u;
    l.getDEVChatMenuOptions = m;
}, 98);