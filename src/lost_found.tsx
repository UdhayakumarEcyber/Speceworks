//import * as React from "react";

import { DatePicker, FormField, Label, Select, Input } from "uxp/components";
import React from "react";

 
 
 class App extends React.Component {
	state = {
		shown: true,
	};
		
	render() {	
        
        let [selected, setSelected] = React.useState<string>("op-1");
        let [inputValue, setInputValue] = React.useState<string>(""); 
        let [date, setDate] = React.useState<Date>(new Date());

        const found_list = [ 
            "Black Suitcase found near the rest room",
            "Black bag found near stairs",
            "Red Shoe found hostel room",
            "Book found in prayer Area",
            "Pen found in near enterance",
            "Pink handbag found in Prayer Area",
            "Blue stick found in near nterance"
          ];

           
        const [searchTerm, setSearchTerm] = React.useState("");
        const [searchResults, setSearchResults] = React.useState([]);
        const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
            setSearchTerm(e.target.value);
        };

        // const handleChange = (e: React.ChangeEvent<HTMLInpuElement>) => {
        //     setSearchTerm(e.target.value);
        // };

        React.useEffect(() => {
            const results = found_list.filter(found_list =>
                found_list.toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
        }, [searchTerm]);



		return (
            <>
			<div>
				<h2>this.state.shown = {this.state.shown ? "true" : "false"}</h2>
				<button onClick={() => this.setState({ shown: !this.state.shown })}>Toggle</button>
			</div>

        <div className="lost_found_search"> 

        hi

             <div className="lost_found_search-box">

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
                        <button className="btn raise-btn">Raise a complaint</button>

                    </div>

                    <ul className="search-list">
                        {searchResults.map(item => (
                        <li><div className="search_pict"></div><h6>{item}</h6></li>
                        ))}
                    </ul>   
            </div>  


              <div className="found-details">

                <ul>
                    <li>

                        <div className="drog_drop">
                            <p>Drop your file</p>
                        </div>

                    </li>
                    <li>
                        <FormField inline className="showcase-input" backgroundColor="white">
                            <Label>Title</Label>
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
                            <Label>Item description</Label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
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
                                        type="text"
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
                            
                        </ul>
                    </li> 
                </ul> 

            </div>  


</div> 

</>
		)
	}
}
export default App;