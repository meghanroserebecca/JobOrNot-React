import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user
    };
};

class TalentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: '',
            timesViewed: '',
            timesLiked: '',
            likedBy: [],
            file: ''
        };
        // this.handlewhatever = this.handlewhatever.bind(this);
    }

    componentDidMount() {
        fetch('./myResume')
			.then(res => res.json())
			.then(data => {
                this.setState({
					username: data.username,
					user: data.user,
					timesViewed: data.timesViewed,
					timesLiked: data.timesLiked,
					likedBy: data.likedBy,
                    file: data.file
				});
            });
        }

    // handlewhaterver(e) {
    // }  

    render() {
        return (
            <div>
                <p>THIS IS TALENTPROFILE SECTION</p>
                <p>{this.props.user.firstName}, your resume has been viewed a total of {this.state.timesViewd} times.</p>
                <p>It was saved {this.state.timesLiked} times by recruiters actively hiring for these companies: {this.props.user.jobCompanyToFill} .</p>
            </div>
        );
    }  
}

export default connect(mapStateToProps)(TalentProfile);

TalentProfile.propTypes = {
    user: PropTypes.object
};
