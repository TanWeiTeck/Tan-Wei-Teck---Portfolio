import { Social } from '../typings';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {
    socials: Social[];
};

const Header = ({ socials }: Props) => {
    return (
        <header className="sticky top-0 p-4 flex justify-between max-w-7xl mx-auto z-20">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.2 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    duration: 1,
                }}
                className="flex flex-row items-center"
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        network={social.title}
                        bgColor="transparent"
                        fgColor={'grey'}
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
                    url={'#contact'}
                    network="email"
                    fgColor="grey"
                    bgColor="transparent"
                />
                <a
                    href="#contact"
                    className="uppercase hidden md:inline-flex text-sm text-gray-400"
                >
                    Get In Touch
                </a>
            </motion.div>
        </header>
    );
};

export default Header;
