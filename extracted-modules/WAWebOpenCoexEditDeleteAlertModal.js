__d("WAWebOpenCoexEditDeleteAlertModal", [
    "WAWebCoexEditDeleteAlertModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(alertType, onClose) {
        const Component = o("WAWebCoexEditDeleteAlertModal.react").WAWebCoexEditDeleteAlertModal;
        o("WAWebModalManager").ModalManager.openAlert(<Component alertType={alertType} onClose={onClose}/>);
    }
    function c(e, t) {
        const n = e ? o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.BUSINESS_EDIT : o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.CONSUMER_EDIT;
        UComponent(n, t);
    }
    function d(e, t) {
        const n = e ? o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.BUSINESS_DELETE : o("WAWebCoexEditDeleteAlertModal.react").CoexAlertType.CONSUMER_DELETE;
        UComponent(n, t);
    }
    l.openCoexEditAlertModal = c;
    l.openCoexDeleteAlertModal = d;
}, 98);