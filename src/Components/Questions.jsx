import React from 'react'

const Questions = () => {
  return (
    <div className="Questions fluid-container">
      <div className="wrapper d-flex align-items-center flex-column">
        <div className="row py-5">
          <p className="h1">Frequently Asked Questions</p>
        </div>
        <div className="row faqWrapper d-flex flex-wrap pt-lg-4">
          <div className="col-lg-6">
            <div className="para1 py-3">
              <p className="h5"># What is Paysilo?</p>
              <p>
                Paysilo is a secure and user-friendly digital payment solution
                designed to simplify transactions. It enables businesses and
                individuals to send, receive, and manage payments
                seamlessly—whether locally or across different networks.
              </p>
            </div>
            <div className="para2 py-3">
              <p className="h5"># How does Paysilo work?</p>
              <p>
                Paysilo integrates with major payment channels and mobile money
                providers, allowing you to process payments instantly.
                Businesses can use it for bulk disbursements, subscription
                billing, or customer payments, while individuals can make quick
                and secure transfers.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="para1 py-3">
              <p className="h5"># Who can use Paysilo?</p>
              <p>
                Businesses & Startups – to collect payments, manage billing, or
                pay employees/vendors.
              </p>
              <p>
                Freelancers & Professionals – to receive client payments with
                ease.
              </p>
            </div>
            <div className="para2 py-3">
              <p className="h5"># Do I need a bank account to use Paysilo?</p>
              <p>
                No. You can use Paysilo with mobile money wallets as well as
                traditional bank accounts. This makes it flexible for users
                across different regions.
              </p>
            </div>
          </div>
        </div>
        <div className="row honesty w-100">
          <p className="h1 text-center text-white py-2">Honesty is the best policy.</p>
          <p className='text-center text-white py-1'>
            We communicate honestly. No hidden fees, no surprises, no upsells!
            Only honest work and trustworthy staff.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions