import React from 'react'

import { CaseBase } from '../caseBase'

export const MadeLolla = () => {
  return (
    <CaseBase
      backgroundColor="black"
      client="Made In Brazil"
      description={
        <p>
          A Made in Brazil esteve presente no Lollapalooza 2019 com o Garage
          Studio, um espaço incrível onde músicos e artistas puderam fazer um
          som antes e depois de entrarem no palco. Nós produzimos todo o
          material da ação, que contou com flyers, banners, conteúdos digitais,
          backdrop, brindes exclusivos, playlists no Spotify e um vídeo, que
          trouxe toda a emoção do evento para as nossas redes sociais.
        </p>
      }
      header="https://portfolio.duee.com.br/wp-content/uploads/2019/06/HEADER_1-5-1.png"
      name="MadeLolla"
      year="2019"
    >
      <div className="col-xs-12">
        <iframe
          allow="autoplay; fullscreen"
          allowFullScreen={true}
          frameBorder="0"
          id="vimeo"
          src="https://player.vimeo.com/video/340465615"
          width="100%"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-89-1.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-5-2.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/GarageStudio.gif"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-142-2.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-218-2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-132-2.jpg"
        />
        <img
          alt=""
          src="https://portfolio.duee.com.br/wp-content/uploads/2019/06/Lollapalooza-18-2.jpg"
        />
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <iframe
          allow="encrypted-media"
          allowTransparency={true}
          frameBorder="0"
          height="380"
          src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A68LglzhL6afHlY0D877XXw"
          width="300"
        ></iframe>
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <iframe
          allow="encrypted-media"
          allowTransparency={true}
          frameBorder="0"
          height="380"
          src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A6euNX0DQ8V0iyJxMuqQZn5"
          width="300"
        ></iframe>
      </div>
      <div className="col-xs-12 col-md-4 col-sm-6">
        <iframe
          allow="encrypted-media"
          allowTransparency={true}
          frameBorder="0"
          height="380"
          src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A3AXlUoMZPdQBHcBQG8J9ut"
          width="300"
        ></iframe>
      </div>
      <div className="col-xs-12">
        <iframe
          allowTransparency={true}
          frameBorder="0"
          height="56"
          scrolling="no"
          src="https://open.spotify.com/follow/1/?uri=spotify:user:e4andqtcxjiik8wlcyns8sbue&size=detail&theme=dark"
          style={{ border: 'none', overflow: 'hidden' }}
          width="300"
        ></iframe>
      </div>
    </CaseBase>
  )
}
