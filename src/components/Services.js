import React, { Component } from 'react'
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from "./Title"
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'Drink free cocktails'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Enjoying most adventurous hike ever'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle Van",
                info:'Hire free shuttle for free'
            },
            {
                icon:<FaBeer/>,
                title:"High Quality Beer",
                info:'Enjoying best drafted beer ever'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                {this.state.services.map((item,index) => {
                    return (<article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    )
                })}
                </div>
            </section>
        )
    }
}
