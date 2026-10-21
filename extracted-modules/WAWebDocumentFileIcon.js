__d("WAWebDocumentFileIcon", [
    "WAWebDocumentIconWithContent",
    "WAWebIcPresentationIcon.react",
    "WAWebIcSpreadsheetIcon.react",
    "WAWebMsOfficeDocIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ext",
        "fontSize",
        "mimeType"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        presentationIcon: {
            color: "x157dx7a",
            $$css: true
        },
        textIcon: {
            color: "x1kqjlw6",
            $$css: true
        },
        spreadsheetIcon: {
            color: "x1sgjuae",
            $$css: true
        },
        noExtensionIcon: {
            color: "x1164gpu",
            $$css: true
        },
        docIcon: {
            color: "x10a5rjv",
            $$css: true
        },
        pdfIcon: {
            color: "xm3ytx4",
            $$css: true
        },
        pptIcon: {
            color: "xwflugy",
            $$css: true
        },
        xlsIcon: {
            color: "x1n3q9i3",
            $$css: true
        },
        generalIcon: {
            color: "x1164gpu",
            $$css: true
        }
    };
    const d = {
        doc: {
            fontSize: 12,
            content: "W",
            iconXStyle: c.docIcon
        },
        pdf: {
            fontSize: 8,
            content: "PDF",
            iconXStyle: c.pdfIcon
        },
        ppt: {
            fontSize: 12,
            content: "P",
            iconXStyle: c.pptIcon
        },
        xls: {
            fontSize: 12,
            content: "X",
            iconXStyle: c.xlsIcon
        }
    };
    const m = {
        "application/msword": d.doc,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": d.doc,
        "text/rtf": d.doc,
        "application/pdf": d.pdf,
        "application/vnd.ms-excel": d.xls,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": d.xls,
        "application/vnd.ms-powerpoint": d.ppt,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": d.ppt
    };
    const p = [
        "application/x-iwork-keynote-sffkey"
    ];
    const _ = [
        "text/plain",
        "text/rtf"
    ];
    const f = [
        "text/csv"
    ];
    function g(t) {
        const n = o("react-compiler-runtime").c(34);
        let a;
        let i;
        let l;
        let s;
        if (n[0] !== t) {
            a = t.ext;
            i = t.fontSize;
            l = t.mimeType;
            s = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
        }
        if (p.includes(l)) {
            let d;
            if (n[5] !== s.xstyle) {
                d = [
                    c.presentationIcon,
                    s.xstyle
                ];
                n[5] = s.xstyle;
                n[6] = d;
            } else {
                d = n[6];
            }
            let g;
            if (n[7] !== s || n[8] !== d) {
                g = u.jsx(o("WAWebIcPresentationIcon.react").IcPresentationIcon, babelHelpers.extends({}, s, {
                    xstyle: d
                }));
                n[7] = s;
                n[8] = d;
                n[9] = g;
            } else {
                g = n[9];
            }
            return g;
        }
        if (_.includes(l)) {
            let h;
            if (n[10] !== s.xstyle) {
                h = [
                    c.textIcon,
                    s.xstyle
                ];
                n[10] = s.xstyle;
                n[11] = h;
            } else {
                h = n[11];
            }
            let y;
            if (n[12] !== s || n[13] !== h) {
                y = u.jsx(o("WAWebMsOfficeDocIcon.react").MsOfficeDocIcon, babelHelpers.extends({}, s, {
                    xstyle: h
                }));
                n[12] = s;
                n[13] = h;
                n[14] = y;
            } else {
                y = n[14];
            }
            return y;
        }
        if (f.includes(l)) {
            let C;
            if (n[15] !== s.xstyle) {
                C = [
                    c.spreadsheetIcon,
                    s.xstyle
                ];
                n[15] = s.xstyle;
                n[16] = C;
            } else {
                C = n[16];
            }
            let b;
            if (n[17] !== s || n[18] !== C) {
                b = u.jsx(o("WAWebIcSpreadsheetIcon.react").IcSpreadsheetIcon, babelHelpers.extends({}, s, {
                    xstyle: C
                }));
                n[17] = s;
                n[18] = C;
                n[19] = b;
            } else {
                b = n[19];
            }
            return b;
        }
        const v = m[l];
        if (v) {
            const S = i ?? v.fontSize;
            let R;
            if (n[20] !== v.content || n[21] !== v.iconXStyle || n[22] !== s || n[23] !== S) {
                R = u.jsx(r("WAWebDocumentIconWithContent"), babelHelpers.extends({
                    iconXStyle: v.iconXStyle,
                    fontSize: S,
                    content: v.content
                }, s));
                n[20] = v.content;
                n[21] = v.iconXStyle;
                n[22] = s;
                n[23] = S;
                n[24] = R;
            } else {
                R = n[24];
            }
            return R;
        }
        if (!a) {
            let L;
            if (n[25] !== s.xstyle) {
                L = [
                    c.noExtensionIcon,
                    s.xstyle
                ];
                n[25] = s.xstyle;
                n[26] = L;
            } else {
                L = n[26];
            }
            let E;
            if (n[27] !== s || n[28] !== L) {
                E = u.jsx(o("WAWebMsOfficeDocIcon.react").MsOfficeDocIcon, babelHelpers.extends({}, s, {
                    xstyle: L
                }));
                n[27] = s;
                n[28] = L;
                n[29] = E;
            } else {
                E = n[29];
            }
            return E;
        }
        const k = i ?? 7;
        let I;
        if (n[30] !== a || n[31] !== s || n[32] !== k) {
            I = u.jsx(r("WAWebDocumentIconWithContent"), babelHelpers.extends({
                iconXStyle: c.generalIcon,
                fontSize: k,
                content: a
            }, s));
            n[30] = a;
            n[31] = s;
            n[32] = k;
            n[33] = I;
        } else {
            I = n[33];
        }
        return I;
    }
    l.default = g;
}, 98);