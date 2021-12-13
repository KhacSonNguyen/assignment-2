import {useEffect} from "react";

function UserInfo() {
    const info = {
            name: 'SonNK',
            age: 22,
            dob: '1/1/2k1',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png'
        }


    useEffect(() => {
        document.getElementById('info').innerHTML = `
            Name: ${info.name} <br>
            Age: ${info.age} <br>
            Dob: ${info.dob} <br>
            <img src="${info.avatar}" width="100px" alt=""> <br>
        `
    }, [])


    return (
        <div>
            <hr/>
            <div id="info"></div>
        </div>
    );
}

export default UserInfo;