__d("useWAWebVoipModalManager", [
    "WAWebModalManager",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useContext } = s;
    function d() {
        const e = o("react-compiler-runtime").c(17);
        const t = useContext(r("WAWebVoipUiPopoutWindowContext"));
        const n = t.isDocPip || t.isContextInPopoutWindow;
        let a;
        if (e[0] !== n || e[1] !== t.documentEl) {
            a = function(r, a) {
                if (n && t.documentEl != null) {
                    o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.open(r, a);
                } else {
                    o("WAWebModalManager").ModalManager.open(r, a);
                }
            };
            e[0] = n;
            e[1] = t.documentEl;
            e[2] = a;
        } else {
            a = e[2];
        }
        const openModal = a;
        let l;
        if (e[3] !== n || e[4] !== t.documentEl) {
            l = function() {
                if (n && t.documentEl != null) {
                    o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close();
                } else {
                    o("WAWebModalManager").ModalManager.close();
                }
            };
            e[3] = n;
            e[4] = t.documentEl;
            e[5] = l;
        } else {
            l = e[5];
        }
        const closeModal = l;
        let u;
        if (e[6] !== n || e[7] !== t.documentEl) {
            u = function(r, a) {
                if (n && t.documentEl != null) {
                    o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openSupportModal(r, a);
                } else {
                    o("WAWebModalManager").ModalManager.openSupportModal(r, a);
                }
            };
            e[6] = n;
            e[7] = t.documentEl;
            e[8] = u;
        } else {
            u = e[8];
        }
        const openSupportModal = u;
        let m;
        if (e[9] !== n || e[10] !== t.documentEl) {
            m = function() {
                if (n && t.documentEl != null) {
                    o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.closeSupportOrModal();
                } else {
                    o("WAWebModalManager").ModalManager.closeSupportOrModal();
                }
            };
            e[9] = n;
            e[10] = t.documentEl;
            e[11] = m;
        } else {
            m = e[11];
        }
        const closeSupportOrModal = m;
        let _;
        if (e[12] !== closeModal || e[13] !== closeSupportOrModal || e[14] !== openModal || e[15] !== openSupportModal) {
            _ = {
                openModal,
                closeModal,
                openSupportModal,
                closeSupportOrModal
            };
            e[12] = closeModal;
            e[13] = closeSupportOrModal;
            e[14] = openModal;
            e[15] = openSupportModal;
            e[16] = _;
        } else {
            _ = e[16];
        }
        return _;
    }
    l.default = d;
}, 98);