import Image from 'next/image';
import {
  MessageCircle,
  MoreHorizontal,
  Share2,
  ThumbsUp,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

type Post = {
  id: string;
  author: {
    name: string;
    avatar: string;
    handle: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={post.author.avatar} alt={post.author.name}/>
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-sm text-muted-foreground">
            @{post.author.handle} &middot; {post.timestamp}
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.image && (
          <div className="mt-4 overflow-hidden rounded-lg border">
            <Image
              src={post.image}
              width={600}
              height={400}
              alt="Post image"
              className="w-full object-cover"
              data-ai-hint="social media"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-2">
        <Button variant="ghost" className="text-muted-foreground">
          <ThumbsUp className="mr-2 h-5 w-5" /> {post.likes}
        </Button>
        <Button variant="ghost" className="text-muted-foreground">
          <MessageCircle className="mr-2 h-5 w-5" /> {post.comments}
        </Button>
        <Button variant="ghost" className="text-muted-foreground">
          <Share2 className="mr-2 h-5 w-5" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
}
