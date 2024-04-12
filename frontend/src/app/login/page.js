'use client';

import { GoogleSignInButton } from "../components/authButtons";
import React, { useState } from "react";

const SocialLoginPopup = () => {

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center mt-10 p-10 shadow-md">
                <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
                <GoogleSignInButton />
            </div>
        </div>
    );
};

export default SocialLoginPopup;
