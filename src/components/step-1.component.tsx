import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Form from './form.component'
import Input from './input.component'

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'First name must not contain numbers')
        .required('First name is required'),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Last name must not contain numbers')
        .required('Last name is required'),
})

type TInputs = {
    firstName: string
    lastName: string
}

const Step1: React.FC = () => {
    const {
        register,
        formState: { errors },
    } = useForm<TInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <Form>
            <Input
                type="text"
                placeholder="First Name"
                className="input input-bordered input-primary w-full text-base"
                {...register('firstName')}
                isError={!!errors.firstName}
                errorText={errors.firstName?.message}
            />
            <Input
                type="text"
                placeholder="Last Name"
                className="input input-bordered input-primary w-full text-base"
                {...register('lastName')}
                isError={!!errors.lastName}
                errorText={errors.lastName?.message}
            />
            <button type="submit" className="btn btn-primary btn-block">
                Next
            </button>
        </Form>
    )
}

export default Step1
