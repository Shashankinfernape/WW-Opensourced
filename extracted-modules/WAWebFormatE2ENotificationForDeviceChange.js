__d("WAWebFormatE2ENotificationForDeviceChange", [
    "fbt",
    "invariant",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebSystemMessageGatingUtils",
    "WAWebWidFormat"
], function(t, n, r, o, a, i, l, s, u) {
    function e(e, t = false) {
        if (e.subtype !== "device") {
            u(0, 56347);
        }
        const n = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled();
        let r = e.body != null && e.body !== "" ? o("WAWebContactCollection").ContactCollection.get(e.body) : null;
        let a;
        const i = e.devicesAdded === 1 && e.devicesRemoved === 0;
        const l = e.devicesAdded === 0 && e.devicesRemoved === 1;
        const c = !i && !l;
        if (r != null && o("WAWebContactGetters").getIsMe(r)) {
            const d = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
            if (o("WAWebChatGetters").getIsUser(d)) {
                const m = o("WAWebFrontendContactGetters").getFormattedName(d.contact);
                if (t) {
                    if (i) {
                        if (e.isThisDeviceAdded) {
                            a = s._("Your security code with {contactName} changed because there was a login on this device.", [
                                s._param("contactName", m)
                            ]);
                        } else {
                            a = s._("Your security code with {contactName} changed because there was a login on a new device of yours.", [
                                s._param("contactName", m)
                            ]);
                        }
                    } else if (l) {
                        a = s._("Your security code with {contactName} changed because there was a logout from one of your devices.", [
                            s._param("contactName", m)
                        ]);
                    } else if (c) {
                        a = s._("Your security code with {contactName} changed because there was a login or logout from one or more of your devices.", [
                            s._param("contactName", m)
                        ]);
                    }
                } else {
                    a = n ? s._("Your security code with {contactName} changed", [
                        s._param("contactName", m)
                    ]) : s._("Your security code with {contactName} changed. Click to learn more", [
                        s._param("contactName", m)
                    ]);
                }
            } else {
                if (o("WAWebChatGetters").getIsGroup(d)) {
                    if (t) {
                        if (i) {
                            if (e.isThisDeviceAdded) {
                                a = s._("Your security code with all members changed because there was a login on this device. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                            } else {
                                a = s._("Your security code with all members changed because there was a login on a new device of yours. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                            }
                        } else if (l) {
                            a = s._("Your security code with all members changed because there was a logout from one of your devices. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                        } else if (c) {
                            a = s._("Your security code with all members changed because there was a login or logout from one or more of your devices. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                        }
                    } else {
                        a = n ? s._("Your security code with all members changed") : s._("Your security code with all members changed. Click to learn more");
                    }
                } else if (o("WAWebChatGetters").getIsBroadcast(d)) {
                    if (t) {
                        if (i) {
                            if (e.isThisDeviceAdded) {
                                a = s._("Your security code with all recipients changed because there was a login on this device. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                            } else {
                                a = s._("Your security code with all recipients changed because there was a login on a new device of yours. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                            }
                        } else if (l) {
                            a = s._("Your security code with all recipients changed because there was a logout from one of your devices. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                        } else if (c) {
                            a = s._("Your security code with all recipients changed because there was a login or logout from one or more of your devices. To verify a contact's security code, open their contact info page and click \"Encryption\".");
                        }
                    } else {
                        a = n ? s._("Your security code with all recipients changed") : s._("Your security code with all recipients changed. Click to learn more");
                    }
                }
            }
        } else {
            const p = e.body;
            r = p == null ? null : o("WAWebContactCollection").ContactCollection.get(p);
            const _ = r ? o("WAWebFrontendContactGetters").getFormattedName(r) : o("WAWebWidFormat").widToFormattedUser(p);
            if (t) {
                if (i) {
                    a = s._("Your security code with {contactName} changed because they registered WhatsApp on their phone again.", [
                        s._param("contactName", _)
                    ]);
                } else if (l) {
                    a = s._("Your security code with {contactName} changed because there was a logout from one of their devices.", [
                        s._param("contactName", _)
                    ]);
                } else if (c) {
                    a = s._("Your security code with {contactName} changed because there was a login or logout from one or more of their devices.", [
                        s._param("contactName", _)
                    ]);
                }
            } else {
                a = n ? s._("Your security code with {contactName} changed", [
                    s._param("contactName", _)
                ]) : s._("Your security code with {contactName} changed. Click to learn more", [
                    s._param("contactName", _)
                ]);
            }
        }
        if (a == null) {
            u(0, 56348);
        }
        return {
            text: a
        };
    }
    function c(t, n = false) {
        return e(t, n).text;
    }
    function d(t, n = false) {
        return e(t, n).enumType;
    }
    l.formatE2ENotificationForDeviceChange = c;
    l.getE2ENotificationForDeviceChangeEnum = d;
}, 226);