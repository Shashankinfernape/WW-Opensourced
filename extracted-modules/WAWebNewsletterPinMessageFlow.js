__d("WAWebNewsletterPinMessageFlow", [
    "fbt",
    "WATimeUtils",
    "WAWebClock",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterPinDisplay",
    "WAWebNewsletterPinMessageAction",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = 4;
    function d({ serverId }) {
        if (serverId == null || serverId >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND) {
            return null;
        }
        return serverId;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebConfirmPopup.react").waitForConfirmPopup({
                title: s._("Couldn't update pin"),
                children: s._("Check your connection and try again."),
                okText: s._("Retry"),
                cancelText: s._("Cancel"),
                testid: "channel-pin-retry"
            });
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                yield e(t, n);
            } catch (r) {
                if (yield m()) {
                    yield _(e, t, n);
                }
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        const t = o("WATimeUtils").castToUnixTime(e.t + o("WAWebNewsletterPinDisplay").NEWSLETTER_MAX_PINNABLE_MSG_AGE_SECONDS);
        if (o("WATimeUtils").sameDay(o("WATimeUtils").unixTime(), t)) {
            return s._("This update will be pinned until {expiry} today. You can unpin at any time.", [
                s._param("expiry", o("WAWebClock").Clock.timestampStr(t))
            ]);
        }
        return s._("This update will be pinned until {expiry}. You can unpin at any time.", [
            s._param("expiry", o("WAWebClock").Clock.monthDayStr(t))
        ]);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = d(t);
            if (a != null) {
                if (o("WAWebNewsletterPinDisplay").isNewsletterMsgTooOldToPin(t)) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterPinTooOldPopup, {}));
                    return;
                }
                const i = o("WAWebNewsletterPinDisplay").filterActiveNewsletterPins(e.newsletterMetadata?.pinnedMessages ?? [], o("WATimeUtils").unixTime()).length >= c;
                const l = yield o("WAWebConfirmPopup.react").waitForConfirmPopup(i ? {
                    title: s._("Replace oldest pin?"),
                    children: s._("Your new pin will replace the oldest pinned update."),
                    okText: s._("Pin"),
                    cancelText: s._("Cancel"),
                    testid: "channel-pin-replace-confirm"
                } : {
                    children: g(t),
                    okText: s._("Pin"),
                    cancelText: s._("Cancel"),
                    testid: "channel-pin-confirm"
                });
                if (l) {
                    yield _(o("WAWebNewsletterPinMessageAction").pinNewsletterMessage, e, a);
                }
            }
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = d(t);
            if (n != null) {
                const r = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                    title: s._("Unpin this update?"),
                    okText: s._("Unpin"),
                    cancelText: s._("Cancel"),
                    testid: "channel-unpin-confirm"
                });
                if (r) {
                    yield _(o("WAWebNewsletterPinMessageAction").unpinNewsletterMessage, e, n);
                }
            }
        });
        return b.apply(this, arguments);
    }
    l.runPinNewsletterMessageFlow = h;
    l.runUnpinNewsletterMessageFlow = C;
}, 226);