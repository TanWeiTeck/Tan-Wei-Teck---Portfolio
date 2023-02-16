import { useContext } from 'react';
import Link from 'next/link';
import { urlFor } from '../sanity';
import { Project } from '../typings';
import { motion } from 'framer-motion';
import {
    ArrowsPointingOutIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import SsModalContext from './contexts/useSsModalContext';
import ProjectCard from './ProjectCard';

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="min-h-screen relative pt-20 flex flex-col justify-evenly text-center md:max-w-6xl px-10 mx-auto items-center"
        >
            <div className="w-screen absolute top-[30%] bg-secondary/20 h-[300px] -skew-y-12"></div>

            <h3 className="uppercase tracking-[20px] text-gray-800 text-2xl font-thin">
                Projects
            </h3>

            <div className="shadow-inner md:shadow-none w-full flex overflow-x-scroll space-x-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="min-w-full snap-center flex flex-col space-y-5 items-center justify-start md:px-10 pb-10"
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
