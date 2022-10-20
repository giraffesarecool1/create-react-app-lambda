import React, { Component }  from 'react';

const ContactSection = () => {
    return (
        <div class="flexwrapper">
            <h2>Contact</h2>
            <p>Please don't hesitate to reach out. Simply leave a message and I'll get back to you as soon as possible.</p>
            <form>
            <input name="name" placeholder="Name" />
            <input type="email" name="_replyto" placeholder="Email" />
            <textarea name="message" placeholder="Your Message Here"></textarea>
            </form>
        </div>
    )
}

export default ContactSection;

