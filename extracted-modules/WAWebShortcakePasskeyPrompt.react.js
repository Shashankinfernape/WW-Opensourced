__d("WAWebShortcakePasskeyPrompt.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebSpinner.react",
    "WDSIconIcArrowForward.react",
    "WDSIllustrationWdsPictoPasskey.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        textSection: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x1cy8zhl",
            rowGap: "x1kb72lq",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        buttonSpacing: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        spinnerStroke: {
            stroke: "xscos2w",
            $$css: true
        }
    };
    function d({ isDisabled, onContinue, passkeyStatus = "initial" }) {
        const Component = r("WAWebClickableLink.react");
        const Component_1 = r("WAWebLinkDeviceScreenPrimaryButton.react");
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        return <div className="x78zum5 x1q0g3np x6s0dn4 x1qgv0r9" data-testid="shortcake_passkey_prompt_card"><Component_2 xstyle={c.textSection}><span className="xngnso2 xo1l8bm x1mqxbix">{s._("Quick security check with your passkey")}</span><span className="x1f6kntn xo1l8bm x1mqxbix x1fc57z9">{s._("You can continue using WhatsApp Web after we verify your account with your passkey.")} <Component href={o("WAWebFaqUrl").getPasskeySecurityCheckFaqUrl()} testid="shortcake_passkey_learn_more_link" onClick={m}>{s._("Learn more")}</Component></span>{passkeyStatus === "failed" && <span className="x1f6kntn x1e2nbdu" data-testid="shortcake_passkey_error_message" role="alert">{s._("Couldn't confirm passkey.")}</span>}<Component_1 animate={!isDisabled} disabled={isDisabled} icon={isDisabled ? u.jsx(o("WAWebSpinner.react").Spinner, {
            size: 16,
            stroke: 2,
            color: c.spinnerStroke
        }) : u.jsx(r("WDSIconIcArrowForward.react"), {})} onClick={onContinue} testId="shortcake_passkey_continue_button" text={passkeyStatus === "initial" ? r("WAWebFbtCommon")("Continue") : s._("Try again")} xstyle={c.buttonSpacing}/></Component_2><div className="x78zum5 x6s0dn4 xl56j7k x2lah0s">{u.jsx(r("WDSIllustrationWdsPictoPasskey.react"), {
            testid: "wds-picto-passkey"
        })}</div></div>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getPasskeySecurityCheckFaqUrl());
    }
    l.default = d;
}, 226);