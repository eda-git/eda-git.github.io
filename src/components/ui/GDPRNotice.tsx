import { useState, useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export default function GDPRNotice() {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
                // Set default consent to denied
                window.gtag?.('consent', 'default', {
                        ad_storage: 'denied',
                        analytics_storage: 'denied',
                });

                const hasAcceptedGDPR = localStorage.getItem('gdprAccepted');
                if (!hasAcceptedGDPR) {
                        setIsVisible(true);
                } else {
                        // If already accepted, set consent to granted
                        window.gtag?.('consent', 'update', {
                                ad_storage: 'granted',
                                analytics_storage: 'granted',
                        });
                }
        }, []);

        const handleAccept = () => {
                localStorage.setItem('gdprAccepted', 'true');
                setIsVisible(false);
                // Update consent to granted
                window.gtag?.('consent', 'update', {
                        ad_storage: 'granted',
                        analytics_storage: 'granted',
                });
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