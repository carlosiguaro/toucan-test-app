import React, { useState } from "react";
import Layout from "../components/layout/layout";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Field, Fields } from "@/utils/interfaces";
import ProtectedRoute from "../components/auth/protected-route";

export default function Contact() {
    const initFieldValue: Field = { value: '', touched: false };
    const initialFields: Fields = {
        firstName: initFieldValue,
        lastName: initFieldValue,
        email: initFieldValue,
        subject: initFieldValue,
        message:initFieldValue,
      };

    const [fields, setFields] = useState<Fields>(initialFields);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFields((prevFields) => ({
        ...prevFields,
        [name]: { ...prevFields[name], value },
      }));
    };
    
    const handleBlur = (name: string) => (
        event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: { ...prevFields[name], touched: true },
      }));
    };

    function isValidEmail(email:string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const isValid = (name: string) => {
        let rule:boolean = fields[name].value.length >= 1;
        if (name === 'email') {
            rule = isValidEmail(fields[name].value);
        }
        return fields[name].touched && rule;
    }

    return (
        <ProtectedRoute authenticated={false}>
            <Layout section="Contact Us">
                <div id="contact-section">
                    <div>
                        <h1>Send us a note and tell us about your project</h1>
                        <div>
                            <div>
                                <form onSubmit={e => e.preventDefault()}>
                                    <TextField
                                        label="First Name *"
                                        name="firstName"
                                        value={fields.firstName.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur('firstName')}
                                        error={fields.firstName.touched && !isValid('firstName')}
                                        helperText={fields.firstName.touched && !isValid('firstName') ? 'First name is required' : ''}
                                        variant="outlined"
                                        className="w-100 mb-2"
                                    />
                                    <TextField
                                        label="Last Name *"
                                        name="lastName"
                                        value={fields.lastName.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur('lastName')}
                                        error={fields.lastName.touched && !isValid('lastName')}
                                        helperText={fields.lastName.touched && !isValid('lastName') ? 'Last name is required' : ''}
                                        variant="outlined"
                                        className="w-100 mb-2"
                                    />
                                    <TextField
                                        label="Email *"
                                        name="email"
                                        value={fields.email.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur('email')}
                                        error={fields.email.touched && !isValid('email')}
                                        helperText={fields.email.touched && !isValid('email') ? 'Invalid email' : ''}
                                        variant="outlined"
                                        className="w-100 mb-2"
                                    />
                                    <TextField
                                        label="Subject *"
                                        name="subject"
                                        value={fields.subject.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur('subject')}
                                        error={fields.subject.touched && !isValid('subject')}
                                        helperText={fields.subject.touched && !isValid('subject') ? 'Subject is required' : ''}
                                        variant="outlined"
                                        className="w-100 mb-2"
                                    />
                                    <TextField
                                        label="Subject *"
                                        name="message"
                                        value={fields.message.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur('message')}
                                        error={fields.message.touched && !isValid('message')}
                                        helperText={fields.message.touched && !isValid('message') ? 'Message is required' : ''}
                                        variant="outlined"
                                        className="w-100 mb-2"
                                        multiline
                                        rows={4}
                                    />
                                    <Button className="w-100 mt-1 py-1 bg-primary" type="submit" variant="contained">Submit</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    )
}