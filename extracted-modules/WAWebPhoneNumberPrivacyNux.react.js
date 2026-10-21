__d("WAWebPhoneNumberPrivacyNux.react", [
    "WAWebConfirmPopup.react",
    "WAWebPnhSelfDisplayName.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(23);
        const { cancelText, customContent, displayName, okButtonType, okText, onCancel, onOK, pictureWid, subTitle, testid, title } = e;
        let g;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                surface: "unknown",
                viewName: "phone-number-privacy-nux"
            };
            t[0] = g;
        } else {
            g = t[0];
        }
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x1anpbxc x1wcu8vx xyorhqc x1ult018 x9f619 x78zum5 xdt5ytf xl56j7k x6s0dn4"
            };
            t[1] = h;
        } else {
            h = t[1];
        }
        let y;
        if (t[2] !== displayName || t[3] !== pictureWid) {
            y = !r("isStringNullOrEmpty")(displayName) && s.jsx(r("WAWebPnhSelfDisplayName.react"), {
                displayName,
                pictureWid
            });
            t[2] = displayName;
            t[3] = pictureWid;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "xh8yej3 x1aueamr x98l61r x14z9mp x1ua1l7f x1lziwak x1hkbg2g x1s688f x14ug900 x2b8uid"
            };
            t[5] = C;
        } else {
            C = t[5];
        }
        let b;
        if (t[6] !== title) {
            b = <div {...babelHelpers.extends({}, C, {
                children: title
            })}/>;
            t[6] = title;
            t[7] = b;
        } else {
            b = t[7];
        }
        let v;
        if (t[8] !== subTitle) {
            v = subTitle != null && <div className="x1jchvi3 xefnzgg xo1l8bm x1xet1wb xhslqc4 x2b8uid">{subTitle}</div>;
            t[8] = subTitle;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] !== customContent || t[11] !== y || t[12] !== b || t[13] !== v) {
            S = <div {...babelHelpers.extends({}, h, {
                children: [
                    y,
                    b,
                    v,
                    customContent
                ]
            })}/>;
            t[10] = customContent;
            t[11] = y;
            t[12] = b;
            t[13] = v;
            t[14] = S;
        } else {
            S = t[14];
        }
        let R;
        if (t[15] !== cancelText || t[16] !== okButtonType || t[17] !== okText || t[18] !== onCancel || t[19] !== onOK || t[20] !== S || t[21] !== testid) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            R = <Component tsNavigationData={g} onOK={onOK} okText={okText} onCancel={onCancel} cancelText={cancelText} okButtonType={okButtonType} testid={testid}>{S}</Component>;
            t[15] = cancelText;
            t[16] = okButtonType;
            t[17] = okText;
            t[18] = onCancel;
            t[19] = onOK;
            t[20] = S;
            t[21] = testid;
            t[22] = R;
        } else {
            R = t[22];
        }
        return R;
    }
    l.default = u;
}, 98);