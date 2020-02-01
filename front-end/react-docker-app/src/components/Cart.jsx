import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FireBaseSetup from '../FireBaseSetup';
export const Cart = (props) => {
    const [UserUID, setUserUID] = useState("");

    const [ItemArray, setItemArray] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        document.title = `Home Depot - Cart`;
        FireBaseSetup.isInitialized().then(user => {
            if (user) {
                setUserUID(user.uid);
                mongoFetch(user.uid);
            }
        });
        console.log(ItemArray);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const mongoFetch = async (uidValue) => {
        var initValue = [];
        await axios.get("http://localhost:3001/user").then((res) => {
            //  console.log(res.data[1].CartItems);
            for (var i = 0; i < res.data.length; i++) {
                initValue.push({
                    uid: res.data[i].uid,
                    ItemInfo: res.data[i].CartItems
                })
            };
            //  console.log(initValue);
            initValue.forEach(el => {
                if (el.uid === uidValue) {
                    console.log("Well here", el.ItemInfo);
                    setItemArray(el.ItemInfo);
                }
            })
        }

        );
        setLoad(!load);
    }
    const listItemCart = ItemArray.map(item => {
        return (
            <div>
                <div>{item.itemName}</div>
                <div>{item.itemPrice}</div>
            </div>
            )
    })
    return (<>
        <div>
            {load ? listItemCart : null}
            </div>
        </>);
}
