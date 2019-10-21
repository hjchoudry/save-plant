import React from "react";
import { Contact, Linked, Youtube, Facebook, Fieldset } from "./basicstyle";

function MyForm() {
  const handleSubmit = event => {
    event.preventDefault();
    alert("Thank for your review!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="submit" />
    </form>
  );
}

export default () => {
  return (
    <div>
      <Contact>
        <h1>Interact with us</h1>
        <section>
          <h2>Get yourself connected...</h2>
          <ul>
            <li>
              <Linked
                href="https://www.linkedin.com/in/husnain-javed-431b01178/"
                title="Join our professional network on LinkedIn"
              >
                LinkedIn
              </Linked>
            </li>
            <li>
              <Youtube
                href="https://www.youtube.com/channel/UCU2_efigka6ckd76mHBsEmw"
                title="Join our youtube channal"
              >
                YouTube
              </Youtube>
            </li>
            <li>
              <Facebook
                href="https://web.facebook.com/husnain.javed.7545?ref=bookmarks"
                title="Be our friend"
              >
                Facebook
              </Facebook>
            </li>
          </ul>
        </section>
        <Fieldset title="Your turn">
          <legend>
            <span>Your turn</span>
          </legend>
          <p>What, exactly then, are you after?</p>
          <input type="radio" name="intent" value="suggest" tabindex="40" />
          <label for="suggest">Suggest a idea</label>
          <br />
          <input type="radio" name="intent" value="submit" tabindex="50" />
          <label for="submit">Submit your own gallery</label>
          <br />
          <input type="radio" name="intent" value="comment" tabindex="60" />
          <label for="comment">Comment on a gallery</label>
          <br />
          <input type="radio" name="intent" value="friends" tabindex="70" />
          <label for="friends">Make friends</label>
          <br />
          <label for="discourse">Pour out your heart</label>
          <textarea
            name="discourse"
            tabindex="80"
            rows="7"
            placeholder="This is where your thoughts go"
          ></textarea>
          <MyForm />
        </Fieldset>
      </Contact>
    </div>
  );
};
