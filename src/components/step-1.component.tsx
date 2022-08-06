import Form from './form.component'
import Input from './input.component'

const Step1: React.FC = () => {
    return (
        <Form>
            <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered input-primary w-full text-base"
            />
            <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered input-primary w-full text-base"
            />
            <button className="btn btn-primary btn-block">Next</button>
        </Form>
    )
}

export default Step1
