import React from 'react';
import n from './news.module.css'

const News = () => {
    return (
        <div>
            <div className={n.row}>
                <div className="col-header start">Начать</div>
                <div className="col-header progress">В процессе</div>
                <div className="col-header done">Готовы</div>
            </div>

            <div className="row">
                <div className="placeholder">
                    <div className="item" draggable="true">Перетащи меня</div>
                </div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>

        </div>
    );
};

export default News;