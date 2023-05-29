import React from 'react';
import styles from './styles/news.module.scss'
import NewsCard from './news/newsCard';

const News = () => {
   
    return ( 
        <div className={styles.new}>
            <p className={styles.news_text}>
                <span className={styles.news_text_sub}>Happenings Around Us</span>
                <span className={styles.news_text_main}>News & Updates</span>
            </p>
            <div className="row">
                <div className="col-12 col-lg-4 col-md-5">
                    < NewsCard
                        title={"Graduation Ceremony"}
                        body={"he school's annual graduation ceremony celebrated the accomplishments of the graduating class, bidding farewell to a remarkable group of students. The event highlighted their academic achievements, extracurricular successes, and showcased their future aspirations as they embark on the next chapter of their lives."}
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-5">
                    < NewsCard
                        title={"Art Exhibition"}
                        body={"The school's art department hosted an impressive art exhibition, featuring a stunning array of artwork created by talented students. The exhibition showcased diverse artistic styles, mediums, and techniques, providing a platform for students to express their creativity and share their unique perspectives."}
                    />
                </div>
                <div className="col-12 col-lg-4 col-md-5">
                    < NewsCard
                        title={"Debate Team Triumphs"}
                        body={"The debate team emerged victorious at a prestigious regional tournament, demonstrating their exceptional oratory skills, critical thinking abilities, and persuasive arguments. The team's success serves as a testament to their hard work"}
                    />
                </div>

            </div>
        </div>
     );
}
 
export default News;