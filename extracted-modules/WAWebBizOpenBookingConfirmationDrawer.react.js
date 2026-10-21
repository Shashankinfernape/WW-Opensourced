__d("WAWebBizOpenBookingConfirmationDrawer.react", [
    "WALogger",
    "WAWebBizBookingConfirmationDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebQueryExistsJob",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(bookingInfo, n) {
        const t_phoneNumber = bookingInfo.phoneNumber;
        const phoneExistsPromise = t_phoneNumber != null ? o("WAWebQueryExistsJob").queryPhoneExists(t_phoneNumber).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[booking] phone query failed"
            ])));
            return null;
        }) : null;
        const Component = o("WAWebBizBookingConfirmationDrawerLoadable").BizBookingConfirmationDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onClose={o("WAWebDrawerManager").closeDrawerRight} bookingInfo={bookingInfo} msg={n} phoneExistsPromise={phoneExistsPromise}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    l.openBookingConfirmationDrawer = c;
}, 98);