__d("WAWebOpenNewsletterDirectory", [
    "WAWebModalManager",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ tosAcceptCallback }) {
        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebPDFNModal.react"), {
            pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
            verifyTosAccepted: o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos,
            runIfTosAccepted: function() {
                tosAcceptCallback();
            }
        }));
    }
    l.openNewsletterDirectory = u;
}, 98);