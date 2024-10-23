import AllPageBanner from '@/components/common/AllPageBanner';
import ContactForms from '@/components/contact/ContactForms';
import React from 'react';

const ContactPage = () => {
    return (
        <section className='pt-16'>
            {/* heading Banner section */}
            <AllPageBanner headingTitle="Contact Page" />
            <div className='container pt-16 pb-8'>
                {/* contact from */}
                <div className='pt-3'>
                    <ContactForms/>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;