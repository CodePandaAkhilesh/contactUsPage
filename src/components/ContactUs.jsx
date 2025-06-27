import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="page-contact-us">

      <div className="section-header">
          <div className="container-heading">
          <h1 className="con">Contact Us</h1>
          <p className="para">
            We've gathered answers to the most common questions we
            recieve(FAQ)-you might just find what you're looking for here! If
            not, no worries!We'll be happy to help.Just drop us a message using
            the form below.
          </p>
        </div>
        <div className="container-illustration">
          <img src="svg-decoration.png" alt="svg-decoration" className="img"/>
        </div>
      </div>

      <div className="section-faq">
        <div className="stack-faq">
          <div className="container-header-faq">
            <h2>Frequently Asked Questions (FAQ)</h2>
          </div>
          <div className="input-search-bar">
            <input type="text" placeholder="search" />
            <img src="magnifying-glass-icon@2x.png" alt="magnifying-glass" />
          </div>
          <div className="accordion">
            <div className="item-1">
              <div className="collapse-header">
                <div className="header-1">Where does my money go ?</div>
                <div><img src="caret-circle-down-icon.png" class="arrow"/></div>
              </div>
              <div className="content">
                <p className="para2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur 
                  vitae voluptate aspernatur et. Iusto pariatur reprehenderit eaque non 
                  laboriosam aspernatur aliquam odit, nesciunt sapiente, distinctio totam
                  ratione. Officia quae reprehenderit beatae hic facilis minima assumenda
                  commodi reiciendis, unde, obcaecati temporibus consectetur. Autem tempora
                  itaque doloribus sint quaerat voluptate odit, ea atque.Iusto reprehenderit eaque non nesciunt sapiente, distinctio totam
                  ratione. Officia quae, nascetur ridiculus mus.
                </p>
              </div>
            </div>
            <div className="item-2">
              <div className="header-2">Is my money safe?</div>
              <div><img src="caret-circle-right-icon.png" class="arrow"/></div>
            </div>
            <div className="item-2">
              <div className="header-2">Can I cancel my monthly donation ?</div>
              <div><img src="caret-circle-right-icon.png" class="arrow"/></div>
            </div>
            <div className="item-2">
              <div className="header-2">Do I get a tax Receipt ?</div>
              <div><img src="caret-circle-right-icon.png" class="arrow"/></div>
            </div>
            <div className="item-2">
              <div className="header-2">Can I donate anonymously ?</div>
              <div><img src="caret-circle-right-icon.png" class="arrow"/></div>
            </div>
          </div>
          <div className="button-pagination">
            <div>
              <img src="caret-left-icon.png" />
            </div>
            <div>
              <img src="1.png" />
            </div>
            <div>
              <img src="2.png" />
            </div>
            <div>
              <img src="3.png" />
            </div>
            <div>
              <img src="4.png" />
            </div>
            <div>
              <img src="5.png" />
            </div>
            <div>
              <img src="caret-right-icon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
