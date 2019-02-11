import React from 'react';
import uuidv4 from 'uuid/v4';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Form extends React.Component{

    constructor(props){
        super(props)
        this.text = ""
        this.title = ""
        this.state = {
            date_start: new Date(),
            date_end: new Date()
        };
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }
    handleStartChange(date) {
        this.setState({
            date_start: date
        });
    }
    handleEndChange(date) {
        this.setState({
            date_end: date
        });
    }

    render() {
        return(
            <div>
                <div>
                    <label>title:</label>
                    <input id="title" type="text" ref={(title)=>{this.title = title}}/>
                    <label>text:</label>
                    <input id="text" type="text" ref={(text)=>{this.text = text}} />
                    <label>data_start</label>
                    <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={this.state.date_start}
                        onChange={this.handleStartChange}
                    />
                    <label>date_end</label>
                    <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={this.state.date_end}
                        onChange={this.handleEndChange}
                    />
                    <button onClick={()=>this.props.addTask({title:this.title.value, text:this.text.value, date_start:getFormattedDate(this.state.date_start),
                        date_end:getFormattedDate(this.state.date_end),  id:uuidv4()})}>Добавить задание</button>
                </div>
            </div>
        )
    }
}

function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
}
export default Form;