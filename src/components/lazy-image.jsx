import { Skeleton } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage({ image }) {

    function beforeLoadImage(){

    }

    return (
        <div>

          {/* <LazyLoadImage
            alt={photo.src}
            onLoad={() => console.log(onLoadText)}
            beforeLoad={() => console.log(beforeLoadText)}
            className="gallery-img"
            effect={effect}
            height={384}
            key={photo.src}
            placeholderSrc={showLowResImages ? photo.lowResSrc : null}
            scrollPosition={scrollPosition}
            src={photo.src}
            threshold={threshold}
            width={512}
            wrapperClassName="gallery-img-wrapper" /> */}

            <LazyLoadImage
                alt={image.alt}
                height={image.height}
                src={image.src} // use normal <img> attributes as props
                width={image.width} 
                effect="blur"
                key={image.src}
                placeholder={<Skeleton variant="rectangular" animation="wave" sx={{height: 250, borderRadius: 4 }}/>}
                wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: {transitionDelay: "2s"},
                }}                
            />
        </div>
    );

}

export default LazyImage;