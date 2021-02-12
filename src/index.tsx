import * as React from "react";
import { Button, DataList, Checkbox, SearchBox, WidgetWrapper, DatePicker, TitleBar, ItemListCard, FilterPanel, FormField, Label, Select, Input, Modal, ToggleFilter } from "uxp/components";
import { registerWidget, registerLink, IContextProvider, } from './uxp';

import './styles.scss';

//import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';

import { MapComponent } from 'uxp/components';  
 
import {useDropzone} from 'react-dropzone';

import { TextArea } from '@thumbtack/thumbprint-react'; 


const DATA = [
    { 
        category: "BLACK HANDBAG FOUND NEAR THE ENTERANCE ",
        reported_time: "12:00 PM",
        location: "Enterance",
        filter :"", 
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png",
        clock_Icon: "https://static.iviva.com/images/UXP_spaceworks/clock.svg", 
        location_Icon: "https://static.iviva.com/images/UXP_spaceworks/location-icon.svg"
    },
    {
        category: "BLACK HANDBAG FOUND NEAR THE ENTERANCE ",
        reported_time: "12:00 PM",
        location: "Enterance",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png",
        clock_Icon: "https://static.iviva.com/images/UXP_spaceworks/clock.svg", 
        location_Icon: "https://static.iviva.com/images/UXP_spaceworks/location-icon.svg"
    },
    {
        category: "BLACK SUITCASE FOUND NEAR THE REST ROOM",
        reported_time: "12:00 PM",
        location: "Rest Room",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/black-suitcase.png",
        clock_Icon: "https://static.iviva.com/images/UXP_spaceworks/clock.svg", 
        location_Icon: "https://static.iviva.com/images/UXP_spaceworks/location-icon.svg"
    },
    { 
        category: "WATER BOTTLE IN THE PRAYER AREA",
        reported_time: "12:00 PM",
        location: "Prayer Area",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/blue-bottle.png",
        clock_Icon: "https://static.iviva.com/images/UXP_spaceworks/clock.svg", 
        location_Icon: "https://static.iviva.com/images/UXP_spaceworks/location-icon.svg"
    }, 
    {
        category: "AMERICAN PASSPORTS FOUND IN THE PRAYER AREA",
        reported_time: "12:00 PM",
        location: "Prayer Area",
        filter :"",
        list_pict:"https://static.iviva.com/images/UXP_spaceworks/American-possport.png",
        clock_Icon: "https://static.iviva.com/images/UXP_spaceworks/clock.svg", 
        location_Icon: "https://static.iviva.com/images/UXP_spaceworks/location-icon.svg"
    }
];


  // datalist


  const renderItem = (item: any, key: number) => {
    return (<div className="list-item">
        <div className="category"><span><img src={item.list_pict} /> </span>{item.category}</div>
        <div className="reported_time"><span className="clock_icon"><img src={item.clock_Icon} /></span>{item.reported_time}</div>
        <div className="location"><span className="location_icon"><img src={item.location_Icon} /> </span>{item.location}</div> 
        <div className="filter">{item.filter}</div> 
    </div>)
}
 
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
 

// const TopBar: React.FunctionComponent<{}> = (props) => {   
 
//     return <>
//         <WidgetWrapper>
//             <div id="top_Bar"> 
//              <div className="top-bar"> 
//                 <div className="top-bar-icon view-booking"></div> 
//                 <div className="top-bar-txt view-booking-txt">View Bookings</div> 
//              </div>  
//              </div>

//         </WidgetWrapper>

//     </>
// } 
  
 
const MapWidget: React.FunctionComponent<{}> = (props) => { 

    // const MapComponent: React.FunctionComponent<IMapComponentProps> = (props) => { 

    let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    // const onChangeCheckboxDef = (checked: boolean) => {
    //     setDefCheckState(checked);
    // }

    let [checkedCheckState, setCheckedCheckState] = React.useState<boolean>(true);
    const onChangeCheckbox = (checked: boolean) => {
        setCheckedCheckState(checked)
    }

   // props
//    let { mapUrl, markers, onMarkerClick, center, zoom, regions, onClick, onRegionClick } = props;
  
    return <>
        <WidgetWrapper> 

           

        <TitleBar title='' className="map-title"> </TitleBar>  

            <div id="Map_Widget">   

                 <div className="building_map">  

                <MapComponent
                    mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    markers={[
                        {
                            latitude: 24.4672,
                            longitude: 39.6112
                            
                        },
                        {
                            latitude: 24.4672,
                            longitude: 39.6112,
                            data: {
                                name: "Dubai"
                            }
                            // { latitude: 24.46848149, longitude: 39.6104381 }
                        }

                    ]}

                    zoom={18}
                    center={{ position: { latitude: 24.46848149, longitude: 39.6104381 }, renderMarker: false }}

                    onMarkerClick={(el, data) => {
                        console.log(el)
                        console.log(data)
                    }}

                /> 

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
 


const ProfileCard: React.FunctionComponent<{}> = (props) => {
 
    return <>
        <WidgetWrapper>

        <TitleBar title='' className="profile-title"> </TitleBar>   

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
                        {/* <button className="btn alert-btn">Alert Team</button> */}

                        <Button className="btn alert-btn profile-btn"
                            title="Alert Team"
                            onClick={() => alert("clicked")} 
                        /> 
                        
                        <Button className="btn profile-btn"
                            title="View CCTV"
                            onClick={() => alert("clicked")}
                            icon="https://static.iviva.com/images/UXP_spaceworks/cctv-icon.png" 
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
                                        { 
                                            label: "Al-Masjid on-Nabawi", 
                                            value: "op-1",
                                            name : "udhaya"  
                                        },
                                        { 
                                            label: "Al-Masjid on-Nabawi",
                                            value: "op-2",
                                            name : "udhaya2" 
                                        
                                        },
                                        { 
                                            label: "Al-Masjid on-Nabawi", 
                                            value: "op-3",
                                            name : "udhaya3"
                                         },
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
                                        "icon": "https://static.iviva.com/images/UXP_spaceworks/air-conditioner.svg", 
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
                                    },
                                    "lighting": {
                                        "icon": "https://static.iviva.com/images/UXP_spaceworks/light.svg", 
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
                                    },
                                    "elevators": {
                                        "icon": "https://static.iviva.com/images/UXP_spaceworks/elevater.png",
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
                                    },
                                    "fire alarm": {
                                        "icon": "https://static.iviva.com/images/UXP_spaceworks/Fire_Alarm.svg",
                                        "top_label": 75,
                                        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                                        "bot_label": 25,
                                        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
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
                                                <div className="box-cont"> 
                                                    <div className="icon box-items_icon">
                                                        <img src={item[field].icon} />
                                                    </div>
                                                    <p>{field.toUpperCase()}</p>
                                                </div>
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

 
 
const LostFoundAnalytics: React.FunctionComponent<{}> = (props) => { 

    
 
    let [selected, setSelected] = React.useState<string | null>("op-1");
    let [inputValue, setInputValue] = React.useState<string | null>("");  

    let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("lost");
    let [checkedCheckState, setCheckedCheckState] = React.useState<boolean>(true);
    let [defCheckState, setDefCheckState] = React.useState<boolean>(false);

    let [showModal, setShowModal] = React.useState(false); 
    let [date, setDate] = React.useState<Date>(new Date())

    const data_list = [
    {
        "Icon": "https://static.iviva.com/images/UXP_spaceworks/black-suitcase.png", 
        "Name": "Black Suitcase found in the enterance",
        "Time": "12:00 PM" 
    },
    {
        "Icon": "https://static.iviva.com/images/UXP_spaceworks/black-handbag.png", 
        "Name": "Black Handbag found near the enterance",
        "Time": "02:00 PM"  
    },
    {
        "Icon": "https://static.iviva.com/images/UXP_spaceworks/blue-bottle.png", 
        "Name": "Water Bottle found in the playing Area",
        "Time": "10:00 AM"  
    },
    {
        "Icon": "https://static.iviva.com/images/UXP_spaceworks/American-possport.png", 
        "Name": "American Passport found in the prayer area",
        "Time": "08:00 AM"  
    } 
    ]; 
  
      
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };

    React.useEffect(() => {
       
        const results = data_list.filter(item =>
            item.Name.toLowerCase().includes(searchTerm)
          ); 

        setSearchResults(results);
      }, [searchTerm]);

    const onChangeCheckbox = (checked: boolean) => {
        setCheckedCheckState(checked)
    }
    const onChangeCheckboxDef = (checked: boolean) => {
        setDefCheckState(checked);
    }  

    /*changes*/

    const [isActive, setActive] = React.useState(false); 
    const toggleClass = () => {
        setActive(!isActive);
      };  

    let className = 'qr_code-section1';  
    
    const [isActive12, setActive12] = React.useState(false); 
    const QRcode = () => {
        setActive12(!isActive12);
    }; 

    if (isActive12) {
        className += ' qr_code-section';
    } 

    let className1 = 'matching_terms-btns1';  
    
    const [isActive13, setActive13] = React.useState(false); 
    const matchingTermsShow = () => {
        setActive13(!isActive13);
    }; 

    if (isActive13) {
        className1 += ' matching_terms-btns';
    } 


      var clicked = false;

      function QRcode_matching_terms()
     {
        if(clicked)
       { 
       // QRcode(); 
          matchingTermsShow(); 
       }
      
      else
      {
        QRcode(); 
       //  matchingTermsShow(); 
      }
     clicked = !clicked;
  }




  function MyDropzone() {
    const onDrop = React.useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file: Blob) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => { 
          const binaryStr = reader.result
          console.log(binaryStr)
        }
        reader.readAsArrayBuffer(file)
      })
      
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop your file</p>
      </div>
    )
  } 


  const Message = () => {
    const [message, setMessage] = React.useState( '' );
  
    return (
      <div>
        <input
           type="text"
           value={message}
           placeholder="Enter a message"
           onChange={e => setMessage(e.target.value)}
         />
        <p>
          <strong>{message}</strong>
        </p>
      </div>
    );
  };


  function TextAreaExample() {
    const [value, setValue] = React.useState(
        'We need something to call the reported item by',
    );
    return (
        <TextArea
            hasError
            placeholder="Tell us about your business"
            onChange={v => setValue(v)}
            value={value}
        />
    );
}
 
    return <> 
     
        <WidgetWrapper> 

          
       
            <TitleBar className="lost_found-title"
                icon='https://static.iviva.com/images/UXP_spaceworks/open-box.svg'
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

                            <button className="btn police-data-btn" onClick={() => setShowModal(true)}>Police Database</button>
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
                                        { label: "Al-Masjid an-Nabawi", value: "op-2" },
                                        { label: "Al-Masjid an-Nabawi", value: "op-3" },
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
                                   

                                    <Modal className="lost_found-model"
                                        title = "LOST AND FOUND"
                                        // icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg" 
                                        show={showModal}
                                        onOpen={() => { }}
                                        onClose={() => setShowModal(false)}
                                    > 

                                        <div className="lost_found_search"> 

                                          <div className="modal-back" onClick={() => setShowModal(false)} ><span className="modal-back-icon"></span>Home</div>

                                          <div className="lost_found_overall">

                                            <div className={isActive ? 'lost_found_search-box1': "lost_found_search-box"}>

                                                <label>Begin your Search</label>
                                                    <div className="search-section">
                                                        <input
                                                            type="text"
                                                            placeholder="A Block Bag"
                                                            value={searchTerm}
                                                            onChange={handleChange}
                                                            className="serach-box"
                                                        />

                                                        <p>Not mine</p>
                                                        {/* <button className="btn raise-btn">Raise a complaint</button> */}
                                                        <input className="btn raise-btn" type="submit" value="Raise a complaint" onClick={toggleClass} /> 
                                                    </div>
 

                                                    <div  className={isActive ? 'search-list1': "search-list"}>   
                                                        <ul>
                                                            {searchResults.map(item => (
                                                                
                                                                <li key={item.Icon}>

                                                                    <div className="search_pict">
                                                                        <img src={item.Icon} />
                                                                        <span className="found-time">{item.Time}</span>
                                                                    </div>

                                                                    <h6>{item.Name}</h6> 
                                                                </li>  
                                                             ))}
                                                        </ul> 
                                                    </div>

                                                      {/* <ul className={isActive ? 'search-list1': "search-list"} >
                                                        {searchResults.map(item => (
                                                            
                                                        

                                                        <li><div className="search_pict"></div><h6>{item}</h6></li> 

                                                        ))} 

                                                    </ul>     */}

                                            </div>

                                             <div className={isActive ? 'found-details-section': "found-details-section1"}>

                                            <div className="found-details">

                                                <ul>
                                                    <li>

                                                    <div className="drog_drop">  
                                                            <MyDropzone /> 
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div className="matching_terms">
                                                            <FormField inline className="showcase-input" backgroundColor="white">
                                                                <Label>Title</Label>
                                                                <Input
                                                                    type="text"
                                                                    value={inputValue}
                                                                    onChange={(value) => setInputValue(value)} 
                                                                    placeholder="Input placeholder"
                                                                />
                                                            </FormField>
                                                            <div className={className1} onClick={matchingTermsShow}>
                                                                <p>Experience image AI found some matching terms.</p>
                                                                <ul>
                                                                    <li><button className="btn mobile-btn">Mobile phone</button></li>
                                                                    <li><button className="btn streetmad-btn">Street Madinah</button></li>
                                                                    <li><button className="btn watch-btn">Watch</button></li>
                                                                    <li><button className="btn window-btn">Window</button></li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li>
                                                    <FormField inline className="showcase-input" backgroundColor="white">
                                                            <Label>Item description</Label>
                                                            <TextAreaExample/> 
                                                        </FormField>
                                                        
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <FormField inline className="showcase-input" backgroundColor="white">
                                                                    <Label>Name</Label>
                                                                    <Input
                                                                        type="text"
                                                                        value={inputValue}
                                                                        onChange={(value) => setInputValue(value)} 
                                                                        placeholder="Input placeholder"
                                                                    />
                                                                </FormField>
                                                            </li>

                                                            <li>
                                                                <FormField inline className="showcase-input" backgroundColor="white">
                                                                    <Label>Contact Number</Label>
                                                                    <Input
                                                                        type="number"
                                                                        value={inputValue}
                                                                        onChange={(value) => setInputValue(value)} 
                                                                        placeholder="Input placeholder"
                                                                    />
                                                                </FormField>
                                                            </li>
                                                        </ul>

                                                        <ul>
                                                            <li>
                                                                <FormField inline className="showcase-input" backgroundColor="white">
                                                                    <Label>Location</Label>
                                                                    <Select
                                                                        selected={selected}
                                                                        options={[
                                                                            { label: "Facility one, West wing, Building 1", value: "op-1" },
                                                                            { label: "Facility one, East wing, Building 1", value: "op-2" },
                                                                            { label: "Facility one, North wing, Building 1", value: "op-3" },
                                                                        ]}
                                                                        onChange={(value) => { setSelected(value) }}
                                                                        placeholder=" -- select --"
                                                                    />
                                                                </FormField>
                                                            </li>

                                                            <li> 
                                                                <FormField inline className="showcase-input" backgroundColor="white">
                                                                    <Label>Report Date</Label>
                                                                    <DatePicker
                                                                        title="Select Date"
                                                                        date={date}
                                                                        onChange={(date) => setDate(date)}
                                                                    /> 
                                                                 </FormField>
                                                            </li>
                                                        </ul>

                                                        <ul>
                                                            <li>
                                                                <FormField inline className="showcase-input" backgroundColor="white">
                                                                    <Label>Time Reported</Label>
                                                                    <DatePicker
                                                                    title="Select Date"
                                                                    date={date}
                                                                    onChange={(date) => setDate(date)}
                                                                /> 
                                                                </FormField>
                                                            </li>

                                                            <li className={isActive12 ? 'last-item-reported': "last-item-reported1"}>
                                                            <FormField inline className="showcase-checkbox" backgroundColor="white"> 

                                                                    <Label>Lost item reported</Label>
                                                                    <Checkbox
                                                                        onChange={onChangeCheckbox}
                                                                        checked={checkedCheckState}
                                                                        label=''
                                                                        isValid
                                                                    />
                                                                    
                                                                </FormField>
                                                            </li>   
                                                        </ul>
                                                    </li>
                                                    
                                                  </ul> 


                                                    <div className="found-arrow" onClick={QRcode_matching_terms}></div>

                                               </div>

                                            </div>


                                             <div className={className} onClick={QRcode} >

                                                    <div className="qr-scan-code">
                                                        <div className="qr-pict">

                                                        </div>
                                                        <button className="btn qr-btn">Print QR</button>

                                                    </div>

                                            </div>

                                            </div>

                                        </div> 

                                    </Modal> 

                                </div>  
                            
                                    <DataList className="has-no-footer"
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
 
 
<div id="footer">
    <p>Powered by spaceworx.io</p>
</div>


 
// registerWidget({
//     "id": "top_Bar",
//     "name": "TOP BAR",
//     "widget": TopBar,
//     "configs": {
        
//     }
// });
 
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
    "widget": MapWidget,
    "configs": {
        
    }
});
 