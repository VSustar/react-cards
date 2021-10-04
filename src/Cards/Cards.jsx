import React,{Component} from 'react'
import { Link } from "react-router-dom";
import Card from './CardUI';


const Cards = ({user}) => {
    return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Card />
                    </div>
                </div>
            </div>
           
        );
    }

export default Cards;