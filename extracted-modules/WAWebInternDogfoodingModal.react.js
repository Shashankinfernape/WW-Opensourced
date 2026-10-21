__d("WAWebInternDogfoodingModal.react", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebConfirmPopup.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "WDSIconIcCampaignMegaphone.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        chatIcon: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function d() {
        const e = e_useState(true);
        const t = e[0];
        const a = e[1];
        if (!t || !r("gkx")("26258") || !o("WAWebABProps").getABPropConfigValue("web_intern_dogfooding_upsell_enabled") || r("WAWebEnvironment").isWindows) {
            return;
        }
        const i = g();
        if (i != null && i > o("WATimeUtils").unixTime()) {
            return;
        }
        const l = o("WAWebABProps").getABPropConfigValue("web_intern_dogfooding_upsell_content");
        const d = JSON.parse(l);
        if (d.title == null || d.web_link == null || d.ok_text == null || d.cancel_text == null) {
            return;
        }
        const m = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                window.location.replace(d.web_link);
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const p = function() {
            const e = o("WAWebABProps").getABPropConfigValue("web_intern_dogfooding_upsell_snooze_duration");
            f(o("WATimeUtils").unixTime() + e);
            a(false);
        };
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const _ = <div className="xh8yej3 xpyat2d x1f6kntn x1fc57z9 x1yc453h xlese2p xviac27"><div>Help us with dogfooding by moving to the <Component href={d.web_link} className="x117nqv4">internal version</Component> of the web client. Share your feedback/bugs on the <Component_1 href={d.group_link} className="x117nqv4">WhatsApp Web Feedback</Component_1> on Workplace.</div></div>;
        const Component_2 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_2 onOK={m} onOverlayClick={p} okText={d.ok_text} onCancel={p} cancelText={d.cancel_text}>{s.jsx(r("WDSIconIcCampaignMegaphone.react"), {
            width: 120,
            height: 120,
            xstyle: c.chatIcon
        })}<div className="xh8yej3"><div className="x1603h9y xjs9k72 x1fc57z9 x2b8uid x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"><b>{d.title}</b></div>{_}</div></Component_2>;
        function f(e) {
            r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_ID_UPSELL_SNOOZE_UNTIL, String(e));
        }
        function g() {
            const e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_ID_UPSELL_SNOOZE_UNTIL);
            if (e == null) {
                return null;
            }
            return Number.parseInt(e, 10);
        }
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);