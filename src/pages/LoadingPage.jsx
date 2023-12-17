import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    );
}

export default LoadingPage;