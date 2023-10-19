import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa'

var colors = {
    yellow: "yellow",
    gray: "gray"
}

function Comments() {

    let [data, setData] = useState([]);
    var [likedComments, setLikedComments] = useState([]);

    let color = '';

    useEffect(() => {
        let localRecord = JSON.parse(localStorage.getItem('comment'));
        let like = JSON.parse(localStorage.getItem('LikedComments'));
        if (localRecord == null) {
            setData([]);
        }
        else {
            setData(localRecord);
        }
        setLikedComments(like)
    }, setData);

    let henddleSubmit = (e) => {
        e.preventDefault()
        var obj = {
            name: e.target.name.value,
            nameChar: e.target.name.value.charAt(0),
            comment: e.target.comment.value,
            id: Math.round(Math.random() * 1000)
        }
        console.log(obj);
        var newRacord = ([...data, obj]);
        setData(newRacord);
        localStorage.setItem('comment', JSON.stringify(newRacord));
        e.target.name.value = ""
        e.target.comment.value = ""

    }

    var likeUnlike = (id) => {
        if (likedComments.includes(id)) {
            var updateLike = likedComments.filter(commentId => commentId !== id);
            setLikedComments(updateLike);
        } else {
            var updateLike = [...likedComments, id];
            setLikedComments(updateLike);
        }
        localStorage.setItem('LikedComments', JSON.stringify(updateLike));

    };

    let deletecomment = (comme) => {
        let pos = data.findIndex(v => v.nameChar == comme);
        data.splice(pos, 1);
        setData(data);

        localStorage.setItem('comment', JSON.stringify(data));
        let local = JSON.parse(localStorage.getItem('comment'))
        setData(local);

    }

    return (
        <div>
            <h1>Comments</h1>
            <p className='m-t' style={{ color: "#305399" }}>Say Something about 4.0 Technologies</p>
            <br />
            <div className="form">
                <form method="post" onSubmit={(e) => henddleSubmit(e)}>
                    <input type="text" name='name' placeholder="Your Name" required /><br /><br />
                    <textarea name='comment' placeholder="Your Comments" required /><br /><br />
                    <input className="button" type="submit" />
                </form>
                <div>
                    <img src={require('../img/comments-img.png')} alt="comments-img" />
                </div>
            </div>
            <hr />
            <div className='comments_section'>
                <div className='counter'>
                    <h4 className='count'>{data.length}</h4>
                    <p>Comments</p>
                </div>
            </div>

            {data.map((v, i) => {
                return (
                    <div>
                        <span style={{ display: "none" }}>
                            {
                                v.nameChar == "A" ?
                                    color = "#003366"
                                    :
                                    v.nameChar == "B" ?
                                        color = "#ff9933"
                                        :
                                        v.nameChar == "C" ?
                                            color = "#ff3300"
                                            :
                                            v.nameChar == "D" ?
                                                color = "#ff66cc"
                                                :
                                                v.nameChar == "E" ?
                                                    color = "#6699ff"
                                                    :
                                                    v.nameChar == "F" ?
                                                        color = "#006600"
                                                        :
                                                        v.nameChar == "G" ?
                                                            color = "#0066ff"
                                                            :
                                                            v.nameChar == "H" ?
                                                                color = "#669999"
                                                                :
                                                                v.nameChar == "I" ?
                                                                    color = "#3bb300"
                                                                    :
                                                                    v.nameChar == "J" ?
                                                                        color = "#000099"
                                                                        :
                                                                        v.nameChar == "K" ?
                                                                            color = "#3d3d5c"
                                                                            :
                                                                            v.nameChar == "L" ?
                                                                                color = "#4d4d4d"
                                                                                :
                                                                                v.nameChar == "M" ?
                                                                                    color = "#661400"
                                                                                    :
                                                                                    v.nameChar == "N" ?
                                                                                        color = "#800060"
                                                                                        :
                                                                                        v.nameChar == "O" ?
                                                                                            color = "#e69900"
                                                                                            :
                                                                                            v.nameChar == "P" ?
                                                                                                color = "#004d00"
                                                                                                :
                                                                                                v.nameChar == "Q" ?
                                                                                                    color = "#006666"
                                                                                                    :
                                                                                                    v.nameChar == "R" ?
                                                                                                        color = "#4d2600"
                                                                                                        :
                                                                                                        v.nameChar == "S" ?
                                                                                                            color = "#800080"
                                                                                                            :
                                                                                                            v.nameChar == "T" ?
                                                                                                                color = "#4d0099"
                                                                                                                :
                                                                                                                v.nameChar == "U" ?
                                                                                                                    color = "#00997a"
                                                                                                                    :
                                                                                                                    v.nameChar == "V" ?
                                                                                                                        color = "#0088cc"
                                                                                                                        :
                                                                                                                        v.nameChar == "W" ?
                                                                                                                            color = "#660066"
                                                                                                                            :
                                                                                                                            v.nameChar == "X" ?
                                                                                                                                color = "#47476b"
                                                                                                                                :
                                                                                                                                v.nameChar == "Y" ?
                                                                                                                                    color = "#b32400"
                                                                                                                                    :
                                                                                                                                    v.nameChar == "Z" ?
                                                                                                                                        color = "#333300"
                                                                                                                                        :
                                                                                                                                        color = "blue"
                            }
                        </span>
                        <div className='comment1'>
                            <div className='round-name'>
                                <p className='round' style={{ backgroundColor: color }}>{v.nameChar}</p>
                                <h3 className='form-name'>{v.name}</h3>
                                <h5 style={{ marginLeft: "18px", color: "gray" }}>2 minutes ago</h5>
                            </div>
                            <h4 className='comment'>{v.comment}</h4>
                            <div className="like-dislike">
                                <p style={{ cursor: "pointer" }} onClick={() => likeUnlike(v.id)}>
                                    <p style={{ fontSize: "24px", }} >{likedComments.includes(v.id) ? ' ❤️ ' : ' 🤍 '}</p>
                                </p>
                                <p className="delete-task" style={{ cursor: "pointer" }} onClick={(e) => deletecomment(v.nameChar)}><img style={{ width: "20px", marginRight: "0" }} src={require('../img/delete.png')} alt="Delete" /></p>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}

        </div>
    )
}

export default Comments;