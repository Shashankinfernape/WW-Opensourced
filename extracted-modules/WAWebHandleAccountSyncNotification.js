__d("WAWebHandleAccountSyncNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebABProps",
    "WAWebAccountSyncJob",
    "WAWebAdvHandlerApi",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebBizCoexUtils",
    "WAWebCommsWapMd",
    "WAWebContactSyncLogger",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebGetAboutQueryJob",
    "WAWebGetDisappearingModeJob",
    "WAWebJidToWid",
    "WAWebMexUsersGetAboutStatus",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebSetUsernameJob",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = (t)=>{
        const n = t.maybeChild("key-index-list");
        const keyIndex = n == null ? null : {
            ts: n.attrTime("ts"),
            signedKeyIndexBytes: n.hasContent() ? n.contentBytes() : null,
            expectedTs: n.maybeAttrTime("expected_ts") ?? undefined
        };
        const a = t.mapChildrenWithTag("device", function(e) {
            const r = e.attrDeviceJid("jid");
            if (r != null && r.endsWith("@hosted") || r != null && r.endsWith("@hosted.lid")) {
                const i = o("WAWebWidFactory").createHostedDeviceWidOrThrow(r)?.device;
                if (i == null || i !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID) {
                    throw t.createParseError("invalid hosted device jid");
                }
                return {
                    id: i,
                    keyIndex: e.maybeAttrInt("key-index"),
                    isHosted: true
                };
            }
            return {
                id: o("WAWebWidFactory").createWid(e.attrDeviceJid("jid")).device ?? o("WAJids").DEFAULT_DEVICE_ID,
                keyIndex: e.maybeAttrInt("key-index")
            };
        });
        if (a.length === 0) {
            return null;
        }
        return {
            deviceList: a,
            keyIndex
        };
    };
    const p = new (r("WADeprecatedWapParser"))("incomingAccountSyncNotification", function(e) {
        e.assertTag("notification");
        const t = {
            stanzaId: e.attrString("id"),
            ts: e.attrTime("t"),
            from: o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("from"))
        };
        if (e.hasChild("status")) {
            const n = e.child("status");
            const r = n.hasAttr("action") ? n.attrString("action") : undefined;
            return babelHelpers.extends({
                type: o("WAWebAccountSyncJob").AccountSyncType.STATUS,
                action: r
            }, t);
        } else if (e.hasChild("text_status")) {
            const a = e.child("text_status");
            const i = a.hasAttr("action") ? a.attrString("action") : undefined;
            const l = a.hasAttr("text") ? a.attrString("text") : undefined;
            const s = a.hasChild("emoji") ? a.child("emoji") : undefined;
            const u = s != null && s.hasAttr("content") ? s?.attrString("content") : undefined;
            const ephemeralDurationSeconds = a.hasAttr("ephemeral_duration_sec") ? a.attrInt("ephemeral_duration_sec") : undefined;
            const lastUpdateTime = a.hasAttr("last_update_time") ? a.attrString("last_update_time") : undefined;
            return babelHelpers.extends({
                type: o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS,
                action: i,
                text: l,
                emoji: u,
                ephemeralDurationSeconds,
                lastUpdateTime
            }, t);
        } else {
            if (e.hasChild("privacy")) {
                return babelHelpers.extends({
                    type: o("WAWebAccountSyncJob").AccountSyncType.PRIVACY
                }, t);
            }
            if (e.hasChild("devices")) {
                return babelHelpers.extends({
                    type: o("WAWebAccountSyncJob").AccountSyncType.DEVICES,
                    devices: m(e.child("devices"))
                }, t);
            }
            if (e.hasChild("blocklist")) {
                const p = e.child("blocklist");
                const usernames = [];
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                    p.forEachChildWithTag("item", function(e) {
                        const t = e.maybeAttrString("username");
                        const n = o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid"));
                        if (t != null) {
                            usernames.push({
                                userId: n,
                                username: o("WAWebUsernameTypes").asUsername(t)
                            });
                        }
                    });
                }
                return babelHelpers.extends({
                    type: o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST,
                    usernames
                }, t);
            } else {
                if (e.hasChild("picture")) {
                    return babelHelpers.extends({
                        type: o("WAWebAccountSyncJob").AccountSyncType.PICTURE
                    }, t);
                }
                if (e.hasChild("tos")) {
                    const f = e.child("tos");
                    const notices = [];
                    f.forEachChildWithTag("notice", function(e) {
                        const t = e.maybeAttrString("state") !== "false";
                        const n = e.attrString("id");
                        notices.push({
                            id: n,
                            state: t
                        });
                    });
                    return babelHelpers.extends({
                        type: o("WAWebAccountSyncJob").AccountSyncType.TOS,
                        notices
                    }, t);
                } else if (e.hasChild("disappearing_mode")) {
                    const h = e.child("disappearing_mode");
                    let y;
                    let disappearingModeDuration;
                    let disappearingModeSettingTimestamp;
                    if (h.hasAttr("action")) {
                        y = h.attrString("action");
                    } else {
                        disappearingModeDuration = h.attrInt("duration");
                        disappearingModeSettingTimestamp = h.attrInt("t");
                    }
                    return babelHelpers.extends({}, t, {
                        type: o("WAWebAccountSyncJob").AccountSyncType.DISAPPEARING_MODE,
                        action: y,
                        disappearingModeDuration,
                        disappearingModeSettingTimestamp
                    });
                } else if (e.hasChild("notice")) {
                    const v = e.child("notice");
                    return babelHelpers.extends({
                        type: o("WAWebAccountSyncJob").AccountSyncType.NOTICE,
                        noticeId: v.attrString("id"),
                        noticeStage: v.maybeAttrString("stage"),
                        noticeVersion: v.maybeAttrString("version"),
                        noticeTimestamp: v.attrInt("t")
                    }, t);
                } else if (e.hasChild("user")) {
                    const S = e.child("user");
                    const isAiAvailable = S.maybeAttrString("state") === "AI available";
                    return babelHelpers.extends({
                        type: o("WAWebAccountSyncJob").AccountSyncType.USER,
                        isAiAvailable
                    }, t);
                } else if (e.hasChild("biz_opt_out_list")) {
                    const L = e.child("biz_opt_out_list");
                    const list = L.mapChildren(function(e) {
                        return {
                            action: e.attrString("action"),
                            biz_jid: e.attrUserJid("biz_jid")
                        };
                    });
                    const k = L.maybeAttrString("dhash");
                    const prevDhash = L.maybeAttrString("prev_dhash");
                    return babelHelpers.extends({
                        type: o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST,
                        list,
                        dhash: k,
                        prevDhash
                    }, t);
                }
            }
        }
        throw e.createParseError("notification type not supported");
    });
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            let r;
            if (o("WAWebABProps").getABPropConfigValue("mex_usync_about_status")) {
                const a = yield o("WAWebMexUsersGetAboutStatus").getMexUsersAboutStatus({
                    wid: t,
                    tcToken: null
                });
                const { state, status } = a;
                if (state == null) {
                    r = status;
                }
            } else {
                const s = yield o("WAWebGetAboutQueryJob").getAbout({
                    wid: t,
                    tcToken: null
                });
                if (s.error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getStatus failed for ",
                        ": failed ",
                        " : ",
                        ""
                    ])), t, s.error.errorCode, s.error.errorText);
                    return (d || (d = n("Promise"))).reject(s.error.errorText);
                }
                r = s.status;
            }
            if (r !== "") {
                yield o("WAWebBackendApi").frontendSendAndReceive("setMyStatus", {
                    status: r
                });
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ devices, wid }) {
            const r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (!o("WAWebUserPrefsMeUser").isMeAccount(wid)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "wid-is-not-self"
                ]))).sendLogs("wid-is-not-self");
                return [
                    {
                        wid,
                        devices
                    }
                ];
            }
            const i = [
                {
                    wid: r,
                    devices
                }
            ];
            if (a != null) {
                i.push({
                    wid: a,
                    devices
                });
            }
            return i;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = p.parse(e);
            if (t.error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                return (d || (d = n("Promise"))).reject(t.error);
            }
            const t_success = t.success;
            const a = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(t_success.stanzaId),
                to: o("WAWebCommsWapMd").JID(t_success.from),
                class: "notification",
                type: "account_sync"
            });
            switch(t_success.type){
                case o("WAWebAccountSyncJob").AccountSyncType.STATUS:
                    yield _();
                    break;
                case o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS:
                    {
                        if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                            break;
                        }
                        const { emoji, ephemeralDurationSeconds, lastUpdateTime, text } = t_success;
                        const f = o("WAWebWidFactory").asUserWidOrThrow(t_success.from);
                        yield o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                            contactId: f,
                            textString: text,
                            emoji,
                            ephemeralDuration: ephemeralDurationSeconds,
                            newUpdateTime: lastUpdateTime != null ? Number(lastUpdateTime) : undefined,
                            source: "account-sync"
                        });
                        break;
                    }
                case o("WAWebAccountSyncJob").AccountSyncType.DEVICES:
                    {
                        if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                            if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) {
                                yield o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([
                                    t_success.from.toString()
                                ]);
                                return a;
                            }
                        } else {
                            o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(t_success.from.toString(), a);
                            return "NO_ACK";
                        }
                        const devices = t_success.devices;
                        if (devices) {
                            const v = yield g({
                                wid: o("WAWebWidFactory").asUserWidOrThrow(t_success.from),
                                devices
                            });
                            yield o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(v);
                            const S = new Set(devices.deviceList?.map(function(e) {
                                return e.id;
                            }) ?? []);
                            yield o("WAWebBizBroadcastDeviceRemovalCleanup").cleanupCampaignsWithInvalidDevices(S);
                        } else {
                            yield o("WAWebAccountSyncJob").getDevices("notification");
                        }
                        break;
                    }
                case o("WAWebAccountSyncJob").AccountSyncType.PICTURE:
                    yield o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
                    break;
                case o("WAWebAccountSyncJob").AccountSyncType.PRIVACY:
                    o("WAWebBackendEventBus").BackendEventBus.triggerAccountSyncForPrivacy((yield o("WAWebAccountSyncJob").forceUpdatePrivacySettings()));
                    break;
                case o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST:
                    if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && t_success.usernames != null) {
                        yield o("WAWebSetUsernameJob").setUsernamesJob(t_success.usernames);
                    }
                    o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist("notification");
                    break;
                case o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST:
                    {
                        const R = o("WAWebUserPrefsMultiDevice").getOptOutListHash();
                        const { dhash, list, prevDhash } = t_success;
                        if (R !== prevDhash) {
                            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutList");
                            break;
                        } else {
                            if (dhash != null) {
                                if (list != null) {
                                    list.forEach((()=>{
                                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action, biz_jid }) {
                                            const isBlocked = action === "block";
                                            const targetWid = o("WAWebJidToWid").userJidToUserWid(biz_jid);
                                            yield o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutListModelInCollection", {
                                                targetWid,
                                                isBlocked
                                            });
                                        });
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    })());
                                }
                                yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(dhash);
                            }
                        }
                        break;
                    }
                case o("WAWebAccountSyncJob").AccountSyncType.TOS:
                    if (t_success.notices) {
                        o("WAWebAccountSyncJob").updateTosStateFromAccountSync(t_success.notices);
                    }
                    break;
                case o("WAWebAccountSyncJob").AccountSyncType.DISAPPEARING_MODE:
                    {
                        yield b(t_success);
                        break;
                    }
                case o("WAWebAccountSyncJob").AccountSyncType.NOTICE:
                    {
                        const { noticeId, noticeStage, noticeTimestamp, noticeVersion } = t_success;
                        if (noticeId != null && noticeId !== "" && noticeStage != null && noticeVersion != null && noticeTimestamp != null) {
                            const $ = noticeStage === o("WAWebPDFNTypes").NOTICE_STAGES.PDFN_ACCEPTED;
                            yield o("WAWebUserDisclosureCollection").UserDisclosureCollection.updateNoticeStage({
                                id: noticeId,
                                accepted: $,
                                policyVersion: noticeVersion
                            });
                            o("WAWebAccountSyncJob").updateTosStateFromAccountSync([
                                {
                                    id: noticeId,
                                    state: $,
                                    timestamp: o("WATimeUtils").castToUnixTime(noticeTimestamp)
                                }
                            ]);
                        }
                        break;
                    }
                case o("WAWebAccountSyncJob").AccountSyncType.USER:
                    {
                        if (t_success.isAiAvailable === true) {
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Receieved account sync notification for Ai Available"
                            ])));
                        }
                        break;
                    }
            }
            return a;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action, from, disappearingModeDuration, disappearingModeSettingTimestamp }) {
            if (action === "modify") {
                const i = yield o("WAWebGetDisappearingModeJob").getDisappearingMode(from, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DM_FORCE_REFRESH);
                if (i.error == null && i.disappearingModeDuration != null && i.disappearingModeSettingTimestamp != null) {
                    disappearingModeDuration = i.disappearingModeDuration;
                    disappearingModeSettingTimestamp = i.disappearingModeSettingTimestamp;
                }
            }
            if (disappearingModeDuration != null && disappearingModeSettingTimestamp != null) {
                yield o("WAWebUpdateDisappearingModeForContact").updateDisappearingModeForContact({
                    contactId: from,
                    newDuration: disappearingModeDuration,
                    newSettingTimestamp: disappearingModeSettingTimestamp
                });
            }
        });
        return v.apply(this, arguments);
    }
    l.getAndUpdateStatus = _;
    l.handleAccountSyncNotification = y;
}, 98);