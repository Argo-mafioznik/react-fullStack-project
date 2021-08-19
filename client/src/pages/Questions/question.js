import React from "react";
import Footer from "../../components/Footer";
import classes from "./questions.module.css";

function Questions() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <div className={classes.container__item_block}>
            <div>
              <h1 className={classes.community}>Community</h1>
              <p className={classes.p}>
                On{" "}
                <a href="https://www.apple.com/" target="_blank">
                  apple.com
                </a>
                , you can find Questions & Answers (Q&A) that let you share your
                knowledge and get help from other Apple customers on the
                products we offer.
              </p>
            </div>
            <div className={classes.links}>
              <h4>Choose a topic:</h4>
              <a
                href="https://www.apple.com/shop/help/questions_and_answers#started"
                target="_blank"
              >
                Getting Started
              </a>
              <a href="#questions">Questions & Answers</a>
            </div>
          </div>
          <hr />
          <div className={classes.item__started}>
            <div>
              <h3 className={classes.getStart}>Getting Started</h3>
            </div>
            <div className={classes.text}>
              <p>
                You may browse Questions & Answers without logging in, but if
                you want to answer a question, you will need to log in with an
                Apple ID. For more information on Apple ID, see the{" "}
                <a href="https://support.apple.com/" target="_blank">
                  Apple ID FAQ
                </a>{" "}
                .
              </p>
              <span>
                To participate in Questions & Answers, you must agree to the
                Community Terms of Use.
              </span>
            </div>
          </div>
          <hr />
          <div className={classes.item__started}>
            <div>
              <h3 id="questions" className={classes.getStart}>
                Questions & <br /> Answers
              </h3>
            </div>
            <div className={classes.text}>
              <p>
                Questions & Answers is a great way to get specific product
                questions answered by a community of online visitors.
              </p>
              <h5>Submitting Questions and Answers</h5>
              <p>
                You are encouraged to ask any product-related question that
                helps you with your buying decision. Here are a few of the most
                important principles to keep in mind when you're writing a
                question or answer:
              </p>
              <li>
                You are most likely to get an accurate and useful response if
                you are specific, clear, and concise in asking and answering
                questions.
              </li>
              <li>
                Avoid profanity, and do not post contact information (email
                addresses, phone numbers, etc.), URLs, time-sensitive material
                or alternative ordering information.
              </li>
              <li>
                Avoid questions about non-product related issues such as service
                and support, resellers, shipping, sales policies, other Apple
                partners or Apple topics not directly related to the product.
                Q&A is a place for asking and answering questions about the
                product's features or functionality.
              </li>
              <li>
                Avoid harmful or illegal advice as well as any speculation about
                future products or enhancements.
              </li>
              <li>
                Because the goal of Q&A is to help our visitors make informed
                buying decisions, it is not the right place for product support
                questions. If you have questions relating to product support,
                please visit the{" "}
                <a href="https://discussions.apple.com/" target="_blank">
                  Apple Support Discussions
                </a>{" "}
                .
              </li>
              <h5 className={classes.whenYo}>
                When Your Question or Answer Will be Posted
              </h5>
              <p>
                Questions and answers will typically be posted on our site
                within 1 business day after they are received. When a question
                or answer is posted it becomes visible to other visitors who can
                then respond to it.
              </p>
              <p>
                If your submission is not visible within 1 business day, it was
                probably not posted due to a violation of our guidelines. In
                these cases we encourage you to review our Community Terms of
                Use and resubmit an updated version of your question or answer.
              </p>
              <h5 className={classes.voting}>Voting for the Best Answer</h5>
              <p>
                The Best Answer is calculated using a variety of measurable
                actions by the community. The calculation is primarily based on
                how many people found an answer useful, but other factors are
                considered as well.
              </p>
              <p>
                Keep in mind that Apple does not confirm or verify the accuracy
                of the Best Answer or any other answer on the site.
              </p>
              <h5 className={classes.getUpdate}>Get Updates</h5>
              <p>
                You can receive email updates when a new question or answer is
                posted about a product. Simply click the Follow this Product
                link and enter your email address!
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Questions;
