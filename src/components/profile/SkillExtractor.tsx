'use client';

import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { extractSkills } from '@/ai/flows/skill-extraction';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function SkillExtractor() {
  const [resumeText, setResumeText] = useState('');
  const [extractedSkills, setExtractedSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleExtract = async () => {
    if (!resumeText) return;
    setLoading(true);
    setExtractedSkills([]);
    try {
      const result = await extractSkills({ text: resumeText });
      setExtractedSkills(result.skills);
      if (result.skills.length === 0) {
        toast({
          title: "No skills found",
          description: "The AI couldn't find any skills in the provided text."
        });
      }
    } catch (error) {
      console.error('Skill extraction failed:', error);
      toast({
          variant: "destructive",
          title: "An error occurred",
          description: "Skill extraction failed. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddSkills = () => {
    // In a real app, this would update the user's profile state or database.
    toast({
        title: "Skills Added!",
        description: `${extractedSkills.length} skills have been added to your profile.`
    });
    setIsOpen(false);
    setResumeText('');
    setExtractedSkills([]);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="mt-4 w-full">
          <Wand2 className="mr-2 h-4 w-4" />
          Extract Skills with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Extract Skills from Resume</DialogTitle>
          <DialogDescription>
            Paste your resume or a job description below to automatically
            extract key skills.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Paste your text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="min-h-[200px]"
          />
          <Button onClick={handleExtract} disabled={loading || !resumeText}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Extract Skills
          </Button>
          {extractedSkills.length > 0 && (
            <div>
              <h4 className="mb-2 font-medium">Suggested Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {extractedSkills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddSkills} disabled={extractedSkills.length === 0}>
            Add to Profile
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
