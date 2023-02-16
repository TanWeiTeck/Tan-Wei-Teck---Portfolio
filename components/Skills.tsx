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
            className="py-28 flex flex-col gap-y-20 justify-evenly text-center md:text-left max-w-5xl px-10 mx-auto items-center"
        >
            <h3 className="uppercase tracking-[20px] text-gray-800 text-2xl font-thin">
                Skills
            </h3>

            <div className="m-auto grid grid-cols-4 md:grid-cols-5 gap-6 md:gap-11">
                {arrangedSkills.map((skill) => (
                    <Skill key={skill._id} skill={skill} />
                ))}
                {/* {arrangedSkills
                        ?.slice(0, Math.floor(skills.length / 2))
                        .map((skill) => (
                            <Skill key={skill._id} skill={skill} />
                            ))}
                            {arrangedSkills
                                ?.slice(Math.floor(skills.length / 2), skills.length)
                                .map((skill) => (
                                    <Skill
                                    key={skill._id}
                                    skill={skill}
                                    directionLeft
                                    />
                                ))} */}
            </div>
            <h3 className="uppercase tracking-[3px] text-gray-800 text-sm pb-4">
                Hover over a skill for current proficiency
            </h3>
        </motion.div>
    );
};

export default Skills;
