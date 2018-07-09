import React, { Component } from 'react';
import Header from './components/Header';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false,
            note: "",
            startDate: moment().format('YYYY/MM/DD'),
            occurrence: "",
            charLeft: "100"
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    componentWillMount() {
        const initialData = {
            note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
            startDate: "2018/07/24",
            occurrence: 2
        }

        this.setState({
            note: initialData.note,
            startDate: initialData.startDate,
            occurrence: initialData.occurrence
        })
    }

    handleChange(event) {
        if (event.target.name === 'note') {
            let chars = 100 - event.target.value.length;
            this.setState({ charLeft: chars })
        }

        if (event.target.name === 'occurrence' && event.target.value === '3') {
            const currentDate = moment().format('YYYY/MM/DD');
            this.setState({
                startDate: currentDate
            })
        }

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDateChange(date) {
        const valueOfInput = date.format('YYYY/MM/DD');
        this.setState({
            startDate: valueOfInput
        });
    }

    toggleEdit() {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('for is submitted...');
        this.toggleEdit()
    }

    render() {
        console.log(this.state);
        const { note, startDate, occurrence, charLeft, isEditMode } = this.state;
        const showChars = (charLeft <= 99) ? "block" : "none";
        const btnEditMode = (isEditMode === false) ? "block" : "none";

        return (
            <div>
                <Header title="ReactForm" />
                <div className="row">
                    <a href="javascript:void(0)" className="link-block" onClick={this.toggleEdit} style={{ display: btnEditMode }}>Edit</a>
                </div>
                <form className="frm" onSubmit={this.onSubmit}>
                    <div className="row brdr-btm">
                        <label htmlFor="note">Note</label>
                        <div className="value-place-holder">
                            <textarea maxLength="100" rows="3" cols="4" value={note} name="note" ref="note" onChange={this.handleChange} />
                            <div className="char-left" style={{ display: showChars }}>character's left: <span className="bold"> {charLeft} </span> </div>
                        </div>
                    </div>
                    <div className="row brdr-btm">
                        <label htmlFor="date">Date</label>
                        <div className="value-place-holder">
                            <DatePicker name="startDate" ref="startDate" value={startDate} onChange={this.handleDateChange} />
                        </div>
                    </div>
                    <div className="row brdr-btm">
                        <label htmlFor="occurrence">Occurrence</label>
                        <div className="value-place-holder">
                            <select value={occurrence} ref="occurrence" name="occurrence" onChange={this.handleChange}>
                                <option>--select--</option>
                                <option value="0">Everyday</option>
                                <option value="1">Every Week</option>
                                <option value="2">Every Year</option>
                                <option value="3">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="row btn-holder">
                        <button type="submit" className="btn">Submit</button>
                        <button type="reset" className="btn">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default App;