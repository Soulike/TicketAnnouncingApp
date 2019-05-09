import React from 'react';
import message from 'antd/lib/message';
import View from './View';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {withRouter} from 'react-router-dom';

class EventNameInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            eventName: '',
        };
    }

    onEventNameInputChange = e =>
    {
        this.setState({
            eventName: e.target.value,
        });
    };

    onConfirmButtonClick = () =>
    {
        const {eventName} = this.state;
        localStorage.setItem('eventName', eventName);
        message.success('新建活动成功');
        this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.EVENT_PAGE]);
    };

    render()
    {
        const {eventName} = this.state;
        return (
            <View eventName={eventName}
                  onEventNameInputChange={this.onEventNameInputChange}
                  onConfirmButtonClick={this.onConfirmButtonClick} />
        );
    }
}

export default withRouter(EventNameInput);