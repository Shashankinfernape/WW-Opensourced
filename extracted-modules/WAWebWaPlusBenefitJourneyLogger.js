__d("WAWebWaPlusBenefitJourneyLogger", [
    "WAWebAuraGating",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWaPlusBenefitUserJourneyWamEvent",
    "WAWebWamEnumWpbujAction",
    "WAWebWamEnumWpbujBenefitStatus",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujOutcomeName",
    "WAWebWamEnumWsuaProductType"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Set([
        (e = o("WAWebWamEnumWpbujBenefitType")).WPBUJ_BENEFIT_TYPE.STICKERS
    ]);
    const u = new Map;
    const c = new Map;
    function d(benefitType) {
        let t = u.get(benefitType);
        if (t == null) {
            t = r("WAWebPonyfillsCryptoRandomUUID")();
            u.set(benefitType, t);
        }
        return t;
    }
    function m(e) {
        u.delete(e);
        c.delete(e);
    }
    function p(e, t) {
        if (!s.has(e)) {
            return true;
        }
        let n = c.get(e);
        if (n == null) {
            n = new Set;
            c.set(e, n);
        }
        if (n.has(t)) {
            return false;
        }
        n.add(t);
        return true;
    }
    class _ {
        constructor(e){
            this.$1 = e.benefitType;
            this.$2 = e.surface;
            this.$3 = e.source;
            this.$4 = s.has(e.benefitType) ? d(e.benefitType) : r("WAWebPonyfillsCryptoRandomUUID")();
        }
        getSessionId() {
            return this.$4;
        }
        logView(t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.VIEW, t);
        }
        logSelect(t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.SELECT, t);
        }
        logApply(t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.APPLY, t);
        }
        logDownload(t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.DOWNLOAD, t);
        }
        $5(wpbujAction, n) {
            const r = {
                wpbujAction,
                wpbujBenefitStatus: g(this.$1),
                wpbujBenefitType: this.$1,
                wpbujOutcomeName: n.success ? o("WAWebWamEnumWpbujOutcomeName").WPBUJ_OUTCOME_NAME.SUCCESS : o("WAWebWamEnumWpbujOutcomeName").WPBUJ_OUTCOME_NAME.FAILED,
                wpbujSessionId: this.$4,
                wpbujSurface: n.surfaceOverride ?? this.$2,
                wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE.WA_PLUS
            };
            if (this.$3 != null) {
                r.wpbujSource = this.$3;
            }
            if (n.actionTarget != null) {
                r.wpbujActionTarget = n.actionTarget;
            }
            if (n.errorMessage != null) {
                r.wpbujErrorMessage = n.errorMessage;
            }
            if (n.customFields != null) {
                r.wpbujCustomFields = JSON.stringify(n.customFields);
            }
            new (o("WAWebWaPlusBenefitUserJourneyWamEvent")).WaPlusBenefitUserJourneyWamEvent(r).commit();
        }
    }
    const f = new Map([
        [
            e.WPBUJ_BENEFIT_TYPE.STICKERS,
            {
                isActive: function() {
                    return r("WAWebAuraGating").isStickersBenefitActive();
                },
                isEnabled: function() {
                    return r("WAWebAuraGating").isStickersEnabled();
                }
            }
        ],
        [
            e.WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
            {
                isActive: function() {
                    return r("WAWebAuraGating").isPinnedChatsBenefitActive();
                },
                isEnabled: function() {
                    return r("WAWebAuraGating").isPinnedChatsEnabled();
                }
            }
        ],
        [
            e.WPBUJ_BENEFIT_TYPE.RINGTONES,
            {
                isActive: function() {
                    return r("WAWebAuraGating").isRingtonesBenefitActive();
                },
                isEnabled: function() {
                    return r("WAWebAuraGating").isRingtonesEnabled();
                }
            }
        ]
    ]);
    function g(e) {
        const t = f.get(e);
        if (t == null) {
            return o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.DISABLED;
        }
        return h(t.isActive(), t.isEnabled());
    }
    function h(e, t) {
        if (e) {
            return o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.ACTIVE;
        }
        if (t) {
            return o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.NOT_ACTIVE;
        }
        return o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.DISABLED;
    }
    l.clearSharedSessionId = m;
    l.shouldLogTargetOnceForBenefit = p;
    l.WaPlusBenefitJourneyLogger = _;
    l.resolveBenefitStatus = g;
}, 98);