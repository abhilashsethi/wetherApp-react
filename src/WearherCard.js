import React from 'react'

function WearherCard({text}) {
  return (
    <div className='container my-5'>
        <div className="row mb-2">
            <div className="col mb-4">
                <div className="card">
                    <div className="card-body">
                       <h5 className="card-title">Description</h5>
                       <p className="card-text">{text.description}</p>
                    </div>
                </div>
            </div>  
            <div className="col mb-4">
                <div className="card">
                    <div className="card-body">
                       <h5 className="card-title">Temperature</h5>
                       <p className="card-text">{text.temp}</p>
                    </div>
                </div>
            </div> 
            <div className="col mb-4">
                <div className="card">
                    <div className="card-body">
                       <h5 className="card-title">Min temp</h5>
                       <p className="card-text">{text.temp_min}</p>
                    </div>
                </div>
            </div>  
            <div className="row mb-2">
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Max temp</h5>
                        <p className="card-text">{text.temp_max}</p>
                        </div>
                    </div>
                </div> 
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Humidity</h5>
                        <p className="card-text">{text.humidity}</p>
                        </div>
                    </div>
                </div> 
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Sunrise</h5>
                        <p className="card-text">{text.sunrise}</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row mb-2">
            <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Sunset</h5>
                        <p className="card-text">{text.sunset}</p>
                        </div>
                    </div>
                </div> 
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Wind Speed</h5>
                        <p className="card-text">{text.wind}m/s</p>
                        </div>
                    </div>
                </div> 
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Counry</h5>
                        <p className="card-text">{text.country}</p>
                        </div>
                    </div>
                </div> 
            </div>                  
        </div>
      
    </div>
  )
}

export default WearherCard
