import AppLayout from '@/components/layout/AppLayout';
import CreatePostForm from '@/components/feed/CreatePostForm';
import PostCard from '@/components/feed/PostCard';
import { Separator } from '@/components/ui/separator';

const posts = [
  {
    id: '1',
    author: { name: 'Satoshi Nakamoto', avatar: 'https://avatar.vercel.sh/satoshi.png', handle: 'satoshi' },
    content: 'Just launched a new project that could revolutionize digital finance. It\'s called Bitcoin. What are your thoughts?\n\nExcited to see where this goes! #web3 #crypto #blockchain',
    image: 'https://placehold.co/600x400.png',
    timestamp: '2h ago',
    likes: 2048,
    comments: 256,
  },
  {
    id: '2',
    author: { name: 'Vitalik Buterin', avatar: 'https://avatar.vercel.sh/vitalik.png', handle: 'vitalik' },
    content: 'Thinking about the next generation of smart contracts. The possibilities with sharding and layer 2 solutions are immense. The future is scalable!',
    timestamp: '5h ago',
    likes: 1802,
    comments: 199,
  },
  {
    id: '3',
    author: { name: 'Jane Doe', avatar: 'https://avatar.vercel.sh/jane-doe.png', handle: 'janedoe_dev' },
    content: 'Thrilled to share that I\'ve accepted a new role as Lead Blockchain Developer at EthVentures! Looking forward to building the future of decentralized applications.',
    timestamp: '1d ago',
    likes: 540,
    comments: 48,
  },
];


export default function FeedPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">Social Feed</h1>
        <CreatePostForm />
        <Separator className="my-8" />
        <div className="space-y-6">
          {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </AppLayout>
  );
}
