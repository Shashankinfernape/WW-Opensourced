__d("WAWebNewsletterDSAModals.react", [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebNewsletterLearnMoreModal.react",
    "WAWebNullFunc",
    "WDSIconIcDescriptionFilled.react",
    "WDSIconIcLocationSearching.react",
    "WDSIconIcPerson.react",
    "WDSIconIcPublic.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                {
                    key: "dsa-guidelines-modal-first-paragraph",
                    content: p
                },
                {
                    key: "dsa-guidelines-modal-second-paragraph",
                    content: m
                }
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
                title: s._("How to keep your channel open"),
                paragraphs: n
            });
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    function m() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("By following our {=m1} and local laws you can help keep your channel open to all followers.", [
            s._implicitParam("=m1", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={_}>{s._("Channels Guidelines")}</Component>)
        ]);
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p() {
        return s._("To help keep WhatsApp safe, we require all updates shared to follow our Channels Guidelines and any local laws.");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _() {
        r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
    }
    function f(e) {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const Component_2 = o("WAWebExternalLink.react").ExternalLink;
        const Component_3 = o("WAWebExternalLink.react").ExternalLink;
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_COPS:
            case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.IP_SRT_VIOLATION:
                return s._("Your content was reported by a third party for infringing their intellectual property rights, which doesn't follow our {=m1}. As a result, action was taken.", [
                    s._implicitParam("=m1", <Component href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={_}>{s._("Channels Guidelines")}</Component>)
                ]);
            case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_PRODUCT_RESTRICTION:
            case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.GENERIC_VIOLATION:
                return s._("Our technology found your update doesn't follow our {=m1}. As a result, action was taken.", [
                    s._implicitParam("=m1", <Component_1 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={_}>{s._("Channels Guidelines")}</Component_1>)
                ]);
            case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.LEGAL_TDR:
                return s._("Your content was reported by a third party for not following local laws, which doesn't follow our {=m1}. As a result, action was taken.", [
                    s._implicitParam("=m1", <Component_2 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={_}>{s._("Channels Guidelines")}</Component_2>)
                ]);
            case o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RESPONSE_VIOLATES_GUIDELINES:
                return s._("Our technology reviewed your report to make sure all responses follow our {=m1}.", [
                    s._implicitParam("=m1", <Component_3 href={o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl()} onClick={_}>{s._("Channels Guidelines")}</Component_3>)
                ]);
        }
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_DSADecisionModalCategory = e.DSADecisionModalCategory;
        let a;
        if (t[0] !== e_DSADecisionModalCategory) {
            a = [
                {
                    key: "dsa-decision-modal-first-paragraph",
                    content: function() {
                        return f(e_DSADecisionModalCategory);
                    }
                }
            ];
            t[0] = e_DSADecisionModalCategory;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                {
                    key: "dsa-decision-modal-first-section",
                    bullets: [
                        {
                            Icon: r("WDSIconIcPublic.react"),
                            iconXstyle: c.secondaryColor,
                            text: o("WAWebNullFunc").returnNull,
                            subtext: y
                        },
                        {
                            Icon: r("WDSIconIcLocationSearching.react"),
                            iconXstyle: c.secondaryColor,
                            text: o("WAWebNullFunc").returnNull,
                            subtext: h
                        }
                    ]
                }
            ];
            t[2] = l;
        } else {
            l = t[2];
        }
        const d = l;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("How we made this decision");
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== i) {
            p = u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
                title: m,
                paragraphs: i,
                sections: d
            });
            t[4] = i;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    function h() {
        return s._("Our technology and teams work in many languages to make sure our Channels Guidelines are applied consistently.");
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y() {
        return s._("WhatsApp uses the same Channels Guidelines around the world.");
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                {
                    key: "dsa-eu-notice-modal-first-paragraph",
                    content: S
                }
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                {
                    key: "dsa-eu-notice-modal-first-section",
                    bullets: [
                        {
                            Icon: r("WDSIconIcDescriptionFilled.react"),
                            iconXstyle: c.secondaryColor,
                            text: o("WAWebNullFunc").returnNull,
                            subtext: v
                        },
                        {
                            Icon: r("WDSIconIcPerson.react"),
                            iconXstyle: c.secondaryColor,
                            text: o("WAWebNullFunc").returnNull,
                            subtext: b
                        }
                    ]
                }
            ];
            e[1] = a;
        } else {
            a = e[1];
        }
        const i = a;
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = u.jsx(r("WAWebNewsletterLearnMoreModal.react"), {
                title: s._("Information for people in the EU"),
                paragraphs: n,
                sections: i
            });
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    function b() {
        return s._("You may be able to refer our decision to a certified dispute settlement body.");
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v() {
        return s._("You may be able to challenge our decision in court.");
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S() {
        return s._("In addition to the option to ask for a review, you also have other options.");
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    l.NewsletterDSAGuidelinesModal = d;
    l.logChannelGuidelinesClick = _;
    l.NewsletterDSADecisionModal = g;
    l.NewsletterDSAEUNoticeModal = C;
}, 226);