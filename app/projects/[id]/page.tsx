import React from 'react'

type Props = {
    params: Promise<{ id: string }>
}

export default async function Projects({ params }: Props) {

    const id = (await params).id

    return (
        <div>Project by ID - {id}</div>
    )
}