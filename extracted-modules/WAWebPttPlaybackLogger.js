__d("WAWebPttPlaybackLogger", [
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttDailyUtils",
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttPlaybackWamEvent",
    "WAWebPttPrefs",
    "WAWebPttTsExternalLogger",
    "WAWebWamEnumPttPlaybackSpeedType",
    "WAWebWamEnumPttStreamType",
    "WAWebWamEnumPttTriggerType",
    "err"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e, t){
            var n = this;
            this.isSequentialPlayback = false;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = false;
            this.$7 = false;
            this.$8 = 0;
            this.$9 = false;
            this.$10 = 0;
            this.$13 = function() {
                n.$6 = true;
            };
            this.$14 = function() {
                if (n.$2.playbackRate !== n.$11) {
                    n.$11 = n.$2.playbackRate;
                    n.$3 += 1;
                }
            };
            this.$15 = function() {
                const e = o("WAWebPttCalculateAudioProgress").calculateAudioProgress(n.$2);
                n.$5 = Math.max(e, n.$5);
            };
            this.$16 = function() {
                n.commit(true);
            };
            this.$17 = function() {
                n.commit(false);
            };
            this.$1 = e;
            this.$2 = t;
            this.$11 = this.$2.playbackRate;
            this.$2.addEventListener("playing", this.$13);
            this.$2.addEventListener("ratechange", this.$14);
            this.$2.addEventListener("timeupdate", this.$15);
            this.$2.addEventListener("ended", this.$16);
            this.$2.addEventListener("error", this.$17);
            if (e.type === "ptt") {
                this.$12 = o("WAWebPttTsExternalLogger").attachPttPlayTimeSpentLogger(t);
            }
        }
        dispose() {
            this.$2.removeEventListener("playing", this.$13);
            this.$2.removeEventListener("ratechange", this.$14);
            this.$2.removeEventListener("timeupdate", this.$15);
            this.$2.removeEventListener("ended", this.$16);
            this.$2.removeEventListener("error", this.$16);
            this.$12?.();
        }
        $18() {
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = false;
            this.$7 = false;
            this.$8 = 0;
            this.$9 = false;
            this.$10 = 0;
            this.$12 = null;
        }
        commit(t) {
            if (this.$6 && this.$1.type === "ptt") {
                const e = o("WAWebPttPrefs").PttPrefs.playbackRate;
                const n = this.$1.mediaData;
                const r = new (o("WAWebPttPlaybackWamEvent")).PttPlaybackWamEvent({
                    pttSeekCnt: 0,
                    pttPlaybackSpeedCnt: 0,
                    pttTrigger: this.isSequentialPlayback ? o("WAWebWamEnumPttTriggerType").PTT_TRIGGER_TYPE.SEQUENTIAL : o("WAWebWamEnumPttTriggerType").PTT_TRIGGER_TYPE.MANUAL
                });
                r.pttPlaybackFailed = !t;
                r.pttType = s(n.mimetype);
                r.pttPlaybackSpeed = u(e);
                const a = o("WAWebPttGetDurationFromMediaOrProtobuf").getDurationFromMediaOrProtobuf(this.$2, n);
                r.pttDuration = Math.round(a) * 1000;
                r.pttPlaybackSpeedCnt = this.$3;
                r.pttSeekCnt = this.$4;
                r.pttPlayedPct = this.$5;
                r.pttPlayedOutOfChat = this.$7;
                r.pttMiniPlayerPauseCnt = this.$8;
                r.pttMiniPlayerClose = this.$9;
                r.pttMiniPlayerClick = this.$10;
                r.commit();
                this.$18();
                const i = this.$1.id;
                const l = i == null ? null : o("WAWebMsgCollection").MsgCollection.get(i);
                const c = l == null ? null : o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(l));
                if (c != null) {
                    o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.PLAYBACK, c);
                    if (e > 1) {
                        o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.FAST_PLAYBACK, c);
                    }
                }
            }
        }
        increasePttSeekCount() {
            this.$4 += 1;
        }
        markAsPlayedInOoc() {
            this.$7 = true;
        }
        increaseOocPauseCount() {
            this.$8 += 1;
        }
        markAsOocClosedByUser() {
            this.$9 = true;
        }
        increaseOocClickToChatCount() {
            this.$10 += 1;
        }
    }
    function s(mimetype) {
        const t = mimetype?.split(";")[0];
        switch(t){
            case "audio/ogg":
                return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.OPUS;
            case "audio/aac":
                return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.AAC;
            case "audio/mpeg":
                return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.MP3;
            case "audio/amr-wb":
                return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.AMR_WB;
            case "audio/amr":
            case "audio/3gpp2":
                return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.AMR_NB;
            case "audio/3gpp":
            default:
                return o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE.UNKNOWN;
        }
    }
    function u(e) {
        switch(e){
            case 1:
                return o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE.SPEED_1;
            case 1.5:
                return o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE.SPEED_1_5;
            case 2:
                return o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE.SPEED_2;
            default:
                throw r("err")(`Invalid playback rate: ${e}`);
        }
    }
    l.PttPlaybackLogger = e;
}, 98);