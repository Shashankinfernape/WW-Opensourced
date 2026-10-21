__d("WAWebPttAudioProxy", [], function(t, n, r, o, a, i) {
    const e = (()=>{
        function e(e) {
            this.$2 = "";
            this.$3 = 0;
            this.$5 = 1;
            this.$6 = 1;
            this.$1 = e;
        }
        const e_prototype = e.prototype;
        e_prototype.addEventListener = function(t, n, r) {
            this.$1.addAudioListener(this, t, n);
        };
        e_prototype.removeEventListener = function(t, n) {
            this.$1.removeAudioListener(this, t, n);
        };
        e_prototype.play = function() {
            return this.$1.play(this, {
                currentTime: this.$3,
                playbackRate: this.$6,
                defaultPlaybackRate: this.$5
            });
        };
        e_prototype.pause = function() {
            this.$1.pause(this);
        };
        e_prototype.load = function() {
            this.$1.load(this);
        };
        return babelHelpers.createClass(e, [
            {
                key: "src",
                get: function() {
                    return this.$2;
                },
                set: function(t) {
                    this.$2 = t;
                }
            },
            {
                key: "defaultPlaybackRate",
                get: function() {
                    return this.$5;
                },
                set: function(t) {
                    this.$5 = t;
                    this.$1.setDefaultPlaybackRate(this, t);
                }
            },
            {
                key: "playbackRate",
                get: function() {
                    return this.$6;
                },
                set: function(t) {
                    this.$6 = t;
                    this.$1.setPlaybackRate(this, t);
                }
            },
            {
                key: "currentTime",
                get: function() {
                    const e = this.$1.getCurrentTime(this);
                    if (e != null) {
                        this.$3 = e;
                    }
                    return this.$3;
                },
                set: function(t) {
                    this.$3 = t;
                    this.$1.setCurrentTime(this, t);
                }
            },
            {
                key: "duration",
                get: function() {
                    const e = this.$1.getDuration(this);
                    if (e != null) {
                        this.$4 = e;
                    }
                    return this.$4;
                }
            },
            {
                key: "paused",
                get: function() {
                    return this.$1.getPaused(this);
                }
            }
        ]);
    })();
    i.AudioProxy = e;
}, 66);