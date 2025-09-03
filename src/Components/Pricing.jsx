import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="Pricing fluid-container">
      <div className="row">
        <p className="h1 text-center pt-5 pb-2 text-white">Paysilo Pricing</p>
        <p className="text-center pb-lg-5 text-white">
          No Setup Fee. No Maintenance Charges. No Minimum Commitment.
        </p>
      </div>
      <div className="contentWrapper d-flex align-items-center justify-content-center gap-5 flex-wrap">
        <div className="col-lg-4 col-11 pricing1 px-5 py-4">
          <p className="h4">NEFT / RTGS / Bank Transfer</p>
          <p>Perfect for small business</p>

          <sup className="h5">$</sup>
          <span className="h2">0</span>
          <span>/ For All Transactions</span>

          <ul className="list-unstyled">
            <li>- Free Setup Fee</li>
            <li>- Free Annual Maintenance</li>
            <li>- No Minimum Commitment</li>
          </ul>

          <button className="py-2 px-5">
            <Link to="/">Get Started</Link>
          </button>
        </div>
        <div className="col-lg-4 col-11 pricing2 px-5 py-4">
          <div className="block">
            <p className="text-center py-1 my-0 px-0">All In One Solutions</p>
          </div>
          <div className="paraBlock">
            <p className="h4">Debit Cards / Credit Cards /</p>
            <p className="h4">Netbanking / Wallets / UPI</p>
            <p>Perfect for large enterprise</p>

            <sup className="h5">$</sup>
            <span className="h2">0.3 + 2%</span>
            <span>/ Per Transaction</span>

            <ul className="list-unstyled">
              <li>- Free Setup Fee</li>
              <li>- Free Annual Maintenance</li>
              <li>- No Minimum Commitment</li>
              <li>- Fraud Protection</li>
              <li>- Digital File Hosting & Download</li>
              <li>- Integration with SMS, WhatsApp & Social Media</li>
            </ul>

            <button className="py-2 px-5">
              <Link to="/">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing