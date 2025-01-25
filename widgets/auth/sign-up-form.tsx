"use client"

import { signup } from "@/actions/auth"
import { useActionState } from "react"

type Props = {}

const SignUpForm = (props: Props) => {

    const [state, action, pending] = useActionState(signup as any, undefined)

    return (
        <>
            <form action={signup} className="auth_form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>

        </>
    )
}

export default SignUpForm