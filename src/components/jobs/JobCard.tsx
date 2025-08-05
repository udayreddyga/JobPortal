import { Briefcase, MapPin, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
  salary: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card className="flex flex-col transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{job.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{job.company}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4" /> <span>{job.type}</span>
          <span className="text-lg leading-none">&middot;</span>
          <MapPin className="h-4 w-4" /> <span>{job.location}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="font-semibold">{job.salary}</p>
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          Apply
        </Button>
      </CardFooter>
    </Card>
  );
}
