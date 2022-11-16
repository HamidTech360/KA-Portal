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
                    < NewsCard/>
                </div>
                <div className="col-12 col-lg-4 col-md-5">
                    < NewsCard/>
                </div>
                <div className="col-12 col-lg-4 col-md-5">
                    < NewsCard/>
                </div>

            </div>
        </div>
     );
}
 
export default News;