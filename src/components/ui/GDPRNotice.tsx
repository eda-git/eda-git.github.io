import { useState, useEffect } from 'react';

export default function GDPRNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedGDPR = localStorage.getItem('gdprAccepted');
        if (!hasAcceptedGDPR) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gdprAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="gdpr-notice">
            <div className="gdpr-content">
                <h3>Privacy Notice</h3>
                <p>
                    This portfolio website uses cookies only for essential functionality and does not track or store personal data. By continuing to use this site, you acknowledge this notice.
                </p>
                <div className="gdpr-buttons">
                    <button onClick={handleAccept} className="gdpr-accept">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
} 