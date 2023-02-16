import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
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
            className="pt-28 gap-y-14 md:gap-y-24 flex flex-col justify-evenly text-center md:text-left max-w-5xl px-10 mx-auto items-center"
        >
            <h3 className="uppercase tracking-[20px] text-gray-800 text-2xl font-thin">
                About
            </h3>
            <div className="flex flex-col items-center md:flex-row space-y-10 md:space-y-0 md:pl-4">
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    src={
                        urlFor(pageInfo?.profilePic).url() ||
                        '/assets/images/TWT2.jpeg'
                    }
                    className="flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 shadow-2xl"
                />
                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-2xl font-semibold">
                        Here is a{' '}
                        <span className="underline decoration-secondary/50">
                            little
                        </span>{' '}
                        background
                    </h4>
                    <p className="text-sm">
                        {pageInfo?.backgroundInformation ||
                            '👋, I am Wei Teck, born in a multicultural country in SEA called Malaysia. I am a Front-End Web Developer, love to create beautiful and performant products with delightful user experience. In year 2021, I made a biggest decision in my career to have a absolute transition from a Civil & Structure Engineer into a Front-End Developer. I have started my programming journey by self-learning and subscripted to multiple boot-camps. Eager in exploring new technologies and making sure myself a professional Front-end Developer.'}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
