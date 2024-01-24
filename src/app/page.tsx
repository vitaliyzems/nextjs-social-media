import { ChatsList } from '@/components/screens/chats/ChatsList';
import { CurrentUser } from '../components/screens/chats/CurrentUser';
import { Chat } from '@/components/screens/chats/Chat';

export default function ChatsPage() {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: '.7fr 3fr',
      }}
    >
      <div className="border-r border-border">
        <CurrentUser />
        <ChatsList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
}
