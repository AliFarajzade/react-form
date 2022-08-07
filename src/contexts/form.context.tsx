import { createContext, useContext, useState } from 'react'

type TForm = {
    firstName: string
    lastName: string
    email: string
    hasPhone?: boolean
    phoneNumber?: string
}

type TContextData = {
    formData: TForm
    handleChangeFormData: (newData: Partial<TForm>) => void
}

interface IProps {
    children: React.ReactNode | React.ReactNode[]
}

const FormContext = createContext<TContextData>({
    formData: {
        firstName: '',
        lastName: '',
        email: '',
    },
    handleChangeFormData: () => {},
})

export const useFormData = () => useContext(FormContext)

const FormCotextProvider: React.FC<IProps> = ({ children }) => {
    const [formData, setFormDate] = useState<TForm>({
        firstName: '',
        lastName: '',
        email: '',
    })

    const handleChangeFormData = (newData: Partial<TForm>) =>
        setFormDate(prevState => ({
            ...prevState,
            ...newData,
        }))

    return (
        <FormContext.Provider value={{ handleChangeFormData, formData }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormCotextProvider
