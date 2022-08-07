import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormData } from '../contexts/form.context'
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
    const navigate = useNavigate()

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<TInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    const onSubmit: SubmitHandler<TInputs> = data => {
        console.log(data)
        handleChangeFormData(data)
        navigate('/step-2')
    }

    const { formData, handleChangeFormData } = useFormData()

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                defaultValue={formData.firstName}
                type="text"
                placeholder="First Name"
                className="input input-bordered input-primary w-full text-base"
                {...register('firstName')}
                isError={!!errors.firstName}
                errorText={errors.firstName?.message}
            />
            <Input
                defaultValue={formData.lastName}
                type="text"
                placeholder="Last Name"
                className="input input-bordered input-primary w-full text-base"
                {...register('lastName')}
                isError={!!errors.lastName}
                errorText={errors.lastName?.message}
            />
            <button className="btn btn-primary btn-block">Next</button>
        </Form>
    )
}

export default Step1
