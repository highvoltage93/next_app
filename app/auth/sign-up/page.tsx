import { signup } from '@/actions/auth'
import SignUpForm from '@/widgets/auth/sign-up-form';
import { Metadata } from 'next';
import React from 'react';
import styles from "./sign-up.module.css";


export const metadata: Metadata = {
    title: "Welcome to Sign up page",
    description: "Use email for sign-up",
};

type Props = {}

export default function SignUp({ }: Props) {
    return (
        <div className={styles.sign_up_wrapper}>
            <div>
                <h1>Sign up with email</h1>
                <SignUpForm />
            </div>
        </div>
    )
}