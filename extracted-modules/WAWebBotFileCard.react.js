__d("WAWebBotFileCard.react", [
    "fbt",
    "WALogger",
    "WAWebAttachmentLoaderButton.react",
    "WAWebBotFileCardLayout.react",
    "WAWebDocumentFileIcon",
    "WAWebImg.react",
    "WAWebL10nFilesize",
    "WAWebMediaUrlAllowlist",
    "WAWebMimeTypes",
    "WAWebNullFunc",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebBotArtifactDownload"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = [
        "isForwardedMessage"
    ];
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback, useEffect, useRef } = p;
    const h = 22;
    const y = 26;
    const C = 160;
    const b = " · ";
    function VComponent(t) {
        const a = o("react-compiler-runtime").c(36);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.isForwardedMessage;
            i = babelHelpers.objectWithoutPropertiesLoose(t, c);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const s = l === undefined ? false : l;
        const u = i;
        const { fileExtension, fileLength, pageCount, previewImageUrl, title, url } = u;
        let v;
        if (a[3] !== previewImageUrl) {
            v = r("isStringNotNullAndNotWhitespaceOnly")(previewImageUrl);
            a[3] = previewImageUrl;
            a[4] = v;
        } else {
            v = a[4];
        }
        const E = v;
        let k;
        if (a[5] !== s || a[6] !== previewImageUrl) {
            k = !s && r("isStringNotNullAndNotWhitespaceOnly")(previewImageUrl) && o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(previewImageUrl) ? previewImageUrl : null;
            a[5] = s;
            a[6] = previewImageUrl;
            a[7] = k;
        } else {
            k = a[7];
        }
        const I = k;
        let T;
        let D;
        if (a[8] !== E || a[9] !== s || a[10] !== I) {
            T = function() {
                if (E && !s && I == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "bot file card: preview host not on the media CDN"
                    ]))).sendLogs("bot-file-card-preview-not-allowlisted", {
                        sampling: 0.01
                    });
                }
            };
            D = [
                E,
                s,
                I
            ];
            a[8] = E;
            a[9] = s;
            a[10] = I;
            a[11] = T;
            a[12] = D;
        } else {
            T = a[11];
            D = a[12];
        }
        useEffect(T, D);
        let x;
        if (a[13] !== fileExtension || a[14] !== fileLength || a[15] !== s || a[16] !== title || a[17] !== url) {
            x = {
                fileExtension,
                fileLength,
                isForwardedMessage: s,
                title,
                url
            };
            a[13] = fileExtension;
            a[14] = fileLength;
            a[15] = s;
            a[16] = title;
            a[17] = url;
            a[18] = x;
        } else {
            x = a[18];
        }
        const download = r("useWAWebBotArtifactDownload")(x);
        let P;
        if (a[19] !== fileExtension || a[20] !== fileLength || a[21] !== pageCount) {
            P = L(fileExtension, fileLength, pageCount);
            a[19] = fileExtension;
            a[20] = fileLength;
            a[21] = pageCount;
            a[22] = P;
        } else {
            P = a[22];
        }
        const N = P;
        const M = fileExtension ?? "";
        let w;
        if (a[23] !== download) {
            w = <RComponent download={download}/>;
            a[23] = download;
            a[24] = w;
        } else {
            w = a[24];
        }
        const mimeType = (o("WAWebMimeTypes").EXT_TO_MIME == null ? undefined : o("WAWebMimeTypes").EXT_TO_MIME[M]) ?? "";
        let F;
        if (a[25] !== M || a[26] !== mimeType) {
            F = m.jsx(r("WAWebDocumentFileIcon"), {
                ext: M,
                height: y,
                mimeType,
                width: h
            });
            a[25] = M;
            a[26] = mimeType;
            a[27] = F;
        } else {
            F = a[27];
        }
        let O;
        if (a[28] !== I) {
            const Component = r("WAWebImg.react");
            O = I != null && <Component alt="" className="x1lliihq x1ymw6g xl1xv1r x8ozjh4 xh8yej3" onError={S} renderError={o("WAWebNullFunc").returnNull} src={I} testid="bot_ur_file_card_preview"/>;
            a[28] = I;
            a[29] = O;
        } else {
            O = a[29];
        }
        let B;
        if (a[30] !== N || a[31] !== F || a[32] !== O || a[33] !== w || a[34] !== title) {
            B = m.jsx(r("WAWebBotFileCardLayout.react"), {
                action: w,
                details: N,
                icon: F,
                preview: O,
                testid: "bot_ur_file_card",
                title
            });
            a[30] = N;
            a[31] = F;
            a[32] = O;
            a[33] = w;
            a[34] = title;
            a[35] = B;
        } else {
            B = a[35];
        }
        return B;
    }
    function S() {
        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "bot file card: preview image failed to load"
        ]))).sendLogs("bot-file-card-preview-load-failed", {
            sampling: 0.01
        });
    }
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(16);
        const e_download = e.download;
        const rRef = useRef(null);
        const aRef = useRef(null);
        const iRef = useRef(false);
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function(t) {
                if (t == null && rRef.current === document.activeElement) {
                    iRef.current = true;
                }
                rRef.current = t;
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = l;
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = function(t) {
                if (t == null && aRef.current === document.activeElement) {
                    iRef.current = true;
                }
                aRef.current = t;
            };
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = c;
        let p;
        let _;
        if (t[2] !== e_download.status) {
            p = function() {
                if (iRef.current) {
                    iRef.current = false;
                    if (e_download.status === "downloading") {
                        rRef.current?.focus();
                    } else if (e_download.status === "idle") {
                        aRef.current?.focus();
                    }
                }
            };
            _ = [
                e_download.status
            ];
            t[2] = e_download.status;
            t[3] = p;
            t[4] = _;
        } else {
            p = t[3];
            _ = t[4];
        }
        useEffect(p, _);
        if (e_download.status === "downloading") {
            let h;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                h = {
                    className: "x78zum5 x2lah0s"
                };
                t[5] = h;
            } else {
                h = t[5];
            }
            let y;
            if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                y = s._("Cancel download").toString();
                t[6] = y;
            } else {
                y = t[6];
            }
            const C = e_download.progressPercent == null ? null : e_download.progressPercent / 100;
            let b;
            if (t[7] !== e_download.cancel || t[8] !== y || t[9] !== C) {
                const Component = o("WAWebAttachmentLoaderButton.react").LoaderButton;
                b = <div {...babelHelpers.extends({}, h, {
                    "data-testid": "bot_ur_file_card_cancel",
                    children: <Component ref={u} ariaLabel={y} onPress={e_download.cancel} progress={C}/>
                })}/>;
                t[7] = e_download.cancel;
                t[8] = y;
                t[9] = C;
                t[10] = b;
            } else {
                b = t[10];
            }
            return b;
        }
        if (e_download.status === "idle") {
            let v;
            if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
                v = {
                    className: "x78zum5 x2lah0s"
                };
                t[11] = v;
            } else {
                v = t[11];
            }
            let S;
            if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
                S = s._("Download file").toString();
                t[12] = S;
            } else {
                S = t[12];
            }
            let R;
            if (t[13] !== e_download.start || t[14] !== S) {
                const Component = o("WAWebAttachmentLoaderButton.react").DownloadButton;
                R = <div {...babelHelpers.extends({}, v, {
                    "data-testid": "bot_ur_file_card_download",
                    children: <Component ref={d} ariaLabel={S} onPress={e_download.start}/>
                })}/>;
                t[13] = e_download.start;
                t[14] = S;
                t[15] = R;
            } else {
                R = t[15];
            }
            return R;
        }
        if (e_download.status === "unsupported") {
            return null;
        }
        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e_download.status}`);
    }
    function L(fileExtension, fileLength, pageCount) {
        const a = [];
        if (pageCount != null && pageCount > 0) {
            a.push(s._("_j{\"*\":\"{count} pages\",\"_1\":\"1 page\"}", [
                s._plural(pageCount, "count")
            ]).toString());
        }
        if (fileLength != null && fileLength > 0) {
            a.push(o("WAWebL10nFilesize").getL10nFilesize(fileLength));
        }
        if (r("isStringNotNullAndNotWhitespaceOnly")(fileExtension)) {
            a.push(fileExtension.toUpperCase());
        }
        if (a.length > 0) {
            return a.join(b);
        }
        return null;
    }
    l.default = VComponent;
}, 226);