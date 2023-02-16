import { SubmitHandler, useForm } from 'react-hook-form';
import { PageInfo } from '../typings';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // todo - update into mail server
        window.location.href = `mailto:tanwt08180@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen pt-28 flex flex-col justify-evenly text-center md:text-left max-w-5xl md:px-10 px-6 mx-auto items-center"
        >
            <h3 className="uppercase tracking-[20px] text-gray-800 text-2xl font-thin">
                Contact
            </h3>

            <div className="flex flex-col space-y-6 w-full">
                <h4 className="text-2xl font-semibold text-center">
                    If I have got just what you need.{' '}
                    <span className="underline decoration-secondary/50">
                        Lets Talk.
                    </span>
                </h4>
                <div className="space-y-4 text-xl">
                    <div className="flex items-center space-x-5">
                        <PhoneIcon className="text-secondary h-7 w-7 animate-pulse" />
                        <p>{pageInfo.phoneNumber}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse" />
                        <p>{pageInfo.email}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MapPinIcon className="text-secondary h-7 w-7 animate-pulse" />
                        <p>{pageInfo.address}</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 mx-auto w-full"
                >
                    <div className="flex w-full flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <input
                            {...register('name')}
                            placeholder="Name"
                            className="contactInput flex-grow"
                            type="text"
                        />
                        <input
                            {...register('email')}
                            placeholder="Email"
                            className="contactInput flex-grow"
                            type="email"
                        />
                    </div>
                    <input
                        {...register('subject')}
                        placeholder="Subject"
                        className="contactInput"
                        type="text"
                    />
                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        className="contactInput"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-secondary py-4 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
