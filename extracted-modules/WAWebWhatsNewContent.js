__d("WAWebWhatsNewContent", [
    "fbt",
    "WAWebABProps",
    "WAWebChatThemeGatingUtils",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebStatusGatingUtils",
    "WAWebVoipGatingUtils",
    "WDSIconIcDescription.react",
    "WDSIconIcDownload.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcHistory.react",
    "WDSIconIcMood.react",
    "WDSIconIcPalette.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcLogoMetaAi.react",
    "WDSIconWdsIcPencilAi.react"
], function(t, n, r, o, a, i, l, s) {
    const e = {
        description: function() {
            return s._("Open and preview PDFs directly in your chats without downloading them.");
        },
        Icon: r("WDSIconIcDescription.react")
    };
    const u = {
        description: function() {
            return s._("Voice and video calling is now available in chats or in the new Calls tab.");
        },
        Icon: r("WDSIconIcVideocam.react")
    };
    const c = {
        description: function() {
            return s._("Share past messages with new group members so they never miss the context.");
        },
        Icon: r("WDSIconIcHistory.react")
    };
    const d = {
        description: function() {
            return s._("Express yourself with a dynamic status that contacts can reply to.");
        },
        Icon: r("WDSIconIcMood.react")
    };
    const m = {
        description: function() {
            return s._("Share files with Meta AI to get summaries, answers, and ideas on the spot.");
        },
        Icon: r("WDSIconWdsIcLogoMetaAi.react")
    };
    const p = {
        description: function() {
            return s._("Set up your Meta Business Agent to reply to customers automatically, 24\/7.");
        },
        Icon: r("WDSIconWdsIcAi.react")
    };
    const _ = {
        description: function() {
            if (r("WAWebEnvironment").isWindows) {
                return s._("Download customer form responses as CSV directly from the app.");
            }
            return s._("Download customer form responses as CSV directly from WhatsApp Web.");
        },
        Icon: r("WDSIconIcDownload.react")
    };
    const f = {
        description: function() {
            return s._("Personalize your chats with colorful themes and custom wallpapers.");
        },
        Icon: r("WDSIconIcPalette.react")
    };
    const g = {
        description: function() {
            return s._("Export a chat as a file to save or share a copy of your conversation.");
        },
        Icon: r("WDSIconIcDownload.react")
    };
    const h = {
        description: function() {
            return s._("Write and edit broadcast messages faster with AI-powered suggestions.");
        },
        Icon: r("WDSIconWdsIcPencilAi.react")
    };
    const y = {
        description: function() {
            return s._("Now you can send message history to new group members.");
        },
        Icon: r("WDSIconIcHistory.react")
    };
    const C = {
        description: function() {
            return s._("Select the heart to like a status, just like on your phone.");
        },
        Icon: r("WDSIconIcFavorite.react")
    };
    const b = {
        description: function() {
            return s._("Export a chat to save it as a file.");
        },
        Icon: r("WDSIconIcDownload.react")
    };
    const v = [
        d,
        e
    ];
    const S = 4;
    function R() {
        return o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal_content_version");
    }
    function L() {
        return R() >= 2;
    }
    function E() {
        const e = R();
        return e === 3 || e === 4;
    }
    function k() {
        return R() === 3;
    }
    function I({ bizAgentEligible }) {
        const n = R();
        if (n >= 5) {
            return T();
        }
        if (n === 4) {
            return D();
        }
        return P(bizAgentEligible);
    }
    function T() {
        const e = [
            y
        ].concat(o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? [
            f
        ] : [], o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() ? [
            C
        ] : [], [
            b
        ]);
        return [].concat(e, v).slice(0, S);
    }
    function D() {
        const e = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
        if (o("WAWebMobilePlatforms").isSMB()) {
            return $(e);
        }
        return x(e);
    }
    function x(e) {
        if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled()) {
            if (e) {
                return [
                    f,
                    u,
                    c,
                    m
                ];
            }
            return [
                f,
                c,
                m,
                d
            ];
        }
        if (e) {
            return [
                u,
                g,
                c,
                m
            ];
        }
        return [
            g,
            c,
            m,
            d
        ];
    }
    function $(e) {
        if (e) {
            return [
                u,
                h,
                g,
                c
            ];
        }
        return [
            h,
            g,
            c,
            m
        ];
    }
    function P(bizAgentEligible) {
        const t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
        if (o("WAWebMobilePlatforms").isSMB()) {
            return M(t, bizAgentEligible);
        }
        return N(t);
    }
    function N(t) {
        if (t) {
            return [
                u,
                c,
                d,
                m
            ];
        }
        return [
            c,
            d,
            m,
            e
        ];
    }
    function M(t, bizAgentEligible) {
        const r = t ? [
            u,
            p,
            _,
            c
        ] : [
            p,
            _,
            c,
            m
        ];
        if (bizAgentEligible) {
            return r;
        }
        return [].concat(r.filter((e)=>e !== p), [
            e
        ]);
    }
    l.hasWhatsNewContent = L;
    l.hasSmbWhatsNewContent = E;
    l.hasBizAgentWhatsNewHighlight = k;
    l.getWhatsNewFeatures = I;
}, 226);