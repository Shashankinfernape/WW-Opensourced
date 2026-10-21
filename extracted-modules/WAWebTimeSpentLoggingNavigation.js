__d("WAWebTimeSpentLoggingNavigation", [
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebCanonicalUtils",
    "WAWebTimeSpentLoggingSession",
    "WAWebTsNavigationWamEvent",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumTsSurface",
    "gkx",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = (m || (m = o("react"))).useEffect;
    const _ = {
        unknown: o("WAWebWamEnumTsSurface").TS_SURFACE.UNKNOWN,
        "chat-list": o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST,
        chat: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
        "community-tab": o("WAWebWamEnumTsSurface").TS_SURFACE.COMMUNITY_TAB,
        "community-info": o("WAWebWamEnumTsSurface").TS_SURFACE.COMMUNITY_HOME,
        "community-navigation": o("WAWebWamEnumTsSurface").TS_SURFACE.COMMUNITY_NAVIGATION,
        "community-subgroup-switcher": o("WAWebWamEnumTsSurface").TS_SURFACE.SUBGROUP_SWITCHER,
        "group-info-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE,
        "contact-info-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE,
        "new-chat": o("WAWebWamEnumTsSurface").TS_SURFACE.NEW_CHAT,
        "new-community-info-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.COMMUNITY_COMPOSER,
        "media-viewer": o("WAWebWamEnumTsSurface").TS_SURFACE.MEDIA_VIEWER,
        "media-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.ALL_MEDIA,
        camera: o("WAWebWamEnumTsSurface").TS_SURFACE.CAMERA,
        "youtube-player": o("WAWebWamEnumTsSurface").TS_SURFACE.STREAMING_MEDIA_VIEWER,
        "settings-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.SETTINGS_HOME_TAB,
        background: o("WAWebWamEnumTsSurface").TS_SURFACE.BACKGROUND,
        "tools-tab": o("WAWebWamEnumTsSurface").TS_SURFACE.TOOLS_TAB,
        "archived-chats-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.ARCHIVED_MESSAGES_TAB,
        "starred-messages-drawer": o("WAWebWamEnumTsSurface").TS_SURFACE.STARRED_MESSAGES_TAB,
        "forward-selection-modal": o("WAWebWamEnumTsSurface").TS_SURFACE.FORWARD_SELECTION_SCREEN,
        "profile-picture-preview": o("WAWebWamEnumTsSurface").TS_SURFACE.PROFILE_PICTURE_PREVIEW,
        "self-profile": o("WAWebWamEnumTsSurface").TS_SURFACE.SELF_PROFILE,
        status: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_HOME_TAB,
        "status-view": o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW,
        "status-composer-text": o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_COMPOSER_TEXT,
        "status-composer-media": o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_COMPOSER,
        "status-viewer-list": o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEWER_SHEET,
        "status-audience-selector": o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_AUDIENCE_SELECTOR,
        "channel-updates-home": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME,
        "channel-updates-home-search": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME_SEARCH,
        "channel-thread": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD,
        "channel-directory-home": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY,
        "channel-directory-search": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_SEARCH,
        "channel-directory-categories-home": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_CATEGORIES,
        "channel-directory-categories-search": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_CATEGORIES_SEARCH,
        "channel-profile": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE,
        "channel-link": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_LINK,
        "channel-forward": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_FORWARD,
        "channel-producer-media-editor": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PRODUCER_MEDIA_EDITOR,
        "channel-edit-page": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_EDIT,
        "channel-create-page": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_CREATE,
        "channel-delete-page": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DELETE,
        "channel-insights-reach": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PRODUCER_INSIGHTS_REACH,
        "channel-insights-growth": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PRODUCER_INSIGHTS_GROWTH,
        "channel-insights-followers": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PRODUCER_INSIGHTS_FOLLOWERS,
        "channel-notifications-settings": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_NOTIFICATIONS_SETTINGS,
        "channel-response-viewer": o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_RESPONSE_VIEWER,
        "create-event": o("WAWebWamEnumTsSurface").TS_SURFACE.CREATE_EVENT,
        "event-info": o("WAWebWamEnumTsSurface").TS_SURFACE.EVENT_PAGE,
        "events-in-group": o("WAWebWamEnumTsSurface").TS_SURFACE.EVENTS_IN_GROUP,
        "list-management": o("WAWebWamEnumTsSurface").TS_SURFACE.LIST_MANAGEMENT,
        "smb-business-profile": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_BUSINESS_PROFILE_EDIT,
        "smb-business-profile-edit-business-hours-detail": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_BUSINESS_PROFILE_EDIT_BUSINESS_HOURS_DETAIL,
        "smb-business-profile-edit-categories": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_BUSINESS_PROFILE_EDIT_CATEGORIES,
        "smb-quick-reply-list": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_QUICK_REPLY_LIST,
        "smb-quick-reply-edit": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_QUICK_REPLY_EDIT,
        "smb-quick-reply-add": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_QUICK_REPLY_ADD,
        "smb-labels-list": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LABELS_LIST,
        "smb-labels-detail": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LABEL_DETAIL,
        "smb-labels-edit": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LABEL_EDIT,
        "smb-lists-manage": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LISTS_MANAGE,
        "smb-lists-create": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LISTS_CREATE,
        "smb-lists-picker": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LISTS_PICKER,
        "contact-creation": o("WAWebWamEnumTsSurface").TS_SURFACE.CONTACT_CREATION,
        "new-group-contact-creation": o("WAWebWamEnumTsSurface").TS_SURFACE.NEW_GROUP_CONTACT_CREATION,
        "group-member-add-group-creation": o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_GROUP_CREATION,
        "group-member-add-existing-group": o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP,
        "group-creation": o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CREATION,
        "bug-reporting-composer-media": o("WAWebWamEnumTsSurface").TS_SURFACE.BUG_REPORTING_COMPOSER_MEDIA,
        "smb-catalog": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG,
        "smb-catalog-share-link": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_SHARE_LINK,
        "smb-catalog-share-product-link": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_SHARE_PRODUCT_LINK,
        "smb-catalog-settings": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_SETTINGS,
        "smb-catalog-product": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_PRODUCT,
        "smb-catalog-new-collection": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_NEW_COLLECTION,
        "smb-catalog-edit-collection": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_EDIT_COLLECTION,
        "smb-catalog-edit-product": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_EDIT_PRODUCT,
        "smb-catalog-create-product": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_CREATE_PRODUCT,
        "smb-catalog-collection-products": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_CATALOG_COLLECTION_PRODUCTS,
        "catalog-cart": o("WAWebWamEnumTsSurface").TS_SURFACE.CATALOG_CART,
        "catalog-item": o("WAWebWamEnumTsSurface").TS_SURFACE.CATALOG_ITEM,
        "catalog-home": o("WAWebWamEnumTsSurface").TS_SURFACE.CATALOG_HOME,
        "catalog-collection": o("WAWebWamEnumTsSurface").TS_SURFACE.CATALOG_COLLECTION,
        "smb-orders-hub": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_ORDERS_HUB,
        "smb-order-details": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_ORDER_DETAILS,
        "smb-sent-cart-details": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_SENT_CART_DETAILS,
        "smb-label-edit-color": o("WAWebWamEnumTsSurface").TS_SURFACE.SMB_LABEL_EDIT_COLOR,
        "bb-imported-contact-wizard": o("WAWebWamEnumTsSurface").TS_SURFACE.BUSINESS_BROADCAST_IMPORTED_CONTACT_WIZARD,
        "bb-edit-contact": o("WAWebWamEnumTsSurface").TS_SURFACE.BUSINESS_BROADCAST_EDIT_CONTACT,
        "ad-creation-flow-media-composer": o("WAWebWamEnumTsSurface").TS_SURFACE.MEDIA_COMPOSER,
        search: o("WAWebWamEnumTsSurface").TS_SURFACE.SEARCH,
        "message-edit": o("WAWebWamEnumTsSurface").TS_SURFACE.MESSAGE_EDIT,
        "group-msg-info": o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MESSAGE_INFO,
        "contact-msg-info": o("WAWebWamEnumTsSurface").TS_SURFACE.CONTACT_MESSAGE_INFO,
        "polls-details": o("WAWebWamEnumTsSurface").TS_SURFACE.POLL_DETAILS,
        "contact-viewer": o("WAWebWamEnumTsSurface").TS_SURFACE.CONTACT_VIEWER,
        "delete-message": o("WAWebWamEnumTsSurface").TS_SURFACE.DELETE_MESSAGE,
        "pin-message-replacement": o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_REPLACEMENT_DIALOG,
        "pin-message-expiration": o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_EXPIRATION_DIALOG,
        "guide-popup": o("WAWebWamEnumTsSurface").TS_SURFACE.GUIDE_POPUP,
        "clear-chat": o("WAWebWamEnumTsSurface").TS_SURFACE.CLEAR_CHAT,
        "delete-chat": o("WAWebWamEnumTsSurface").TS_SURFACE.DELETE_CHAT,
        "block-business": o("WAWebWamEnumTsSurface").TS_SURFACE.BLOCK_BUSINESS,
        "block-contact": o("WAWebWamEnumTsSurface").TS_SURFACE.BLOCK_CONTACT,
        report: o("WAWebWamEnumTsSurface").TS_SURFACE.REPORT,
        "about-whatsapp-business": o("WAWebWamEnumTsSurface").TS_SURFACE.ABOUT_WHATSAPP_BUSINESS,
        "send-contacts": o("WAWebWamEnumTsSurface").TS_SURFACE.SEND_CONTACTS,
        "connectors-hatch": o("WAWebWamEnumTsSurface").TS_SURFACE.CONNECTORS_HATCH,
        "connector-detail-hatch": o("WAWebWamEnumTsSurface").TS_SURFACE.CONNECTOR_DETAIL_HATCH
    };
    let f;
    const g = [];
    function h(e) {
        p(function() {
            if (e != null) {
                const t = y(e);
                return function() {
                    return b(t);
                };
            }
        }, []);
    }
    function y(e) {
        const n = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        const r = C(e) ? {
            id: n,
            surface: "unknown",
            viewName: e.viewName
        } : babelHelpers.extends({}, e, {
            id: n
        });
        const o = g[g.length - 1] ?? {
            surface: "background",
            id: -1
        };
        g.push(r);
        w();
        R(o);
        return n;
    }
    function C(e) {
        return (1 << _[e.surface] & o("WAWebABProps").getABPropConfigValue("ts_surface_killswitch")) !== 0;
    }
    function b(t) {
        const n = g.findIndex((e)=>e.id === t);
        if (n === -1) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ts-nav] cleanup id ",
                " not visible"
            ])), t);
            return;
        }
        const r = g[n];
        g.splice(n, 1);
        w();
        R(r);
    }
    let v = [];
    const S = new (o("WAShiftTimer")).ShiftTimer(function() {
        if (v.length === 0) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent][nav] flushing empty queue!"
            ])));
            return;
        }
        let e;
        for (const t of v){
            if (e == null) {
                e = t;
                continue;
            }
            if (e.destId === t.sourceId) {
                t.event.navigationSource = e.event.navigationSource;
                t.event.relativeTimestampMs = e.event.relativeTimestampMs;
                t.sourceSurface = e.sourceSurface;
            } else {
                e.event.commit();
                P(e.sourceSurface, e.destSurface, e.destNavigationSurface);
            }
            e = t;
        }
        if (e != null) {
            e.event.commit();
            P(e.sourceSurface, e.destSurface, e.destNavigationSurface);
        }
        v = [];
    });
    function R(e) {
        let p = g[g.length - 1];
        if (p == null) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent][nav] missing destination for navigation from ",
                ""
            ])), e.surface);
            p = {
                surface: "unknown",
                id: -1
            };
        }
        if (p.id !== f?.id) {
            const h = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession();
            T();
            if (e.surface === "unknown" && p.surface === "unknown") {
                w();
                return;
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[tsNavigation] navigation from ",
                " to ",
                " with viewName ",
                ""
            ])), e.surface, p.surface, p.viewName);
            const y = new (o("WAWebTsNavigationWamEvent")).TsNavigationWamEvent({
                tsSessionId: h.id,
                relativeTimestampMs: h.relativeTimestampMs,
                navigationSource: _[e.surface],
                navigationDestination: _[p.surface],
                navigationDestinationProductArea: p.extras?.navigationDestinationProductArea,
                groupSize: p.extras?.groupSize,
                typeOfGroup: p.extras?.typeOfGroup,
                threadType: p.extras?.threadType,
                cid: p.extras?.channelWid?.user,
                isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent()
            });
            const C = p.viewName ?? "";
            if (C != null) {
                y.navigationDestinationViewName = C;
            }
            if (h.tsTimestampMs != null) {
                y.tsTimestampMs = h.tsTimestampMs;
            }
            if (h.unifiedSessionId != null) {
                y.unifiedSessionId = h.unifiedSessionId;
            }
            v.push({
                sourceId: e.id,
                destId: p.id,
                sourceSurface: e.viewName ?? e.surface,
                destSurface: p.viewName ?? p.surface,
                destNavigationSurface: p.surface,
                event: y
            });
            S.onOrBefore(100);
            f = p;
        }
    }
    let L = null;
    function E() {
        L = y({
            surface: "background"
        });
    }
    function k() {
        let e = "unknown";
        if (g.length > 0) {
            e = g[g.length - 1].surface;
        }
        return e;
    }
    function I() {
        const n = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession();
        const a = k();
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_PENDING_BACKGROUND_NAVIGATION, {
            id: n.id,
            relativeTimestampMs: n.relativeTimestampMs,
            source: a,
            tsTimestampMs: n.tsTimestampMs ?? null,
            unifiedSessionId: n.unifiedSessionId ?? null
        });
    }
    function T() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_PENDING_BACKGROUND_NAVIGATION);
        if (!(e == null || typeof e !== "object")) {
            const { id: t, relativeTimestampMs: n, source: a } = e;
            if (!(typeof t !== "number" || typeof n !== "number" || typeof a !== "string") && _[a] != null) {
                const i = new (o("WAWebTsNavigationWamEvent")).TsNavigationWamEvent({
                    tsSessionId: t,
                    relativeTimestampMs: n,
                    navigationSource: _[a],
                    navigationDestination: _.background,
                    isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent()
                });
                if (typeof e.tsTimestampMs === "number") {
                    i.tsTimestampMs = e.tsTimestampMs;
                }
                if (typeof e.unifiedSessionId === "string") {
                    i.unifiedSessionId = e.unifiedSessionId;
                }
                i.commit();
                r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_PENDING_BACKGROUND_NAVIGATION, null);
            }
        }
    }
    function D() {
        if (L != null) {
            b(L);
        }
    }
    var x = new Set;
    function $(e) {
        x.add(e);
        return function() {
            x.delete(e);
        };
    }
    function P(e, t, n) {
        for (const r of x){
            try {
                r(e, t, n);
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[time-spent][nav] Navigation listener threw: ",
                    ""
                ])), e);
            }
        }
    }
    let N = false;
    function M() {
        if (!r("gkx")("26258")) {
            N = !N;
        }
    }
    function w() {
        if (r("gkx")("26258")) {
            return false;
        }
        return N;
    }
    l.useTsNavigation = h;
    l.tsNavigationEnter = y;
    l.tsNavigationExit = b;
    l.logTsBackgroundNavigation = E;
    l.setPendingBackgroundNavigation = I;
    l.logTsForegroundNavigation = D;
    l.addNavigationListener = $;
    l.toggleTsNavigationDebug = M;
}, 98);