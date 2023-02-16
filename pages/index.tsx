import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperince from '../components/WorkExperince';
import { urlFor } from '../sanity';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import ScreenShotModal from '../components/ScreenShotModal';
import SsModalContext from '../components/contexts/useSsModalContext';

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
    const { showSsModal, handleShowSsModal, ssModalContent } =
        useContext(SsModalContext);

    return (
        <div className="portfoliobg text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth ">
            <ScreenShotModal />

            <Head>
                <title>Wei Teck Portfolio</title>
            </Head>

            <Header socials={socials} />

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            {/* About */}
            <section id="about" className="snap-start">
                <About pageInfo={pageInfo} />
            </section>

            {/* Experince */}
            <section id="experince" className="snap-start">
                <WorkExperince experiences={experiences} />
            </section>

            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            {/* projects */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            {/* contact */}
            <section id="contact" className="snap-start">
                <Contact pageInfo={pageInfo} />
            </section>

            <footer className="w-full">
                <Link href="#hero">
                    <img
                        className="fixed bottom-5 right-5 rounded-full h-8 w-8 object-cover grayscale hover:grayscale-0"
                        src={
                            urlFor(pageInfo?.heroImage).url() ||
                            '/assets/images/TWT2.jpeg'
                        }
                        alt="Tan_wei_teck_profilepic"
                    />
                </Link>
            </footer>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
    };
};
