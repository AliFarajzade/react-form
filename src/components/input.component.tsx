import { forwardRef } from 'react'

interface IProps {
    className?: string
    isError?: boolean
    errorText?: string
    [x: string]: any
}

const Input = forwardRef<HTMLInputElement, IProps>(
    (
        {
            isError,
            errorText,
            className = 'input input-bordered input-primary w-full text-base',
            ...props
        },
        ref
    ) => {
        return (
            <>
                <input {...props} className={className} ref={ref} />
                {isError && (
                    <label className="text-sm text-red-500 text-left">
                        {errorText}
                    </label>
                )}
            </>
        )
    }
)

export default Input
