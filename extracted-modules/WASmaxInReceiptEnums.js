__d("WASmaxInReceiptEnums", [
    "WAJids"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        0: "0",
        1: "1",
        7: "7"
    };
    const u = {
        1002: "1002",
        1007: "1007",
        1008: "1008"
    };
    const c = {
        all: "all",
        none: "none"
    };
    const d = {
        "body-link": "body-link",
        "cta-app": "cta-app",
        "cta-call": "cta-call",
        "cta-url": "cta-url",
        "media-doc": "media-doc",
        "media-image": "media-image",
        "media-video": "media-video",
        "quick-reply": "quick-reply"
    };
    const m = {
        "cancellation-failed": "cancellation-failed",
        "invalid-transition": "invalid-transition"
    };
    const p = {
        CBP: "CBP",
        NBP: "NBP",
        PMP: "PMP"
    };
    const _ = {
        content: "content",
        title: "title"
    };
    const f = {
        delivery: "delivery",
        inactive: "inactive",
        played: "played",
        read: "read"
    };
    const g = {
        delivery: "delivery",
        no_optimization: "no_optimization"
    };
    const h = {
        deliver: "deliver",
        delivery: "delivery"
    };
    const y = {
        false: "false",
        true: "true"
    };
    const C = {
        free_customer_service: "free_customer_service",
        free_entry_point: "free_entry_point",
        regular: "regular"
    };
    const b = {
        "hsm-envelope-mismatch": "hsm-envelope-mismatch",
        "structure-unavailable": "structure-unavailable"
    };
    const v = {
        validators: [
            (e = o("WAJids")).validateBroadcastJid,
            e.validateGroupJid
        ],
        typeName: "BroadcastJid|GroupJid"
    };
    const S = {
        validators: [
            e.validateBroadcastJid,
            e.validateGroupJid,
            e.validateNewsletterJid,
            e.validateStatusJid
        ],
        typeName: "BroadcastJid|GroupJid|NewsletterJid|StatusJid"
    };
    const R = {
        validators: [
            e.validateDeviceJid,
            e.validateBroadcastJid,
            e.validateDeviceJid,
            e.validateGroupJid,
            e.validateInteropDeviceJid,
            e.validateInteropDeviceJid,
            e.validateNewsletterJid
        ],
        typeName: "DeviceJid|BroadcastJid|DeviceJid|GroupJid|InteropDeviceJid|InteropDeviceJid|NewsletterJid"
    };
    const L = {
        validators: [
            e.validateDeviceJid,
            e.validateBroadcastJid,
            e.validateDeviceJid,
            e.validateGroupJid,
            e.validateInteropDeviceJid,
            e.validateInteropDeviceJid,
            e.validateNewsletterJid,
            e.validateStatusJid
        ],
        typeName: "DeviceJid|BroadcastJid|DeviceJid|GroupJid|InteropDeviceJid|InteropDeviceJid|NewsletterJid|StatusJid"
    };
    const E = {
        validators: [
            e.validateDeviceJid,
            e.validateDeviceJid,
            e.validateInteropDeviceJid,
            e.validateInteropDeviceJid
        ],
        typeName: "DeviceJid|DeviceJid|InteropDeviceJid|InteropDeviceJid"
    };
    const k = {
        validators: [
            e.validateDeviceJid,
            e.validateDeviceJid,
            e.validateUserJid,
            e.validateUserJid
        ],
        typeName: "DeviceJid|DeviceJid|UserJid|UserJid"
    };
    const I = {
        validators: [
            e.validateDeviceJid,
            e.validateUserJid,
            e.validateDeviceJid,
            e.validateUserJid,
            e.validateUserJid,
            e.validateUserJid
        ],
        typeName: "DeviceJid|UserJid|DeviceJid|UserJid|UserJid|UserJid"
    };
    const T = {
        validators: [
            e.validateUserJid,
            e.validateLidUserJid,
            e.validateUserJid
        ],
        typeName: "UserJid|LidUserJid|UserJid"
    };
    const D = {
        validators: [
            e.validateUserJid,
            e.validateUserJid
        ],
        typeName: "UserJid|UserJid"
    };
    l.ENUM_0_1_7 = s;
    l.ENUM_1002_1007_1008 = u;
    l.ENUM_ALL_NONE = c;
    l.ENUM_BODYLINK_CTAAPP_CTACALL_CTAURL_MEDIADOC_MEDIAIMAGE_MEDIAVIDEO_QUICKREPLY = d;
    l.ENUM_CANCELLATIONFAILED_INVALIDTRANSITION = m;
    l.ENUM_CBP_NBP_PMP = p;
    l.ENUM_CONTENT_TITLE = _;
    l.ENUM_DELIVERY_INACTIVE_PLAYED_READ = f;
    l.ENUM_DELIVERY_NOOPTIMIZATION = g;
    l.ENUM_DELIVER_DELIVERY = h;
    l.ENUM_FALSE_TRUE = y;
    l.ENUM_FREECUSTOMERSERVICE_FREEENTRYPOINT_REGULAR = C;
    l.ENUM_HSMENVELOPEMISMATCH_STRUCTUREUNAVAILABLE = b;
    l.BROADCASTJID_GROUPJID = v;
    l.BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID = S;
    l.DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_NEWSLETTERJID = R;
    l.DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_NEWSLETTERJID_STATUSJID = L;
    l.DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID = E;
    l.DEVICEJID_DEVICEJID_USERJID_USERJID = k;
    l.DEVICEJID_USERJID_DEVICEJID_USERJID_USERJID_USERJID = I;
    l.USERJID_LIDUSERJID_USERJID = T;
    l.USERJID_USERJID = D;
}, 98);