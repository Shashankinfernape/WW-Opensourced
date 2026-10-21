import React, { useState } from 'react';
import { LeftNavRail } from './LeftNavRail';
import { ChatListHeader } from './ChatListHeader';
import { ChatListPanel, ChatSummary } from './ChatListPanel';
import { ChatHeader } from './ChatHeader';
import { MessageList, ChatMessage } from './MessageList';
import { ComposerBar } from './ComposerBar';
import { AttachMenu } from './AttachMenu';
import { EmojiGifPanel } from './EmojiGifPanel';
import { MenuDropdown, MenuItem } from './MenuDropdown';
import { ContactInfoDrawer } from './ContactInfoDrawer';
import { ChatSearchDrawer } from './ChatSearchDrawer';
import { NewChatPanel } from './NewChatPanel';
import { StatusPanel } from './StatusPanel';
import { ChannelsPanel } from './ChannelsPanel';
import { CommunitiesPanel } from './CommunitiesPanel';
import { CallsPanel } from './CallsPanel';
import { SettingsPanel } from './SettingsPanel';
import { ProfilePanel } from './ProfilePanel';
import { ArchivedChatsPanel } from './ArchivedChatsPanel';
import { StarredMessagesPanel } from './StarredMessagesPanel';

interface ChatShellProps {
  onBackToLogin?: () => void;
}

// Neutral fixtures with plain colored circles and initials (Rules 3 & 4)
const NEUTRAL_CHATS: ChatSummary[] = [
  {
    id: 'chat_1',
    name: 'Alex Rivera',
    initial: 'A',
    color: '#00a884',
    lastMessage: 'Great, see you then!',
    time: '11:42 AM',
    unreadCount: 0,
    isOnline: true,
    ack: 3,
  },
  {
    id: 'chat_2',
    name: 'Jordan Lee',
    initial: 'J',
    color: '#1f7a8c',
    lastMessage: 'Voice message (0:18)',
    time: '10:15 AM',
    unreadCount: 1,
    ack: 3,
  },
  {
    id: 'chat_3',
    name: 'Taylor Brooks',
    initial: 'T',
    color: '#6b5b95',
    lastMessage: 'Quarterly_Report_2026.pdf',
    time: 'Yesterday',
    ack: 2,
  },
  {
    id: 'chat_4',
    name: 'Morgan Smith',
    initial: 'M',
    color: '#d9534f',
    lastMessage: 'See you on Monday morning.',
    time: 'Tuesday',
    ack: 1,
  },
];

const NEUTRAL_MESSAGES: Record<string, ChatMessage[]> = {
  chat_1: [
    {
      id: 'm_101',
      sender: 'them',
      text: 'Hi! Are you free to catch up later today?',
      time: '11:30 AM',
    },
    {
      id: 'm_102',
      sender: 'me',
      text: 'Yes, I should be free around 4 PM.',
      time: '11:32 AM',
      ack: 3,
    },
    {
      id: 'm_103',
      sender: 'them',
      text: 'That works perfectly. Talk soon!',
      time: '11:40 AM',
      reactions: [{ emoji: '👍', count: 1 }],
    },
    {
      id: 'm_104',
      sender: 'me',
      text: 'Great, see you then!',
      time: '11:42 AM',
      ack: 3,
      replyTo: {
        senderName: 'Alex Rivera',
        text: 'That works perfectly. Talk soon!',
      },
    },
  ],
  chat_2: [
    {
      id: 'm_201',
      sender: 'them',
      text: 'Listen to this quick audio update:',
      time: '10:14 AM',
    },
    {
      id: 'm_202',
      sender: 'them',
      text: '',
      time: '10:14 AM',
      type: 'audio',
      media: { duration: '0:18' },
    },
    {
      id: 'm_203',
      sender: 'me',
      text: 'Thanks, sounding good!',
      time: '10:15 AM',
      ack: 3,
    },
  ],
  chat_3: [
    {
      id: 'm_301',
      sender: 'them',
      text: 'Here is the project report for review:',
      time: 'Yesterday',
    },
    {
      id: 'm_302',
      sender: 'them',
      text: '',
      time: 'Yesterday',
      type: 'document',
      media: { fileName: 'Quarterly_Report_2026.pdf', fileSize: '2.4 MB' },
    },
    {
      id: 'm_303',
      sender: 'me',
      text: 'Have a great weekend!',
      time: 'Yesterday',
      ack: 2,
    },
  ],
  chat_4: [
    {
      id: 'm_401',
      sender: 'them',
      text: 'See you on Monday morning.',
      time: 'Tuesday',
    },
  ],
};

const CHATLIST_MENU_ITEMS: MenuItem[] = [
  { id: 'new_group', label: 'New group' },
  { id: 'new_community', label: 'New community' },
  { id: 'starred', label: 'Starred messages' },
  { id: 'select_chats', label: 'Select chats' },
  { id: 'settings', label: 'Settings' },
  { id: 'logout', label: 'Log out', danger: true },
];

const CHAT_MENU_ITEMS: MenuItem[] = [
  { id: 'contact_info', label: 'Contact info' },
  { id: 'select_messages', label: 'Select messages' },
  { id: 'close_chat', label: 'Close chat' },
  { id: 'mute_notifications', label: 'Mute notifications' },
  { id: 'disappearing_messages', label: 'Disappearing messages' },
  { id: 'clear_chat', label: 'Clear chat' },
  { id: 'delete_chat', label: 'Delete chat', danger: true },
];

export const ChatShell: React.FC<ChatShellProps> = () => {
  const [activeTab, setActiveTab] = useState<'chats' | 'calls' | 'status' | 'channels' | 'communities'>('chats');
  const [leftDrawer, setLeftDrawer] = useState<'none' | 'newchat' | 'archived' | 'starred' | 'settings' | 'profile'>('none');
  const [rightDrawer, setRightDrawer] = useState<'none' | 'contact_info' | 'chat_search'>('none');
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [isChatListMenuOpen, setIsChatListMenuOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);

  const [chats, setChats] = useState<ChatSummary[]>(NEUTRAL_CHATS);
  const [selectedChatId, setSelectedChatId] = useState<string>('chat_1');
  const [filter, setFilter] = useState<'all' | 'unread' | 'favourites' | 'groups'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [messagesMap, setMessagesMap] = useState<Record<string, ChatMessage[]>>(NEUTRAL_MESSAGES);

  const selectedChat = chats.find((c) => c.id === selectedChatId) || chats[0];
  const activeMessages = messagesMap[selectedChatId] || [];

  const handleSendMessage = (text: string) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: ChatMessage = {
      id: `m_${Date.now()}`,
      sender: 'me',
      text,
      time: timeStr,
      ack: 1, // SENT
    };

    setMessagesMap((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }));

    setChats((prev) =>
      prev.map((c) => (c.id === selectedChatId ? { ...c, lastMessage: text, time: timeStr, ack: 1 } : c))
    );

    // Simulate server ACK update to READ (ack = 3) after 1.5s
    setTimeout(() => {
      setMessagesMap((prev) => ({
        ...prev,
        [selectedChatId]: (prev[selectedChatId] || []).map((m) =>
          m.id === newMessage.id ? { ...m, ack: 3 } : m
        ),
      }));
      setChats((prev) =>
        prev.map((c) => (c.id === selectedChatId ? { ...c, ack: 3 } : c))
      );
    }, 1500);
  };

  const handleSelectMenuItem = (id: string) => {
    if (id === 'settings') {
      setLeftDrawer('settings');
    } else if (id === 'starred') {
      setLeftDrawer('starred');
    } else if (id === 'contact_info') {
      setRightDrawer('contact_info');
    }
  };

  return (
    <div
      className="app-wrapper-web os-win x1n2onr6 xupqr0c xh8yej3 x5yr21d xsxifin x1vs4gjj"
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--app-background, #0b141a)',
      }}
    >
      {/* Column 1: Left Navigation Rail (width: 64px) */}
      <LeftNavRail
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setLeftDrawer('none');
        }}
        onOpenSettings={() => setLeftDrawer('settings')}
      />

      {/* Column 2: Secondary Rail Screen OR Chat List Column (width: 414px) */}
      {activeTab === 'status' ? (
        <StatusPanel />
      ) : activeTab === 'channels' ? (
        <ChannelsPanel />
      ) : activeTab === 'communities' ? (
        <CommunitiesPanel />
      ) : activeTab === 'calls' ? (
        <CallsPanel />
      ) : leftDrawer === 'newchat' ? (
        <NewChatPanel
          onClose={() => setLeftDrawer('none')}
          onSelectContact={(c) => {
            if (!chats.some((item) => item.id === c.id)) {
              setChats([c, ...chats]);
            }
            setSelectedChatId(c.id);
            setLeftDrawer('none');
          }}
        />
      ) : leftDrawer === 'archived' ? (
        <ArchivedChatsPanel
          onClose={() => setLeftDrawer('none')}
          onSelectChat={(id) => {
            setSelectedChatId(id);
            setLeftDrawer('none');
          }}
        />
      ) : leftDrawer === 'starred' ? (
        <StarredMessagesPanel onClose={() => setLeftDrawer('none')} />
      ) : leftDrawer === 'settings' ? (
        <SettingsPanel
          onClose={() => setLeftDrawer('none')}
          onOpenProfile={() => setLeftDrawer('profile')}
        />
      ) : leftDrawer === 'profile' ? (
        <ProfilePanel onClose={() => setLeftDrawer('settings')} />
      ) : (
        <div
          className="x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1"
          style={{
            width: '414px',
            flexShrink: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <ChatListHeader
            onNewChat={() => setLeftDrawer('newchat')}
            onOpenMenu={() => setIsChatListMenuOpen(true)}
          />
          <MenuDropdown
            isOpen={isChatListMenuOpen}
            onClose={() => setIsChatListMenuOpen(false)}
            items={CHATLIST_MENU_ITEMS}
            onSelectItem={handleSelectMenuItem}
            top="54px"
            left="180px"
          />
          <ChatListPanel
            chats={chats}
            selectedChatId={selectedChatId}
            onSelectChat={setSelectedChatId}
            filter={filter}
            onFilterChange={setFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      )}

      {/* Column 3: Active Conversation Column (flex: 1 1 0; min-width: 0;) */}
      <div
        className="x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2"
        style={{
          flex: '1 1 0',
          minWidth: 0,
          height: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div
          id="main"
          className="x78zum5 xdt5ytf x5yr21d xyyilfv xlkovuz x1q80dvb"
          style={{
            flex: '1 1 0',
            minWidth: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: 'var(--WDS-surface-default, #161717)',
          }}
        >
          {/* Conversation Header (height: 64px) */}
          <ChatHeader
            chat={selectedChat}
            onContactInfoClick={() => setRightDrawer(rightDrawer === 'contact_info' ? 'none' : 'contact_info')}
            onSearchClick={() => setRightDrawer(rightDrawer === 'chat_search' ? 'none' : 'chat_search')}
            onMenuClick={() => setIsChatMenuOpen(true)}
          />

          <MenuDropdown
            isOpen={isChatMenuOpen}
            onClose={() => setIsChatMenuOpen(false)}
            items={CHAT_MENU_ITEMS}
            onSelectItem={handleSelectMenuItem}
            top="54px"
            right="16px"
          />

          {/* Conversation Message List & Doodle Wallpaper */}
          <div
            className="x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh"
            data-testid="conversation-panel-body"
            style={{
              flex: '1 1 0',
              minHeight: 0,
              overflowY: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <MessageList messages={activeMessages} />
          </div>

          {/* Attach Menu */}
          <AttachMenu
            isOpen={isAttachOpen}
            onClose={() => setIsAttachOpen(false)}
            onSelectOption={(opt) => console.log('Selected attach:', opt)}
          />

          {/* Emoji / GIF / Sticker Panel */}
          <EmojiGifPanel
            isOpen={isEmojiOpen}
            onClose={() => setIsEmojiOpen(false)}
            onSelectEmoji={(emoji) => handleSendMessage(emoji)}
          />

          {/* Conversation Composer Bar (height: 64px) */}
          <ComposerBar
            onSendMessage={handleSendMessage}
            onAttachClick={() => setIsAttachOpen(!isAttachOpen)}
            onEmojiClick={() => setIsEmojiOpen(!isEmojiOpen)}
          />
        </div>

        {/* Right Drawer: Contact Info OR Chat Search */}
        {rightDrawer === 'contact_info' && (
          <ContactInfoDrawer
            isOpen={true}
            onClose={() => setRightDrawer('none')}
            chat={selectedChat}
          />
        )}
        {rightDrawer === 'chat_search' && (
          <ChatSearchDrawer
            isOpen={true}
            onClose={() => setRightDrawer('none')}
            chat={selectedChat}
          />
        )}
      </div>
    </div>
  );
};

export default ChatShell;
