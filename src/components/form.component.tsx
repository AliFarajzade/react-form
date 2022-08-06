interface IProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
    [x: string]: any
}

const Form: React.FC<IProps> = ({
    children,
    className = 'space-y-5 bg-white rounded-md shadow-md p-5 w-11/12 max-w-lg mx-auto',
    props,
}) => {
    return (
        <form className={className} noValidate {...props}>
            {children}
        </form>
    )
}

export default Form
