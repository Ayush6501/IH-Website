import React from "react";

export default function Item_maker(props) {
  return (
    <div>
      <div className="main_card_container">
            <div className="image_card_container">
                <img className="reponsive_image" src="http://futureuniversity.com/wp-content/uploads/sites/9/2015/02/default-placeholder-1024x1024-570x321.png" alt=""></img>
            </div>
            <div className="card_detail_container">
                <h2 className="card_heading">
                {props.arg.Title}
                </h2>
                <div>
                    <p className="card_detail_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim mollitia, cumque reiciendis dolorum illum exercitationem rerum quisquam sequi, et perspiciatis delectus doloremque eaque voluptatem deserunt. Sed tenetur eveniet nulla?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos ad incidunt repudiandae necessitatibus debitis fugit quibusdam quos voluptate voluptatem quasi at magni temporibus vel a totam, optio officiis facilis?
                    </p>

                </div>
            </div>
        </div>
    </div>
  );
}