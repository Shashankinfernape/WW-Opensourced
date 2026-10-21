__d("WAWebCoolOffNuxBanner.react", [
    "WDSBanner.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function c(e) {
        const t = o("react-compiler-runtime").c(18);
        const { actionText, bannerTextTestid, icon, nuxManager, onClick, onDismiss, subtitle, title } = e;
        const _ = e_useState(true);
        const f = _[0];
        const g = _[1];
        nuxManager.show();
        let h;
        if (t[0] !== nuxManager || t[1] !== onDismiss) {
            h = function() {
                nuxManager.dismiss();
                onDismiss?.();
                g(false);
            };
            t[0] = nuxManager;
            t[1] = onDismiss;
            t[2] = h;
        } else {
            h = t[2];
        }
        const onDismiss_1 = h;
        let C;
        if (t[3] !== nuxManager || t[4] !== onClick) {
            C = function() {
                nuxManager.click();
                onClick?.();
            };
            t[3] = nuxManager;
            t[4] = onClick;
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = C;
        let v;
        if (t[6] !== actionText || t[7] !== bannerTextTestid || t[8] !== b || t[9] !== onDismiss_1 || t[10] !== icon || t[11] !== onClick || t[12] !== f || t[13] !== subtitle || t[14] !== title) {
            const Component = r("WDSBanner.react");
            v = f && <div className="x1380le5 x14mko6t xefnzgg x1uvdrpn"><Component type="default" title={subtitle != null ? title : undefined} body={subtitle ?? title} actionText={actionText} icon={icon} onAction={onClick != null ? b : undefined} onDismiss={onDismiss_1} testid={bannerTextTestid}/></div>;
            t[6] = actionText;
            t[7] = bannerTextTestid;
            t[8] = b;
            t[9] = onDismiss_1;
            t[10] = icon;
            t[11] = onClick;
            t[12] = f;
            t[13] = subtitle;
            t[14] = title;
            t[15] = v;
        } else {
            v = t[15];
        }
        let S;
        if (t[16] !== v) {
            S = <>{v}</>;
            t[16] = v;
            t[17] = S;
        } else {
            S = t[17];
        }
        return S;
    }
    l.default = c;
}, 98);