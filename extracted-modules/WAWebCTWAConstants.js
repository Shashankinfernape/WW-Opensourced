__d("WAWebCTWAConstants", [], function(t, n, r, o, a, i) {
    const e = "11478";
    const l = "11115";
    const s = "11525";
    const u = "11522";
    const c = "12015";
    const d = "13329";
    const m = "12502";
    const p = "12503";
    const _ = new Map([
        [
            e,
            "WHATSAPP_FOR_SMB_WEB_WHATSAPP_SMB_WEB_CHATLIST_BANNER_QP"
        ],
        [
            l,
            "WHATSAPP_FOR_WEB_WA_BANNER_WEB_QP"
        ],
        [
            s,
            "WHATSAPP_FOR_WEB_GROUPSBANNER_QP"
        ],
        [
            u,
            "WHATSAPP_FOR_WEB_PROFILEBANNER_QP"
        ],
        [
            c,
            "WHATSAPP_FOR_SMB_WEB_BUSINESS_HOME_CARD_QP"
        ],
        [
            d,
            "WHATSAPP_FOR_SMB_WEB_BUSINESS_BROADCAST_HOME_CARD_QP"
        ],
        [
            p,
            "WHATSAPP_FOR_SMB_WEB_UPDATES_TAB_FOOTER_NOTICE_QP"
        ],
        [
            m,
            "WHATSAPP_FOR_WEB_UPDATES_TAB_FOOTER_NOTICE_QP"
        ]
    ]);
    const f = 20 * 1000;
    const g = 20 * 1000;
    const h = Object.freeze({
        FOLLOW_UP: 7,
        LEAD: 8,
        NEW_CUSTOMER: 1,
        NEW_ORDER: 2,
        ORDER_COMPLETE: 5,
        PAID: 4,
        PENDING_PAYMENT: 3
    });
    const y = new Set(Object.keys(h).map((e)=>h[e]));
    const C = 7;
    const b = 8;
    const v = 6;
    const S = 2;
    i.QP_SURFACE_ID_CHAT_LIST_TOP = e;
    i.QP_SURFACE_ID_WA_BANNER_WEB = l;
    i.QP_SURFACE_ID_EXITED_GROUP = s;
    i.QP_SURFACE_ID_PROFILE = u;
    i.QP_SURFACE_BUSINESS_HOME_TOP_CARD = c;
    i.QP_SURFACE_ID_BB_HOME = d;
    i.QP_SURFACE_UPDATES_TAB_PRIVACY_FOOTER = m;
    i.KNOWN_QP_SURFACES = _;
    i.QP_FETCH_TIMEOUT_MS = f;
    i.QP_ACTION_MUTATION_TIMEOUT_MS = g;
    i.ALLOWED_PREDEFINED_LABEL_IDS = h;
    i.ALLOWED_PREDEFINED_LABEL_IDS_SET = y;
    i.FOLLOW_UP_PREDEFINED_ID = C;
    i.LEAD_PREDEFINED_ID = b;
    i.IMPORTANT_PREDEFINED_ID = v;
    i.NEW_ORDER_PREDEFINED_ID = S;
}, 66);