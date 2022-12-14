import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

function Services({ data, initial = 0 }) {
  const [page, setPage] = useState(initial);
  const [animate, setAnimate] = useState(false);

  const itemClick = (index) => {
    setAnimate(false);
    animate ? null : setPage(index);
    // console.log(index);
  };

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, [page]);

  return (
    <section className={styles.services} id={"service"}>
      <div className={styles.container}>
        <h2>Company Services</h2>
        <div className={styles.services_block}>
          <div className={styles.services_nav}>
            <ul>
              {data.map((el, idx) => (
                <li
                  onClick={() => itemClick(idx)}
                  className={
                    idx === page ? styles.services_nav_item_active : ""
                  }
                  key={el.title}
                >
                  {el.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.services_card_wrapper}>
            <div
              className={`${styles.services_card} ${
                animate ? styles.services_card_animate : ""
              }`}
            >
              <div className={styles.services_card_content}>
                <div>
                  {data[page].title && <h3>{data[page].title}</h3>}
                  {data[page].content.map((content) => (
                    <>
                      {content.type === "paragraph" ? (
                        <p>{content.text}</p>
                      ) : null}
                      {content.type === "list" ? (
                        <ul>
                          {content.elements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      {content.type === "image" ? (
                        <div className={styles.service_img}>
                          <img src={content.src} />
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
                <div className={styles.services_card_icon}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
