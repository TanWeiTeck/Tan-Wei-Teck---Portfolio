import { Skill } from '../typings';
import { urlFor } from '../sanity';
import { motion } from 'framer-motion';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{
                    once: true,
                }}
                src={urlFor(skill.image).url()}
                className="rounded-full border bg-white border-gray-500 object-cover w-14 h-14 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out "
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:h-20 md:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl md:text-2xl font-bold text-black opacity-100">
                        {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
