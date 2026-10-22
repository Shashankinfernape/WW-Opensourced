import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '../icons/Icon';
import { MessageContextMenu } from './MessageContextMenu';

export interface ChatMessage {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
  ack?: 0 | 1 | 2 | 3 | 4; // 0: PENDING, 1: SENT, 2: RECEIVED, 3: READ, 4: PLAYED
  type?: 'text' | 'image' | 'audio' | 'document' | 'system';
  replyTo?: {
    senderName: string;
    text: string;
  };
  reactions?: Array<{ emoji: string; count: number }>;
  media?: {
    url?: string;
    fileName?: string;
    fileSize?: string;
    duration?: string;
  };
}

interface MessageListProps {
  messages: ChatMessage[];
  onReply?: (msg: ChatMessage) => void;
  onReact?: (msgId: string, emoji: string) => void;
  onDeleteMessage?: (msgId: string) => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  onReply,
  onReact,
  onDeleteMessage,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredMsgId, setHoveredMsgId] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    msg: ChatMessage;
    x: number;
    y: number;
  } | null>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <div
      data-testid="conversation-panel-messages"
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#161717',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* 1. Ground-Truth Wallpaper Vector Mask Layer */}
      <div
        aria-hidden="true"
        className="x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fast2d x197sbye"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff',
          opacity: 0.06,
          WebkitMaskImage: 'url("/assets/doodle.svg")',
          maskImage: 'url("/assets/doodle.svg")',
          WebkitMaskRepeat: 'repeat',
          maskRepeat: 'repeat',
          WebkitMaskSize: '540px 960px',
          maskSize: '540px 960px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 2. Scrollable Messages Area */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 5%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* End-to-End Encryption Banner */}
        <div
          className="x78zum5 x1okw0bk xl56j7k xqy66fx xyri2b x1hhzuzn x1c1uobl"
          style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="x1bvqhpb x1280gxy x1b9z3ur x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a"
            style={{
              backgroundColor: '#182229',
              borderRadius: '8px',
              padding: '6px 12px',
              maxWidth: '85%',
              textAlign: 'center',
              boxShadow: '0 1px 0.5px rgba(11, 20, 26, 0.13)',
            }}
          >
            <div
              className="x78zum5 x6s0dn4 x1r0jzty x17zd0t2"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontSize: '12px',
                color: 'var(--secondary, #8696a0)',
              }}
            >
              <Icon name="ic-lock" size={13} color="var(--secondary, #8696a0)" />
              <span>
                Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
              </span>
            </div>
          </div>
        </div>

        {/* Centered Date Separator */}
        <div
          data-testid="date-separator"
          className="x141l45o x1h3r9g6 x1hx0egp x78zum5 x1q0g3np xl56j7k xscbp6u"
          style={{
            alignSelf: 'center',
            backgroundColor: '#182229',
            padding: '5px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            color: 'var(--secondary, #8696a0)',
            textTransform: 'uppercase',
            marginBottom: '16px',
            boxShadow: '0 1px 0.5px rgba(11, 20, 26, 0.13)',
            userSelect: 'none',
          }}
        >
          Today
        </div>

        {messages.map((msg, index) => {
          const isMe = msg.sender === 'me';
          const prevMsg = messages[index - 1];
          const isFirstInGroup = !prevMsg || prevMsg.sender !== msg.sender;
          const bubbleColor = isMe ? 'var(--outgoing-background, #144D37)' : 'var(--incoming-background, #242626)';
          const isHovered = hoveredMsgId === msg.id;

          return (
            <div
              key={msg.id}
              data-testid="msg-container"
              className={isMe ? 'message-out' : 'message-in'}
              onMouseEnter={() => setHoveredMsgId(msg.id)}
              onMouseLeave={() => setHoveredMsgId(null)}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setContextMenu({
                  msg,
                  x: Math.min(e.clientX, window.innerWidth - 220),
                  y: Math.min(e.clientY, window.innerHeight - 250),
                });
              }}
              style={{
                display: 'flex',
                justifyContent: isMe ? 'flex-end' : 'flex-start',
                position: 'relative',
                marginTop: isFirstInGroup && index > 0 ? '12px' : '3px',
                marginBottom: msg.reactions && msg.reactions.length > 0 ? '12px' : '3px',
              }}
            >
              <div
                style={{
                  backgroundColor: bubbleColor,
                  color: 'var(--message-primary, #e9edef)',
                  padding: '6px 7px 8px 9px',
                  borderRadius: '7.5px',
                  borderTopRightRadius: isMe && isFirstInGroup ? '0px' : '7.5px',
                  borderTopLeftRadius: !isMe && isFirstInGroup ? '0px' : '7.5px',
                  maxWidth: '65%',
                  position: 'relative',
                  boxShadow: '0 1px 0.5px rgba(11, 20, 26, 0.13)',
                  fontSize: '14.2px',
                  lineHeight: '19px',
                  wordBreak: 'break-word',
                }}
              >
                {/* Decompiled Tail SVG on First Message in Group */}
                {isFirstInGroup && (
                  <span
                    data-icon={isMe ? 'tail-out' : 'tail-in'}
                    style={{
                      position: 'absolute',
                      top: 0,
                      [isMe ? 'right' : 'left']: '-8px',
                      width: '8px',
                      height: '13px',
                      pointerEvents: 'none',
                    }}
                  >
                    <Icon
                      name={isMe ? 'tail-out' : 'tail-in'}
                      size={13}
                      color={isMe ? '#144D37' : '#242626'}
                      style={{ width: '8px', height: '13px', display: 'block' }}
                    />
                  </span>
                )}

                {/* Hover Message Action Trigger */}
                {isHovered && (
                  <button
                    type="button"
                    data-testid="down-context"
                    aria-label="Message options"
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setContextMenu({
                        msg,
                        x: Math.min(rect.left - 120, window.innerWidth - 220),
                        y: Math.min(rect.bottom + 4, window.innerHeight - 250),
                      });
                    }}
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '4px',
                      background: 'rgba(0,0,0,0.2)',
                      borderRadius: '50%',
                      border: 'none',
                      padding: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--secondary, #8696a0)',
                      zIndex: 10,
                    }}
                  >
                    <Icon name="ic-chevron-down" size={16} color="var(--secondary, #8696a0)" />
                  </button>
                )}

                {/* Quoted Message / Reply Preview */}
                {msg.replyTo && (
                  <div
                    style={{
                      backgroundColor: isMe ? 'rgba(0, 0, 0, 0.18)' : 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '6px',
                      borderLeft: `4px solid ${isMe ? '#00a884' : '#53bdeb'}`,
                      padding: '4px 8px',
                      marginBottom: '4px',
                      fontSize: '12.8px',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontWeight: 600, color: isMe ? '#00a884' : '#53bdeb', marginBottom: '2px', fontSize: '12px' }}>
                      {msg.replyTo.senderName}
                    </div>
                    <div style={{ color: 'var(--secondary, #8696a0)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {msg.replyTo.text}
                    </div>
                  </div>
                )}

                {/* Audio / Voice Note Message */}
                {msg.type === 'audio' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '220px', padding: '4px 0' }}>
                    <button
                      type="button"
                      aria-label="Play voice note"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#00a884',
                        color: '#ffffff',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="ic-play-arrow-filled" size={20} color="#ffffff" />
                    </button>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '18px' }}>
                        {[40, 60, 30, 80, 50, 90, 70, 45, 85, 30, 65, 95, 40, 75, 55, 35, 60, 40].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: '3px',
                              height: `${h}%`,
                              backgroundColor: isMe ? '#00a884' : 'var(--secondary, #8696a0)',
                              borderRadius: '2px',
                            }}
                          />
                        ))}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--bubble-meta, rgba(233, 237, 239, 0.6))' }}>
                        {msg.media?.duration || '0:24'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Document Message */}
                {msg.type === 'document' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '220px', padding: '4px 0' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '48px',
                        borderRadius: '4px',
                        backgroundColor: '#ea4335',
                        color: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '10px',
                        flexShrink: 0,
                      }}
                    >
                      PDF
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {msg.media?.fileName || 'document.pdf'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--bubble-meta, rgba(233, 237, 239, 0.6))' }}>
                        {msg.media?.fileSize || '1.2 MB'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Standard Message Text */}
                {msg.text && (
                  <span className="copyable-text" style={{ marginRight: '6px' }}>
                    {msg.text}
                  </span>
                )}

                {/* Timestamp and Ack Icon */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    color: 'var(--bubble-meta, rgba(233, 237, 239, 0.6))',
                    verticalAlign: 'bottom',
                    float: 'right',
                    marginLeft: '8px',
                    marginTop: '4px',
                    userSelect: 'none',
                  }}
                >
                  <span>{msg.time}</span>
                  {isMe && msg.ack != null && (
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                      {msg.ack === 3 || msg.ack === 4 ? (
                        <Icon name="wds-ic-read" size={16} color="var(--icon-ack, #53bdeb)" />
                      ) : msg.ack === 2 ? (
                        <Icon name="wds-ic-read" size={16} color="var(--bubble-meta, rgba(233, 237, 239, 0.6))" />
                      ) : (
                        <Icon name="msg-check" size={16} color="var(--bubble-meta, rgba(233, 237, 239, 0.6))" />
                      )}
                    </span>
                  )}
                </span>

                {/* Addon / Reactions Container */}
                {msg.reactions && msg.reactions.length > 0 && (
                  <div
                    data-testid="addon-bubble-container"
                    className="x78zum5 xbfrwjf x8k05lb xeq5yr9 x1n2onr6 xrr41r3 xqcrz7y"
                    style={{
                      position: 'absolute',
                      bottom: '-12px',
                      [isMe ? 'right' : 'left']: '10px',
                      backgroundColor: 'var(--WDS-surface-default, #202c33)',
                      borderRadius: '12px',
                      padding: '2px 6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                      border: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
                      zIndex: 5,
                      userSelect: 'none',
                    }}
                  >
                    {msg.reactions.map((r, i) => (
                      <span key={i}>
                        {r.emoji} {r.count > 1 ? r.count : ''}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Floating Scroll-To-Bottom Button */}
      <button
        type="button"
        aria-label="Scroll to bottom"
        onClick={scrollToBottom}
        className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'var(--WDS-surface-default, #202c33)',
          color: 'var(--icon, #aebac1)',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        <Icon name="ic-chevron-down" size={20} />
      </button>

      {/* Floating Message Context Menu */}
      {contextMenu && (
        <MessageContextMenu
          isOpen={true}
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onReply={() => {
            onReply?.(contextMenu.msg);
            setContextMenu(null);
          }}
          onReact={(emoji) => {
            onReact?.(contextMenu.msg.id, emoji);
            setContextMenu(null);
          }}
          onDelete={() => {
            onDeleteMessage?.(contextMenu.msg.id);
            setContextMenu(null);
          }}
        />
      )}
    </div>
  );
};

export default MessageList;
