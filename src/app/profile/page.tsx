import AppLayout from '@/components/layout/AppLayout';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileSection from '@/components/profile/ProfileSection';
import SkillExtractor from '@/components/profile/SkillExtractor';
import { Badge } from '@/components/ui/badge';

const user = {
    name: 'Jane Doe',
    title: 'Lead Blockchain Developer at EthVentures',
    location: 'San Francisco, CA',
    avatar: 'https://avatar.vercel.sh/jane-doe.png',
    banner: 'https://placehold.co/1200x300.png',
    connections: 523,
    about: 'Passionate Lead Blockchain Developer with a focus on creating secure, scalable, and user-friendly decentralized applications. Expert in Solidity, smart contract architecture, and DeFi protocols. Always eager to connect with fellow builders in the Web3 space.',
};

const experience = [
    {
        id: 1,
        title: 'Lead Blockchain Developer',
        company: 'EthVentures',
        duration: 'Jan 2022 - Present',
        description: 'Leading a team of developers in building a next-generation DeFi platform. Responsible for smart contract architecture, security audits, and protocol design.'
    },
    {
        id: 2,
        title: 'Senior Smart Contract Engineer',
        company: 'CryptoSystems',
        duration: 'Jun 2020 - Dec 2021',
        description: 'Developed and deployed multiple high-value smart contracts on the Ethereum mainnet. Optimized gas usage and implemented robust testing suites.'
    }
];

const skills = [
    'Solidity', 'Rust', 'Smart Contracts', 'DeFi', 'EVM', 'Hardhat', 'Foundry', 'TypeScript', 'Next.js', 'Gas Optimization', 'Security Audits'
];

const education = [
    {
        id: 1,
        institution: 'Stanford University',
        degree: 'M.S. in Computer Science',
        duration: '2018 - 2020'
    }
]

export default function ProfilePage() {
    return (
        <AppLayout>
            <div className="mx-auto max-w-5xl space-y-8">
                <ProfileHeader user={user} />
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        <ProfileSection title="About">
                            <p className="text-muted-foreground">{user.about}</p>
                        </ProfileSection>

                        <ProfileSection title="Experience">
                           <div className="space-y-6">
                             {experience.map(exp => (
                                <div key={exp.id} className="flex gap-4">
                                    <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-md bg-muted"></div>
                                    <div>
                                        <h3 className="font-semibold">{exp.title}</h3>
                                        <p className="text-sm">{exp.company}</p>
                                        <p className="text-xs text-muted-foreground">{exp.duration}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                                    </div>
                                </div>
                             ))}
                           </div>
                        </ProfileSection>
                    </div>

                    <div className="space-y-8">
                        <ProfileSection title="Skills">
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => <Badge key={skill} variant="outline" className="text-base py-1 px-3">{skill}</Badge>)}
                            </div>
                            <SkillExtractor />
                        </ProfileSection>

                        <ProfileSection title="Education">
                            {education.map(edu => (
                                <div key={edu.id} className="flex gap-4">
                                     <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-md bg-muted"></div>
                                    <div>
                                        <h3 className="font-semibold">{edu.institution}</h3>
                                        <p className="text-sm">{edu.degree}</p>
                                        <p className="text-xs text-muted-foreground">{edu.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </ProfileSection>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
