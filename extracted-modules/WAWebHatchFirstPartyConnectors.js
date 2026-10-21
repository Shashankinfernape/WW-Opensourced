__d("WAWebHatchFirstPartyConnectors", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = Object.freeze({
        facebook: {
            avatarField: "profile_pic_url",
            idField: "fb_user_id",
            nameField: "name",
            wireValue: "facebook"
        },
        instagram: {
            avatarField: "profile_picture_url",
            idField: "user_fbid",
            nameField: "username",
            wireValue: "instagram"
        },
        instagram_messages: {
            avatarField: "profile_picture_url",
            idField: "user_fbid",
            nameField: "username",
            wireValue: "instagram_messages"
        },
        threads: {
            avatarField: "profile_pic_url",
            idField: "id",
            nameField: "username",
            wireValue: "threads"
        },
        threads_messages: {
            avatarField: "profile_pic_url",
            idField: "id",
            nameField: "username",
            wireValue: "threads_messages"
        },
        meta_business: {
            avatarField: "profile_picture_url",
            idField: "id",
            nameField: "label",
            wireValue: "meta_business"
        }
    });
    const l = new Map([
        [
            "facebook",
            _("facebook", "facebook", {
                isAccountsCenterManaged: true
            })
        ],
        [
            "facebook_cli",
            _("facebook_cli", "facebook", {
                isAccountsCenterManaged: true
            })
        ],
        [
            "instagram",
            _("instagram", "instagram", {
                isAccountsCenterManaged: true
            })
        ],
        [
            "instagram_messages",
            _("instagram_messages", "instagram_messages", {
                canManageAccountSelection: true,
                requiresAccountSelection: true
            })
        ],
        [
            "meta_business",
            _("meta_business", "meta_business", {
                listsAccountsOnConsent: true
            })
        ],
        [
            "threads",
            _("threads", "threads", {
                isAccountsCenterManaged: true
            })
        ],
        [
            "threads_messages",
            _("threads_messages", "threads_messages", {
                canManageAccountSelection: true,
                requiresAccountSelection: true
            })
        ]
    ]);
    const s = "https://accountscenter.meta.com/";
    const u = Object.freeze({
        facebook: "HATCH_ACCOUNT_LINK_FB_UPSELL",
        instagram: "HATCH_ACCOUNT_LINK_IG_UPSELL",
        instagram_messages: "HATCH_ACCOUNT_LINK_IG_UPSELL",
        meta_business: "HATCH_ACCOUNT_LINK_FB_UPSELL",
        threads: "HATCH_ACCOUNT_LINK_TH_UPSELL",
        threads_messages: "HATCH_ACCOUNT_LINK_TH_UPSELL"
    });
    function c(e) {
        return l.get(e) ?? null;
    }
    function d(e) {
        return c(e) != null;
    }
    function m(t) {
        return e[t];
    }
    function p(e) {
        return `${s}add_accounts?flow=${u[e]}`;
    }
    function _(connectorId, app, n) {
        return babelHelpers.extends({
            app,
            canManageAccountSelection: false,
            connectorId,
            isAccountsCenterManaged: false,
            listsAccountsOnConsent: false,
            requiresAccountSelection: false
        }, n);
    }
    i.HATCH_ACCOUNTS_CENTER_HOME_URL = s;
    i.getHatchFirstPartyConnector = c;
    i.isHatchFirstPartyConnector = d;
    i.getHatchFoaAppConfig = m;
    i.getHatchAccountsCenterUrl = p;
}, 66);