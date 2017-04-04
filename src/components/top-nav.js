import React from 'react';
import {connect} from 'react-redux';

import {onInfo} from '../actions';


export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        this.props.dispatch(onInfo());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

// const mapStateToProps = (state) => {
//   // console.log(state); // state
//     showInfoModal: state.showInfoModal
// };
// const mapStateToProps= state =>({

// })

export default connect()(TopNav);