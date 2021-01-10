import * as React from "react";
import { Button, DataList, Checkbox, SearchBox, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, FormField, Label, Select, Input, Modal, ToggleFilter } from "uxp/components";
import { registerWidget, registerLink, IContextProvider, } from './uxp';

import './styles.scss';

//import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';


import { Map, TileLayer, ImageOverlay,Marker, Rectangle, Polygon, Circle ,Tooltip} from 'react-leaflet';
import { LatLngTuple, LatLngExpression, LeafletMouseEvent,CRS } from 'leaflet';

 
const DATA = [
    { 
        category: "BLACK HANDBAG FOUND NEAR THE ENTERANCE ",
        reported_time: "12:00 PM",
        location: "Enterance",
        filter :"", 
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    },
    {
        category: "BLACK HANDBAG FOUND NEAR THE ENTERANCE ",
        reported_time: "12:00 PM",
        location: "Enterance",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    },
    {
        category: "BLACK SUITCASE FOUND NEAR THE REST ROOM",
        reported_time: "12:00 PM",
        location: "Rest Room",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    },
    { 
        category: "WATER BOTTLE IN THE PRAYER AREA",
        reported_time: "12:00 PM",
        location: "Prayer Area",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    }, 
    {
        category: "AMERICAN PASSPORTS FOUND IN THE PRAYER AREA",
        reported_time: "12:00 PM",
        location: "Prayer Area",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    }
];
  // datalist
  const renderItem = (item: any, key: number) => {
    return (<div className="list-item">
        <div className="category"><span><img src={item.list_pict} /> </span>{item.category}</div>
        <div className="reported_time">{item.reported_time}</div>
        <div className="location">{item.location}</div> 
        <div className="filter">{item.filter}</div> 
    </div>)
}

// const renderGridItem = (item: any, key: number) => {
//     return (<ItemCard
//         item={item}
//         imageField="icon"
//         titleField="title"
//         subTitleField="subTitle"
//         nameField="name"
//     />)
// }
 
const getDataItems = (max: number, pageToken: string) => {
    let last = 0

    if (pageToken !== null) last = parseInt(pageToken);

    let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
        let data = DATA.filter((item: any, key: number) => (key > last && key <= last + max));
        let response = { items: data, pageToken: (last + data.length).toString() }
        resolve(response);
    })

    return p;
}



/*Map*/




/**
 * Represents an individual marker
 * @example
 * {latitude:0,longitude:23.2,data:{'name':'FooBar'}}
 * 
 * @export
 */
interface IMarker {
    latitude: number,
    longitude: number,
    data?: any
}
/**
 * @exports
 */
type regionType = "circle" | "rectangle" | "polygon"

interface ICircleBound {
    center: [number, number],
    radius: number
}
/**
 * @export
 */
type IPolygonBound = LatLngExpression[] | LatLngExpression[][];

/**
 * @export
 * Region data for maps
 */
interface IRegion {
    type?: regionType, // default is polygon
    bounds: IPolygonBound | ICircleBound,
    hideStroke?: boolean,
    color?: string,
    fillColor?: string,
    data?: any,
    imageCoordinates?:boolean,
    /**
     * A tooltip to be shown when you click on the region
     */
    tooltipContent?:(data:any)=>JSX.Element;
}

/**
 * @export
 * A static image to load as the map.
 */
interface IStaticImage {
    /**
     * The url of the image
     */
    url: string;
    /**
     * The width of the image in pixels
     */
    width: number;

    /**
     * The height of the image in pixels
     */
    height: number;
}

interface IMapComponentProps {
    /**
     * The url of the tile server that will serve up map tiles.
     * This url should have the following placeholders in them:
     * `{x}`, `{y}` and `{z}`
     * 
     * `{z}` represents the current zoom level
     * 
     * @example
     * ```
     * mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     * ```
     */
    mapUrl: string,

    /**
     * A static image to use instead of a map layout.
     * If you are using a static image, specify `mapUrl` as an empty string.
     * 
     * The static image consists of a url for the image and a width and height of the image.
     * Note that the width and height values  be relative - just that the ratio should be accurate.
     * 
     * @example
     * ```
     * staticImage={{url:'https://myserver/floor-plan.png',width:200,height:400}}
     * ```
     */
    staticImage?: IStaticImage,

    /**
     * This handler gets called whenever a marker is clicked on.
     * The first paramater represents the marker element that was clicked on.
     * The second parameter represents the data associated with the marker
     */
    onMarkerClick: (el: any, data: any) => void

    /**
     * A list of markers to render.
     * Each marker has a `latitutde` `longitude` and `data` field.
     * The `data` field can store arbitrary data.
     */
    markers: IMarker[],

    /**
     * Where the map is centered.
     */
    center?: { position: IMarker, renderMarker?: boolean },
    /**
     * regions to show on map
     */
    regions?: IRegion[],
    /**
     * this handler will get called when a region is clicked
     * 
     */
    onRegionClick?: (event: any, data: any) => void

    /**
     * The default zoom level to show on the map
     */
    zoom?: number,
    /**
     * this handler will get called when the map is clicked 
     */
    onClick?: (event: LeafletMouseEvent) => void
}

const getStaticImageBounds = (w:number,h:number) => {
    return [[0,0],[h,w]] as [[number,number],[number,number]];
    let lat = 0;
    let lng= 0;
    if (h > w) {
        lat = 85;
        lng = 180*w/h;
    } else {
        lng= 180;
        lat= 85*h/w
    }
    return [[-lat,-lng],[lat,lng]]  as [[number,number],[number,number]];
}

const convertFromImagePosition = (x:number,y:number,w:number,h:number,bounds:[[number,number],[number,number]]):[number,number]  => {
    return [h-y,x];
    let lat = 0;
    let lng = 0;
    lng = bounds[0][1] + (bounds[1][1] - bounds[0][1])*x/w;
    lat = bounds[1][0] - (bounds[1][0] - bounds[0][0])*y/h;
    return [lat,lng];
}

/**
 * A map widget that can show a pannable/zoomable map with markers
 * @export
 * 
 */


/*Map*/


 


const TopBar: React.FunctionComponent<{}> = (props) => {   
 
    return <>
        <WidgetWrapper>
            <div id="top_Bar"> 
             <div className="top-bar"> 
                <div className="top-bar-icon view-booking"></div> 
                <div className="top-bar-txt view-booking-txt">View Bookings</div> 
             </div>  
             </div>

        </WidgetWrapper>

    </>
} 
 

 
const LostFoundAnalytics: React.FunctionComponent<{}> = (props) => { 
    let [selected, setSelected] = React.useState<string | null>("op-1");
    let [inputValue, setInputValue] = React.useState<string | null>("");  

    let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("lost");


    let [showModal, setShowModal] = React.useState(false);

    // const onClickSidebar = (e: React.MouseEvent<HTMLElement>) => {
    //     let element = e.currentTarget;
    //     let dataValue = element.dataset.value;

    //     document.getElementById(dataValue).scrollIntoView({ "behavior": "smooth" })
    // }

    const people = [
        "Siri",
        "Alexa",
        "Google",
        "Facebook",
        "Twitter",
        "Linkedin",
        "Sinkedin"
      ];
      
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };
    React.useEffect(() => {
        const results = people.filter(person =>
        person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);
    
 
    return <>
        <WidgetWrapper>

            <TitleBar
                icon='https://static.iviva.com/images/Adani_UXP/users.svg'
                title='LOST AND FOUND' >

                <div className="uti-analytics_rht">

                    <div className="uti-tabs">
                        <ToggleFilter
                            options={[
                                { label: "LOST", value: "lost" },
                                { label: "FOUND", value: "found" } 
                            ]}
                            value={toggleFilterValue}
                            onChange={(value) => { setToggleFilterValue(value) }}
                        />
                    </div>

                    <div className="uti-sel-boxes">
                        <div className="uti-sel-box sel-margin">
                            <FormField inline className="showcase-input" backgroundColor="white">
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "Central Square", value: "op-1" },
                                        { label: "Central Square 1", value: "op-2" },
                                        { label: "Central Square 2", value: "op-3" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                />
                            </FormField>
                        </div>

                        <div className="uti-sel-box search-box">
                            <FormField backgroundColor="white">
                            <SearchBox
                                    value={inputValue}
                                    onChange={(newValue) => { setInputValue(newValue) }}
                                />
                            </FormField>
                        </div>

                        <div className="uti-sel-box">
                            <FormField inline className="showcase-input" backgroundColor="white">
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "Al-Masjid an-Nabawi", value: "op-1" },
                                        { label: "Floor 2", value: "op-2" },
                                        { label: "Floor 3", value: "op-3" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                />
                            </FormField> 
                        </div> 
                    </div> 
                </div>
            </TitleBar>  


            <div className="lost_found-section">
                <div className="technician_chart-section inline bgWhite" id="lostFound_Analytics">
                    {/* <h4>Number of hours</h4>
                     */}

                    <div className="lost_found-table"> 
                                <div className="header"> 
                                    <div className="list-item">
                                        <div className="category">CATEGORY</div>
                                        <div className="reported_time">REPORTED TIME</div>
                                        <div className="location">LOCATION</div> 
                                        <div className="filter"><div className="uti-filter">
                                            <FilterPanel
                                                enableClear={inputValue?.length > 0 || selected != null}
                                                onClear={() => { setInputValue(""); setSelected(null) }} >
                                                <FormField className="no-padding mb-only">
                                                    <Label>Sort By</Label>
                                                    <Select
                                                        selected={selected}
                                                        options={[
                                                            { label: "Name", value: "op-1" },
                                                            { label: "Date", value: "op-2" },
                                                        ]}
                                                        onChange={(value) => { setSelected(value) }}
                                                        placeholder=" -- select --"
                                                        isValid={selected ? selected?.length > 0 : null}
                                                    />
                                                </FormField>
                                                <FormField className="no-padding mb-only">
                                                    <Label>Name</Label>
                                                    <Input
                                                        type="text"
                                                        value={inputValue}
                                                        onChange={(value) => { setInputValue(value) }}
                                                        isValid={inputValue ? inputValue.trim().length > 0 : null}
                                                        hasIndicator
                                                        placeholder="placeholder"
                                                    />
                                                </FormField>
                                            </FilterPanel>
                                        </div>
                                       </div> 
                                    </div>
                                </div>
                                <div className="body">
 

                                <div className="lost_found_popup">
                                    <button className="btn showcase" onClick={() => setShowModal(true)}>Modal</button>

                                    <Modal className="lost_found-model"
                                        title = "LOST AND FOUND"
                                        // icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg" 
                                        show={showModal}
                                        onOpen={() => { }}
                                        onClose={() => setShowModal(false)}
                                    >

                                        <div className="lost_found_search">
                                            {/* <FormField backgroundColor="white">
                                                <label>Begin your Search</label>
                                                <SearchBox
                                                    value={inputValue}
                                                    onChange={(newValue) => { setInputValue(newValue) }}

                                                />
                                            </FormField> */}
                                        </div> 

                                    </Modal>

                                {/* <div className="App">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={handleChange}
                                    />
                                    <ul>
                                        {searchResults.map(item => (
                                        <li>{item}</li>
                                        ))}
                                    </ul>
                               </div> */}

                                </div> 


                            
                                    <DataList
                                        data={(max, last) => getDataItems(max, last)}
                                        renderItem={renderItem}
                                        pageSize={10}
                                    />
                                </div>  

                    </div>
                </div>
            </div> 
        </WidgetWrapper>

        {/* <div onClick={onClickSidebar} data-value="modal">Modal</div> */}

        
               

    </>
} 
 


 
const ProfileCard: React.FunctionComponent<{}> = (props) => { 
 
    return <>
        <WidgetWrapper>
            <div id="profile_Card"> 

            <div className="profile-lft">
                <div className="profile-pict"></div>
            </div>

            <div className="profile-rgt">
                <div className="profile-details">
                    <button className="btn profile-btn">Al-Masjid an-Nabawi</button>
                    <h5>NEW LOST ITEM REPORTED</h5>
                    <h1>BLACK HANDBAG</h1>
                    <p>AT 12:30 PM</p>
                    <div className="profile-details-bot">
                        <button className="btn profile-btn">Alert Team</button>
                        {/* <button className="btn profile-btn">View CCTV</button> */}
                        <Button className="btn profile-btn"
                                    title="View CCTV"
                                    onClick={() => alert("clicked")}
                                    icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg" 
                                />

                    </div>
                </div>
            </div>

            </div>
        </WidgetWrapper>

        

    </>
} 


const AlmasjidWidget: React.FunctionComponent<{}> = (props) => { 
    let [selected, setSelected] = React.useState<string | null>("op-1");
    // let [inputValue, setInputValue] = React.useState<string | null>(""); 
    // let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    // const onChangeCheckboxDef = (checked: boolean) => {
    //     setDefCheckState(checked);
    // }

   // let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("lost");

        //   const slide_button_lft = document.getElementById('Almas_lft_arrow'); 

        //   slide_button_lft.onclick = function () {
        //     document.getElementById('almasjidWidget').scrollLeft -= 100;
        //   };

    return <>
        <WidgetWrapper>

        <TitleBar className="Almasjid-header"
                icon='https://static.iviva.com/images/Adani_UXP/users.svg'
                title='AL-MASJID AN-NABAWI' >

                <div className="uti-analytics_rht">  

                    <div className="uti-sel-boxes">
                        <div className="uti-sel-box sel-margin">
                            <FormField inline className="showcase-input" backgroundColor="white">
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "Al-Masjid on-Nabawi", value: "op-1" },
                                        { label: "Al-Masjid on-Nabawi", value: "op-2" },
                                        { label: "Al-Masjid on-Nabawi", value: "op-3" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                />
                            </FormField>
                        </div> 
                    </div> 
                </div>
            </TitleBar>  

            <div id="Almasjid_Widget">   

                <ItemListCard className="list-boxes" title=""
                                item={{
                                    "hvac": { 
                                        "icon": "https://static.iviva.com/images/Adani_UXP/AC_min.png", 
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/top-green-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/Maf_dashboard/down-arrow.svg" 
                                    },
                                    "lighting": {
                                        "icon": "https://static.iviva.com/images/Adani_UXP/AC_min.png", 
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/top-green-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/Maf_dashboard/down-arrow.svg" 
                                    },
                                    "elevators": {
                                        "icon": "https://static.iviva.com/images/Adani_UXP/AC_min.png",
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/top-green-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/Maf_dashboard/down-arrow.svg" 
                                    },
                                    "fire alarm": {
                                        "icon": "https://static.iviva.com/images/Adani_UXP/AC_min.png",
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/top-green-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/Maf_dashboard/down-arrow.svg" 
                                    }
                                }}
                                 
                                fields={["hvac", "lighting", "elevators", "fire alarm"]}
                                
                                renderField={(item, field) => {
                                    
                                    return (
                                    
                                        <div className="box">
                                            <div className="box-top">
                                                <label className="label">{item[field].top_label}</label>
                                                <span className="top-icon">
                                                    <img src={item[field].green_icon} />
                                                </span>
                                            </div>

                                            <div className="box-item"> 
                                                <div className="icon box-items_icon">
                                                    <img src={item[field].icon} />
                                                </div>
                                                <p>{field.toUpperCase()}</p>
                                            </div>

                                            <div className="box-bot">
                                                <label className="label">{item[field].bot_label}</label>
                                                <span className="bot-icon">
                                                    <img src= {item[field].red_icon} />
                                                 </span>
                                            </div>
                                        </div>   
                                    )
                                     
                                }}
                               // backgroundColor="rgb(209 148 250)" 
                            />
                            <div id="Almas_lft_arrow"></div> 
                 

            </div>
        </WidgetWrapper>

    </>
}  



//const MapWidget: React.FunctionComponent<{}> = (props) => { 

    const MapComponent: React.FunctionComponent<IMapComponentProps> = (props) => {


    let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    // const onChangeCheckboxDef = (checked: boolean) => {
    //     setDefCheckState(checked);
    // }

    let [checkedCheckState, setCheckedCheckState] = React.useState<boolean>(true);
    const onChangeCheckbox = (checked: boolean) => {
        setCheckedCheckState(checked)
    }

   // props
   let { mapUrl, markers, onMarkerClick, center, zoom, regions, onClick, onRegionClick } = props;

   // get center
   let _center: LatLngTuple = [1.290270, 103.851959];
   let _renderCenter: boolean = false
   if (center) {
       _center = [center.position.latitude, center.position.longitude]
       if (center.renderMarker) _renderCenter = center.renderMarker;
   }
   else {
       if (markers.length > 0) {
           _center = [markers[0].latitude, markers[0].longitude]
       }
   }

   // zoom
   let _zoom = 5;
   if (zoom) _zoom = zoom;

   const handleMarkerClick = (event: React.MouseEvent<Marker>, data: any) => {
       onMarkerClick(event, data);
   }

   const handleRegionClick = (event: React.MouseEvent, data: any) => {
       console.log("event : ", event)
       console.log("data : ", data)
       if(onRegionClick) onRegionClick(event, data);
   }

   const handleMapClick = (e: LeafletMouseEvent) => {
       if(onClick) onClick(e);
   }


    return <>
        <WidgetWrapper> 

            <div id="Map_Widget">  

                 <div className="building_map">


                 <Map 
                            crs={props.staticImage?CRS.Simple:CRS.EPSG3857}
                        
                        id="uxp-map-component-container" 
                        attributionControl={false}
                        center={_center} zoom={_zoom} onclick={handleMapClick} >
                            {/* base layer */}
                            
                            {
                                
                                <TileLayer url={mapUrl}  noWrap={true} />
                            }
                            {
                                props.staticImage?
                                <ImageOverlay url={props.staticImage.url} bounds={getStaticImageBounds(props.staticImage.width,props.staticImage.height)} />
                                :null
                            }

                            {/* render markers */}
                            {
                                markers.map((marker: IMarker, key: number) => {
                                    return <Marker
                                        position={[marker.latitude, marker.longitude]}
                                        onClick={(event: React.MouseEvent<Marker>) => handleMarkerClick(event, marker.data)}
                                        key={key}
                                    >

                                    </Marker>
                                })
                            }

                            {/* render center point */}
                            {
                                _renderCenter &&
                                <Marker position={_center}></Marker>
                            }

                            {/* render regions */}
                            {
                                regions?.map((region: IRegion, key: number) => {
                                    // get props
                                    let regionProps: any = {};
                                    if (region.hideStroke) {
                                        regionProps.stroke = !region.hideStroke
                                    }

                                    if (region.color) {
                                        regionProps.color = region.color
                                    }

                                    if (region.fillColor) {
                                        regionProps.fillColor = region.fillColor
                                    }

                                    if (region.type) {
                                        if (region.type == "circle") {
                                            let bound = region.bounds;
                                            if (bound.hasOwnProperty("center") && bound.hasOwnProperty("radius")) {
                                                let _b = bound as ICircleBound;
                                                return <Circle center={_b.center} radius={_b.radius}
                                                    {...regionProps} key={key}
                                                    onClick={(e: React.MouseEvent) => handleRegionClick(e, region.data)}
                                                />
                                            }
                                        }
                                        if (region.type == "rectangle") {
                                            let _b = region.bounds as IPolygonBound;
                                            return <Rectangle bounds={_b} {...regionProps} key={key}
                                                onClick={(e: React.MouseEvent) => handleRegionClick(e, region.data)}
                                            />
                                        }
                                    }

                                    let _b = region.bounds as IPolygonBound;
                                    if (region.imageCoordinates) {
                                        let cb = getStaticImageBounds(props.staticImage.width,props.staticImage.height);
                                        _b = (_b as [number,number][]).map(x => convertFromImagePosition(x[0],x[1],props.staticImage.width,props.staticImage.height,cb));
                                    }
                                    return <Polygon positions={_b} {...regionProps} key={key}
                                        onClick={(e: React.MouseEvent) => handleRegionClick(e, region.data)}
                                    >
                                        {region.tooltipContent && <Tooltip>{region.tooltipContent(region.data)}</Tooltip>}
                                    </Polygon>
                                })
                            }

                        </Map>

                     <div className="social-distancing-vilation">
                            <div className="social-distancing-sec">
                                <span className="social-distancing-sec-pict"></span>
                                <label>Social distancing vialations</label>
                                <em>134</em>
                            </div>
                            <div className="social-distancing-check">
                            <Checkbox
                                    onChange={onChangeCheckbox}
                                    checked={checkedCheckState}
                                    label='View'
                                    type="switch-line"
                                    isValid
                                />
                            </div> 
                     </div>


                     <div className="map-list-items">
                             <div className="map-item enlarge-item"></div> 
                             <div className="map-item material-tool"></div> 
                             <div className="map-item map-data-count"></div> 
                             <div className="map-item zone-item"></div> 
                             <div className="map-item zoom_out-item"></div> 
                             <div className="map-item zoom_in-item"></div>  
                     </div>

                 </div>

            </div>
        </WidgetWrapper>

    </>
} 



 
registerWidget({
    "id": "top_Bar",
    "name": "TOP BAR",
    "widget": TopBar,
    "configs": {
        
    }
});
 
registerWidget({
    "id": "lostFound_Analytics",
    "name": "LOSTFOUND ANALYTICS",
    "widget": LostFoundAnalytics,
    "configs": {
        
    }
});
registerWidget({
    "id": "Almasjid_Widget",
    "name": "ALMASJID WIDGET",
    "widget": AlmasjidWidget,
    "configs": {
        
    }
});
registerWidget({
    "id": "profile_Card",
    "name": "PROFILE CARD",
    "widget": ProfileCard,
    "configs": {
        
    }
}); 
registerWidget({
    "id": "Map_Widget",
    "name": "MAP WIDGET",
    "widget": MapComponent,
    "configs": {
        
    }
});

// registerWidget({
//     "id": "efficiencyAnalytics",
//     "name": "Efficiency Analytics",
//     "widget": EfficiencyAnalytics,
//     "configs": {

//     }
// }); 



// registerWidget({
//     "id": "utilisationAnalytics",
//     "name": "UTILISATION ANALYTICS",
//     "widget": Utilisation_Analytics,
//     "configs": {
//         "container": {
//             "background": "white"
//         }
//     }
// });


// registerWidget({
//     "id": "efficiencyAnalytics",
//     "name": "Efficiency Analytics",
//     "widget": EfficiencyAnalytics,
//     "configs": {

//     }
// });