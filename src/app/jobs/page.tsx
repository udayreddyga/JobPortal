import AppLayout from '@/components/layout/AppLayout';
import { Briefcase, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobCard from '@/components/jobs/JobCard';
import JobMatcher from '@/components/jobs/JobMatcher';

const jobs = [
    { id: '1', title: 'Senior React Developer', company: 'ChainLink Solutions', location: 'Remote', type: 'Full-time', tags: ['React', 'Web3', 'Ethers.js'], salary: '$150k - $180k' },
    { id: '2', title: 'Solidity Smart Contract Engineer', company: 'CryptoSafe Inc.', location: 'New York, NY', type: 'Full-time', tags: ['Solidity', 'Hardhat', 'Security'], salary: '$160k - $200k' },
    { id: '3', title: 'Web3 Full-Stack Developer', company: 'Decentralized Innovations', location: 'Remote', type: 'Contract', tags: ['Next.js', 'Solidity', 'GraphQL'], salary: '$100 - $150 / hr' },
    { id: '4', title: 'Product Manager, DeFi', company: 'Fintech Protocol', location: 'London, UK', type: 'Full-time', tags: ['DeFi', 'Product', 'Agile'], salary: '£90k - £120k' },
    { id: '5', title: 'Rust Blockchain Developer', company: 'Substrate Systems', location: 'Berlin, Germany', type: 'Full-time', tags: ['Rust', 'Substrate', 'Polkadot'], salary: '€100k - €130k' },
    { id: '6', title: 'Head of Growth (Web3)', company: 'NFT Marketplace Co.', location: 'Remote', type: 'Full-time', tags: ['Marketing', 'Growth', 'NFT'], salary: '$140k - $170k' },
];

export default function JobsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold">Find Your Next Opportunity</h1>
          <Button>Post a Job</Button>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Job title or keyword" className="pl-8" />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Location" className="pl-8" />
          </div>
          <Button className="w-full md:w-auto">Search</Button>
        </div>
        <Tabs defaultValue="all-jobs">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="all-jobs">All Jobs</TabsTrigger>
            <TabsTrigger value="suggested">Suggested for you ✨</TabsTrigger>
          </TabsList>
          <TabsContent value="all-jobs" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="suggested" className="mt-6">
            <JobMatcher />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
