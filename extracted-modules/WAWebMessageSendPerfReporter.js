__d("WAWebMessageSendPerfReporter", [
    "WAWebAndroidMessageSendPerfWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebWamEnumClientMessageSendStage",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumSizeBucket",
    "gkx"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor({ chatWid, mediaType, messageType }){
            this.$8 = false;
            this.$9 = false;
            this.$10 = null;
            this.$12 = false;
            this.$13 = false;
            this.$1 = Date.now();
            this.$2 = new Map;
            this.$5 = mediaType;
            this.$6 = messageType;
            this.$11 = chatWid;
        }
        setFetchedPrekeyCount(t) {
            this.$3 = t;
        }
        setSenderKeyDistributionCount(t) {
            this.$4 = t;
        }
        setMessageIsInvisible(t) {
            this.$12 = t;
        }
        setMessageIsFirstUserMessage(t) {
            this.$13 = t;
        }
        setIsRevokeMessage(t) {
            this.$8 = t;
        }
        setIsDirectedMessage(t) {
            this.$9 = t;
        }
        setGroupData(t) {
            this.$10 = t;
        }
        setIsPq(t) {
            this.$7 = t === true ? true : undefined;
        }
        startRenderedStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_RENDERED);
        }
        postRenderedStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_RENDERED);
        }
        startSavedStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_SAVED);
        }
        postSavedStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_SAVED);
        }
        startPrekeysFetchStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_PREKEYS_FETCH);
        }
        postPrekeysFetchStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_PREKEYS_FETCH);
        }
        startWrittenWireStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_WRITTEN_WIRE);
        }
        postWrittenWireStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_WRITTEN_WIRE);
        }
        startWaitingToEncryptStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_WAITING_TO_ENCRYPT);
        }
        postWaitingToEncryptStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_WAITING_TO_ENCRYPT);
        }
        startReadyToSendStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_READY_TO_SEND);
        }
        postReadyToSendStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_READY_TO_SEND);
        }
        startClientEncryptStage() {
            this.$14(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_ENCRYPT);
        }
        postClientEncryptStage() {
            this.$15(o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE.CLIENT_ENCRYPT);
        }
        $14(sendStage) {
            const e = new (o("WAWebAndroidMessageSendPerfWamEvent")).AndroidMessageSendPerfWamEvent({
                sendStage
            });
            this.$2.set(sendStage, e);
            return e;
        }
        $15(t) {
            const s = this.$2.get(t) || this.$14(t);
            s.mediaType = this.$5;
            s.messageType = this.$6;
            s.messageIsInvisible = this.$12;
            s.messageIsFirstUserMessage = this.$13;
            s.durationRelative = Date.now() - this.$1;
            s.fetchPrekeys = this.$3 != null && this.$3 > 0;
            s.isRevokeMessage = this.$8;
            s.isDirectedMessage = this.$9;
            if (this.$7 != null) {
                s.isPq = this.$7;
            }
            if (this.$10?.isLid != null) {
                s.isLid = this.$10.isLid;
            } else if (this.$6 === o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL) {
                s.isLid = this.$11.isLid();
            }
            if (this.$10?.wamTypeOfGroup != null) {
                s.typeOfGroup = this.$10.wamTypeOfGroup;
            }
            if (this.$10?.participantCount != null) {
                s.participantCount = this.$10.participantCount;
            }
            if (this.$10?.deviceSizeBucket != null) {
                s.deviceSizeBucket = this.$10.deviceSizeBucket;
            }
            if (this.$10?.deviceCount != null) {
                const u = this.$10.deviceCount;
                s.deviceCount = u;
                if (this.$3 != null && u > 0) {
                    s.fetchPrekeysPercentage = Math.round(this.$3 / u * 100);
                }
                if (this.$4 != null && u > 0) {
                    s.senderKeyDistributionCountPercentage = Math.round(this.$4 / u * 100);
                }
            }
            if (s.participantCount != null && s.participantCount > o("WAWebMessagingGatingUtils").getGroupSizeBypassingSampling() || s.fetchPrekeysPercentage != null && s.fetchPrekeysPercentage >= 50 || s.messageIsFirstUserMessage) {
                s.weight = 0;
            } else if (s.senderKeyDistributionCountPercentage != null && s.senderKeyDistributionCountPercentage >= 50) {
                if (r("gkx")("26258")) {
                    s.weight = 20;
                } else {
                    s.weight = 1;
                }
            } else {
                if (s.deviceSizeBucket === o("WAWebWamEnumSizeBucket").SIZE_BUCKET.LT5000 || s.deviceSizeBucket === o("WAWebWamEnumSizeBucket").SIZE_BUCKET.LARGEST_BUCKET) {
                    if (r("gkx")("26258")) {
                        s.weight = 100;
                    } else {
                        s.weight = 1;
                    }
                }
            }
            s.markDurationAbs();
            s.commit();
        }
    }
    l.MessageSendPerfReporter = e;
}, 98);