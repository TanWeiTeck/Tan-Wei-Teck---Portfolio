import { urlFor } from '../sanity';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import SsModalContext from './contexts/useSsModalContext';

const ScreenShotModal = () => {
    const { showSsModal, handleShowSsModal, ssModalContent } =
        useContext(SsModalContext);

    if (showSsModal) {
        return (
            <div className="z-20 fixed top-0 left-0 h-screen w-screen md:bg-black/70 bg-black/90">
                <XCircleIcon
                    onClick={() => handleShowSsModal(null)}
                    className="absolute text-white w-10 h-10 right-6 z-20 top-6 cursor-pointer hover:text-secondary"
                />
                <div className="relative p-3 md:p-20 h-full flex space-x-10 overflow-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-400">
                    {ssModalContent?.map((screenShot: any, index: any) => (
                        <div
                            key={index}
                            className="md:rounded-2xl rounded-md  min-w-full snap-center bg-white/10 min-h-full overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-400"
                        >
                            <img
                                src={urlFor(screenShot).url()}
                                alt="screenshot"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

export default ScreenShotModal;
