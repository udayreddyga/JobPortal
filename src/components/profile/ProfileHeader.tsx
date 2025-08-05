import Image from 'next/image';
import { Edit, Link as LinkIcon, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ProfileHeader({ user }: { user: any }) {
  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image
          src={user.banner}
          layout="fill"
          objectFit="cover"
          alt="Profile Banner"
          className="rounded-t-lg"
          data-ai-hint="abstract background"
        />
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
          <div className="-mt-16 flex-shrink-0">
            <Avatar className="h-32 w-32 border-4 border-card">
              <AvatarImage src={user.avatar} alt={user.name}/>
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-2 flex-grow sm:mt-0">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-lg text-muted-foreground">{user.title}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {user.location}
              </span>
              <span className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" /> {user.connections}+ connections
              </span>
            </div>
          </div>
          <div className="ml-auto flex-shrink-0">
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
