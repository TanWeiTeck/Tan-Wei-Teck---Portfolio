import { urlFor } from '../sanity';
import { Project } from '../typings';
import { XCircleIcon } from '@heroicons/react/24/solid';

type Props = {
    handleShowModal: () => void;
    screenShots: Project['screenShots'];
};

const Modal = ({ handleShowModal, screenShots }: Props) => {
    return (
        <div className="z-20 fixed top-0 left-0 h-screen w-screen bg-black/30">
            <XCircleIcon
                onClick={handleShowModal}
                className="z-10 absolute text-white w-10 h-10 right-6 top-6 cursor-pointer hover:text-secondary"
            />
            <div className="relative p-20 h-full flex space-x-10 overflow-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-400">
                {screenShots?.map((screenShot, index) => (
                    <div
                        key={index}
                        className="rounded-2xl min-w-full snap-center bg-black/70 min-h-full overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-400"
                    >
                        <img src={urlFor(screenShot).url()} alt="screenshot" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modal;
