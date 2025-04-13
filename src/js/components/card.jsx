import React from "react"

const Card = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card w-75 mx-auto mb-4">
        <img src="https://images.freeimages.com/image/previews/6fa/metal-ai-android-design-5691024.png?fmt=webp&w=500" className="card-img-top" alt="imagen-robot" />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis officiis cupiditate labore dolore quas harum ullam facilis incidunt, necessitatibus iste repudiandae nisi adipisci. Facilis dolor voluptatibus deserunt cumque blanditiis?
          </p>
        </div>
        <div className="card-footer border-top bg-light text-center p-3">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>


  )
}




export default Card