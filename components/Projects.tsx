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
                {projects.map((project, index) => {
                    const { handleShowSsModal } = useContext(SsModalContext);

                    return (
                        <div
                            key={index}
                            className="min-w-full snap-center flex flex-col space-y-5 items-center justify-start md:px-10 pb-10"
                        >
                            <div className="relative flex space-x-2 items-center justify-center">
                                <motion.img
                                    // initial={{
                                    //     y: -200,
                                    //     opacity: 0,
                                    // }}
                                    // whileInView={{
                                    //     opacity: 1,
                                    //     y: 0,
                                    // }}
                                    // transition={{ duration: 1.2 }}
                                    // viewport={{ once: true }}
                                    src={urlFor(project?.image).url()}
                                    alt={project.title}
                                    className="rounded-lg max-h-64 object-cover"
                                />
                                {project?.imageMobile && (
                                    <motion.img
                                        initial={{
                                            y: -250,
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{ duration: 1.5 }}
                                        viewport={{ once: true }}
                                        src={urlFor(project?.imageMobile).url()}
                                        alt={project.title}
                                        className="hidden md:block border border-gray-300 md:border-none rounded-lg max-h-72 object-cover"
                                    />
                                )}
                            </div>
                            <div className="space-y-5 max-w-5xl w-full flex flex-col items-center justify-center">
                                {project?.linkToBuild ? (
                                    <Link
                                        href={project?.linkToBuild}
                                        target={'_blank'}
                                        className="group flex items-center text-2xl text-semibold w-fit text-center underline decoration-secondary/50"
                                    >
                                        {project?.title}
                                        <ArrowTopRightOnSquareIcon className="px-1 h-5 text-gray-300 group-hover:text-secondary transition-colors duration-200 ease-in-out" />
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() =>
                                            handleShowSsModal(
                                                project.screenShots
                                            )
                                        }
                                        className="group z-20 flex items-center text-2xl text-semibold w-fit text-center underline decoration-secondary/50"
                                    >
                                        {project?.title}
                                        <ArrowsPointingOutIcon className="px-1 h-5 text-gray-300 group-hover:text-secondary transition-colors duration-200 ease-in-out" />
                                    </button>
                                )}

                                <div className="flex space-x-2">
                                    {project?.technologies.map((technology) => (
                                        <img
                                            key={technology._id}
                                            src={urlFor(technology.image).url()}
                                            alt={technology.title}
                                            className="h-6 w-6 rounded-full object-contain bg-white"
                                        />
                                    ))}
                                </div>
                                <p className="text-lg text-center md:text-left text-gray-300">
                                    {project?.summary}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Projects;
