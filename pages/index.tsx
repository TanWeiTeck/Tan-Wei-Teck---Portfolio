import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
    return (
        <div className="portfoliobg text-black h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scroll-smooth ">
            <ScreenShotModal />

            <Head>
                <title>Wei Teck Portfolio</title>
            </Head>

            <Header socials={socials} />

            {/* Hero */}
            <section
                id="hero"
                className="snap-center border-b-[1px] border-gray-400"
            >
                <Hero pageInfo={pageInfo} />
            </section>

            {/* About */}
            <section
                id="about"
                className="md:snap-start border-b-[1px] border-gray-400"
            >
                <About pageInfo={pageInfo} />
            </section>

            {/* Experince */}
            <section
                id="experince"
                className="md:snap-start border-b-[1px] border-gray-400"
            >
                <WorkExperince experiences={experiences} />
            </section>

            {/* Skills */}
            <section
                id="skills"
                className="md:snap-start border-b-[1px] border-gray-400"
            >
                <Skills skills={skills} />
            </section>

            {/* projects */}
            <section
                id="projects"
                className="md:snap-start border-b-[1px] border-gray-400"
            >
                <Projects projects={projects} />
            </section>

            {/* contact */}
            <section id="contact" className="">
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
