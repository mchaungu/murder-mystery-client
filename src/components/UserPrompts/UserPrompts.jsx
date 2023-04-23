import React from 'react';
import axios from 'axios';

const UserPrompts = (e) => {

    // e.preventDefault();

    // if (e){

    //     console.log(e.target.videoTitle.value)
    //     console.log(e.target.videoDescription.value)

    //     axios
    //     .post(`https://localhost:5500/chatgpt/sendPrompt/:prompt`,{
        
    //         title: `${e.target.videoTitle.value}`,
    //         description: `${e.target.videoDescription.value}`

    //         })

    //     .then((response)=>{
    
    //         console.log(response.data);
    
    //     })

    //     .catch((err)=>{
    //         console.log("error:", err);
    //     })
    
    // }

    return (
        <section className="forms" >
                
            <form className="form" id="investigation" onSubmit={UserPrompts}>
                    {/* <div className="form__imgContainer">
                        <img className="form__imgContainer--image" src={profileImg} alt="side profile image of a male"/>
                    </div> */}

                    <div className="form__inputs">
                        <div className="form__inputs__name">
                            <input className="form__inputs__name--namebox" id="name" placeholder="Type here to start investigation" type="text" name="name"/>
                        </div>
                        
                        <div className="form__inputs__buttonbox">
                            <button className="form__inputs__buttonbox--button" id="button" type="submit">Investigate</button>
                        </div>
                    </div>
            </form>
        </section>
    );
};

export default UserPrompts;