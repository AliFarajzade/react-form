import { forwardRef } from 'react'

interface IProps {
    className?: string
    [x: string]: any
}

const Input = forwardRef<HTMLInputElement, IProps>(
    (
        {
            className = 'input input-bordered input-primary w-full text-base',
            ...props
        },
        ref
    ) => {
        return <input {...props} className={className} ref={ref} />
    }
)

export default Input
