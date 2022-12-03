const ReviewUsu = (props) =>{
    return <div className="container txt">
                <h1 class="my-4 ">Reseñas</h1>
                 {props.reviews.map((r) => {
                    return <div className="pt-4 pb-5 border-top">
                    <div className="position-relative ml-2">
                        <div className="d-inline-block pt-1 align-top">
                            <span className="float-left mr-2 w-0 h5">{r["Nombre"]}</span>
                        </div>
                    </div>
                    <div className="d-block my-2 ml-2">
                    <div className="d-inline-block">
                                {r["Puntaje"]}
                            </div>
                        <div className="">
                            {r["Comentario"]}
                        </div>
                        <div className="">
                            {r["Video"]}
                        </div>
                        <div className="">
                            {r["Link"]}
                        </div>
                    </div>
                </div> 
                 })}                        
            </div>
}
export default ReviewUsu;