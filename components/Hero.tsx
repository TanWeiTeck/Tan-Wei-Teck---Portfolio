import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import BackgroundCircle from './BackgroundCircle';

type Props = {
    pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I am ${pageInfo?.name || 'Wei Teck'}`,
            'Front-End Developer',
            'React Developer',
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircle />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={
                    urlFor(pageInfo?.heroImage).url() ||
                    '/assets/images/TWT2.jpeg'
                }
                alt="Tan_wei_teck_profilepic"
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-3xl lg:text-4xl font-semibold px-10">
                    <span className="mr-3">#{text}</span>
                    <Cursor cursorColor="red" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experince">
                        <button className="heroButton">Experince</button>{' '}
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>{' '}
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
