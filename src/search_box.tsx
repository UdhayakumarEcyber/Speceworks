import * as React from "react";
import { Button, DataList, Checkbox, SearchBox, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, FormField, Label, Select, Input, Modal, ToggleFilter, MapComponent } from "uxp/components";
import { registerWidget, registerLink, IContextProvider, } from './uxp';

export interface ISearchBoxBarProps {
    
}
export interface ISearchBoxBarState {
    
}
export class SearchBoxBar extends React.Component<ISearchBoxBarProps,ISearchBoxBarState> {
    constructor(props:ISearchBoxBarProps) {
        super(props);
        this.state = {}
    }
    
    render() {
        let [showModal, setShowModal] = React.useState(false); 
        let [inputValue, setInputValue] = React.useState<string | null>("");   
        let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("lost");
 
         return (
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
                    <FormField backgroundColor="white">
                        <label>Begin your search</label>
                        <SearchBox
                            value={inputValue}
                            onChange={(newValue) => { setInputValue(newValue) }}

                        />
                    </FormField>
                </div> 

            </Modal> 
        </div> 
           );
     }
}