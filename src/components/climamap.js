export default function Climamap () {
    return (
        <div className="dos-cajas-chicas">
            <div className="caja-chica" style={{padding: "0"}}>
                <div className="location">
                    Oporto, Portugal                                            
                </div>
                <div className="marker mapboxgl-marker mapboxgl-marker-anchor-center" aria-label="Map marker" style={{width: "28px", height: "28px", transform: "translate(87px, 58px) translate(-50%, -50%) translate(0px, 0px)", opacity: "1", pointerEvents: "auto"}}>
                    <div className="relative h-full w-full">
                        <div className="absolute left-1/2 top-1/2 rounded-full bg-[#679BFF] opacity-20 s-3 styles_marker-pulse__BxsPp"></div>
                        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white styles_marker__Mzm27">
                            <div className="absolute inset-[3px] rounded-full bg-[#679BFF]"></div>
                            <div className="absolute inset-[3px] rounded-full styles_marker-border__fxi6v"></div>
                            <div className="absolute inset-[5px] rounded-full bg-[#679BFF]"></div>
                        </div>
                    </div>
                </div>
                <div className="mapa">
                    <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-8.609,41.1517,12.34,0/200x181?access_token=pk.eyJ1IjoiY2Fsdm9uaWNvIiwiYSI6ImNsZ21mbGdxdTA1a2QzZ29oOHZyOHY1dTAifQ.0ybOYfPRvPYaVmlg0QYzmg" alt="Porto Map" />
                </div>
            </div>
            <div className="caja-chica" style={{padding: "0"}}>
                <a className="weatherwidget-io" style={{borderRadius: "12px"}} href="https://forecast7.com/en/41d16n8d63/porto/" data-label_1="OPORTO" data-label_2="WEATHER" data-icons="Climacons Animated" data-mode="Current" data-days="3" data-theme="weather_one" >OPORTO WEATHER</a>

                { !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js') }
            </div>
        </div>
    )
}