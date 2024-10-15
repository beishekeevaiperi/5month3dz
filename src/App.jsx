import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./action/action";
import "./App.css"

const App = () => {
    const dispatch = useDispatch();
    const persons = useSelector(state => state.persons);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const cleanImageUrl = (url) => {
        if (url) {
            const pngIndex = url.indexOf('.png');
            return pngIndex !== -1 ? url.substring(0, pngIndex + 4) : url;
        }
        return '';
    }

    return (
        <div
            style={{
                width:'100%',
                display:'flex',
                flexWrap:'wrap',
                gap:'20px',
                justifyContent:'center',
            }}
        >
            <h1>Атака титанов</h1>
            {
                persons.results ? (
                    persons.results.map((item, index) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection:'column',
                                border:'4px solid black',
                                width:'300px'
                            }}
                            className="wrapper" key={index}>
                            <span className="text-wrap">{item.name}</span>
                            <img
                                className="img"
                                src={cleanImageUrl(item.img)}
                                alt={item.name}
                            />
                        </div>
                    ))
                ) : (
                    <span>LOADING</span>
                )
            }
        </div>
    );
};

export default App;
