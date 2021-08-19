import React from "react";
import Footer from "../../components/Footer";
import classes from "./faq.module.css";

function Faq() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <div className={classes.container__item_block}>
            <div className={classes.howCn}>
              <div>
                <h1 className={classes.community}>How can we help?</h1>
                <p className={classes.p}>
                  On We want you to have the simplest, easiest buying experience
                  possible. But we know you might have a few questions. Read on
                  for details about purchasing, shipping, checking order status,
                  returns, and more.
                </p>
              </div>
              <div className={classes.links}>
                <h4>Help yourself.</h4>
                <p>
                  Check order status, track or change your order, return items
                  and more.
                </p>
                <a
                  href="https://secure2.store.apple.com/shop/signIn/orders?r=SCKFUHKXACXX7DYHYT9JT7JJTAPAXHFKH&s=aHR0cHM6Ly9zZWN1cmUyLnN0b3JlLmFwcGxlLmNvbS9zaG9wL29yZGVyL2xpc3R8MWFvc2Y1YTBhZGEzMjRjNTYyNjc3YThiZGZkZDY5MzVmMjc2MzUzNmMyYWI"
                  target="_blank"
                >
                  Go to your order
                </a>
              </div>
            </div>
          </div>
          <hr className={classes.hr1} />
          <div className={classes.item__started}>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Iphone</h3>
              <li>Where to Purchase</li>
              <li>How to Purchase</li>
              <li>How to Pick Up Your iPhone</li>
              <li>Activate Your iPhone</li>
              <li>Support and Training</li>
              <li className={classes.lastLi}>Additional Information</li>
              <a
                className={classes.learnmore1}
                href="https://www.apple.com/shop/help/iphone"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Your Account</h3>
              <li>Benefits of an Apple ID</li>
              <li>Find or Reset Password</li>
              <li>Guest Checkout</li>
              <li>Manage Your Account</li>
              <li className={classes.lastLi}>Privacy Policy</li>
              <a
                className={classes.learnmore3}
                href="https://www.apple.com/shop/help/your_account"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Payment & Pricing</h3>
              <li>Payment</li>
              <li>Tax</li>
              <li>Education Pricing</li>
              <li>U.S. Government Pricing</li>
              <li className={classes.lastLi}>
                Promotions, Rebates, and Coupons
              </li>
              <a
                className={classes.learnmore2}
                href="https://www.apple.com/shop/help/payments"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <hr className={classes.hr1} />
          <div className={classes.item__started}>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Returns & Refunds</h3>
              <li>Returns Policy</li>
              <li>How To Return</li>
              <li>Refunds</li>
              <li className={classes.lastLi}>Additional Information</li>
              <a
                className={classes.learnmore1}
                href="https://www.apple.com/shop/help/returns_refund"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Shipping & Pickup</h3>
              <li>Shipping & Delivery</li>
              <li>Apple Pickup</li>
              <li>What's Next?</li>
              <li>Delivery Options</li>
              <li className={classes.lastLi}>Shipping Policies</li>
              <a
                className={classes.learnmore3}
                href="https://www.apple.com/shop/help/shipping_delivery"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Viewing & Changing Orders</h3>
              <li>Online Order Status</li>
              <li>Check Order Status</li>
              <li>Track Shipments</li>
              <li>Edit Your Order</li>
              <li>Cancel Order</li>
              <li className={classes.lastLi}>View or Print Invoice</li>
              <a
                className={classes.learnmore2}
                href="https://www.apple.com/shop/help/viewing_changing_orders"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <hr className={classes.hr1} />
          <div className={classes.item__started}>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Shopping Experience</h3>
              <li>Shop the Apple Online Store</li>
              <li>Experience the Apple Store app</li>
              <li>Sign Out of the Apple Online Store</li>
              <li className={classes.lastLi}>
                Find an Apple Retail or Reseller Store
              </li>
              <a
                className={classes.learnmore1}
                href="https://www.apple.com/shop/help/shopping_experience"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Online Exclusives</h3>
              <li>Engrave Your iPad or iPod touch</li>
              <li>Configure Your Mac</li>
              <li className={classes.lastLi}>
                Buy a Certified Refurbished Product
              </li>
              <a
                className={classes.learnmore3}
                href="https://www.apple.com/shop/help/online_store_exclusives"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Policies</h3>
              <li>Privacy Policy</li>
              <li>Sales and Refund Policy</li>
              <li>Hardware Warranties</li>
              <li>Site Terms of Use</li>
              <li>Software License Information</li>
              <li className={classes.lastLi}>Security Policy </li>
              <a
                className={classes.learnmore2}
                href="https://www.apple.com/shop/help/policies"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <hr className={classes.hr1} />
          <div className={classes.item__started}>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Apple Software</h3>
              <li>Older Versions of OS X</li>
              <li>GarageBand Learn to Play</li>
              <li>QuickTime</li>
              <li>iWork</li>
              <li className={classes.lastLi}>Aperture</li>
              <a
                className={classes.learnmore1}
                href="https://www.apple.com/shop/help/downloadable_software"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Questions & Answers</h3>
              <li>Getting Started</li>
              <li>Content Guidelines</li>
              <li>Following a Question</li>
              <li>Voting for the Best Answer</li>
              <li className={classes.lastLi}>Most Interesting Questions</li>
              <a
                className={classes.learnmore3}
                href="https://www.apple.com/shop/help/questions_and_answers"
                target="_blank"
              >
                Learn more
              </a>
            </div>
            <div className={classes.text}>
              <h3 className={classes.iphone}>Gifting</h3>
              <li>Gifting Outside of the U.S.</li>
              <li>Gift Messaging </li>
              <li>Gift Wrapping</li>
              <li>Gift Cards and Certificates</li>
              <li className={classes.lastLi}>Corporate Gifting and Rewards</li>
              <a
                className={classes.learnmore2}
                href="https://www.apple.com/shop/help/gifting"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <hr className={classes.hr1} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
