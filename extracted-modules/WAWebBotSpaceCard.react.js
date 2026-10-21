__d("WAWebBotSpaceCard.react", [
    "fbt",
    "WAWebBotFileCardLayout.react",
    "WAWebClickable.react",
    "WAWebDocumentFileIcon",
    "WAWebHatchSpaceCardCatalogPreviewLoadable",
    "WAWebMimeTypes",
    "WAWebOpenHatchSpace",
    "WDSIconIcGrid.react",
    "react",
    "react-compiler-runtime",
    "useWAWebRichResponseMediaUrl"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "canLoadMedia",
        "downloadOrigin",
        "openTarget"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = "html";
    const p = 22;
    const _ = 26;
    const f = 24;
    const g = "16 / 10";
    const h = 24;
    const y = "LOCAL";
    const C = {
        button: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            cursor: "x1ypdohk",
            display: "x1lliihq",
            maxWidth: "x193iq5w",
            width: "x3orp4s",
            $$css: true
        },
        card: {
            maxWidth: "x193iq5w",
            width: "x3orp4s",
            $$css: true
        },
        pressable: {
            ":hover_backgroundColor": "x1nsvvxn",
            $$css: true
        }
    };
    function BComponent(t) {
        const n = o("react-compiler-runtime").c(21);
        const { canLoadMedia, downloadOrigin, openTarget } = t;
        const u = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { displayName, icon, thumbnail } = u;
        const _ = canLoadMedia ? I(thumbnail) : null;
        const f = canLoadMedia ? I(icon) : null;
        const g = r("useWAWebRichResponseMediaUrl")(_, downloadOrigin);
        const g_url = g.url;
        const y = r("useWAWebRichResponseMediaUrl")(f, downloadOrigin);
        const y_url = y.url;
        const S = s._("Artifact");
        const R = s._("{space name}, artifact", [
            s._param("space name", displayName)
        ]);
        const L = openTarget.kind !== "none";
        const T = r("WAWebBotFileCardLayout.react");
        const D = L ? null : R.toString();
        const x = S.toString();
        let $;
        if (n[0] !== y_url) {
            $ = <EComponent iconUrl={y_url}/>;
            n[0] = y_url;
            n[1] = $;
        } else {
            $ = n[1];
        }
        const P = VComponent;
        const catalogSlug = k(canLoadMedia, u);
        const hasThumbnail = _ != null;
        let w;
        if (n[2] !== P || n[3] !== catalogSlug || n[4] !== hasThumbnail || n[5] !== g_url) {
            w = <P catalogSlug={catalogSlug} hasThumbnail={hasThumbnail} thumbnailUrl={g_url}/>;
            n[2] = P;
            n[3] = catalogSlug;
            n[4] = hasThumbnail;
            n[5] = g_url;
            n[6] = w;
        } else {
            w = n[6];
        }
        const A = L ? C.pressable : C.card;
        let F;
        if (n[7] !== T || n[8] !== displayName || n[9] !== D || n[10] !== x || n[11] !== $ || n[12] !== w || n[13] !== A) {
            F = <T ariaLabel={D} details={x} icon={$} preview={w} testid="bot_ur_space_card" title={displayName} xstyle={A}/>;
            n[7] = T;
            n[8] = displayName;
            n[9] = D;
            n[10] = x;
            n[11] = $;
            n[12] = w;
            n[13] = A;
            n[14] = F;
        } else {
            F = n[14];
        }
        const O = F;
        if (!L) {
            return O;
        }
        let B;
        if (n[15] !== openTarget) {
            B = function() {
                return o("WAWebOpenHatchSpace").openHatchSpace(openTarget);
            };
            n[15] = openTarget;
            n[16] = B;
        } else {
            B = n[16];
        }
        let W;
        if (n[17] !== R || n[18] !== O || n[19] !== B) {
            const Component = o("WAWebClickable.react").Clickable;
            W = <Component ariaLabel={R} dataTestId="bot_ur_space_card_button" onClick={B} preventDefaultKeyboard xstyle={C.button}>{O}</Component>;
            n[17] = R;
            n[18] = O;
            n[19] = B;
            n[20] = W;
        } else {
            W = n[20];
        }
        return W;
    }
    function VComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const { catalogSlug, hasThumbnail, thumbnailUrl } = e;
        if (catalogSlug != null) {
            let l;
            if (t[0] !== catalogSlug) {
                l = c.jsx(r("WAWebHatchSpaceCardCatalogPreviewLoadable"), {
                    renderPreview: SComponent,
                    slug: catalogSlug
                });
                t[0] = catalogSlug;
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        let s;
        if (t[2] !== hasThumbnail || t[3] !== thumbnailUrl) {
            s = hasThumbnail ? <RComponent url={thumbnailUrl}/> : null;
            t[2] = hasThumbnail;
            t[3] = thumbnailUrl;
            t[4] = s;
        } else {
            s = t[4];
        }
        return s;
    }
    function SComponent(e) {
        return <RComponent url={e}/>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_url = e.url;
        const r = u_useState(null);
        const a = r[0];
        const i = r[1];
        if (e_url == null || e_url === a) {
            let l;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                l = <LComponent/>;
                t[0] = l;
            } else {
                l = t[0];
            }
            return l;
        }
        let s;
        if (t[1] !== e_url) {
            s = function() {
                return i(e_url);
            };
            t[1] = e_url;
            t[2] = s;
        } else {
            s = t[2];
        }
        let u;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x2ebxmi x1lliihq xl1xv1r xh8yej3"
            };
            t[3] = u;
        } else {
            u = t[3];
        }
        let m;
        if (t[4] !== s || t[5] !== e_url) {
            m = <img {...babelHelpers.extends({
                alt: "",
                "data-testid": "bot_ur_space_card_preview",
                onError: s,
                src: e_url
            }, u)}/>;
            t[4] = s;
            t[5] = e_url;
            t[6] = m;
        } else {
            m = t[6];
        }
        return m;
    }
    function LComponent() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x6s0dn4 x2ebxmi x1od0jb8 x78zum5 xl56j7k xh8yej3"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <div {...babelHelpers.extends({}, t, {
                "data-testid": "bot_ur_space_card_preview_placeholder",
                children: c.jsx(r("WDSIconIcGrid.react"), {
                    colorName: "contentDeemphasized",
                    height: h,
                    width: h
                })
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_iconUrl = e.iconUrl;
        const a = u_useState(null);
        const i = a[0];
        const l = a[1];
        if (e_iconUrl == null || e_iconUrl === i) {
            let s;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                s = <span data-testid="bot_ur_space_card_fallback_icon">{c.jsx(r("WAWebDocumentFileIcon"), {
                    ext: m,
                    height: _,
                    mimeType: (o("WAWebMimeTypes").EXT_TO_MIME == null ? undefined : o("WAWebMimeTypes").EXT_TO_MIME[m]) ?? "",
                    width: p
                })}</span>;
                t[0] = s;
            } else {
                s = t[0];
            }
            return s;
        }
        let f;
        if (t[1] !== e_iconUrl) {
            f = function() {
                return l(e_iconUrl);
            };
            t[1] = e_iconUrl;
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1lliihq xxk0z11 xl1xv1r xvy4d1p"
            };
            t[3] = g;
        } else {
            g = t[3];
        }
        let h;
        if (t[4] !== e_iconUrl || t[5] !== f) {
            h = <img {...babelHelpers.extends({
                alt: "",
                "data-testid": "bot_ur_space_card_space_icon",
                onError: f,
                src: e_iconUrl
            }, g)}/>;
            t[4] = e_iconUrl;
            t[5] = f;
            t[6] = h;
        } else {
            h = t[6];
        }
        return h;
    }
    function k(canLoadMedia, { slug, source, thumbnail }) {
        if (canLoadMedia && thumbnail == null && source === y && slug != null && slug !== "") {
            return slug;
        }
        return null;
    }
    function I(e) {
        if (e == null) {
            return null;
        }
        return {
            directPath: e.direct_path,
            encFilehash: e.file_enc_sha256,
            filehash: e.file_sha256,
            mediaKey: e.media_key,
            mimetype: e.mime_type
        };
    }
    l.default = BComponent;
}, 226);