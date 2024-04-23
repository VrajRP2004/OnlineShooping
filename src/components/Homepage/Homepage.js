import React from 'react'
import HomepageNavbar from './HomepageNavbar'
// import { Link } from 'react-router-dom'
import Card from './Card'
function Homepage() {
    return (
        <>
          <HomepageNavbar/>
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </>
    )
}

export default Homepage