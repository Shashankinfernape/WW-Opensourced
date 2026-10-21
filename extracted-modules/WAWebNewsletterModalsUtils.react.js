__d("WAWebNewsletterModalsUtils.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUsernameGatingUtils",
    "WDSIconIcEdit.react",
    "WDSIconIcShield.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        bullet: {
            boxSizing: "x9f619",
            width: "xh8yej3",
            alignItems: "x1qjc9v5",
            $$css: true
        },
        bulletIcon: {
            width: "x1useyqa",
            $$css: true
        },
        bulletColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function D6Component(e) {
        const t = o("react-compiler-runtime").c(15);
        const { Icon, iconSize, iconXstyle, subtext, testid, text } = e;
        const d = iconSize === undefined ? 24 : iconSize;
        const m = testid === undefined ? "bullet-point-item" : testid;
        let p;
        if (t[0] !== Icon || t[1] !== d || t[2] !== iconXstyle) {
            const Component = o("WAWebFlex.react").FlexColumn;
            p = <Component align="start" shrink={0} xstyle={c.bulletIcon}>{<Icon height={d} width={d} iconXstyle={iconXstyle}/>}</Component>;
            t[0] = Icon;
            t[1] = d;
            t[2] = iconXstyle;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] !== text) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            _ = text != null && <Component>{text}</Component>;
            t[4] = text;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== subtext) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            f = <Component>{subtext}</Component>;
            t[6] = subtext;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== _ || t[9] !== f) {
            const Component = o("WAWebFlex.react").FlexColumn;
            g = <Component>{_}{f}</Component>;
            t[8] = _;
            t[9] = f;
            t[10] = g;
        } else {
            g = t[10];
        }
        let h;
        if (t[11] !== p || t[12] !== g || t[13] !== m) {
            const Component = o("WAWebFlex.react").FlexRow;
            h = <Component xstyle={c.bullet} marginBottom={8} paddingBottom={4} paddingStart={8} paddingTop={4} testid={m}>{p}{g}</Component>;
            t[11] = p;
            t[12] = g;
            t[13] = m;
            t[14] = h;
        } else {
            h = t[14];
        }
        return h;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_bullets = e.bullets;
        let r;
        if (t[0] !== e_bullets) {
            r = e_bullets.map(p);
            t[0] = e_bullets;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function p(e, t) {
        return <D6Component key={t} Icon={e.Icon} text={e.text()} subtext={e.subtext()} testid={e.testid} iconSize={e.iconSize} iconXstyle={e.iconXstyle}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    const _ = [
        {
            Icon: r("WDSIconIcEdit.react"),
            iconXstyle: c.bulletColor,
            text: function() {
                return s._("Admins can write updates");
            },
            subtext: function() {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                return s._("Admins can also change the channel's profile and settings. {=m2}.", [
                    s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2()}>{s._("Learn more")}</Component>)
                ]);
            }
        }
    ];
    const f = {
        Icon: r("WDSIconIcVisibilityOff.react"),
        iconXstyle: c.bulletColor,
        text: function() {
            return s._("You're only visible to other admins");
        },
        subtext: function() {
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                return s._("Admins for this channel can see your phone number, profile picture, name, or username, but followers can't.");
            }
            return s._("Admins for this channel can see your phone number, profile picture and name, but followers can't.");
        }
    };
    const g = [].concat(_, [
        f,
        {
            Icon: r("WDSIconIcShield.react"),
            iconXstyle: c.bulletColor,
            iconSize: 28,
            text: function() {
                return s._("You're responsible for this channel");
            },
            subtext: function() {
                const Component = o("WAWebExternalLink.react").ExternalLink;
                return s._("This channel needs to follow our {=m2} and is reviewed against them.", [
                    s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()}>{s._("guidelines")}</Component>)
                ]);
            }
        }
    ]);
    l.BulletPointList = m;
    l.MinimalBullets = _;
    l.VisibilityBullet = f;
    l.ExtendedBullets = g;
}, 226);