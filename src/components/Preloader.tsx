import React, { useEffect } from 'react';

const Preloader = () => {
    useEffect(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                setTimeout(() => preloader.classList.add('fade-out'), 2000);
                setTimeout(() => preloader.style.display = 'none', 3500); // Increased duration
            });
        }
    }, []);

    return (
        <div id="preloader" className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000">
            <div className="relative isolate px-6 pt-14 lg:px-8 w-full h-full">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-pulse"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#f11b1b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-gradient"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    ></div>
                </div>
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <img
                        src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734176348/photo_aizcw9.png"
                        className="w-1/5 h-auto mb-16 animate-float"
                        alt="logo"
                    />
                    <div className="text-4xl font-bold text-red-700 animate-fadeIn">
                        Welcome to Sahaja Yoga Meditation Tamil Nadu
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeOut {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.9); }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-gradient {
                    animation: gradient 8s linear infinite;
                    background-size: 200% 200%;
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }

                .fade-out {
                    animation: fadeOut 1.5s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Preloader;
