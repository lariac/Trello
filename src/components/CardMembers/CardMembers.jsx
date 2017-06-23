import React from 'react';
import CardMembersStyle from './_CardMembers.scss'

class CardMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        CardMembers.defaultProps = {
            username:"J"
        };
    }

    render() {

        return (
            <div>
                <div className="card-members-style">
                    <span className="card-members-style__font">{this.props.currentUserName.charAt(0)}</span>
                </div>
            </div>
        )
    };
}

export default CardMembers;