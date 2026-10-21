__d("WAWebNotificationIconUtils", [
    "Promise",
    "WAAbortError",
    "WACustomError",
    "WAFilteredCatch",
    "WALRUMap",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebCanvasUtils",
    "WAWebChatGetters",
    "WAWebEnvironment",
    "WAWebMediaLoad",
    "WAWebNoop",
    "WAWebNotificationTone",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "asyncToGeneratorRuntime",
    "bx",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = (c = r("bx")).getURL(c("11319"));
    const m = c.getURL(c("110728"));
    const p = c.getURL(c("9555"));
    const _ = c.getURL(c("9556"));
    const f = c.getURL(c("11370"));
    const g = 1500;
    function h(e) {
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            return f;
        }
        if (o("WAWebChatGetters").getIsGroup(e)) {
            return p;
        }
        return _;
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e.isLocked) {
                return d;
            }
            return b(e.id, t, n ?? h(e));
        });
        return C.apply(this, arguments);
    }
    function b(t, n, a) {
        return o("WAPromiseTimeout").promiseTimeout(r("WAPromiseRaceAbort")(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(t), n), g, "showNotificationTimeout").then((e)=>{
            if (n.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            const r = o("WAWebProfilePicThumbGetters").getMaybeImg(e) ?? a;
            return o("WAWebNotificationTone").cachePath(r);
        }).catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, function(n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "NotificationBackend:IconLoadTimeoutError:",
                ""
            ])), t.toString());
            return o("WAWebNotificationTone").cachePath(a);
        }));
    }
    const v = 192;
    const S = 8;
    const R = 160;
    const L = 24;
    const E = 76;
    const k = 17;
    const I = 4;
    const T = 250;
    const D = 5000;
    const x = 10;
    const $ = new (o("WALRUMap")).LRUMap({
        max: x
    });
    const P = new Set;
    let N = null;
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (r("WAWebEnvironment").isWindows || P.has(e)) {
                return e;
            }
            try {
                return yield o("WAPromiseTimeout").promiseTimeout(F(e), Math.min(t, T), "callNotificationIconBadgeTimeout");
            } catch (t) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "NotificationBackend:IconBadgeError"
                ])));
                return e;
            }
        });
        return w.apply(this, arguments);
    }
    function A() {
        if (!r("WAWebEnvironment").isWindows) {
            O().catch(r("WAWebNoop"));
        }
    }
    function F(e) {
        const t = $.get(e);
        if (t != null) {
            return t;
        }
        const r = B(e);
        r.catch(()=>{
            P.add(e);
        });
        const o = (u || (u = n("Promise"))).all([
            r,
            O()
        ]).then(([n, r])=>{
            try {
                return W(n, r);
            } catch (error) {
                P.add(e);
                throw error;
            }
        });
        $.set(e, o);
        o.catch(()=>{
            if ($.get(e) === o) {
                $.delete(e);
            }
        });
        return o;
    }
    function O() {
        if (N != null) {
            return N;
        }
        const e = B(d);
        N = e;
        e.catch(()=>{
            if (N === e) {
                N = null;
            }
        });
        return e;
    }
    function B(e) {
        return o("WAPromiseTimeout").promiseTimeout(o("WAWebMediaLoad").loadImage(e), D, "callNotificationIconLoadTimeout");
    }
    function W(e, t) {
        const n = o("WAWebCanvasUtils").createCanvas(v, v);
        const a = n.getContext("2d");
        if (!(a instanceof CanvasRenderingContext2D)) {
            throw r("err")("2d canvas context is unavailable");
        }
        if (e.width === 0 || e.height === 0 || t.width === 0 || t.height === 0) {
            throw r("err")("cannot badge an image with zero width or height");
        }
        a.save();
        q(a, S, R, L);
        a.clip();
        U(a, e, S, S, R, R);
        a.restore();
        const i = v - S - E;
        a.globalCompositeOperation = "destination-out";
        q(a, i - I, E + 2 * I, k + I);
        a.fill();
        a.globalCompositeOperation = "source-over";
        a.save();
        q(a, i, E, k);
        a.clip();
        U(a, t, i, i, E, E);
        a.restore();
        return n.toDataURL("image/png");
    }
    function q(e, t, n, r) {
        const o = t + n;
        e.beginPath();
        e.moveTo(t + r, t);
        e.arcTo(o, t, o, o, r);
        e.arcTo(o, o, t, o, r);
        e.arcTo(t, o, t, t, r);
        e.arcTo(t, t, o, t, r);
        e.closePath();
    }
    function U(e, t, n, r, o, a) {
        const i = Math.max(o / t.width, a / t.height);
        const l = o / i;
        const s = a / i;
        e.drawImage(t, (t.width - l) / 2, (t.height - s) / 2, l, s, n, r, o, a);
    }
    l.WHATSAPP_DEFAULT_ICON = d;
    l.WHATSAPP_BUSINESS_DEFAULT_ICON = m;
    l.USER_DEFAULT_ICON = _;
    l.NOTIFICATION_ICON_TIMEOUT_MS = g;
    l.getDefaultChatNotificationIcon = h;
    l.getChatNotificationIcon = y;
    l.getNotificationIconByWid = b;
    l.addWhatsAppBadgeToIcon = M;
    l.preloadWhatsAppBadge = A;
}, 98);