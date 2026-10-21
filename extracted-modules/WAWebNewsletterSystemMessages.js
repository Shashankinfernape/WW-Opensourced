__d("WAWebNewsletterSystemMessages", [
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebContactSystemMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    const e = new Map([
        [
            "newsletter_privacy",
            10
        ],
        [
            "newsletter_created",
            20
        ],
        [
            "newsletter_admin_context_card",
            30
        ],
        [
            "newsletter_deleted",
            Number.MAX_SAFE_INTEGER
        ]
    ]);
    const s = 100;
    const u = 2147476647;
    function c({ serverId }) {
        if (serverId == null) {
            return false;
        }
        return serverId < s;
    }
    function d({ serverId }) {
        if (serverId == null) {
            return false;
        }
        const r = Array.from(e.values());
        const o = Math.min(...r);
        return serverId === o;
    }
    function m(t, n) {
        const i = e.get(n.subtype);
        const l = babelHelpers.extends({}, o("WAWebContactSystemMsg").genNotificationMsg(t, babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION,
            kind: o("WAWebMsgType").MsgKind.NewsletterNotification,
            serverId: i,
            templateParams: n.templateParams ?? []
        })), {
            id: new (r("WAWebMsgKey"))({
                fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
                remote: t,
                id: i != null ? i.toString(10) : r("WAWebMsgKey").newId_DEPRECATED()
            })
        });
        return l;
    }
    function p({ id, name, role, t: t_1 }) {
        const i = role ?? o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
        const l = t_1 != null ? o("WATimeUtils").castToUnixTime(t_1) : o("WATimeUtils").unixTime();
        const s = m(o("WAWebWidFactory").createWid(id.toString()), {
            subtype: "newsletter_privacy",
            templateParams: [
                i
            ],
            t: l
        });
        const u = m(o("WAWebWidFactory").createWid(id.toString()), {
            subtype: "newsletter_created",
            templateParams: name != null ? [
                name,
                i
            ] : [],
            t: l
        });
        if (o("WAWebNewsletterGatingUtils").isNewsletterAdminContextCardEnabled(i)) {
            const c = m(o("WAWebWidFactory").createWid(id.toString()), {
                subtype: "newsletter_admin_context_card",
                templateParams: [
                    id.toString()
                ],
                t: l
            });
            return [
                s,
                u,
                c
            ];
        }
        return [
            s,
            u
        ];
    }
    function _({ id, name }) {
        const r = m(o("WAWebWidFactory").createWid(id.toString()), {
            subtype: "newsletter_deleted",
            templateParams: [
                name
            ],
            t: o("WATimeUtils").unixTime()
        });
        return [
            r
        ];
    }
    l.EARLIEST_AVAILABLE_MESSAGE_ID = s;
    l.LATEST_AVAILABLE_MESSAGE_ID = u;
    l.isNewsletterSystemMsg = c;
    l.isEarliestNewsletterSystemMsg = d;
    l.genNewsletterCreationSystemMessages = p;
    l.genNewsletterDeletionSystemMessages = _;
}, 98);