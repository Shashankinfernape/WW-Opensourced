__d("WAWebSuspiciousLinkPopup.react", [
    "fbt",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const EFragment = e.Fragment;
    const d = ".";
    const m = function() {
        o("WAWebModalManager").ModalManager.close();
        o("WAWebCmd").Cmd.closeLongLinkModal(true);
    };
    function PComponent({ link }) {
        const n = function() {
            const link_href = link.href;
            o("WAWebExternalLink.react").openExternalLink(link_href);
            o("WAWebModalManager").ModalManager.close();
            o("WAWebCmd").Cmd.closeLongLinkModal(true);
        };
        const { domain, href, suspiciousCharacters } = link;
        const p = domain.split(d);
        const f = p.map((e, t)=>{
            let n = false;
            const r = e.split("").map((e, r)=>{
                const o = suspiciousCharacters != null && suspiciousCharacters.has(e);
                n = o || n;
                const a = o ? "x117nqv4" : undefined;
                return <span key={`${t}-${r}-${e}`} className={a}>{e}</span>;
            });
            const o = n ? "xghrzdh" : undefined;
            return <EFragment key={`${t}-${e}`}><span className={o}>{r}</span>{t + 1 !== p.length ? <span>{d}</span> : null}</EFragment>;
        });
        const g = href.split(domain);
        const h = g[0];
        const y = g[1];
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "suspicious-link"
        }} title={s._("Suspicious link")} okText={r("WAWebFbtCommon")("Cancel")} cancelText={s._("Open link")} onOK={m} onCancel={n} type={o("WAWebModal.react").ModalTheme.LinkPopup}><div className="xyorhqc">{s._("This link contains unusual characters. It may be trying to appear as another site.")} <Component href={_()}>{r("WAWebFbtCommon")("Learn more")}</Component></div><div className="x104kibb x1jquxbb x1anpbxc x6ikm8r x10wlt62 x1fc57z9 xlyipyv x1mzt3pk x1gzmk7r x1ua5tub">{h}{f}{y}</div></Component_1>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    function _() {
        return `https://faq.whatsapp.com/393169153028916?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    l.default = PComponent;
}, 226);