import React, { useEffect } from 'react'
import './history.css'

import { useDispatch } from "react-redux";

const History  = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE",
      payload: "history__active",
    });
  }, []);
  return (
    <div className="history">
      <div className="history__container">
        <div className="history__teams">
          <div className="team">
            <div className="team__image ana"></div>
            <h2 className="team__name">@Ana</h2>
          </div>
          <div className="team">
            <div className="team__image rosa"></div>
            <h2 className="team__name">@Rosa</h2>
          </div>
        </div>
        <div className="history__content">
          {/* <img
            src="https://diabetes-resources-production.s3.eu-west-1.amazonaws.com/resources-s3/migration/ThinkstockPhotos-477612240.jpg"
            alt=""
            className="history__image"
          /> */}
          {/* <img
            src="https://fabwoman.ng/wp-content/uploads/2018/10/How-To-Start-Smoothie-business-in-Nigeria-2.jpg"
            alt=""
            className="history__image"
          /> */}
          <img
            src="https://www.babcockranchtelegraph.com/wp-content/uploads/images/2019-06-12/21p1.jpg"
            alt=""
            className="history__image"
          />
          {/* <img
            src="https://images.squarespace-cdn.com/content/v1/5c97f5757fdcb8b6642daed2/1574391262528-I09TJVVWCLWJLJ9GDHXT/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/How+to+Choose+the+Right+Juice+Bar"
            alt=""
            className="history__image"
          /> */}
          <div className="review">
            {/* <div className="history__title">
              <h2>Sobre Nosotros</h2>
            </div> */}
            <div className="history__paragraph">
              <p>
                La historia de nuestra empresa comienza, con la idea de
                satisfacer esa pequeña necesidad de alimentarse ¡bien!
              </p>
              <p>
                Esperamos poder llevarle a la gente una increible comida y a la
                vez sana. Nuestra misión es brindarles a nuestros socios una
                experiencia de calidad cada vez que trabajamos juntos.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="copyright">
          <p>Copyright © 2021 Devcecode. Todos los derechos reservados</p>
        </div> */}
      </div>
    </div>
  );
}

export default History