import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

type Props = {
    experiences: Experience[];
};

const WorkExperince = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{
                once: true,
            }}
            className="min-h-screen pt-20 flex flex-col justify-evenly text-center md:text-left max-w-6xl px-8 mx-auto items-center"
        >
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl font-thin">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary">
                {experiences
                    .sort(
                        (a, b) =>
                            new Date(b.dateStarted).getTime() -
                            new Date(a.dateStarted).getTime()
                    )
                    .map((experience) => (
                        <ExperienceCard
                            key={experience._id}
                            experience={experience}
                        />
                    ))}
            </div>
        </motion.div>
    );
};

export default WorkExperince;
