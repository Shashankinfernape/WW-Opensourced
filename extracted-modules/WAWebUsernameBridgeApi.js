__d("WAWebUsernameBridgeApi", [
    "WAWebCmd"
], function(t, n, r, o, a, i, l) {
    const e = {
        setUsernameStateUpdated: function({ usernameState }) {
            o("WAWebCmd").Cmd.trigger("username_state_updated", usernameState);
        }
    };
    l.UsernameBridgeApi = e;
}, 98);