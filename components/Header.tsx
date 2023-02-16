import { Social } from '../typings';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {
    socials: Social[];
};

const Header = ({ socials }: Props) => {
    return (
        <header className="sticky top-0 p-4 flex justify-between group hover:bg-black/30 hover:shadow-lg ease-in-out duration-300 max-w-7xl mx-auto z-10">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.2 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    duration: 1,
                }}
                className="flex flex-row gap-2 items-center"
            >
                {socials.map((social) => (
                    <SocialIcon
                        className={
                            'hover:scale-125 opacity-70 group-hover:opacity-90 duration-300'
                        }
                        key={social._id}
                        url={social.url}
                        network={social.title}
                        fgColor={'white'}
                        style={{ height: '2.2rem', width: '2.2rem' }}
                    />
                ))}
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    duration: 1,
                }}
                className="flex flex-row items-center text-gray-400 cursor-pointer"
            >
                <SocialIcon
                    className={
                        'hover:scale-125 opacity-70 group-hover:opacity-90 duration-300'
                    }
                    url={'#contact'}
                    network="email"
                    fgColor="black"
                    bgColor="transparent"
                />
                <a
                    href="#contact"
                    className="uppercase hidden md:inline-flex text-sm text-gray-800"
                >
                    Get In Touch
                </a>
            </motion.div>
        </header>
    );
};

export default Header;
