__d("WAWebUnifiedResponseCitationRenderers.react", [
    "WAWebImg.react",
    "WDSIconIcLanguage.react",
    "WDSIconWdsIcLogoFacebookFill.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSIconWdsIcLogoThreads.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        wordBreakNormal: {
            overflowWrap: "x1mzt3pk",
            wordBreak: "x1lldw8n",
            $$css: true
        },
        link: {
            textDecoration: "x1hl2dhg",
            ":hover_textDecoration": "xt0b8zv",
            $$css: true
        },
        citationIcon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const c = {
        height: 12,
        iconXstyle: u.citationIcon,
        viewBox: {
            x: 0,
            y: 0,
            width: 24,
            height: 24
        },
        width: 12
    };
    const citationIconRenderers = {
        facebookIcon: s.jsx(r("WDSIconWdsIcLogoFacebookFill.react"), babelHelpers.extends({}, c)),
        instagramIcon: s.jsx(r("WDSIconWdsIcLogoInstagram.react"), babelHelpers.extends({}, c)),
        threadsIcon: s.jsx(r("WDSIconWdsIcLogoThreads.react"), babelHelpers.extends({}, c))
    };
    const m = /^https:\/\/[^/]*\.whatsapp\.(net|com)\//;
    function p() {
        return {
            citationIconRenderers,
            imageNodeRenderer: function({ alt, isThirdParty, sourceType, url }) {
                return <F6Component alt={alt} isThirdParty={isThirdParty} sourceType={sourceType} url={url}/>;
            },
            textNodeRenderer: function({ content, contentType }) {
                return <_ content={content} contentType={contentType}/>;
            }
        };
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { content, contentType } = e;
        const colorName = contentType === "link" ? "contentExternalLink" : contentType === "citation_inline" || contentType === "citation_subtitle" ? "contentDeemphasized" : contentType === "modalTrigger" ? "contentActionEmphasized" : "contentDefault";
        const l = contentType === "citation_inline" ? "Body3Emphasized" : contentType === "citation_subtitle" ? "Body3" : contentType === "modalTrigger" ? "Body2Emphasized" : "Body2";
        const maxLines = contentType === "citation_title" || contentType === "citation_subtitle" ? 1 : undefined;
        const d = (contentType === "modalTrigger" || contentType === "citation_inline") && u.link;
        let m;
        if (t[0] !== d) {
            m = [
                u.wordBreakNormal,
                d
            ];
            t[0] = d;
            t[1] = m;
        } else {
            m = t[1];
        }
        let p;
        if (t[2] !== colorName || t[3] !== content || t[4] !== maxLines || t[5] !== m || t[6] !== l) {
            const Component = r("WDSText.react");
            p = <Component type={l} colorName={colorName} maxLines={maxLines} xstyle={m}>{content}</Component>;
            t[2] = colorName;
            t[3] = content;
            t[4] = maxLines;
            t[5] = m;
            t[6] = l;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    function F6Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { alt, isThirdParty, sourceType, url } = e;
        if (m.test(url) || sourceType != null && isThirdParty === false) {
            let u;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                u = "xt8t1vi x1xc408v x129tdwq x15urzxu xc9qbxq xl1xv1r x14qfxbe";
                t[0] = u;
            } else {
                u = t[0];
            }
            let c;
            if (t[1] !== alt || t[2] !== url) {
                const Component = r("WAWebImg.react");
                c = <Component src={url} alt={alt} className={u} renderError={renderError}/>;
                t[1] = alt;
                t[2] = url;
                t[3] = c;
            } else {
                c = t[3];
            }
            return c;
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = s.jsx(r("WDSIconIcLanguage.react"), {
                height: 36
            });
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function renderError() {
        return s.jsx(r("WDSIconIcLanguage.react"), {
            height: 36
        });
    }
    renderError.displayName = `${renderError.name} [from ${i.id}]`;
    l.getUnifiedResponseCitationRenderers = p;
    l.WAWebUnifiedResponseTextNodeRenderer = _;
    l.WAWebUnifiedResponseFaviconRenderer = F6Component;
}, 98);