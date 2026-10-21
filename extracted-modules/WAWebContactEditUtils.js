__d("WAWebContactEditUtils", [
    "WAWebContactEditDrawer.react",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebNativeContactsNuxPopup.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(contactData, t) {
        if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebNativeContactsNuxPopup.react"), {
                source: t
            }));
            return;
        }
        o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
        const Component = r("WAWebContactEditDrawer.react");
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component origin={t} contactData={contactData} onSave={o("WAWebDrawerManager").closeDrawerRight} onCancel={o("WAWebDrawerManager").closeDrawerRight}/>);
    }
    l.openContactEditDrawer = u;
}, 98);