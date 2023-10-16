import React from "react";
import { useState } from "react";
import axios from "axios";

export default function CreateSubscriber() {
    const initialValues = {
        name: "",
        email: "",
    };

    const [subscriber, setSubscriber] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSubscriber({
            ...subscriber,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const subscriberData = {
            name: subscriber.name,
            email: subscriber.email,
        }
        setSubscriber(initialValues)

        axios.post("http://localhost:3100/users/subscriber", subscriberData).then((response) => {
            console.log(response.status, response.data)
        })
    }

    return (
        <>
            <div id="flex-form-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div id="homepage-input-container">
                        <input id="subscriber-input"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={subscriber.name}
                            onChange={handleChange}
                        />
                        <input id="subscriber-input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={subscriber.email}
                            onChange={handleChange}
                        />
                        <button id="subscribe-button" type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </>
    )

}