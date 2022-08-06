interface IProps {
    className?: string
    [x: string]: any
}

const Input: React.FC<IProps> = ({
    className = 'input input-bordered input-primary w-full text-base',
    ...props
}) => {
    return <input {...props} className={className} />
}

export default Input
