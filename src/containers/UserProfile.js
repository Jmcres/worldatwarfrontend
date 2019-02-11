import React from 'react'


const UserProfile = (props) => {
    return (
      <div className="user-profile">
        <div>
            <h1>Hello Jason</h1>
            <h2>Username:</h2> </div>
        {/* <img src={props.userProfile.picture} />
        <p>{props.userProfile.name}</p> */}
      </div>
    );
  }

  export default UserProfile;