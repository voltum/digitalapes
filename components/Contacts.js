
import { useRef } from 'react'
import styles from '../styles/Home.module.css'
import{ init, send } from 'emailjs-com';
import cogoToast from 'cogo-toast';

init("user_6oHWAQwVEQeJyG3zXSwng");

function Contacts() {
    const submitBtn = useRef();

    const onSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const params = {
        from_domain: window.location.hostname,
        from_name: "DitialApes robot",
        phone_number: formData.get("phone_number"),
        full_name: formData.get("full_name"),
        additional_info: formData.get("additional_info"),
      };

      const btnText = submitBtn.current.innerText;

      submitBtn.current.innerText = "Sending...";

      send("service_s2n9oik", "template_5br0dhe", params)
        .then(
          function (response) {
            submitBtn.current.innerText = "Application sent!";
            cogoToast.success("Your application has been sent!");
            setTimeout(() => {
              submitBtn.current.innerText = btnText;
            }, 3000);
          },
          function (error) {
            submitBtn.current.innerText = "Error occured!";
            cogoToast.success("Error while sending your application!");
            setTimeout(() => {
              submitBtn.current.innerText = btnText;
            }, 3000);
            console.log("FAILED...", error);
          }
        )
        .finally(() => {
          // submitBtn.current.innerText = "Sending...";
        });
    };

    return (
      <div className={styles.contacts} id={"contacts"}>
        <div className={`${styles.container} ${styles.container_contacts}`}>
          <h2>Contacts</h2>
          <ul className={styles.contacts_line}>
            <li>
              <span> </span>ceo@digitalapes.agency
            </li>
            <li>
              <span> </span>Vienna, Austria
            </li>
          </ul>
          <form className={styles.contacts_form} onSubmit={onSubmit}>
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone number"
              required
            />
            <input
              type="text"
              name="full_name"
              placeholder="Full name"
              required
            />
            <textarea
              name="additional_info"
              placeholder="Additional information"
              required
            />
            <button type="submit" ref={submitBtn}>
              Submit your application
            </button>
          </form>
        </div>
      </div>
    );
}

export default Contacts
