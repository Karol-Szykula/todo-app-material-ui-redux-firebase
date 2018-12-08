import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    button: {
        margin: 12
    }
}

const Search = (props) => (
    <div>
        <TextField
            id='filter-input'
            type="text"
            placeholder="Filter tasks"
            value={props.filterText}
            onChange={props.onFilterTextChangeHandler}
            fullWidth={true}
        />
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'ALL'}
                onClick={props.onAllClickHandler}
                label={'ALL'}
                style={style.button}
            />
            <RaisedButton
                disabled={props.chosenFilter === 'COMPLETED'}
                onClick={props.onCompletedClickHandler}
                label={'Completed'}
                style={style.button}
            />
            <RaisedButton
                disabled={props.chosenFilter === 'UNCOMPLETED'}
                onClick={props.onUnCompletedClickHandler}
                label={'Uncompleted'}
                style={style.button}
            />
        </div>
    </div>
)

export default Search