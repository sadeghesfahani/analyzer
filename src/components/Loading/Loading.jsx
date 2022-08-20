import React from 'react';

export default function Loading(props) {
        return (
            <div className="flex flex-col gap-2 justify-center items-center h-full w-full px-1/4">
                <div className="w-full bg-gray-200 h-3 rounded overflow-hidden ">
                    <div className="bg-red-700 h-3" style={{width: `${props.progress}%`}}></div>
                </div>
            </div>
        );
    }