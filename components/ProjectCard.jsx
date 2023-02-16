import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { urlFor } from '../sanity';
import { motion } from 'framer-motion';
import {
    ArrowsPointingOutIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import SsModalContext from './contexts/useSsModalContext';

const ProjectCard = ({ project }) => {
    const { handleShowSsModal } = useContext(SsModalContext);
    return (
        <>
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
                        onClick={() => handleShowSsModal(project.screenShots)}
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
                    {project?.summary ??
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt tempore, aut voluptatibus repellendus repellat, animi esse quibusdam voluptate expedita magni libero modi illum facere veritatis explicabo doloremque sapiente amet!'}
                </p>
            </div>
        </>
    );
};

export default ProjectCard;
