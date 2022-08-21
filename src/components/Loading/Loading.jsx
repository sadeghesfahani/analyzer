import React from 'react';

export default function Loading(props) {
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

        return (
            <div className="flex flex-col gap-4 justify-center items-center h-full w-full px-10">
                <div className="w-full bg-gray-200 h-3 rounded overflow-hidden ">
                    <div className="bg-red-700 h-3" style={{width: `${props.progress}%`}}></div>
                </div>
                <p className="font-bold text-xl" >Loading function MDX-{randomNumber(100, 2000)}</p>
            </div>
        );
    }