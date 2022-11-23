import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircle = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ['20%', '20%', '50%', '80%', '20%'],
            }}
            transition={{
                type: 'spring',

                duration: 2.5,
            }}
            className="relative flex justify-center items-center "
        >
            <div className="mt-52 absolute border border-[#1E3A4C] rounded-full h-52 w-52 animate-ping" />
            <div className="mt-52 absolute border border-[#1E3A4C] rounded-full h-72 w-72" />
            <div className="mt-52 absolute border border-[#1E3A4C] rounded-full h-[31rem] w-[31rem]" />
            <div className="mt-52 absolute border border-[#809DAF] rounded-full h-[40rem] w-[40rem] opacity-20 animate-pulse" />
            <div className="mt-52 absolute border border-[#1E3A4C] rounded-full h-[50rem] w-[50rem]" />
        </motion.div>
    );
};

export default BackgroundCircle;
