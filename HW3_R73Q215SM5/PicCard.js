import React from "react"

function PicCard(props) {
    return (
      <div>
         <div class="sample-wallpaper">
          <article class="wallpaper">
            <img src={props.imgUrl} alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
      </div>
    )
}

export default PicCard