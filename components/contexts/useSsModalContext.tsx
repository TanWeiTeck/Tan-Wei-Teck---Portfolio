import { createContext, PropsWithChildren, useState } from 'react';

// Ss == Screenshot
type SsModalContextType = {
    showSsModal: boolean;
    handleShowSsModal: (ssModalContent: any) => void;
    ssModalContent: any;
};

const SsModalContext = createContext<SsModalContextType>({
    showSsModal: false,
    handleShowSsModal: () => {},
    ssModalContent: {},
});

export const SsModalContextProvider = ({ children }: PropsWithChildren) => {
    const [showSsModal, setShowSsModal] = useState(false);
    const [ssModalContent, setSsModalContent] = useState(null);
    const handleShowSsModal = (ssModalContent: any) => {
        setSsModalContent(ssModalContent);
        console.log('click');
        setShowSsModal((prev) => !prev);
    };

    return (
        <SsModalContext.Provider
            value={{
                showSsModal,
                handleShowSsModal,
                ssModalContent,
            }}
        >
            {children}
        </SsModalContext.Provider>
    );
};

export default SsModalContext;
