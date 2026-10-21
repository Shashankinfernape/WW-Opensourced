__d("WAWebMediaUnsupportedModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebFileSaver",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_msg = e.msg;
        let r;
        if (t[0] !== e_msg) {
            r = function() {
                o("WAWebModalManager").ModalManager.close();
                o("WAWebFileSaver").FileSaver.initDownload(e_msg);
            };
            t[0] = e_msg;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                surface: "unknown",
                viewName: "media-unsupported"
            };
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        let c;
        let d;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Download");
            c = s._("Cancel");
            d = s._("Download unsupported file?");
            const Component = o("WAWebFbtAppName").WAWebAppShortName;
            m = s._("This file can't be opened in {=m1}. Download it to open it with another app on your computer?", [
                s._implicitParam("=m1", <Component>{s._("")}</Component>)
            ]);
            t[3] = l;
            t[4] = c;
            t[5] = d;
            t[6] = m;
        } else {
            l = t[3];
            c = t[4];
            d = t[5];
            m = t[6];
        }
        let p;
        if (t[7] !== a) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            p = <Component tsNavigationData={i} onCancel={o("WAWebModalManager").closeModalManager} onOK={a} okText={l} cancelText={c} title={d}>{m}</Component>;
            t[7] = a;
            t[8] = p;
        } else {
            p = t[8];
        }
        return p;
    }
    l.default = c;
}, 226);