import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

export class Header extends React.Component  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showInfoModal: false
    //     };
    // }


    toggleInfoModal() {
        this.setState({
            showInfoModal: !this.props.showInfoModal
        });
    }

    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = (state, props)=> ({
    showInfoModal:props.showInfoModal
});


/////the initial state will probably need to set the showInfoModal to false

export default connect (mapStateToProps)(Header);