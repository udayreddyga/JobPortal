'use client';

import { useEffect, useState } from 'react';
import { jobMatching } from '@/ai/flows/job-matching';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import JobCard from './JobCard';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';

const MOCK_USER_PROFILE = "Senior Frontend Developer with 5 years of experience in React, Next.js, and TypeScript. Passionate about Web3 and decentralized applications.";

const MOCK_JOBS_DATA = [
    { id: '1', title: 'Senior React Developer', company: 'ChainLink Solutions', location: 'Remote', type: 'Full-time', tags: ['React', 'Web3', 'Ethers.js'], salary: '$150k - $180k' },
    { id: '2', title: 'Solidity Smart Contract Engineer', company: 'CryptoSafe Inc.', location: 'New York, NY', type: 'Full-time', tags: ['Solidity', 'Hardhat', 'Security'], salary: '$160k - $200k' },
    { id: '3', title: 'Web3 Full-Stack Developer', company: 'Decentralized Innovations', location: 'Remote', type: 'Contract', tags: ['Next.js', 'Solidity', 'GraphQL'], salary: '$100 - $150 / hr' },
];

export default function JobMatcher() {
  const [suggestedJobs, setSuggestedJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const jobDescriptions = MOCK_JOBS_DATA.map(j => `Title: ${j.title} at ${j.company}. Tags: ${j.tags.join(', ')}.`);

        const result = await jobMatching({
          userProfile: MOCK_USER_PROFILE,
          jobDescriptions,
        });
        
        const matchedJobs = MOCK_JOBS_DATA.filter(job => 
            result.suggestedJobs.some(suggestion => suggestion.includes(job.title))
        );

        setSuggestedJobs(matchedJobs);

      } catch (e) {
        console.error("Failed to fetch job suggestions:", e);
        setError("Could not load AI-powered job suggestions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="space-y-4 p-6">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-10 w-28" />
          </Card>
        ))}
      </div>
    );
  }
  
  if (error) {
    return (
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    )
  }
    
  if (suggestedJobs.length === 0) {
    return <p className='text-muted-foreground'>No job suggestions found for your profile at this time.</p>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {suggestedJobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );
}
