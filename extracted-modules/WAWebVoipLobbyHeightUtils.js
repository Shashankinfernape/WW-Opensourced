__d("WAWebVoipLobbyHeightUtils", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        VIDEO_LOBBY_HEIGHT: 452,
        AUDIO_LOBBY_COLLAPSED_HEIGHT: 174,
        CONNECTED_PARTICIPANTS_SECTION_HEIGHT: 58,
        VIDEO_LOBBY_COLLAPSED_PANEL_SLACK: 26,
        LOBBY_CONTENT_ROW_GAP: 8,
        PADDING_BLOCK_START: 8,
        PARTICIPANT_INFO_HEIGHT: 72,
        CALL_CONTROLS_HEIGHT: 48,
        SELF_PREVIEW_PADDING: 16,
        MAX_SELF_PREVIEW_HEIGHT: 272,
        SELF_PREVIEW_ASPECT_RATIO: 1.7777777777777777,
        PARTICIPANT_ROW_HEIGHT: 52,
        MAX_FULLY_VISIBLE_PARTICIPANTS: 3,
        PARTIAL_ROW_VISIBILITY: 0.5
    };
    const s = new (r("WAWebEventEmitter"));
    function u(t, n, r) {
        const { MAX_FULLY_VISIBLE_PARTICIPANTS, PARTIAL_ROW_VISIBILITY, PARTICIPANT_ROW_HEIGHT } = e;
        if (!r) {
            return t;
        }
        const l = n <= MAX_FULLY_VISIBLE_PARTICIPANTS ? n * PARTICIPANT_ROW_HEIGHT : MAX_FULLY_VISIBLE_PARTICIPANTS * PARTICIPANT_ROW_HEIGHT + PARTICIPANT_ROW_HEIGHT * PARTIAL_ROW_VISIBILITY;
        return t + l;
    }
    function c({ connectedParticipantCount, hasNoParticipants, isParticipantPanelExpanded }) {
        const a = hasNoParticipants === true ? e.AUDIO_LOBBY_COLLAPSED_HEIGHT - e.CONNECTED_PARTICIPANTS_SECTION_HEIGHT : e.AUDIO_LOBBY_COLLAPSED_HEIGHT;
        return u(a, connectedParticipantCount, isParticipantPanelExpanded);
    }
    function d(t, n, r, o) {
        const { CALL_CONTROLS_HEIGHT, CONNECTED_PARTICIPANTS_SECTION_HEIGHT, LOBBY_CONTENT_ROW_GAP, MAX_SELF_PREVIEW_HEIGHT, PADDING_BLOCK_START, PARTICIPANT_INFO_HEIGHT, SELF_PREVIEW_ASPECT_RATIO, SELF_PREVIEW_PADDING, VIDEO_LOBBY_COLLAPSED_PANEL_SLACK, VIDEO_LOBBY_HEIGHT } = e;
        let g;
        if (o != null && o > 0) {
            const h = Math.min(MAX_SELF_PREVIEW_HEIGHT, Math.max(0, o - SELF_PREVIEW_PADDING) / SELF_PREVIEW_ASPECT_RATIO);
            g = Math.round(PADDING_BLOCK_START + PARTICIPANT_INFO_HEIGHT + LOBBY_CONTENT_ROW_GAP + h + LOBBY_CONTENT_ROW_GAP + CONNECTED_PARTICIPANTS_SECTION_HEIGHT + CALL_CONTROLS_HEIGHT);
            if (r === true) {
                g -= CONNECTED_PARTICIPANTS_SECTION_HEIGHT + LOBBY_CONTENT_ROW_GAP;
            }
        } else {
            g = VIDEO_LOBBY_HEIGHT;
            if (r === true) {
                g -= CONNECTED_PARTICIPANTS_SECTION_HEIGHT;
            } else if (t > 0) {
                g -= VIDEO_LOBBY_COLLAPSED_PANEL_SLACK;
            }
        }
        let y = u(g, t, n);
        if (n && r !== true && t > 0) {
            y += LOBBY_CONTENT_ROW_GAP;
        }
        return y;
    }
    l.WAWebVoipLobbyPanelStateEmitter = s;
    l.calculateIncomingGroupAudioLobbyHeight = c;
    l.calculateIncomingGroupVideoLobbyHeight = d;
}, 98);