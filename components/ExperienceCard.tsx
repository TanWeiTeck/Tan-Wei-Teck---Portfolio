import { urlFor } from '../sanity';
import { Experience } from '../typings';
import { motion } from 'framer-motion';

type Props = {
    experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 md:w-[400px] w-[350px] snap-center bg-gray-200/20 0 p-5 opacity-70 hover:opacity-100 hover:shadow-2xl cursor-pointer transition-opacity duration-300 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{
                    once: true,
                }}
                className="w-24 h-24 rounded-full object-cover object-center my-4"
                src={
                    urlFor(experience?.companyImage).url() ||
                    'https://assets.bharian.com.my/images/articles/1200x630wa_1628058254.jpg'
                }
                alt=""
            />
            <div className="px-0 md:px-3">
                <h4 className="text-xl font-light text-center">
                    {experience?.jobTitle || 'Engineer'}
                </h4>
                <p className="font-bold text-md mt-1 text-center">
                    {' '}
                    {experience?.company || 'undisclosed'}
                </p>
                <div className="flex space-x-1 my-1 justify-center">
                    {experience?.technologies
                        ? experience.technologies.map((technology) => (
                              <img
                                  key={technology._id}
                                  className="h-8 w-8 rounded-full object-contain bg-white"
                                  src={urlFor(technology.image).url()}
                                  alt={technology.title}
                              />
                          ))
                        : ''}
                </div>
                <p className="uppercase py-2 text-gray-300 text-center">
                    {new Date(experience.dateStarted).toLocaleDateString(
                        'en-MY',
                        {
                            year: 'numeric',
                            month: 'short',
                        }
                    )}{' '}
                    -{' '}
                    {experience.isCurrentlyWorkingHere
                        ? 'Present'
                        : new Date(experience.dateEnded).toLocaleDateString(
                              'en-MY',
                              {
                                  year: 'numeric',
                                  month: 'short',
                              }
                          )}
                </p>
                <ul className="list-disc spcae-y-4 ml-5 text-sm text-start">
                    {experience?.points
                        ? experience.points.map((point, index) => (
                              <li key={index}>{point}</li>
                          ))
                        : ''}
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
