import React from 'react';
import CardMembersStyle from './_CardMembers.scss'

class CardMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        CardMembers.defaultProps = {
            username:"L"
        };
    }

    render() {

        return (
            <div>
                <div className="card-members-style">
                    <span className="card-members-style__font">{this.props.username}</span>
                </div>
            </div>
        )
    };
}

export default CardMembers;