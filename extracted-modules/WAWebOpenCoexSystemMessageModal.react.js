__d("WAWebOpenCoexSystemMessageModal.react", [
    "WAWebCoexSystemMessageModalContent.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ faqUrl, lid, shouldHideVerificationButton = false, text, textLast, wid }) {
        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebCoexSystemMessageModalContent.react"), {
            text,
            textLast,
            faqUrl,
            wid,
            lid,
            shouldHideVerificationButton
        }));
    }
    l.openCoexSecurityVerifySystemMessageModal = u;
}, 98);