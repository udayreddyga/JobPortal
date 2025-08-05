'use client';

import { Image as ImageIcon, Newspaper, Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function CreatePostForm() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src="https://avatar.vercel.sh/jane-doe.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-[80px] border-none p-0 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-1 text-muted-foreground">
                <Button variant="ghost" size="icon">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Newspaper className="h-5 w-5" />
                </Button>
              </div>
              <Button>Post</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
