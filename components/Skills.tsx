import { Skill as SkillType } from '../typings';
import Skill from './Skill';
import { motion } from 'framer-motion';

type Props = {
    skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
    const arrangedSkills = skills.sort((a, b) => b.progress - a.progress);

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
            className="min-h-screen pt-20 flex flex-col justify-evenly text-center md:text-left max-w-5xl px-10 mx-auto items-center"
        >
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl font-thin">
                Skills
            </h3>

            <h3 className="uppercase tracking-[3px] text-gray-500 text-sm pb-4">
                Hover over a skill for current proficiency
            </h3>

            <div className="grid grid-cols-4 gap-5">
                {arrangedSkills?.slice(0, 8).map((skill) => (
                    <Skill key={skill._id} skill={skill} />
                ))}
                {arrangedSkills?.slice(8, skills.length).map((skill) => (
                    <Skill key={skill._id} skill={skill} directionLeft />
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
