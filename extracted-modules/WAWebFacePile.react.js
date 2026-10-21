__d("WAWebFacePile.react", [
    "WAWebChatCollection",
    "WAWebChatParticipantColor",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebProfileImage.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebWid",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingLeft: "",
        paddingRight: "",
        $$css: true
    };
    const c = {
        overflowFaceSize: function(t, n, r) {
            return [
                u,
                {
                    height: t != null ? "x16ye13r" : t,
                    minWidth: t != null ? "xkj4a21" : t,
                    paddingInlineStart: n != null ? "x1tr5nd9" : n,
                    paddingInlineEnd: n != null ? "x3su7b9" : n,
                    borderStartStartRadius: t != null ? "xykpoxv" : t,
                    borderStartEndRadius: t != null ? "xsejb3s" : t,
                    borderEndEndRadius: t != null ? "x1swlh40" : t,
                    borderEndStartRadius: t != null ? "x1mjayxm" : t,
                    fontSize: r != null ? "xdmh292" : r,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-minWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-paddingInline": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(n),
                    "--x-borderRadius": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-fontSize": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(r)
                }
            ];
        },
        hiddenBehind: {
            marginInlineStart: "x2459kn",
            $$css: true
        },
        border: {
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            $$css: true
        },
        defaultBorderColor: {
            borderTopColor: null,
            borderInlineEndColor: null,
            borderBottomColor: null,
            borderInlineStartColor: null,
            $$css: true
        },
        defaultBorderWidth: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            $$css: true
        },
        urlImage: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        overflowFace: {
            backgroundColor: "x1od0jb8",
            boxSizing: "x9f619",
            color: "x14ug900",
            fontWeight: "xk50ysn",
            lineHeight: "xo5v014",
            $$css: true
        }
    };
    const d = 24;
    function M11(e) {
        const t = o("react-compiler-runtime").c(16);
        const { borderColor, borderWidth, chatWid, faceSize, idOrUrl, isFirst, theme, zIndex } = e;
        let _;
        if (t[0] !== chatWid || t[1] !== idOrUrl) {
            const g = chatWid ? o("WAWebChatCollection").ChatCollection.get(chatWid) : null;
            _ = g && idOrUrl instanceof r("WAWebWid") ? o("WAWebChatParticipantColor").getAssignedColor(g, idOrUrl, `WAWebFacePile-${o("WAWebQuotedMessageUserJourneyLogger").getChatType(g.id) ?? ""}`) : 1;
            t[0] = chatWid;
            t[1] = idOrUrl;
            t[2] = _;
        } else {
            _ = t[2];
        }
        const authorColor = _;
        let y;
        if (t[3] !== zIndex) {
            y = {
                zIndex
            };
            t[3] = zIndex;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] !== authorColor || t[6] !== borderColor || t[7] !== borderWidth || t[8] !== faceSize || t[9] !== idOrUrl || t[10] !== isFirst || t[11] !== theme) {
            const Component = o("WAWebFlex.react").FlexRow;
            C = idOrUrl instanceof r("WAWebWid") ? s.jsx(o("WAWebDetailImage.react").DetailImage, babelHelpers.extends({
                id: idOrUrl,
                size: faceSize,
                xstyle: [
                    !isFirst && c.hiddenBehind,
                    c.border,
                    borderColor ?? c.defaultBorderColor,
                    borderWidth ?? c.defaultBorderWidth
                ],
                authorColor,
                theme
            }, theme === "typing_indicator" ? {
                loadAnimation: false
            } : {})) : <Component xstyle={[
                !isFirst && c.hiddenBehind,
                c.border,
                borderColor ?? c.defaultBorderColor,
                c.urlImage
            ]}>{s.jsx(r("WAWebProfileImage.react"), {
                thumb: idOrUrl,
                size: faceSize
            })}</Component>;
            t[5] = authorColor;
            t[6] = borderColor;
            t[7] = borderWidth;
            t[8] = faceSize;
            t[9] = idOrUrl;
            t[10] = isFirst;
            t[11] = theme;
            t[12] = C;
        } else {
            C = t[12];
        }
        let b;
        if (t[13] !== y || t[14] !== C) {
            b = <div style={y}>{C}</div>;
            t[13] = y;
            t[14] = C;
            t[15] = b;
        } else {
            b = t[15];
        }
        return b;
    }
    function P5Component(e) {
        const t = o("react-compiler-runtime").c(14);
        const { borderColor, borderWidth, count, faceSize, zIndex } = e;
        let u;
        if (t[0] !== zIndex) {
            u = {
                zIndex
            };
            t[0] = zIndex;
            t[1] = u;
        } else {
            u = t[1];
        }
        const d = borderColor ?? c.defaultBorderColor;
        const m = borderWidth ?? c.defaultBorderWidth;
        let p;
        if (t[2] !== faceSize) {
            p = c.overflowFaceSize(faceSize, Math.max(4, Math.floor(faceSize * 0.3)), Math.max(8, Math.floor(faceSize * 0.5)));
            t[2] = faceSize;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] !== d || t[5] !== m || t[6] !== p) {
            _ = [
                c.overflowFace,
                c.hiddenBehind,
                c.border,
                d,
                m,
                p
            ];
            t[4] = d;
            t[5] = m;
            t[6] = p;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== count || t[9] !== _) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = <Component align="center" justify="center" xstyle={_}>+{count}</Component>;
            t[8] = count;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        let g;
        if (t[11] !== u || t[12] !== f) {
            g = <div style={u}>{f}</div>;
            t[11] = u;
            t[12] = f;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    function _(e) {
        const n = o("react-compiler-runtime").c(31);
        const { borderColor, borderWidth, chatWid, faceSize, idsOrUrls, keyName, maxVisible, overflowThreshold, theme, xstyle } = e;
        const y = overflowThreshold ?? maxVisible ?? idsOrUrls.length;
        const C = maxVisible != null && idsOrUrls.length > y;
        let b;
        if (n[0] !== idsOrUrls || n[1] !== maxVisible || n[2] !== C) {
            b = C ? idsOrUrls.slice(0, maxVisible) : idsOrUrls;
            n[0] = idsOrUrls;
            n[1] = maxVisible;
            n[2] = C;
            n[3] = b;
        } else {
            b = n[3];
        }
        const v = b;
        const S = C ? idsOrUrls.length - (maxVisible ?? 0) : 0;
        const faceSize_1 = faceSize ?? d;
        let L;
        if (n[4] !== borderColor || n[5] !== borderWidth || n[6] !== chatWid || n[7] !== idsOrUrls || n[8] !== keyName || n[9] !== faceSize_1 || n[10] !== theme || n[11] !== v) {
            let E;
            if (n[13] !== borderColor || n[14] !== borderWidth || n[15] !== chatWid || n[16] !== idsOrUrls || n[17] !== keyName || n[18] !== faceSize_1 || n[19] !== theme) {
                E = function(idOrUrl, n) {
                    return <M11 key={`${idOrUrl.toString()}-${n}-${keyName ?? ""}`} idOrUrl={idOrUrl} isFirst={n === 0} zIndex={idsOrUrls.length - n} borderColor={borderColor} faceSize={faceSize_1} chatWid={chatWid} theme={theme} borderWidth={borderWidth}/>;
                };
                n[13] = borderColor;
                n[14] = borderWidth;
                n[15] = chatWid;
                n[16] = idsOrUrls;
                n[17] = keyName;
                n[18] = faceSize_1;
                n[19] = theme;
                n[20] = E;
            } else {
                E = n[20];
            }
            L = v.map(E);
            n[4] = borderColor;
            n[5] = borderWidth;
            n[6] = chatWid;
            n[7] = idsOrUrls;
            n[8] = keyName;
            n[9] = faceSize_1;
            n[10] = theme;
            n[11] = v;
            n[12] = L;
        } else {
            L = n[12];
        }
        let k;
        if (n[21] !== borderColor || n[22] !== borderWidth || n[23] !== S || n[24] !== faceSize_1 || n[25] !== C) {
            k = C && <P5Component count={S} faceSize={faceSize_1} zIndex={0} borderColor={borderColor} borderWidth={borderWidth}/>;
            n[21] = borderColor;
            n[22] = borderWidth;
            n[23] = S;
            n[24] = faceSize_1;
            n[25] = C;
            n[26] = k;
        } else {
            k = n[26];
        }
        let I;
        if (n[27] !== L || n[28] !== k || n[29] !== xstyle) {
            const Component = o("WAWebFlex.react").FlexRow;
            I = <Component justify="end" xstyle={xstyle}>{L}{k}</Component>;
            n[27] = L;
            n[28] = k;
            n[29] = xstyle;
            n[30] = I;
        } else {
            I = n[30];
        }
        return I;
    }
    l.default = _;
}, 98);