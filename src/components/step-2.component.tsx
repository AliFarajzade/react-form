import { yupResolver } from '@hookform/resolvers/yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useFormData } from '../contexts/form.context'
import Form from './form.component'
import Input from './input.component'

type TInputs = {
    email: string
    hasPhone?: boolean
    phoneNumber?: string
}

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
})

const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value)

    if (!phoneNumber) return value
    return phoneNumber.formatInternational()
}

const Step2: React.FC = () => {
    const { formData, handleChangeFormData } = useFormData()

    const navigate = useNavigate()

    const {
        watch,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<TInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<TInputs> = data => {
        handleChangeFormData(data)
        navigate('/step-3')
    }

    const hasPhone = watch('hasPhone')
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                defaultValue={formData.email}
                type="email"
                placeholder="Email"
                {...register('email')}
                isError={!!errors.email}
                errorText={errors.email?.message}
            />
            <div className="flex items-center gap-2">
                <Input
                    defaultValue={formData.hasPhone}
                    type="checkbox"
                    id="phone"
                    className="checkbox"
                    {...register('hasPhone')}
                />
                <label htmlFor="phone">I have a phone number</label>
            </div>
            {hasPhone && (
                <Input
                    defaultValue={formData.phoneNumber}
                    type="tel"
                    placeholder="Phone number"
                    {...register('phoneNumber')}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.value = normalizePhoneNumber(e.target.value)
                    }}
                />
            )}
            <button className="btn btn-primary btn-block">Next</button>
        </Form>
    )
}

export default Step2
